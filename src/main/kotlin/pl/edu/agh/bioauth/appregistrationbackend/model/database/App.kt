package pl.edu.agh.bioauth.appregistrationbackend.model.database

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id

data class App(val userId: String,
               val name: String,
               val appId: String,
               val appSecret: String,
               val description: String?) {

    @Id
    private var _id: ObjectId? = null

    val id: String
        get() = _id?.toHexString() ?: ""
}