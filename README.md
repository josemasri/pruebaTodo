# Challenge-todos
### BE and FE application.

## Installation guide

### 1. Install dependencies
Run this command in order to install the dependencies of React and NestJs (NJ)
```sh
$ yarn install
```

### 2. Create the Database
We need to create a Database with the name of "todos";
### 3. Create an `.env` file in the server level, this to run server and connect to the DB

| Env variable　　　　　　　　　　　　　| Description 　　　　　　　　| Example |
| :--  | :--         | :--         |
| `DB_DATABASE` | DB name that we're going to connect. | DB_DATABASE=todos
| `DB_USER` | Our user that access to the DB. | DB_USER=root
| `DB_PASSWORD` | Password to authenticate and connect to our DB. | DB_PASSWORD=*****
| `DB_HOST` | Host where our DB lives. | DB_HOST=127.0.0.1
| `DB_PORT` | Port in the host for our DB. | DB_PORT=3306
| `PORT` | Port where the server is going to run. This has to have the port 5000. | PORT=5000

### 4. Run the application

This next command will start server by default on port [5000](http://localhost:5000)
```sh
$ yarn start-server
```

This next command will start client (react) by default on port [3000](http://localhost:3000)
```sh
$ yarn start-client
```

This next command will start only the server by default on port [5000](http://localhost:5000)
```sh
$ npm dev-server
```

This next command will start only the client (react) by default on port [3000](http://localhost:3000)
```sh
$ yarn dev-client
```

