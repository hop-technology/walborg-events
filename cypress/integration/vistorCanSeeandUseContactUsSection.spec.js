describe("Visitor is able to see and use contact us form", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Desktop view", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
    });

    it("Visitor can fill the contact us form", () => {
      cy.get("[data-cy=contact-us-form]").within(() => {
        cy.get("[data-cy=name]").type("John Doe");
        cy.get("[data-cy=email]").type("test@email.com");
        cy.get("[data-cy=phone]").type("1234567890");
        cy.get("[data-cy=message]").type("This is a test message");
        cy.get("[data-cy=privacy-policy]").click();
        cy.get("[data-cy=submit]").click();
      });
    });
  });

  describe("Mobile view", () => {
    beforeEach(() => {
      cy.viewport("iphone-x");
    });

    it("Visitor can fill the contact us form", () => {
      cy.get("[data-cy=contact-us-form]").within(() => {
        cy.get("[data-cy=name]").type("John Doe");
        cy.get("[data-cy=email]").type("test@email.com");
        cy.get("[data-cy=phone]").type("1234567890");
        cy.get("[data-cy=message]").type("This is a test message");
        cy.get("[data-cy=privacy-policy]").click();
        cy.get("[data-cy=submit]").click();
      });
    });
  });
});
