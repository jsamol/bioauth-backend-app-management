package pl.edu.agh.bioauth.appmanagement.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController
import pl.edu.agh.bioauth.appmanagement.model.network.AppRequest
import pl.edu.agh.bioauth.appmanagement.model.network.AppResponse
import pl.edu.agh.bioauth.appmanagement.service.AppService
import pl.edu.agh.bioauth.appmanagement.util.getKeycloakUserId
import java.security.Principal

@RestController
@RequestMapping("/api/v1/apps")
class AppController {

    @Autowired
    private lateinit var appService: AppService

    @RequestMapping(method = [RequestMethod.GET])
    fun getApps(principal: Principal): List<AppResponse> =
            principal.getKeycloakUserId()?.let { appService.getAllUserApps(it) } ?: emptyList()

    @RequestMapping(method = [RequestMethod.POST])
    fun addApp(principal: Principal, @RequestBody newApp: AppRequest): AppResponse? =
            principal.getKeycloakUserId()?.let { appService.addApp(newApp, it) }

}