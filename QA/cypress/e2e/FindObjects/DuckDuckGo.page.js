import BasePage from "./FindsObjectsOnPage.cy";

class DuckDuckGoPage extends BasePage {
    static get url() {
        return 'https://duckduckgo.com/'; //Opens tab
    }
    static get searchField() {
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

    static get startButton() {
        return cy.get('.start');
    }

    static get stopButton() {
        return cy.get('.stop');
    }

    static get lapButton() {
        return cy.get('#lap_btn');
    }

    static get resetButton() {
        return ccy.get('#reset_btn');
    }

    static get totalTimeResult() {
        return cy.get('#total_time');
    }

    static get addLap() {
        cy.get('#lap_btn');
    }
    static get lapList() {
        return cy.get('table[id="split_list"]');
    }
    static get lapArrayCount(){
        return cy.get('table[id="split_list"]'.length);
    }
    
}

export default DuckDuckGoPage;