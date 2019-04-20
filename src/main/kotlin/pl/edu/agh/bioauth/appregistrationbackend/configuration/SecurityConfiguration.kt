package pl.edu.agh.bioauth.appregistrationbackend.configuration

import org.keycloak.adapters.KeycloakConfigResolver
import org.keycloak.adapters.springboot.KeycloakSpringBootConfigResolver
import org.keycloak.adapters.springsecurity.KeycloakSecurityComponents
import org.keycloak.adapters.springsecurity.authentication.KeycloakAuthenticationProvider
import org.keycloak.adapters.springsecurity.config.KeycloakWebSecurityConfigurerAdapter
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.ComponentScan
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.core.authority.mapping.SimpleAuthorityMapper
import org.springframework.security.core.session.SessionRegistryImpl
import org.springframework.security.web.authentication.session.RegisterSessionAuthenticationStrategy
import org.springframework.security.web.authentication.session.SessionAuthenticationStrategy
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.CorsConfigurationSource
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import pl.edu.agh.bioauth.appregistrationbackend.util.allowedHttpMethods

@Configuration
@EnableWebSecurity(debug = true)
@ComponentScan(basePackageClasses = [KeycloakSecurityComponents::class])
class SecurityConfiguration : KeycloakWebSecurityConfigurerAdapter() {

    @get:Bean("keycloakConfigResolver")
    val keycloakConfigResolver: KeycloakConfigResolver = KeycloakSpringBootConfigResolver()

    @get:Bean("corsConfigurationSource")
    val corsConfigurationSource: CorsConfigurationSource
        get() {
            val configuration = CorsConfiguration().apply {
                allowedOrigins = listOf("http://localhost:3000")
                allowedHttpMethods = listOf(HttpMethod.GET, HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE, HttpMethod.OPTIONS)
                allowedHeaders = listOf("Authorization", "Content-Type", "X-Requested-With")
            }

            return UrlBasedCorsConfigurationSource().apply {
                registerCorsConfiguration("/**", configuration)
            }
        }

    @Bean
    override fun sessionAuthenticationStrategy(): SessionAuthenticationStrategy =
            RegisterSessionAuthenticationStrategy(SessionRegistryImpl())

    override fun configure(http: HttpSecurity?) {
        super.configure(http)

        http?.cors()
                ?.and()
                ?.authorizeRequests()
                ?.antMatchers("/v1/**")
                ?.authenticated()
                ?.anyRequest()
                ?.permitAll()
    }

    @Autowired
    fun configureGlobal(auth: AuthenticationManagerBuilder) {
        val keycloakAuthenticationProvider = KeycloakAuthenticationProvider().apply {
            setGrantedAuthoritiesMapper(SimpleAuthorityMapper())
        }
        auth.authenticationProvider(keycloakAuthenticationProvider)
    }
}