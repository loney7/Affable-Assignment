# Affable-Assignment

Problem Statement: 
https://www.notion.so/Software-Engineering-Task-9e4f04880e194851a244f4144cc92476


![alt text](https://github.com/loney7/Affable-Assignment/blob/master/pic%201.png)

![alt text](https://github.com/loney7/Affable-Assignment/blob/master/pic%202.png)

![alt text](https://github.com/loney7/Affable-Assignment/blob/master/pic%203.png)


# Local Machine Setup:

We need to install Node.js and Angular CLI on the system.Clone or Download this repo.




### For installing Node.js
Vist the project’s website at https://nodejs.org/.

Download the installer for your operating system.

### Once node is setup, we setup angular CLI

```npm install -g @angular/cli```



I have added all the dependencies within the package.json file. 
### Navigate to the frontend folder.

Run the command:



```sudo npm install```


<br>
<br>
<br>

### Navigate to the backend folder



Run the command:

```sudo npm install```



This will update any packages or install them again if needed.


### So to quickly run the project.


Navigate to the project folder

### Setting up the database

``` sudo npm install mongoose```

Now type the command 

```mongod```

This would setup the mongod database

You should get something similar to this in your terminal.
```
2018-10-19T17:58:52.736+0530 I NETWORK  [initandlisten] waiting for connections on port 27017
```


## Backend
Open a new terminal window.
Navigate to the backend directory
and type the command.

```npm run dev```

## Frontend

Open a new terminal window

Navigate to the frontend directory and type the commmad

```ng serve --open```

When you run this command the browser window should open up with the project hosted at

http://localhost:4200



# For some reason if the setup does not work, let us setup everything from the scratch


## Setting up the backend

Navigate to the root directory of the project using the terminal.

Type the command
```cd backend```

Make sure you are inside the backend directory now.


## How to setup babel
```npm install --save-dev babel-cli babel-preset-env```

Now we need to add a .babelrc file to the project and add the content:
```
{
  "presets": ["env"]
}

```
We use babel-watch to ensure that the Node.js web server process is restarted whenever the code changes. Now, we would add a dependency for babel-watch

```$ npm install babel-watch --save-dev```

Now we would add in scripts section in package.json:
```
"scripts": {
    "dev": "babel-watch server.js"
  }
```

This makes sure that we are ready to use the babel compiler for our project.

### Installing Express
Because we’d like to use the Express framework for implementing the server we’re installing the corresponding package first:

```$ npm install express```

### Furthermore we need to make sure that the mongoose library is available, so that we’re able to use that library to access the MongoDB database:

```$ npm install mongoose```

### Installing the cors package too

```$ npm install cors```


This should setup your backend from the scratch.

Hopefully you should be able to run your project after this.


# Major Scenarios/Tests

* 1. If user already exists : clicking create a new user should display an error message 'user exists'
* 2. If user does not exist : create a user should work.
* 3. If user does not exist : clicking go should display a an error message 'User does not exist'.
* 4. Once we are scoped in to a user the following should work as expected:
  - add a todo
  - edit a todo
  - delete a todo





