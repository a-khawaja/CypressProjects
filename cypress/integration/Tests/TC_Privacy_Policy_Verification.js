/// <reference types = "cypress" />

import HomePage from '../pageObjects/homePage' 


describe('Privacy Policy Text Verification', () =>{
    const homePage = new HomePage()

    before(function() {
        cy.visit('?Goto=Redirected')
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
    
        let text1 = "The Lei 13.709/ 2018 (Lei Geral de Proteção de Dados Pessoais, “LGPD”) requires certain disclosures that already are covered in our Privacy Policy."
        let text2 = "In addition, please note that for the purposes of LGPD, the data controller is TWC Product and Technology, LLC, doing business as The Weather Company, an IBM business, which may be contacted at the email or address listed in Section 11 How to Contact Us"
        let text3 = "The relevant Data Protection Officer may be contacted at privacy@weather.com"
        let text4 = "Data Rights: Under LGPD, you can request to access your personal data, receive confirmation of the existence of processing and be able to request to receive confirmation about the private and public entities with whom the controller shares the data, and obtain a portable copy of your data. These rights will be fulfilled when you choose to Request a Portable Copy of Data. You also have the right to object to the processing when data is processed unlawfully and to request correction, anonymization, blocking and deletion of unnecessary, excessive data or data processed unlawfully related to your stored preferences and your use of the Services. These rights will be fulfilled when you choose to Delete Data. You can exercise your data rights on weather.com by clicking here and on the iOS or Android app by navigating to “Data Rights” under “Settings” in the app menu. Please note that you must make any requests from each browser or device where you access the Services."
        let text5 = "International Transfers: If you are located where LGPD applies, information that we collect (including through cookies) will be processed and stored in the United States. The appropriate cross-border transfer method governing personal data included in such transfers is the EU Standard Contractual Clauses agreement pursuant to EC Decision 2010/87/EU."
        let text6 = "Processing Basis: Our processing of your personal data in order to provide you with the Services will typically be based on one of the following processing bases (pursuant to Article 7 LGPD):"
        let text7 = "Because you have provided us with your specific, informed, freely-given, and unambiguous consent; or"
        let text8 = "Because the processing is necessary for the purposes of the legitimate interests pursued either by us or by a third party and such legitimate interests are not overridden by your privacy and related rights as an individual. Our legitimate interests include the provision of market-leading weather-related products and services, including the Services."
          
        let text = [text1, text2, text3, text4, text5, text6, text7, text8]
    
    for(let i =2; i<=4; i++){
        cy.get('#lgpd-notice-new > :nth-child('+i+')').should('contain', text[i-2])
    }

    cy.get('#lgpd-notice-new > :nth-child(5)').should('have.text', text[3])
    cy.get('#lgpd-notice-new > :nth-child(6)').should('have.text', text[4])
    cy.get('#lgpd-notice-new > :nth-child(7)').should('have.text', text[5])
    cy.get('#lgpd-notice-new > .bullet-list > :nth-child(1)').should('have.text', text[6])
    cy.get('#lgpd-notice-new > .bullet-list > :nth-child(2)').should('have.text', text[7])

})
})