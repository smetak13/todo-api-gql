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
  getTasks {  
    id  
    title  
    description  
    created  
    completed  
  }  
}

### Create task

mutation {  
  createTask(input: { title: "task title", description: "task desc" }) {  
    id  
    title  
    description  
    created  
    completed  
  }  
}

### Edit task

mutation {  
  editTask(input: { id: 1, completed: true }) {  
    id  
    title  
    description  
    completed  
    created  
  }  
}

### Delete task

mutation {  
  deleteTask(input: { id: 1 }) {  
    id  
    title  
  }  
}