///   <reference types="cypress" />

import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
interface DataTable {
    hashes(): Array<{ [key: string]: string }>;
  }

When('I Visit the Home page',()=>{
    cy.visit('https://hegdes007.github.io/conFusion/index.html#');
});
And('I click on Contact link',()=>{
    cy.contains(' Contact').click();
});
Then('I am in Contact page',()=>{
    cy.contains('Contact Us').should('exist');
});
When('I was in Contact page',()=>{
    cy.contains('Contact Us').should('exist');
});
And("I am able to see 'Send us your Feedback' text",()=>{
    cy.contains('Send us your Feedback').should('exist');
})
Then('I fill the details',(dataTable: DataTable)=>{
    const details = dataTable.hashes()[0];
    cy.get('#firstname').type(details['First Name']);
    cy.get('#lastname').type(details['Last Name']);
    cy.get('#areacode').type(details['Area code']);
    cy.get('#telnum').type(details['Tel.Number']);
    cy.get('#emailid').type(details['Email']);
    cy.get('#feedback').type(details['Your Feedback']);
})
And('I click on Send Feedback',()=>{
    cy.contains('Send Feedback').click();
});

When('I visit the Home page',()=>{
    cy.visit('https://hegdes007.github.io/conFusion/index.html#');
});

And('I click on pause button',()=>{
    cy.get('#carouselButton').click();
});
Then('Carousel stops moving',()=>{
    cy.get('.row').eq(5).within(()=>{
        cy.get('.carousel-item.active h2').invoke('text').as('initialText').then((initialText)=>{
        cy.log('Initial text is :',initialText);
    });
        cy.wait(7000);
        cy.get('.carousel-item.active h2').invoke('text').as('pausedText').then((pausedText)=>{
            cy.log('Initial text is :',pausedText);
            cy.get('@initialText').should('eq',pausedText);
        });
    })
});
And('I click on play button',()=>{
    cy.get('#carouselButton').click();
});

Then('Carousel starts moving',()=>{
    cy.get('.row').eq(5).within(()=>{
        cy.get('.carousel-item.active h2').invoke('text').as('initialText').then((initialText)=>{
        cy.log('Initial text is :',initialText);
    });
        cy.wait(7000);
        cy.get('.carousel-item.active h2').invoke('text').as('pausedText').then((pausedText)=>{
            cy.log('Initial text is :',pausedText);
            cy.get('@initialText').should('not.eq',pausedText);
        });
    })
});
