import Selectors from "../../POM/selectors.spec";
const selectors = new Selectors()

describe('Exam', () => {
    before(()=>{
        cy.visit("/")
    })

    it ("creat and delete the web table", () => {
        //create new table
        selectors.getElements().click()
        selectors.getWebTables().click()
        selectors.getAddNew().click()
        selectors.getFirstName().type("name")
        selectors.getLastName().type("Aaaaayan")
        selectors.getEmail().type("test@test.te")
        selectors.getAge().type(12)
        selectors.getSalary().type(1000000)
        selectors.getDepart().type("very department")
        selectors.getSubmit().click()
        // Asserts to new created table
        selectors.getFirstNameTable().should("have.text", "name")
        selectors.getLastNameTable().should("have.text", "Aaaaayan")
        selectors.getAgeTable().should("have.text", 12)
        selectors.getEmailTable().should("have.text", "test@test.te")
        selectors.getSalaryTable().should("have.text", 1000000)
        selectors.getDepartTable().should("have.text", "very department")
        //edit the created table
        selectors.getEdit4Table().click()
        selectors.getDepart().clear().type("new text")
        selectors.getSubmit().click()
        // assert the edited table
        selectors.getDepartTable().should("have.text", "new text")
        //delete the table 1
        selectors.getDeleteTab1().click()
        // assert the deleted table
        selectors.getFirstNameTabe1().should("not.have.text" , "Cierra")
        selectors.getLastNameTabe1().should("not.have.text" , "Vega")
        selectors.getAgeTab1().should("not.have.text" , 39)
        selectors.getEmailTab1().should("not.have.text" , "cierra@example.com")
        selectors.getSalaryTab1().should("not.have.text" , 10000)
    })
    after(()=>{
        selectors.getDeletCreatedTab().click()
    })
})

