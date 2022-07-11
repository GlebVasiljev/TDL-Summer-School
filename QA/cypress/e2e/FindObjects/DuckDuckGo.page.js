import BasePage from "./FindsObjectsOnPage.cy";

class DuckDuckGoPage extends BasePage{
    static get url(){
        return 'https://duckduckgo.com/'; //Opens tab
    }
    static get searchField(){
        return cy.get("[id='search_form_input_homepage']"); //select input field
    }
    static get calculatorKeyboard() {
        return cy.get("[class*='tile__tab__basic']");   //returns calculator div
      }
    
      static get sumSign() {
        return cy.get("button[value='+']"); //finds and returns + sign
      }
      static get devideSign() {
        return cy.get('[value="÷"]');   //finds and returns / sign
      }
    
      static get calculatorDisplay() {
        return cy.get("#display");  //finds and returns result field
      }
    }

export default DuckDuckGoPage;