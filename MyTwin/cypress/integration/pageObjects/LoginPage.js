class LoginPage {

    emailField(){
      return cy.get('#username') 
    }

    passwordField(){
        return cy.get('#password')
    }

    continueButton(){
        return cy.get('[type="submit"]')
    }

    signUpButton(){
        return cy.get('[class="c82c0b9b3 c8061fbcb"]')
    }

    signUpwithGoogle(){
        return cy.get('[class="c4a36d755"]')
    }

    showPasswordIcon(){
        return cy.get('[type="button"]')
    }

    logo(){
        return cy.get('#prompt-logo-center')
    }
}

export default LoginPage