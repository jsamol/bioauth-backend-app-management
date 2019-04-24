package pl.edu.agh.bioauth.appregistrationbackend.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController
import pl.edu.agh.bioauth.appregistrationbackend.model.network.AppRequest
import pl.edu.agh.bioauth.appregistrationbackend.model.network.AppResponse
import pl.edu.agh.bioauth.appregistrationbackend.repository.AppRepository
import pl.edu.agh.bioauth.appregistrationbackend.util.getKeycloakUserId
import java.security.Principal

@RestController
@RequestMapping("/api/v1/apps")
class AppController {

    @Autowired
    private lateinit var appRepository: AppRepository

    @RequestMapping(method = [RequestMethod.GET])
    fun getApps(principal: Principal): List<AppResponse> {
        val apps = principal.getKeycloakUserId()?.let { userId ->
            appRepository.findByUserId(userId)
        }

        return apps?.mapNotNull(AppResponse.Companion::fromAppModel) ?: emptyList()
    }

    @RequestMapping(method = [RequestMethod.POST])
    fun addApp(principal: Principal, @RequestBody newApp: AppRequest): AppResponse? {
        val app = principal.getKeycloakUserId()?.let { userId ->
            appRepository.save(newApp.toAppModel(userId))
        }

        return AppResponse.fromAppModel(app)
    }

}