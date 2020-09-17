function visitApp(){
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
}

describe('First Suite', () => {
    
  it('First test', () => {
      visitApp()
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

  it('Second test', () => {
    visitApp()
    cy.get('[data-cy="signInButton"]')
    cy.contains('Sign in')
    cy.contains('[status="warning"]','Sign in')
 
    cy.get("#inputEmail3")
        .parents('form')
        .find('button')
        .should('contain','Sign in')
        .parents('form')
        .find('nb-checkbox')
        .click()

        cy.contains('nb-card','Horizontal form').find('[type="email"]')

  });

  it('ten and wrap methods', () => {
      visitApp()

    //   cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain','Email')
    //   cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain','Password')
    //   cy.contains('nb-card', 'Basic Form').find('[for="exampleInputEmail1"]').should('contain','Email Address')
    //   cy.contains('nb-card', 'Basic Form').find('[for="exampleInputPassword1"]').should('contain','Password')

      // selenium - not working

    //   const firstForm = cy.contains('nb-card', 'Using the Grid')
    //   const secondForm = cy.contains('Basic form')

    //   firstForm.find('[for="inputEmail1"]').should('contain','Email')
    //   firstForm.find('[for="inputPassword2"]').should('contain','Password')
    //   secondForm.find('[for="exampleInputEmail1"]').should('contain','Email Address')


      // cypress (jQuery)

      cy.contains('nb-card','Using the Grid').then( firstForm => {
        // jquery format - cant use cypress
        const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
        expect(passwordLabelFirst).to.equal('Password')

        cy.contains('nb-card','Basic form').then( secondForm => {
            // jquery format - cant use cypress
            const passwordSecondText = secondForm.find('[for="exampleInputPassword1"]').text()
            expect(passwordLabelFirst).to.equal(passwordSecondText)
    
            // go back to wordpress
            cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain',passwordSecondText)
          })

      })
  });

  it('invoke command', () => {
      visitApp()

      //1
      cy.get('[for="exampleInputPassword1"]').should('contain','Password')

      // 2
      cy.get('[for="exampleInputPassword1"]').then( label => {
          expect(label.text()).to.equal("Password")
      })

      //3
      cy.get('[for="exampleInputPassword1"]').invoke('text').then( text => {
        expect(text).to.equal("Password")
    })

    cy.contains('nb-card','Basic form')
        .find('nb-checkbox')
        .click()
        .find('.custom-checkbox')
        .invoke('attr','class')
        .should('contain','checked')
  });

  it('assert proporty', () => {
      cy.visit('/')
      cy.contains('Forms').click()
      cy.contains('Datepicker').click()

      cy.contains('nb-card', 'Common Datepicker').find('input').click()
      cy.contains('nb-calendar-day-cell', '23').click()
      cy.contains('nb-card', 'Common Datepicker').find('input').invoke('prop','value').should('contain','Sep 23, 2020')
  });

  it('Radio button', () => {
      visitApp()
      cy.contains('nb-card','Using the Grid').find('[type="radio"').then( radioButtons => {
        cy.wrap(radioButtons)
         .first()
         .click({force : true })
         .should('be.checked')

         cy.wrap(radioButtons)
          .eq(1)
          .check({force: true})

          cy.wrap(radioButtons)
          .eq(0)
          .should('not.be.checked')

          cy.wrap(radioButtons)
          .eq(2)
          .should('be.disabled')

      })
  });

  it.only('checkboxes', () => {
      cy.visit('/')
      cy.contains('Modal & Overlays').click()
      cy.contains("Toastr").click()

      cy.get('[type="checkbox"]').check({force : true })
      cy.get('[type="checkbox"]').eq(0).click({force : true }).should('not.be.checked')
      cy.get('[type="checkbox"]').eq(1).should('be.checked')
      cy.get('[type="checkbox"]').eq(2).uncheck({force:true})
  });
});


