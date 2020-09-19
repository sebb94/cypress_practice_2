import { navigateTo } from "../../support/page_objects/navigation"

describe('Navigation test', () => {
    
    beforeEach(() => {
        cy.visit('/')
    });

    it('Navigation', () => {
            navigateTo.formLayoutsPage()
            navigateTo.datepickerPage()
            navigateTo.smartTablePage()
            navigateTo.toasterPage()
            navigateTo.tooltipPage()
       
    });
});