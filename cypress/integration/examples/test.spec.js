describe('First Suite', () => {
    
  it('First test', () => {
      cy.visit('/')
      cy.contains('Forms').click()
      cy.contains('Form Layouts').click()
      //by tag name
      cy.get('input')
      //by ID
      cy.get('#inputEmail')
      //by classname
      cy.get('.input-full-width.size-medium')
      // by attribute name 
      cy.get('[placeholder]')
      // by attribute name and value 
      cy.get('[placeholder="Email"]')
      // by class value (it must be all 3 classes)
      cy.get('[class="input-full-width size-medium shape-rectangle"')
       // by tag name attrubute with value
      cy.get('input[placeholder="Email"]')
      // by differente attributes
      cy.get('input[placeholder="Email"][fullwidth][type="email"')
      // by tag name, attr with value, id and class name
      cy.get('input[placeholder="Email"]#inputEmail.input-full-width.size-medium')
      // most recommended
      cy.get('[data-cy="imputEmail1"]')
  });

});


