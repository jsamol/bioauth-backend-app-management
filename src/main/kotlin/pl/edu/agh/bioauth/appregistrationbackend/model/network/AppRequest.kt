package pl.edu.agh.bioauth.appregistrationbackend.model.network

import pl.edu.agh.bioauth.appregistrationbackend.model.database.App
import pl.edu.agh.bioauth.appregistrationbackend.util.KeyGenerator

data class AppRequest(val name: String, val description: String?) {

    fun toAppModel(userId: String): App = with (KeyGenerator) { App(userId, name, getAppId(), getAppSecret(), description) }
}