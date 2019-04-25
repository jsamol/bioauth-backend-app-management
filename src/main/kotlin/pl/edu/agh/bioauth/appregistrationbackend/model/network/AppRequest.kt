package pl.edu.agh.bioauth.appregistrationbackend.model.network

import pl.edu.agh.bioauth.appregistrationbackend.model.database.App
import pl.edu.agh.bioauth.appregistrationbackend.util.KeyGenerator
import pl.edu.agh.bioauth.appregistrationbackend.util.KeySecurityManager

data class AppRequest(val name: String, val description: String?) {

    fun toAppModel(userId: String): App {
        val appId = KeyGenerator.getAppId(userId, name)
        val appSecret = KeyGenerator.getAppSecret()

        return App(userId, name, appId, KeySecurityManager.encrypt(appSecret), description)
    }
}