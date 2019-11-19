

describe('E2E - Check all the scenarios', () => {
    it("Type name of the artist", () => {
        cy.visit("http://localhost:3000/")
        //First Search for Arijit
        cy.get(".search-input-box").type("Arijit")
        cy.get(".auto-complete-list").contains("Arijit Singh").click()
        cy.get(".album-section").eq(0).click()
        cy.get(".album-details-section").should('be.visible')
        //Second Search for Prince
        cy.get(".search-input-box").clear().type("Prince")
        cy.get(".auto-complete-list").contains("Prince").click()
        cy.get(".album-section").eq(1).click()
        cy.get(".album-details-section").should('be.visible')
    })
});