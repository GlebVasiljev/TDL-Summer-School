import DuckDuckGoPage from "./FindObjects/DuckDuckGo.page"

describe("Set up timer and validate", () => {
    beforeEach(() => {
        cy.visit(DuckDuckGoPage);
    });

    it("Timer results ", () => {
        DuckDuckGoPage.searchField.click().type("timer{enter}");
        cy.get('.minutes').click().type('0');
        cy.get('.time_input > .seconds').click().type('10');
        cy.get('.play_pause').click();
        cy.wait(10000);
        cy.get('.status_stopped').should("be.visible");
    });
});