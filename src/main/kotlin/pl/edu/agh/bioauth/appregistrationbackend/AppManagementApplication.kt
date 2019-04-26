package pl.edu.agh.bioauth.appregistrationbackend

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class AppManagementApplication

fun main(args: Array<String>) {
    runApplication<AppManagementApplication>(*args)
}