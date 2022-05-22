/// <reference types="cypress" />

describe('check empty favorite notes', () => {
  beforeEach(() => {
    cy.visit('/favorites');
  });

  it('should display message about empty favorite notes', () => {
    cy.contains("You don't have any favorite note.").should('be.visible');
  });
});
