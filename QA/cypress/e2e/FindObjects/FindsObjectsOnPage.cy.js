import Page from './DuckDuckGo.page';

class BasePage {
    static get url() {
      return "";
    }
  
    static get visit() {
      cy.visit(url);
    }
  }
  
  export default BasePage;