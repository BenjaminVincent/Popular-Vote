### Descision Maker

strawPoll is a good reference

## Borda Method

- ranked voting system.
- first vote is worth the most, last vote is worth the least.

## user stories

- as an admin i want to create a poll.
- (STRETCH) as an admin I want to be able to set a time limit for the poll (default 1 day)
- as an admin i want to be able to add multiple choices per poll (each with a title and opt desc)
- as an admin i want to be able to share poll url with other users 
- as an admin i want to be able to view the results via url
- as an admin i want to receive an admin link (MAILGUN) and a user link (MAILGUN) 
- as a participant i want view a created poll (MAILGUN)


- as a participant i want to vote
- (STRETCH) as a participant i want to view the ongoing results
- (STRETCH) as a participant i want an email notification when poll closes that includes the results as well as a link back to the page so i can see how each choice got voted.

## user scenarios

- GIVEN the poll has been created, WHEN I want to share the poll, THEN I can do so with the user link
- GIVEN that I have not voted, WHEN i follow the access link, THEN i can only see the poll options.
- (STRETCH) GIVEN that I have voted, WHEN i follow the access link, THEN I can only see the results.
- GIVEN that i have voted, WHEN i change my mind, THEN I can't change my vote.
- GIVEN that i have partially voted, WHEN I exit the page, THEN my votes will get discarded.
- GIVEN that i want to create a poll, WHEN I enter my email (homepage), THEN i am presented with a poll creation form
- GIVEN that I have created a poll and it's been sent, WHEN more result ideas arise, THEN I am unable to add them.
- GIVEN that I want to add more optons, WHEN all the poll slots are full, THEN i am presented with a button to add more poll options.
- GIVEN that I want to view the results, WHEN I visit the admin link, THEN i will see them in BORDA COUNT format.
- (STRETCH) GIVEN that I have filled out poll form, WHEN I look below there will be a form to enter friends emails, THEN when I submit the poll the access link is sent to those emails.

