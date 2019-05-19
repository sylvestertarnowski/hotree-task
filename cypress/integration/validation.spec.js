describe('First test', () => {
    it('Visit the app', () => {
        cy.visit('/');
    });
});

describe('Empty submission', () => {
    it('Submit form with nothing filled out', () => {
        cy.get('.button-submit').click();
        cy.get('.success').should('not.exist');
    });
});

describe('Numbers test', () => {
    it('Input numbers only to text fields', () => {
        cy.get('#title').type(123);
        cy.get('#description').type(123);
        cy.get('#date').type('2020-05-04');
        cy.get('#time').type('13:05');
        cy.get('.button-submit').click();
    });
});

describe('First test', () => {
    it('Visit the app', () => {
        cy.visit('/');
    });
});

describe('Full fill out', () => {
    it('Fill out all the forms', () => {
        cy.get('#title').type("Cool title");
        cy.get('#description').type("This is the description, baby!");
        cy.get('#category').select('Hiking');
        cy.get('#paid').click();
        cy.get('#event_fee').type(50.99);
        cy.get('#reward').type(50);
        cy.get('#email').type('example@email.com');
        cy.get('#date').type('2020-05-04');
        cy.get('#time').type('13:05');
        cy.get('#duration').type(180);
        cy.get('.button-submit').click();
    })
})