describe("Visitor is able to navigate to landing page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Desktop view", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
    });

    it("Visitor can see the landing page", () => {
      cy.get("[data-cy=venue-title]").should("contain", "Magasinsgatan 1");
      cy.get("[data-cy=venue-info]").should(
        "contain",
        "Välkommen till en magisk oas i centrala Göteborg! Här arrangerar vi allt från utbildningar, konferenser till stora fester. Magasinsgatan 1 rymmer upp till 200 personer och är den perfekta platsen för att skapa oförglömliga möten och stärka relationer."
      );
    });
  });

  describe("Mobile view", () => {
    beforeEach(() => {
      cy.viewport("iphone-x");
    });
    it("Visitor can see the landing page", () => {
      cy.get("[data-cy=venue-title]").should("contain", "Magasinsgatan 1");
      cy.get("[data-cy=venue-info]").should(
        "contain",
        "Välkommen till en magisk oas i centrala Göteborg! Här arrangerar vi allt från utbildningar, konferenser till stora fester. Magasinsgatan 1 rymmer upp till 200 personer och är den perfekta platsen för att skapa oförglömliga möten och stärka relationer."
      );
    });
  });
});