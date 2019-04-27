package pl.edu.agh.bioauth.appmanagement.repository

import org.springframework.data.mongodb.repository.MongoRepository
import pl.edu.agh.bioauth.appmanagement.model.database.App

interface AppRepository : MongoRepository<App, String> {
    fun findByUserId(userId: String): List<App>
}