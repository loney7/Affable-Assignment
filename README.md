# Affable-Assignment

Problem Statement: 
https://www.notion.so/Software-Engineering-Task-9e4f04880e194851a244f4144cc92476


Local Machine Setup;

We need to install Node.js and Angular CLI on the system.
Clone or Download this repo.


### For installing Node.js
Vist the project’s website at https://nodejs.org/.

Download the installer for your operating system.

### Once node is setup, we setup angular CLI

```npm install -g @angular/cl```




### Setting up the backend

#### How to setup babel
```npm install --save-dev babel-cli babel-preset-env```

Now we need to add a .babelrc file to the project and add the content:
```
{
  "presets": ["env"]
}

```
We use babel-watch to ensure that the Node.js web server process is restarted whenever the code changes. Now, we would add a dependency for babel-watch

$ npm install babel-watch --save-dev

Now we would add in scripts section in package.json:
```
"scripts": {
    "dev": "babel-watch server.js"
  }
```

This makes sure that we are ready to use the babel compiler for our project.

Installing Express
Because we’d like to use the Express framework for implementing the server we’re installing the corresponding package first:

```$ npm install express```

Furthermore we need to make sure that the mongoose library is available, so that we’re able to use that library to access the MongoDB database:

```$ npm install mongoose```

Installing the cors package too

```$ npm install cors```







