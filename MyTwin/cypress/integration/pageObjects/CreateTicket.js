/// <reference types = 'cypress' />

class CreateTicket{

    createTicketWindow(){
        return cy.get('.modal__content')
    }

    brand(){
        return cy.get('#make') 
    }

    selectBrand(dropdown){
        brand().select(dropdown)
    }



    



}

export default CreateTicket