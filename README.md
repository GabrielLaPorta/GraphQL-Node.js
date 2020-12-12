# Simple Project GraphQL!

This is my first project with **GraphQL**, it is a backend of CRUD users.

# Technologies
 - Node.js;
 - GraphQL;
 - GraphQL Yoga;
 - Sequelize;
 - Postgres SQL Database;

## Run the command on /GraphQL-Node.js
>npm install

## Config connection string on /GraphQL-Node.js/src/Models/User.js file

    const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

## Run the command on /GraphQL-Node.js/src

>npm server.js

## Go to localhost:4000 to test
	# Find all users	
	query {
		users{
			id
			name
			email
		}
	}
	
	# Find user by id
	query {
		user( id: 1 ){
		    id
		    name
		    email
		}
	}
	
	# Create user
	mutation {
		createUser(name:"John Doe", email: "john@doe.com"){
			id
		}
	}
	
	# Update user
	mutation{
		updateUser(id:1, name:"Jane Doe", email:"jane@doe.com"){
			id
		}
	}
	
	# Delete user by id
	mutation{
		deleteUser( id: 1 ) {
			id
		}
	}