/// <reference types = "cypress" />

import HomePage from '../pageObjects/HomePage'
import LoginPage from '../pageObjects/LoginPage' 


describe('Login to the MyTwin Portal',  function() {
    
    const login = new LoginPage()
    const home = new HomePage()
    //let data;

    beforeEach(function(){
      
        cy.viewport(375,667)
        cy.task('openSafari');
        cy.visit(Cypress.env('testmUrl'))
        //cy.visit('/') // will take the BASE URL by default
        
    })

    afterEach(function(){
        cy.window().then((win) => {
            win.sessionStorage.clear()
          })
        cy.clearLocalStorage()
        cy.clearCookies()
    })

    it.only('My Twin Portal Login with valid credentials', ()=>{

        login.logo().should('be.visible')
        login.emailField().type(Cypress.env('testmEmail'))
        login.passwordField().type(Cypress.env('testmPwd'))
        //login.showPasswordIcon().click()
        login.continueButton().click({ multiple: true })
        home.skipButton().should('be.visible')
    })

    it('My Twin Portal Login with invalid credentials', ()=>{

        login.logo().should('be.visible')
        login.emailField().type(Cypress.env('InvalidEmail'))
        login.passwordField().type(Cypress.env('testmPwd'))
        //login.showPasswordIcon().click()
        login.continueButton().click({ multiple: true })
        home.skipButton().should('be.visible')
    })

    it('My Twin Portal Login with invalid credentials', ()=>{

        login.logo().should('be.visible')
        login.emailField().type(Cypress.env('testmEmail'))
        login.passwordField().type(Cypress.env('InvalidPwd'))
        //login.showPasswordIcon().click()
        login.continueButton().click({ multiple: true })
        home.skipButton().should('be.visible')
    })

    it('My Twin Portal Login with invalid credentials', ()=>{

        login.logo().should('be.visible')
        login.emailField().type(Cypress.env('InvalidEmail'))
        login.passwordField().type(Cypress.env('InvalidPwd'))
        //login.showPasswordIcon().click()
        login.continueButton().click({ multiple: true })
        home.skipButton().should('be.visible')        
    })


})