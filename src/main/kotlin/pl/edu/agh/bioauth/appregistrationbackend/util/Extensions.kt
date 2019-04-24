package pl.edu.agh.bioauth.appregistrationbackend.util

import org.springframework.http.HttpMethod
import org.springframework.web.cors.CorsConfiguration

var CorsConfiguration.allowedHttpMethods: List<HttpMethod>?
    get() = this.allowedMethods?.mapNotNull { HttpMethod.resolve(it) }
    set(value) { this.allowedMethods = value?.map { it.name } }