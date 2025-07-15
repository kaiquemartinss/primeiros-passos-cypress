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

    typeFields(){
        cy.get(this.selectorList().firstNameField).clear().type('FirstNameTest')
        cy.get(this.selectorList().lastNameField).clear().type('LastNameTest')
        cy.get(this.selectorList().genericField).eq(3).clear().type('Employee')
        cy.get(this.selectorList().genericField).eq(4).clear().type('OtherIdTest')
        cy.get(this.selectorList().genericField).eq(5).clear().type('DriverLicenseTest') 
        cy.get(this.selectorList().genericField).eq(6).clear().type('2025-06-29')
        cy.get(this.selectorList().dateCloseButton).click()
        cy.get(this.selectorList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close').click()
        cy.get(this.selectorList().selectField).eq(0).click()
        cy.get(this.selectorList().firstSelectedField).click()
        cy.get(this.selectorList().selectField).eq(1).click()
        cy.get(this.selectorList().secondSelectedField).click()
    }

}

export default MyInfoPage