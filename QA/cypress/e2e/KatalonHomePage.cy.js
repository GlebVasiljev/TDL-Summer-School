import BasePage from "./BasePage.cy.js";

class KatalonHomePage extends BasePage {
  static get url() {
    return "https://katalon-demo-cura.herokuapp.com";
  }
}

export default KatalonHomePage;