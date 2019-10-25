package pl.edu.agh.bioauth.appmanagement.service

import org.springframework.stereotype.Service
import pl.edu.agh.bioauth.appmanagement.model.network.AppRequest
import pl.edu.agh.bioauth.appmanagement.model.network.AppResponse
import pl.edu.agh.bioauth.appmanagement.repository.AppRepository

@Service
class AppService(private val appRepository: AppRepository) {

    fun getAllUserApps(userId: String): List<AppResponse> =
            appRepository.findByUserId(userId).mapNotNull(AppResponse.Companion::fromAppModel)

    fun addApp(newApp: AppRequest, userId: String): AppResponse? =
            AppResponse.fromAppModel(appRepository.save(newApp.toAppModel(userId)))
}