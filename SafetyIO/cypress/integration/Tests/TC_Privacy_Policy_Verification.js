/// <reference types = "cypress" />

import HomePage from '../pageObjects/homePage' 


describe('Privacy Policy Text Verification', () =>{
    const homePage = new HomePage()
    let data;

    before(function() {
            cy.visit('?Goto=Redirected')
            cy.fixture('testData').then(testData => {
            data = testData
            return data 
        })
    })

    it('Privacy policy test', () => {

        homePage.consent().should('be.visible').click()
        cy.wait(3000)
        
        homePage.mainMenu().should('be.visible')
        cy.wait(2000)
        
        homePage.mainMenu().click()
        homePage.mainMenuActive().should('be.visible')
        homePage.mainMenuView().should('be.visible')
    
        homePage.privacyPolicy().should('be.visible').scrollIntoView().click()
        homePage.privacy14thPoint().click()
              
        let text = [data.text1, data.text2, data.text3] 

    for(let i =2; i<=4; i++){
        cy.get('#lgpd-notice-new > :nth-child('+i+')').should('contain', text[i-2])
    }

    cy.get('#lgpd-notice-new > :nth-child(5)').should('have.text', data.text4)
    cy.get('#lgpd-notice-new > :nth-child(6)').should('have.text', data.text5)
    cy.get('#lgpd-notice-new > :nth-child(7)').should('have.text', data.text6)
    cy.get('#lgpd-notice-new > .bullet-list > :nth-child(1)').should('have.text', data.text7)
    cy.get('#lgpd-notice-new > .bullet-list > :nth-child(2)').should('have.text', data.text8)


})
})