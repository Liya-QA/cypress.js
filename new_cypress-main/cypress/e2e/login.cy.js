describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); //нажала войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю авториз.текст
         cy.get('#messageHeader').should('be.visible'); //авториз.текст виден
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден
     })

     it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio7'); // ввели неверный пароль
        cy.get('#loginButton').click(); //нажала войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю текст
        cy.get('#messageHeader').should('be.visible'); // текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден
    })

    it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('germ@dolnikov.ru'); // ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажала войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю текст
        cy.get('#messageHeader').should('be.visible'); // текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден
    })

    it('Проверка на валидацию собачки', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); // ввели логин без собачки
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажала войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю текст
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден
    })

    it('Проверка на восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').click(); // нажимаю восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); //ввести почту для восстановления пароля
        cy.get('#restoreEmailButton').click(); //нажать на кнопку отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю текст
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден
    })

    it('Строчные буквы в логине', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели логин с тремя строчными буквами
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); //нажала войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю текст
        cy.get('#messageHeader').should('be.visible'); // текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден
    })
 
 })
 
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
 