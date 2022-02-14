/// <reference types = 'cypress' />

import HomePage from '../pageObjects/HomePage'


describe('', function(){

    // login programtically using API before doing any testing as per the best practices. Do not login from the UI

    const home = new HomePage()

    beforeEach(function(){
        cy.viewport(375,667)
    })    

    it('verfying the default behavior', ()=>{

        home.twinnerHeaderLogo().should('be.visible')
        home.twinnerHeader().should('be.visible')
        home.allButton().should('be.visible')
    })

})