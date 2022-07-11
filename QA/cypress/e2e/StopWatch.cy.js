import DuckDuckGoPage from "./FindObjects/DuckDuckGo.page"

describe("How to open calc and sum two numbers", () => {
    beforeEach(() => {
        cy.visit(DuckDuckGoPage);
    });

    it("Timer results ", () => {
        DuckDuckGoPage.searchField.click().type("stopwatch{enter}");
        DuckDuckGoPage.startButton.click();

        DuckDuckGoPage.lapButton.click();
        cy.wait(5000)
        DuckDuckGoPage.lapButton.click();
        cy.wait(5000)
        DuckDuckGoPage.lapButton.click();

        DuckDuckGoPage.lapList.should("be.visible");
        DuckDuckGoPage.lapArrayCount.should('3');
        DuckDuckGoPage.stopButton.click();
    });
});


