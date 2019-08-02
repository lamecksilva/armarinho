<h1 align="center">Welcome to <i>armarinho</i> 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <img alt="Version" src="https://img.shields.io/badge/Micro Services-10-yellow.svg?cacheSeconds=2592000" />
  
</p>

> Project to learn dev stuff and play with strange technologies

## Install

```sh
yarn
```

## Usage

```sh
yarn start
```

Run in development mode

```sh
yarn dev
```

_OBS:_ I'm Using pm2 to start and run the services, e.g:

```sh
cd user-service

pm2 start --name "Armarinho-User-Service" src/index.ts --watch
```

## Microservices Authentication flow (Diagram):

![image](https://user-images.githubusercontent.com/31391753/62387716-c7b40700-b531-11e9-8984-ef26583eadb7.png)

```js
Login =>
{
  header: {
    authorization: "Bearer generatedInBroserAndMobileToApiGatewayValidatesLoginOrigins"
  },
  body: {
    username: "example@example.com",
    password: "123456"
  } 
}=> 
ApiGateway (Validate Login Token) =>
UserService (Validade Login Credentials) => 
AuthService (Generates Bearer Token) =>
Browser (Store and Apply Bearer Token) =>


```

### Ports:

> _3000_: Store (Client)  
> _3001_: Admin (Client)

> _9000_: API-gateway  
> _9001_: Auth-Service  
> _9002_: User-Service  
> _9003_: Product-Service  
> _9004_: Order-Service  
> _9005_: Files-Service  
> _9006_: Notification-Service  
> _9007_: Payment-Service

## Author

👤 **Lameck**

- Github: [@lamecksilva](https://github.com/lamecksilva)

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
