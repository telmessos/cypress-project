import {onLoginPage} from "../support/page_objects/login.page";

describe('Login tests', () => {
    beforeEach('go to url before each test', () => {
        // Navigate to the login url
        cy.visit('/')
    })
    it('Should not login with the empty username and password', () => {
        // Trying to log in with empty strings
        onLoginPage.loginWithCredentials('','')
        // Expect username required error message exist
        onLoginPage.assertErrorBoxWithText(onLoginPage.errorMessages.usernameRequired)

        // Trying to log in with standard user but empty password
        onLoginPage.loginWithCredentials(onLoginPage.usernames.standard, '')
        // Expect password required error message exist
        onLoginPage.assertErrorBoxWithText(onLoginPage.errorMessages.passwordRequired)

    })

    it('Should not login with the locked out user', () => {
        // Trying to log in the locked out user
        onLoginPage.loginWithCredentials(onLoginPage.usernames.lockedOut, onLoginPage.password.correct)
        // Expect "this user has been locked out" message to be displayed
        onLoginPage.assertErrorBoxWithText(onLoginPage.errorMessages.lockedOutUser)
    })

    it('Should not login with invalid username and password', () => {
        // Trying to log in with dummy user
        onLoginPage.loginWithCredentials(onLoginPage.usernames.dummyUser, onLoginPage.password.correct)
        // Expect "username and password does not match" message to be displayed
        onLoginPage.assertErrorBoxWithText(onLoginPage.errorMessages.invalidUserPass)

        // Trying to log in with existing user and wrong password
        onLoginPage.loginWithCredentials(onLoginPage.usernames.standard, onLoginPage.password.wrong)
        // Expect "username and password does not match" message to be displayed
        onLoginPage.assertErrorBoxWithText(onLoginPage.errorMessages.invalidUserPass)
    })

    it('Should login with valid credentials', () => {
        // Trying to log in with valid credentials (successful login)
        onLoginPage.loginWithCredentials(onLoginPage.usernames.standard, onLoginPage.password.correct)
        // Logo area header text should be 'Swag Labs'
        cy.get('[class="app_logo"]').should('contain.text', onLoginPage.headerText)
    })
})