package pl.edu.agh.bioauth.appregistrationbackend.util

import com.google.common.hash.Hashing
import java.nio.charset.StandardCharsets

object KeyGenerator {

    fun getAppId(userId: String, name: String): String {
        val rawId = "$userId-$name-${System.currentTimeMillis()}"
        val appId = Hashing
                .sha256()
                .hashString(rawId, StandardCharsets.UTF_8)
                .toString()

        return appId.substring(0, appId.length / 2)
    }

    fun getAppSecret(): String {
        return "123"
    }
}