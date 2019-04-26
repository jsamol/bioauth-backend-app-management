package pl.edu.agh.bioauth.appregistrationbackend.configuration

import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory
import org.springframework.boot.web.server.ErrorPage
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpStatus

@Configuration
class WebConfiguration {

    @get:Bean("webServerFactory")
    val webServerFactory: ConfigurableServletWebServerFactory =
            TomcatServletWebServerFactory().apply { errorPages.add(ErrorPage(HttpStatus.NOT_FOUND, "/")) }
}