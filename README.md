Popular Vote
=========

## Project Description

Popular Vote is a full stack web app built with NodeJS and run on an Express server. PostgreSQL is used to update and query the database of emails, questions and votes.  

!["Enter your email."](https://github.com/BenjaminVincent/midterm/blob/master/docs/mt_email.png?raw=true)
!["Ask a question and suggest options to vote on with optional description."](https://github.com/BenjaminVincent/midterm/blob/master/docs/mt_poll.png?raw=true)
!["Drag and drop your votes. Make sure the one you liek the best is at the top and the one you like the least is at the bottom. Then hit submit!"](https://github.com/BenjaminVincent/midterm/blob/master/docs/mt_voted.png?raw=true)
!["Only the admin can view the results."](https://github.com/BenjaminVincent/midterm/blob/master/docs/mt_results.png?raw=true)

Images depict the home page (top), where you can submit an email to become an admin. Once you are an admin you can start making a poll. Share the link with your friends so they can access the poll and cast their votes. Finally, the results (last) will be tabulated via the Borda Method and displayed on the results page which only the admin has access to. An email is sent to the admin via Mailgun's API once the poll is created. The email contains a link to the results page as well as public link so friends can access the voting page. The admin will also get notified everytime someone votes so they can monitor the results.  


## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`

## Dependencies

- Node ^10.x
- NPM ^5.x
- PG 6.x
- Body-parser ^1.19 
- EJS ^2.6.2
- Express ^4.17.1
- mailgun-js ^0.22.0
- node-sass-middleware ^0.11.0
- pg ^6.4.2
- pg-native ^3.0.0
