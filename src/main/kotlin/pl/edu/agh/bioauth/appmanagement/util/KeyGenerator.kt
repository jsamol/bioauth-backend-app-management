package pl.edu.agh.bioauth.appmanagement.util

import com.google.common.hash.Hashing
import java.nio.charset.StandardCharsets
import java.security.SecureRandom

object KeyGenerator {

    private const val APP_ID_LENGTH = 32
    private const val APP_SECRET_SIZE = 32

    private val secureRandom: SecureRandom
        get() = SecureRandom()

    fun getAppId(userId: String, name: String): String {
        val rawId = "$userId-$name-${System.currentTimeMillis()}"

        return Hashing
                .sha256()
                .hashString(rawId, StandardCharsets.UTF_8)
                .toString()
                .substring(0, APP_ID_LENGTH)
    }

    fun getAppSecret(): String {
        val rawSecretBytes = ByteArray(APP_SECRET_SIZE).also { secureRandom.nextBytes(it) }
        val rawSecret = rawSecretBytes.joinToString("") { String.format("%02X", it) }

        return Hashing
                .sha256()
                .hashString(rawSecret, StandardCharsets.UTF_8)
                .toString()
    }
}