export class AlertsPage {
    alertTexts = {
        alertText: 'I am an alert box!',
        confirmBoxText: 'Press a button!',
        youPressedCancel: 'You pressed Cancel!',
        youPressedOk: 'You pressed OK!',
        ceyhun: 'Ceyhun Ganioglu',
    };
    navigateToAlertsPage() {
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
    }

    clickRegularAlertButton() {
        cy.get('#button1').contains('CLICK ME!').click()
    }

    clickConfirmBoxButton() {
        cy.get('#button4').contains('CLICK ME!').click()
    }


    verifyAlertWithTextDisplayed(alertText) {
        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.contains(alertText);
        })
    }

     acceptAlert() {
         cy.on('window:confirm', () => true)
     }

     cancelAlert() {
         cy.on('window:confirm', () => false)
     }

    assertConfirmMessageBoxWithText(errorText) {
        cy.get('#confirm-alert-text').should('be.visible')
        cy.get('#confirm-alert-text').should('contain.text', errorText)
    }
}

export const onAlertsPage = new AlertsPage()