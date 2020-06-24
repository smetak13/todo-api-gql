# TODO Api

Todo api made with Nest JS / GraphQL / TypeORM

## Installation

### Prerequisities

Ensure you have a running PostgreSQL (v 9+) server available.

### Steps

1. `git clone https://github.com/smetak13/todo-api-gql`  
2. `cd todo-api-gql`  
3. `cp .env.example.env .env`  
4.  edit .env (PostgreSQL connection parameters)  
5. `npm install`  
6. `npm run start:dev`  


## Examples of usage

The application is running by default on http://localhost:3000  
The graphql endpoint is served on http://localhost:3000/graphql

### Get tasks

query {  
  &nbsp;&nbsp;&nbsp;&nbsp;getTasks {  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;created  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;completed  
  &nbsp;&nbsp;&nbsp;&nbsp;}  
}

### Create task

mutation {  
  &nbsp;&nbsp;&nbsp;&nbsp;createTask(input: { title: "task title", description: "task desc" }) {  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;created  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;completed  
  &nbsp;&nbsp;&nbsp;&nbsp;}  
}

### Edit task

mutation {  
  &nbsp;&nbsp;&nbsp;&nbsp;editTask(input: { id: 1, completed: true }) {  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;completed  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;created  
  &nbsp;&nbsp;&nbsp;&nbsp;}  
}

### Delete task

mutation {  
  &nbsp;&nbsp;&nbsp;&nbsp;deleteTask(input: { id: 1 }) {  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title  
  &nbsp;&nbsp;&nbsp;&nbsp;}  
}