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
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.core.authority.mapping.SimpleAuthorityMapper
import org.springframework.security.core.session.SessionRegistryImpl
import org.springframework.security.web.authentication.session.RegisterSessionAuthenticationStrategy
import org.springframework.security.web.authentication.session.SessionAuthenticationStrategy

@Configuration
@EnableWebSecurity(debug = true)
@ComponentScan(basePackageClasses = [KeycloakSecurityComponents::class])
class SecurityConfiguration : KeycloakWebSecurityConfigurerAdapter() {

    @get:Bean("keycloakConfigResolver")
    val keycloakConfigResolver: KeycloakConfigResolver = KeycloakSpringBootConfigResolver()

    @Bean
    override fun sessionAuthenticationStrategy(): SessionAuthenticationStrategy =
            RegisterSessionAuthenticationStrategy(SessionRegistryImpl())

    override fun configure(http: HttpSecurity?) {
        super.configure(http)

        // TODO: Handle CSRF Token
        http?.csrf()
                ?.disable()
                ?.authorizeRequests()
                ?.antMatchers("/api/v1/**")
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