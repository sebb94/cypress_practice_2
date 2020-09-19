describe('Datepicker test', () => {

    before(() => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains("Datepicker").click()
    });

    it('Datepicker', () => {
  
        function selectDateFromCurrent(day){
            let date = new Date()
            date.setDate(date.getDate() + day)
            let futureDay = date.getDate()
            let futureMonth = date.toLocaleDateString('en-En', {month: 'short'})
            cy.log(futureMonth)
            let dateAssert = futureMonth + ' ' + futureDay + ', '+date.getFullYear()
            cy.get('nb-calendar-navigation').invoke('attr','ng-reflect-date').then( dateAttribute => {
                if(!dateAttribute.includes(futureMonth)){
                    cy.get('[data-name="chevron-right"]').click()
                    selectDateFromCurrent(day)
                } else{
                    cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]')
                       .contains(futureDay)
                       .click()
                }
            })

            return dateAssert 
        }
      
        cy.contains('nb-card','Common Datepicker').find('input').then( input => {
            cy.wrap(input).click()
            let dateAssert = selectDateFromCurrent(156)
            cy.wrap(input).invoke('prop','value').should('contain', dateAssert)
        })
        
    })

});
