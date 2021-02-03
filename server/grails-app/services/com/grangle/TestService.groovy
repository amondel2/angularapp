package com.grangle

import grails.gorm.transactions.Transactional
import groovy.transform.CompileStatic

@Transactional
class TestService {

    List<Test> getList() {
        Test.withCriteria{
            ne("name","")
        }
    }
}