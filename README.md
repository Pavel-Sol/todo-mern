# Todo-list

## О проекте

Todo-list построенный с использованием MERN-stack
Для проверки можно использовать: логин test777@mail.ru, пароль test777

### Функционал

- Регистрация / авторизация (использование jsonwebtoken)
- Сохраниение todo в базе данных MONGO-DB,
- Возможность изменять todo (отментка о выполненности)
- Удаление todo

### Файловая структура

```
client => src
   ├── App.js
   ├── index.js  
   ├── index.css 
   ├── components
   │       ├── Loader
   │       |   ├── Loader.jsx
   │       |   └── style.js
   |       |
   │       ├── Main
   │       |   ├── Main.jsx
   │       |   └── style.js
   |       |
   │       ├── Navbar
   │       |   ├── Navbar.jsx
   │       |   └── style.js
   |       |
   │       ├── Router
   │       |   └── Router.jsx
   │       |
   │       ├── SignIn
   │       |   ├── SignIn.jsx
   │       |   └── style.js
   |       |
   │       ├── SignUp
   │       |   ├── SignUp.jsx
   │       |   └── style.js
   |       |
   │       └── Todo
   │       ├── Todo.jsx
   │       └── style.js
   |
   └─── store
          ├── actions
          |      ├── authActioons.js
          |      └── todoActioons.js
          |
          ├── reducers
          |      ├── authReducer.js
          |      ├── rootReducer.js
          |      └── todoReducer.js
          |
          ├── actionTypes.js
          └── index.js
```

```
server
   |
   ├── index.js
   ├── .env
   |
   ├── controllers
   |      ├── auth.controllers.js
   |      └── todo.controllers.js
   |
   ├── middleware
   |      └── authMiddleware.js
   |
   |
   ├── models
   |      ├── Todo.js
   |      └── User.js
   |
   └── routes
          ├── auth.routes.js
          └── todo.routes.js
```

### Технологии

- react.js
- redux
- redux-thunk
- react-redux
- react-router-dom
- material-ui
- node js
- mongoose
- mongo db
- bcryptjs
- jsonwebtoken
- express-validator

### Деплой

[ССЫЛКА](https://mern-todo44.herokuapp.com)
