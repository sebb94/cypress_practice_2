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

    it(' should submit Inline and Basic form and select tomorrow date in the calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Artem', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'password')
        navigateTo.datepickerPage()
        onDatePickerPage.selectCommonDatepickerDateFromToday(1)
        onDatePickerPage.selectDatepickerWithRangeFromToday(7, 14)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Artem', 'Bondar')
        onSmartTablePage.updateAgeByFirstName('Artem', '35')
        onSmartTablePage.deleteRowByIndex(1)
    })
});