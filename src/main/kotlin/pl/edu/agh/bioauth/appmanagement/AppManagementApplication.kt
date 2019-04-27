package pl.edu.agh.bioauth.appmanagement

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class AppManagementApplication

fun main(args: Array<String>) {
    runApplication<AppManagementApplication>(*args)
}