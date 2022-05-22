/// <reference types="cypress" />

describe('notes add form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display table row when new note is added', () => {
    cy.get('[data-qa="title"]').click().type('House');
    cy.get('[data-qa="description"]').click().type('Clean house.');
    cy.get('[data-qa="add-note-button"]').click();
    cy.contains('Clean house.').should('be.visible');
  });
});
