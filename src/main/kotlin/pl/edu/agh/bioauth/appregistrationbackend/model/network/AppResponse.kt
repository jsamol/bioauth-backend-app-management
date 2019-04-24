package pl.edu.agh.bioauth.appregistrationbackend.model.network

import pl.edu.agh.bioauth.appregistrationbackend.model.database.App

data class AppResponse(val id: String,
                       val name: String,
                       val appId: String,
                       val appSecret: String,
                       val description: String?) {

    companion object {
        fun fromAppModel(app: App?): AppResponse? = app?.run { AppResponse(id, name, appId, appSecret, description) }
    }
}