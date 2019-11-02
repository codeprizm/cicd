import { getGreeting } from '../support/app.po';

describe('ngdemo2', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to ngdemo2!');
  });
});
