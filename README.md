# start the project

```bash
npm run dev
```

### packages to install for testing purposes
```bash
// installing testing suites and packages
  npm install @testing-library/jest-dom
  npm install @testing-library/react
  npm install eslint-plugin-jest-dom
  npm install eslint-plugin-testing-library
  npm install jest
  npm install jest-environment-jsdom
  npm install ts-jest
  npm install ts-node
```

## Email
mailtrap
nodemailer
React-email
resend

things to do
1. move the backend code into my api (in progress)
2. send activation email after a user registers
3. do reset password and forgot password (done)
4. 

the flow for the login
1. install next-auth 
2. confiure my next-auth app to make use of credentials
3. connect to mongodb
4. create a helper function called 

next-auth
1. can register with credentials (done)
2. the user is logged in and session is created after the user is successfully signedin (done)
3. the user can login with correct credentials (done)
4. the user is redirected to the homepage after successfully login (done)
4. user session is created (done)
5. the user can register with oauth provider like google (done)
6. clear the cookie after a user signs out
7. 

### emails
1. send email when a user registers to activate thier account this method should only be for credentials
2. send email for reset-password (done)
3. handle errors in case the password does not change ()
4. handle success with modal after the password has been changed (in progress)
[get-query-params-next-js](https://www.slingacademy.com/article/next-js-api-routes-how-to-get-parameters-query-string/)

### moving the express app into next.js
- starting with the order
  - move the model (done)
  - move the controller
  - 
- create the error controller
- create the catch-async hook
- create the global error controller
- create the seeder file
- create the middleware file
- create the logger file for the backend api