# rest-api

##  Get all the todos info
```
    URL : /api/todos
    Method : GET
    Headers: token=[string]
    Authenticate = YES
    Body : None
    Params : None
    Success Response :
        Code 200
        [
            {
                "id": 7,
                "title": "pergi ke rumah nenek",
                "description": "asik sekali",
                "createdAt": "2019-04-29T10:12:22.002Z",
                "updatedAt": "2019-04-29T10:12:22.002Z",
                "userId": 8
            },
            { <object>}
        ]
    Error Response :
        Code: 500 
        Content: { message : <error message> }
```
##  Get a single todo info 
```
    URL : /api/todos/:id
    Method : GET
    Headers: token=[string]
    Authenticate = YES
    Authorization = YES
    Body : None
    Params : id=[string]
    Success Response :
        Code 200
            {
                "id": 7,
                "title": "pergi ke rumah nenek",
                "description": "asik sekali",
                "createdAt": "2019-04-29T10:12:22.002Z",
                "updatedAt": "2019-04-29T10:12:22.002Z",
                "userId": 8
            }
    Error Response :
        Code: 500 
        Content: { message : <error message> }
```
##  create a todo
```
    URL : /api/todos
    Method : POST
    Headers: token=[string]
    Authenticate = YES
    Body : title=[string], description=[string]
    Params : None
    Success Response :
        Code 201
            {
                "id": 7,
                "title": "pergi ke rumah nenek",
                "description": "asik sekali",
                "createdAt": "2019-04-29T10:12:22.002Z",
                "updatedAt": "2019-04-29T10:12:22.002Z",
                "userId": 8
            }
    Error Response :
        Code: 500 
        Content: { message : <error message> }
```
##  Delete a todo 
```
    URL : /api/todos/:id
    Method : POST
    Headers: token=[string]
    Authenticate = YES
    Authorization = YES
    Body : None
    Params : id=[string]
    Success Response :
        Code 204
        
    Error Response :
        Code: 500 
        Content: { message : <error message> }
```
##  Update a todo with new info
```
    URL : /api/todos/:id
    Method : PATCH
    Headers: token=[string]
    Authenticate = YES
    Authorization = YES
    Body : title=[string], description=[string]
    Params : id=[string]
    Success Response :
        Code 200
        {
            "id": 7,
            "title": "pergi ke rumah nenek",
            "description": "asik sekali berkali kali",
            "createdAt": "2019-04-29T10:12:22.002Z",
            "updatedAt": "2019-04-29T10:22:50.494Z",
            "userId": 8
        }
    Error Response :
        Code: 500 
        Content: { message : <error message> }
```
##  Update a todo with new info
```
    URL : /api/todos/:id
    Method : PATCH
    Headers: token=[string]
    Authenticate = YES
    Authorization = YES
    Body : title=[string], description=[string]
    Params : id=[string]
    Success Response :
        Code 200
        {
            "id": 7,
            "title": "pergi ke rumah nenek",
            "description": "asik sekali berkali kali",
            "createdAt": "2019-04-29T10:12:22.002Z",
            "updatedAt": "2019-04-29T10:22:50.494Z",
            "userId": 8
        }
    Error Response :
        Code: 500 
        Content: { message : <error message> }
```
##  Update a todo with new info
```
    URL : /api/todos/:id
    Method : PUT
    Headers: token=[string]
    Authenticate = YES
    Authorization = YES
    Body : title=[string], description=[string]
    Params : id=[string]
    Success Response :
        Code 200
        [
            1
        ]
    Error Response :
        Code: 500 
        Content: { message : <error message> }
```
##  Sign up with new user info 
```
    URL : /api/signup
    Method : POST
    Headers: None
    Body : email=[string], password=[string]
    Params : None
    Success Response :
        Code 200
        {
            "id": 9,
            "email": "mail@mail.com",
            "password": "$2a$08$qO31XTlaCpR8IuYiV/x4fuWmUJjwLZiEOF.t9To0Xpm8J8oG3zqG6",
            "updatedAt": "2019-04-29T10:35:21.227Z",
            "createdAt": "2019-04-29T10:35:21.227Z"
        }
    Error Response :
        Code: 500 
        Content: { message : <error message> }
```
##  Sign in and get an access token based on credentials 
```
    URL : /api/signin
    Method : POST
    Headers: None
    Body : email=[string], password=[string]
    Params : None
    Success Response :
        Code 200
        {
            "token": <token>
        }
    Error Response :
        Code: 500 
        Content: { message : <error message> }
```

## Use Application
```
npm init
npm install
nodemon -L app.js
```

# URL HEROKU 
```
https://murmuring-beyond-57276.herokuapp.com/
```