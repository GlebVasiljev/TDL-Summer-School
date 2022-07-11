import HomePage from './KatalonHomePage.cy'

describe('Home Page test', () => {
  it('Opens home page, clicking on button', () => {
    cy.visit(HomePage);
    cy.get('#btn-make-appointment').click();
    
    //loaded login page
    cy.get('#txt-username').click().type('John Doe');
    cy.get('#txt-password').click().type('ThisIsNotAPassword');
    cy.get('#btn-login').click();
    // ---> Create KatalonMakeAnappoitmentPage <---
    cy.get('#combo_facility').select('Seoul CURA Healthcare Center');
    cy.get('#chk_hospotal_readmission').click();
    cy.get('.col-sm-4 > :nth-child(2)').click();
    cy.get('#txt_visit_date').click().type('30/07/2022');
    cy.get(':nth-child(5) > .col-sm-offset-3').click();
    cy.get('#txt_comment').click().type('Hello world!');
    cy.get('#btn-book-appointment').click();
    //validation
    cy.get('#facility').should("have.text", 'Seoul CURA Healthcare Center');
    cy.get('#hospital_readmission').should("have.text",'Yes');
    cy.get('#program').should("have.text",'Medicaid');
    cy.get('#visit_date').should("have.text",'30/07/2022');
    cy.get('#comment').should("have.text",'Hello world!');
  })
  
})
