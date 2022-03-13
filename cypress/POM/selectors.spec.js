class Selectors {

    getElements() {
        return cy.get(".category-cards > :nth-child(1)")
    }

    getWebTables() {
        return cy.contains("Web Tables")
    }

    getAddNew() {
        return cy.get("#addNewRecordButton")
    }

    getFirstName() {
        return cy.get("#firstName")
    }

    getLastName() {
        return cy.get("#lastName")
    }

    getEmail() {
        return cy.get("#userEmail")
    }

    getAge() {
        return cy.get("#age")
    }

    getSalary() {
        return cy.get("#salary")
    }

    getDepart() {
        return cy.get("#department")
    }

    getSubmit() {
        return cy.get("#submit")
    }

    getFirstNameTable() {
        return cy.get("div.rt-tbody > div:nth-child(4) > div > div:nth-child(1)")
    }

    getLastNameTable() {
        return cy.get("div.rt-tbody > div:nth-child(4) > div > div:nth-child(2)")
    }

    getAgeTable() {
        return cy.get("div.rt-tbody > div:nth-child(4) > div > div:nth-child(3)")
    }

    getEmailTable() {
        return cy.get("div.rt-tbody > div:nth-child(4) > div > div:nth-child(4)")
    }

    getSalaryTable() {
        return cy.get("div.rt-tbody > div:nth-child(4) > div > div:nth-child(5)")
    }

    getDepartTable() {
        return cy.get("div.rt-tbody > div:nth-child(4) > div > div:nth-child(6)")
    }

    getEdit4Table() {
        return cy.get("#edit-record-4 > svg")
    }

    getDeleteTab1() {
        return cy.get("#delete-record-1")
    }

    getFirstNameTabe1() {
        return cy.get("div.rt-tbody > div:nth-child(1) > div > div:nth-child(1)")
    }

    getLastNameTabe1() {
        return cy.get("div.rt-tbody > div:nth-child(1) > div > div:nth-child(2)")
    }

    getAgeTab1() {
        return cy.get("div.rt-tbody > div:nth-child(1) > div > div:nth-child(3)")
    }

    getEmailTab1() {
        return cy.get("div.rt-tbody > div:nth-child(1) > div > div:nth-child(4)")
    }

    getSalaryTab1() {
        return cy.get("div.rt-tbody > div:nth-child(1) > div > div:nth-child(5)")
    }
    getDeletCreatedTab(){
        return cy.get("#delete-record-4")
    }


}

export default Selectors