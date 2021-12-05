
class HomePage {

    mainMenu(){
        return cy.get('.MainMenu--icon--KnYY0')
    }

    mainMenuActive(){
        return cy.get('[class="MainMenu--menuButton--2eJBA MainMenu--active--1y_DU Button--default--3zkvy"]')
    }

    mainMenuView(){
        return cy.get('.SiteNavigationLinks--Navigation--3Fz1b').should('be.visible')
    } 

    consent(){
        return cy.get('#truste-consent-button')
    }

    dataRights(){
        return cy.get('[data-testid="privacy"] > .SiteNavigationLinks--navigationListItems--7Iux3 > [data-testid="dataRights"]')
    }

    privacyPolicy(){
        return cy.get('[data-testid="privacy"] > .SiteNavigationLinks--navigationListItems--7Iux3 > [data-testid="privacyPolicy"]')
    }

    privacy14thPoint(){
        return cy.get('#new-policy > .privacy-policy-content > .privacy-policy-text > .toc > :nth-child(14) > a')
    }

}


export default HomePage