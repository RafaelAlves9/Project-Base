// import { mock } from "./_mock";

// describe('login test', () => {
//   const login = () => {
//     cy.visit('/', {
//         onBeforeLoad: (page) => {
//           const id = "duh44z2CNYcOSjxwgCwwhSfbdKc2";
//           const role = "client";
          
//           page.localStorage.setItem("logged", JSON.stringify({id, role}));
//         }
//     });
//   };

//   it('button option login home', () => {
//     cy.visit('/login');
    
//     cy.contains('Cadastre-se ou faça o login para continuar').should('be.visible');
//     cy.get('#loginWithEmail').click();
//     cy.contains('Digite seu e-mail e senha').should('be.visible');
//     cy.get('#backLoginHome').click();
//     cy.contains('Cadastre-se ou faça o login para continuar').should('be.visible');

//   });

//   it('validation input error email and password', () => {
//     cy.visit('/login');
    
//     const loginWithEmail = cy.get('#loginWithEmail');

//     loginWithEmail.click();
//     cy.contains('Digite seu e-mail e senha');
//     cy.get('#email').type(mock.clientInputInvalid.email);
//     cy.get('#password').type(mock.clientInputInvalid.password);

//     cy.intercept('POST', '****').as('loginRequest');
//     cy.get('button#submit').click();

//     cy.contains('Digite um email válido');
//     cy.contains('Senha deve ter entre 6 a 60 caracteres');
//   });

//   it('error login with email', () => {
//     cy.visit('/login');
    
//     const loginWithEmail = cy.get('#loginWithEmail');

//     loginWithEmail.click();
//     cy.contains('Digite seu e-mail e senha');
//     cy.get('#email').type(mock.clientLoginError.email);
//     cy.get('#password').type(mock.clientLoginError.password);

//     cy.intercept('POST', '****').as('loginRequest');
//     cy.get('button#submit').click();

//     cy.wait('@loginRequest').then((interception) => {
//       expect(interception.response.statusCode).to.equal(400);
//     });

//     cy.contains('Email ou senha inválidos');
//   });
  
//   it('sucess login with email', () => {
//     cy.visit('/login');
    
//     const loginWithEmail = cy.get('#loginWithEmail');

//     loginWithEmail.click();
//     cy.contains('Digite seu e-mail e senha');
//     cy.get('#email').type(mock.clientLoginSucess.email);
//     cy.get('#password').type(mock.clientLoginSucess.password);

//     cy.intercept('POST', '****').as('loginRequest');
//     cy.get('button#submit').click();

//     cy.wait('@loginRequest').then((interception) => {
//       expect(interception.response.statusCode).to.eq(200);
//     });

//     cy.contains('Login feito com sucesso');
//     cy.url().should('include', '/');
//   });
  
//   it('open home client page', () => {
//     login();
//     cy.visit('/home');
//   });
// });