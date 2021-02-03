package com.grangle

import grails.converters.JSON

class TestController {

    TestService testService

    def index() {
        def rtn = testService.getList()
        withFormat {
            '*' {
                render([tests: rtn] as JSON)
            }
        }
    }

}
