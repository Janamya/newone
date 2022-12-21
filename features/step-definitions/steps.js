const { Given, When, Then} = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/LoginPage');
const HomePage = require('../pageobjects/HomePage');
const CreateBoardPage = require('../pageobjects/CreateBoardPage');
const BoardPage = require('../pageobjects/BoardPage')
const CreateCardBoardPage = require('../pageobjects/CreateCardBoardPage');
const { createCard } = require('../pageobjects/CreateCardBoardPage');
const ArchiveCardsBoardPage = require('../pageobjects/ArchiveCardsBoardPage');
const LogoutPage = require('../pageobjects/LogoutPage');

Given(/^I am on the login page$/, async () => {
    await LoginPage.visit()
});
When(/^I login with email and "([^"]*)"$/, async (password) => {
    await LoginPage.login(password)
});

When(/^I login with invalid email and password$/, async () => {
    await LoginPage.invalidLogin()
});

Then(/^I should see error message$/, async () => {
    await LoginPage.errorMessage()
});
Then(/^I should see Trello homepage$/, async () => {
    await LoginPage.assertLogin()
});

Given(/^I am on the homepage$/, async () => {
    await HomePage.visit()
});
When(/^I fill the workspace form$/, async () => {
    await HomePage.assertWorkspaceForm()
});
Then(/^I should see workspace board$/, async () => {
    await HomePage.assertShowLater()
});

Given(/^I am on the create board page$/, async () => {
    await CreateBoardPage.visit()
});
When(/^I fill out the board form$/, async () => {
    await CreateBoardPage.fillBoardForm()
});
Then(/^The board should be created$/, async () => {
    await CreateBoardPage.assertBoardCreated()
});

Given(/^I am on the board page$/, async () => {
    await BoardPage.visit()
});
When(/^I submit list form$/, async () => {
    await BoardPage.createList()
});
Then(/^The list is created$/, async () => {
    await BoardPage.assertListCreated()
});

Given(/^I am on the create card board page$/, async () => {
    await CreateCardBoardPage.visit()
});
When(/^I submit card form$/, async () => {
    await CreateCardBoardPage.createCard()
});
Then(/^The card is created$/, async () => {
    await CreateCardBoardPage.assertCardCreated()
});

Given(/^I am on the archive cards board page$/, async () => {
    await ArchiveCardsBoardPage.visit()
});
When(/^I click on archive all cards$/, async () => {
    await ArchiveCardsBoardPage.archiveCards()
});
Then(/^All the cards in the list are archived$/, async () => {
    await ArchiveCardsBoardPage.assertCardsArchived()
});


Given(/^I am on logged in to Trello$/, async () => {
    await LogoutPage.visit()
});
When(/^I click on logout button$/, async () => {
    await LogoutPage.logout()
});
Then(/^I should see login page$/, async () => {
    await LogoutPage.assertLogout()
});
