package pl.edu.agh.bioauth.appregistrationbackend.model.database

import org.springframework.data.annotation.Id

data class App(@Id val id: Long,
               val userId: String,
               val name: String,
               val appId: String,
               val appSecret: String,
               val description: String?)