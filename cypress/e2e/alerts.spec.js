import {onAlertsPage} from "../support/page_objects/alerts.page";

describe('Alert handling tests', () => {
    beforeEach(() => {
        onAlertsPage.navigateToAlertsPage()
    })

    it('Alert should display on button click', () => {
        // Clicking alert button
        onAlertsPage.clickRegularAlertButton()
        // Verifying alert displayed with text 'You clicked a button'
        onAlertsPage.verifyAlertWithTextDisplayed(onAlertsPage.alertTexts.alertText)
        // Accept alert
        onAlertsPage.acceptAlert()
    })

    it('Confirm box should display on button click and cancel button must show correct message', () => {
        // Clicking confirm box button
        onAlertsPage.clickConfirmBoxButton()
        // Verify alert displayed with text 'Press a button!'
        onAlertsPage.verifyAlertWithTextDisplayed(onAlertsPage.alertTexts.confirmBoxText)

        // Click cancel on alert
        onAlertsPage.cancelAlert()
        //Verify a message with text 'You pressed Cancel!' displayed
        onAlertsPage.assertConfirmMessageBoxWithText(onAlertsPage.alertTexts.youPressedCancel)
    })

    it('Confirm box should display on button click and ok button must show correct message', () => {
        // Clicking confirm box button
        onAlertsPage.clickConfirmBoxButton()
        // Verify alert displayed with text 'Press a button!'
        onAlertsPage.verifyAlertWithTextDisplayed(onAlertsPage.alertTexts.confirmBoxText)

        // Click ok on alert
        onAlertsPage.acceptAlert()
        //Verify a message with text 'You pressed OK!' displayed
        onAlertsPage.assertConfirmMessageBoxWithText(onAlertsPage.alertTexts.youPressedOk)
    })
})