describe('Tooltip / popup test', () => {


    it('Tooltip', () => {
  
        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains("Tooltip").click()
       
        cy.contains('nb-card','Colored Tooltips')
           .contains('Default').click()

        cy.get('nb-tooltip').should('contain', 'This is a tooltip')
    });

    it.only('Dialog box', () => {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains("Smart Table").click()

        //1
        // cy.get('tbody tr').first().find('.nb-trash').click()
        // cy.on('window:confirm', (confirm) =>{
        //     expect(confirm).to.equal('Are your sure you want to delete?')
        // })

        //2 
        // const stub = cy.stub()
        // cy.on('window:confirm', stub)
        // cy.get('tbody tr').first().find('.nb-trash').click().then(()=>{
        //     expect(stub.getCall(0)).to.be.calledWith('Are your sure you want to delete?')
        // })

        //3
        cy.get('tbody tr').first().find('.nb-trash').click()
        cy.on('window:confirm', () => false)

    });

  
});