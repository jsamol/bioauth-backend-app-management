package pl.edu.agh.bioauth.appregistrationbackend.util

import org.keycloak.KeycloakPrincipal
import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken
import java.security.Principal

fun Principal.getKeycloakUserId(): String? {
    val keycloakPrincipal = (this as? KeycloakAuthenticationToken)?.principal as? KeycloakPrincipal<*>
    return keycloakPrincipal?.keycloakSecurityContext?.token?.subject
}