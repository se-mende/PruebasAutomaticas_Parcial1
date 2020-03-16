var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {expect} = require('chai');

var baseUrl = 'https://todoist.com';
var user = 'se-mende@uniandes.edu.co';
var pw = 'Pruebas123';
const screenshotsDir = './screenshots/';

Given('I go to Todoist', () => {
    browser.url(baseUrl + '/Users/showLogin');
    browser.saveScreenshot(screenshotsDir + 'login.png');
});

Given('I go to Todoist and authenticate', () => {
    browser.url(baseUrl + '/Users/showLogin');
    
    var mailInput = $('.input_email');
    browser.waitUntil(() => mailInput.isClickable());
    mailInput.click();
    mailInput.setValue(user);

    var passwordInput = $('.form_field_control');
    browser.waitUntil(() => passwordInput.isClickable());
    passwordInput.click();
    passwordInput.setValue(pw);

    $('.submit_btn').click();
});


////////////// LOGIN //////////////
When(/^I fill with (.*) and (.*)$/ , (email, password) => {
    var mailInput = $('.input_email');
    browser.waitUntil(() => mailInput.isClickable());
    mailInput.click();
    mailInput.setValue(email);

    var passwordInput = $('.form_field_control');
    browser.waitUntil(() => passwordInput.isClickable());
    passwordInput.click();
    passwordInput.setValue(password);
});

When('I fill credentials correctly', () => {
    var mailInput = $('.input_email');
    browser.waitUntil(() => mailInput.isClickable());
    mailInput.click();
    mailInput.setValue(user);

    var passwordInput = $('.form_field_control');
    browser.waitUntil(() => passwordInput.isClickable());
    passwordInput.click();
    passwordInput.setValue(pw);
});

When('I try to login', () => {
    $('.submit_btn').click();
});

Then('I expect to see {string}', error => {
    $('.error_msg > span').waitForDisplayed(2000);
    var alertText = browser.$('.error_msg > span').getText();
    expect(alertText).to.include(error);
});

Then('I expect to enter the site', () => {
    $('h1').waitForDisplayed(5000);
    var title = browser.$('h1').getText();
    expect(title).to.include('Today');
});

////////////// TASKS //////////////
When('I go to Today', () => {
    var todayLink = $('#filter_today > .item_content');
    browser.waitUntil(() => todayLink.isClickable());
    browser.saveScreenshot(screenshotsDir + 'task.png');
    todayLink.click();
});

When('I click on the plus button', () => {
    var plusButton = $('#quick_add_task_holder');
    browser.waitUntil(() => plusButton.isClickable());
    plusButton.click();
});

When('I type a new task', () => {
    $('.notranslate.public-DraftEditor-content').waitForDisplayed(5000);
    var addTextBox = $('.notranslate.public-DraftEditor-content');
    browser.waitUntil(() => addTextBox.isClickable());
    addTextBox.click();
    addTextBox.setValue('New Task');
});

When('I click on create new task', () => {
    $('.item_editor_submit').waitForDisplayed(5000);
    var addButton = $('.item_editor_submit');
    browser.waitUntil(() => addButton.isClickable());
    addButton.click();
});

When('I navigate to Inbox', () => {
    var inboxLink = $('#filter_inbox');
    browser.waitUntil(() => inboxLink.isClickable());
    inboxLink.click();
});

Then('I expect to see Today section', () => {
    $('.section_header > a').waitForDisplayed(5000);
    var title = browser.$('.section_header > a').getText();
    expect(title).to.include('Today');
});

Then('I expect to see the new task', () => {
    $('.project_link > span').waitForDisplayed(5000);
    var title = browser.$('.project_link > span').getText();
    expect(title).to.include('Inbox');

    var item = $('.task_item_content_text');
    browser.waitUntil(() => { return item.getText() === 'New Task' }, 5000, '');
    var itemText = item.getText();
    expect(itemText).to.include('New Task');
});

////////////// CONFIG //////////////
When('I click on config', () => {
    var configLink = $('#gear_holder');
    browser.waitUntil(() => configLink.isClickable());
    browser.saveScreenshot(screenshotsDir + 'config.png');
    configLink.click();
});

When('I click on settings', () => {
    var settingsLink = $('.usermenu__row:nth-child(2) > .usermenu__row-label');
    browser.waitUntil(() => settingsLink.isClickable());
    settingsLink.click();
});

When('I click on themes', () => {
    var themesLink = $('.usermenu__row:nth-child(3) > .usermenu__row-label');
    browser.waitUntil(() => themesLink.isClickable());
    themesLink.click();
});

Then('I expect to see the settings page', () => {
    $('.left_section > h1').waitForDisplayed(5000);
    var title = browser.$('.left_section > h1').getText();
    expect(title).to.include('Settings');
});

Then('I expect to see the themes page', () => {
    $('.section_title').waitForDisplayed(5000);
    var title = browser.$('.section_title').getText();
    expect(title).to.include('Theme');
});