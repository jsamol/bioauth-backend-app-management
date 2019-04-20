package pl.edu.agh.bioauth.appregistrationbackend.model

import org.springframework.data.annotation.Id

data class App(@Id val id: Long,
               val name: String,
               val icon: String?,
               val clientId: String,
               val secret: String,
               val description: String?)