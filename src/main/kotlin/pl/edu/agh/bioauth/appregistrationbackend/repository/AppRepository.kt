package pl.edu.agh.bioauth.appregistrationbackend.repository

import org.springframework.data.mongodb.repository.MongoRepository
import pl.edu.agh.bioauth.appregistrationbackend.model.database.App

interface AppRepository : MongoRepository<App, String> {
    fun findByUserId(userId: String): List<App>
}