export class LoginPage {
    errorMessages = {
        lockedOutUser: 'Epic sadface: Sorry, this user has been locked out.',
        passwordRequired: 'Epic sadface: Password is required',
        usernameRequired: 'Epic sadface: Username is required',
        invalidUserPass:
            'Epic sadface: Username and password do not match any user in this service',
    };
    usernames = {
        standard: 'standard_user',
        lockedOut: 'locked_out_user',
        problem: 'problem_user',
        performanceGlitch: 'performance_glitch_user',
        dummyUser: 'dummy_user',
    };

    password = {
        correct: 'secret_sauce',
        wrong: 'dummy_pass',
    };

    headerText = 'Swag Labs'
    loginWithCredentials(username, password) {
        if(username !== '') {
            cy.get('#user-name').clear().type(username)
        }
        if(password !== '') {
            cy.get('#password').clear().type(password)
        }
        cy.get('#login-button').click()
    }

    assertErrorBoxWithText(errorText) {
        cy.get('[data-test="error"]').should('be.visible')
        cy.get('[data-test="error"]').should('contain.text', errorText)
    }
}

export const onLoginPage = new LoginPage()