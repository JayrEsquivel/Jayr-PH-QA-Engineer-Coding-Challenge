Feature('login');

Scenario('No value added to field', ({ I }) => {

    I.amOnPage('/');
    I.seeElement('//*[@id="root"]/nav/div[1]/div[1]/a');
    I.click('//*[@id="root"]/nav/div[1]/div[1]/a');
    I.click('//*[@id="root"]/div/div/div[4]/div/form/button') ;
    I.see('Email is required');
    I.see('Password is required');

});

Scenario('Account does Not Exist ', ({ I }) => {

    I.amOnPage('/');
    I.seeElement('//*[@id="root"]/nav/div[1]/div[1]/a');
    I.click('//*[@id="root"]/nav/div[1]/div[1]/a');
    I.fillField('//*[@id="email"]', 'test@tes.com');
    I.fillField('password', '123@7998');
    I.click('//*[@id="root"]/div/div/div[4]/div/form/button' ) ;
    I.seeElement('//*[@id="root"]/div/div/div[4]/div/form/p');

});


Scenario('Email is required ', ({ I }) => {

    I.amOnPage('/');
    I.seeElement('//*[@id="root"]/nav/div[1]/div[1]/a');
    I.click('//*[@id="root"]/nav/div[1]/div[1]/a');
    I.fillField('//*[@id="email"]', ' ');
    I.fillField('password', '123456');
    I.click('//*[@id="root"]/div/div/div[4]/div/form/button') ;
    I.see ('Email is required');

});


Scenario('Password is required ', ({ I }) => {

    I.amOnPage('/');
    I.seeElement('//*[@id="root"]/nav/div[1]/div[1]/a');
    I.click('//*[@id="root"]/nav/div[1]/div[1]/a');
    I.fillField('//*[@id="email"]', 'esquiveleduardo27@gmail.com');
    I.fillField('password', '');
    I.click('//*[@id="root"]/div/div/div[4]/div/form/button') ;
    I.see ('Password is required');

});



// Please insert valid email and password
Scenario('Successfull Login ', ({ I }) => {

    I.amOnPage('/');
    I.seeElement('//*[@id="root"]/nav/div[1]/div[1]/a');
    I.click('//*[@id="root"]/nav/div[1]/div[1]/a');
    I.fillField('//*[@id="email"]', '@VALID EMAIL');
    I.fillField('password', '@VALIDPASSWORD@');
    I.click('//*[@id="root"]/div/div/div[4]/div/form/button' ) ;

});








 
