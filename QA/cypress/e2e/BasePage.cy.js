import url from './KatalonHomePage.cy'

class BasePage {
    static get url() {
      return "";
    }
  
    static get visit() {
      cy.visit(url);
    }
  }
  
  export default BasePage;