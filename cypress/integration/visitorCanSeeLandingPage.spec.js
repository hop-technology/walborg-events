describe("Visitor is able to navigate to landing page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Desktop view", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
    });

    it("Visitor can see the landing page", () => {
      cy.get("[data-cy=test-id]").should("contain", "Hello");
    });
  });

  describe("Mobile view", () => {
    beforeEach(() => {
      cy.viewport("iphone-x");
    });
    it("Visitor can see the landing page", () => {
      cy.get("[data-cy=test-id]").should("contain", "Hello");
    });
  });
});
