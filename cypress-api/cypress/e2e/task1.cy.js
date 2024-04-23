/// <reference types="cypress" />
describe('Requests', () => {

    it('GET request from "Photos" using then', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/photos').then((response) => {
            expect(response.status).to.eq(200);
            cy.wrap(response.body[8].title).should('eq', 'qui eius qui autem sed');
            console.log(response);
        })
    })

    it('GET request from "Posts" using its - part 1', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').its('body[1].title').should('eq', 'qui est esse');
    })

    it('GET request from "Posts" using its - part 2', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').its('body[9].title').should('eq', 'optio molestias id quia eum');
    })

    it('GET request from "Users" using its', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users').its('body[8].name').should('eq', 'Glenna Reichert');
    })

    it('POST request to "Posts"', () => {
        const newPost = {
            title: 'New post - Dante',
            body: 'this is a test body',
            userId: 32
        }
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', newPost).its('body.id').should('eq', 101);
    })
})