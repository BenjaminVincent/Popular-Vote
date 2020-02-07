### Descision Maker

strawPoll is a good reference

## Borda Method

- ranked voting system.
- first vote is worth the most, last vote is worth the least.

## user stories

- as an admin i want to create a poll.
- (STRETCH) as an admin I want to be able to set a time limit for the poll (default 1 day)
- as an admin i want to be able to add multiple choices per poll
- as an admin i want to be able to share poll with other users (MAILGUN)
- as an admin i want to be able to view the results

- as a participant i want view a created poll (mailgun)
- as a participant i want to vote
- (STRETCH) as a participant i want to view the ongoing results
- as a participant i want an email notification when poll closes that includes the results as well as a link back to the page so i can see how each choice got voted.

## user scenarios

- GIVEN that I have not voted, WHEN i follow the acceptance link, THEN i can only see the poll options.
- GIVEN that I have voted, WHEN i follow the acceptance link, THEN I can only see the results.
- GIVEN that i have voted, WHEN i change my mind, THEN I can't change my vote.
- GIVEN that i have partially voted, WHEN I exit the page, THEN my votes will get discarded.
- GIVEN that I want to create a poll, WHEN I view the homepage, THEN I am presented with a form to enter a question, along with poll options.
- GIVEN that I have created a poll and it's been sent, WHEN more result ideas arise, THEN I am unable to add them.
- GIVEN that I want to add more optons, WHEN all the poll slots are full, THEN i am presented with a button to add more poll options.
- GIVEN that a poll has completed, WHEN I view the results, THEN i will see them in BORDA COUNT format.
- GIVEN that I have filled out poll information, WHEN I look below there will be a form to enter friends emails, THEN when I submit the poll the access link is sent to those emails.
- (STRECH) GIVEN the poll has been created, WHEN I think of more people to invite, THEN I can share the poll with a provided url link. (EXTERNAL)
