class HomePage{

    skipButton(){
        return cy.get('.driver-close-btn')
    }

    twinnerHeaderLogo(){
        return cy.get('[src="/public/images/navLogo.svg"]')
    }

    twinnerHeader(){

    }

    allButton(){
            
    }

    createTicket(){
        return cy.get('#modal-btn')
    }

    clickCreateTicket(){
        return createTicket().click()
    }


         
        
}


export default HomePage