import DuckDuckGoPage from "./FindObjects/DuckDuckGo.page"

describe("How to open calc and sum two numbers", () => {
  beforeEach(() => {
    cy.visit(DuckDuckGoPage);
  });
  //First test
  it("sum of 2 numbers", () => {
    DuckDuckGoPage.searchField.should("be.visible").type("Calculator{enter}");
    DuckDuckGoPage.calculatorKeyboard
      .contains("2")
      .should("be.visible")
      .click();
    DuckDuckGoPage.sumSign.should("be.visible").click();
    DuckDuckGoPage.calculatorKeyboard
      .contains("7")
      .should("be.visible")
      .click();
    DuckDuckGoPage.calculatorKeyboard
      .contains("=")
      .should("be.visible")
      .click();
    DuckDuckGoPage.calculatorDisplay.scrollIntoView().should("have.text", "9");

  });
  //Second test
  it("devide by 0" ,() =>{
    DuckDuckGoPage.searchField.should("be.visible").type("Calculator{enter}");
    DuckDuckGoPage.calculatorKeyboard
      .contains("7")
      .should("be.visible")
      .click();
    DuckDuckGoPage.devideSign.should("be.visible").click();
    DuckDuckGoPage.calculatorKeyboard
      .contains("0")
      .should("be.visible")
      .click();
    DuckDuckGoPage.calculatorKeyboard
      .contains("=")
      .should("be.visible")
      .click();
    DuckDuckGoPage.calculatorDisplay.scrollIntoView().should("have.text", "Infinity");
  });

  //Third test
  it("Timer results " , () => {
    DuckDuckGoPage.searchField.type("stopwatch{enter}");
    DuckDuckGoPage.startButton.click();
    cy.wait(10000);
    // if(DuckDuckGoPage.totalTimeResult == "00:10.00"){
      DuckDuckGoPage.stopButton.click();
    DuckDuckGoPage.totalTimeResult.contains("00:10");
  });

  //Test 4
  
});