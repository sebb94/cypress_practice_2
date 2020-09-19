describe('Table test', () => {

    before(() => {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains("Smart Table").click()
    });
    it('Table', () => {
  
        cy.get('tbody').contains('tr','Larry').then( tableRow =>{
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('25')
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(6).should('contain','25')
        })
    });

    it('Add new row', () => {
        cy.get('.nb-plus').click()
        cy.get('thead').find('tr').eq(2).then( tr => {
            cy.wrap(tr).find('[placeholder="First Name"]').type("Seba")
            cy.wrap(tr).find('[placeholder="Last Name"]').type("Sebowski")
            cy.wrap(tr).find('.nb-checkmark').click()
        })

        cy.get('tbody tr').first().find('td').then( td => {
            cy.wrap(td).eq(2).should('contain', 'Seba')
            cy.wrap(td).eq(3).should('contain','Sebowski')
        })

    });

    it.only('Search by age', () => {
        const age = [20, 30, 40, 200]

        cy.wrap(age).each( age => {
            cy.get('thead input[placeholder="Age"]').clear().type(age)
            cy.wait(500)
            cy.get('tbody tr').each( tr => {
                if( age == 200){
                    cy.wrap(tr).should('contain','No data found')
                }else{
                    cy.wrap(tr).find('td').eq(6).should('contain',age)
                }      
            })
        })

    });
});