class MyInfoPage {
    selectorList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: "[class*='oxd-input--active']",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            selectField: ".oxd-select-text--active",
            firstSelectedField:":nth-child(20) > span",
            secondSelectedField:".oxd-select-dropdown > :nth-child(4)",
        }
        return selectors
    }

    fillPersonalDetails(firstName, lastName){
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenceNumber, expireDate){
        cy.get(this.selectorList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorList().genericField).eq(5).clear().type(driversLicenceNumber) 
        cy.get(this.selectorList().genericField).eq(6).clear().type(expireDate)
        cy.get(this.selectorList().dateCloseButton).click()
    }

    saveForm(){
        cy.get(this.selectorList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close').click()
    }

    fillStatus(){
        cy.get(this.selectorList().selectField).eq(0).click({force: true})
        cy.get(this.selectorList().firstSelectedField).click()
        cy.get(this.selectorList().selectField).eq(1).click({force: true})
        cy.get(this.selectorList().secondSelectedField).click()
    }

}

export default MyInfoPage