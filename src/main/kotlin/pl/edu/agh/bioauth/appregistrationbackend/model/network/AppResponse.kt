package pl.edu.agh.bioauth.appregistrationbackend.model.network

data class AppResponse(val id: Long,
                       val name: String,
                       val appId: String,
                       val appSecret: String,
                       val description: String?)