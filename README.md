# React-Fundamentals

#### Introduction to React

> Objectives

- By the end of this chapter, you should be able to:
- Discuss the history of React.js
- Highlight key features of the React library
- Describe how React's component-based design compares to traditional approaches to building web pages

## React Prerequisites

- javascript

### Introduction to React

React is JavaScript library that is used to build user interfaces. <br>
it's responsible for the V in the MVC pattern, and doesn't concern itself with models or views<br>
React is a declarative library <br>

### A Brief History of React.js

- React.js was built internally at Facebook in 2011.
- It was released as an open source project in 2013.
- It originally evolved out of a PHP extension built at Facebook called XHP.
- XHP helped secure PHP projects against XSS attacks
- encourage developers to think about their applications in terms of smaller units of functionality, called components (more on this later)>
- But while XHP was a server-side technology, React.js can be used in the browser.

### Core Features of React.js

- **A Declarative API** : <br>
  When you're building UIs in React, you don't need to know how React is making changes to the view (though we'll dig into it here). You just need to tell React what to do, and you don't need to worry about the implementation details.<br>

- **Virtual DOM** : <br>
  Rather than storing the state of the user interface inside of the DOM, React.js stores your application's state in pure JavaScript. When the UI needs to change in response to some user interaction, React updates the state in JavaScript before determining which DOM nodes it needs to change, and how. By minimizing the amount of DOM manipulation it needs to do, React.js can stay fast, even if the DOM has hundreds or thousands of elements.

- **Component-based design**. One of the key concepts in React is the idea of components. A component is a reusable element that can be displayed on the web page, or a higher level component that controls view components. When you use React, you are ultimately creating components that are modular enough to be reused many times and potentially in many places in your application. This is best understood by example, we'll take a closer look at this soon.

- **One-way data flow.**
  In React, application state that can change should be owned by one component, and it should share that data with other components as needed. Most importantly, there should be one single source of truth for every piece of application state. React's API forces you to think critically about where state should live in your application, and how it should be passed around two different parts of your application. This is in stark contrast to certain other frameworks, in particular, earlier versions of Angular.js, which touted two-way data binding as a core feature. (For more on this distinction, check out this article.)

- **JSX.** When building projects with react, we'll be using a syntax called JSX, which is basically an HTML-JavaScript hybrid. When writing with JSX, you'll effectively be able to write HTML directly inside of your JavaScript code!

### Thinking in React.js

rethinking how you build web pages with HTML, CSS, and JavaScript <br>

### Building an Application Using Components

#### library

- ReactDOM
- React
<hr>

# JSX and Babel

#### Objectives

- Understand what JSX is and how it is used with React
- Define what a transpiler is and include babel-core in an application
- Conditionally create JSX based on props

###### JSX Introduction

put HTML directly in our JavaScript files <br>
use of two technologies: JSX and Babel. <br>
JSX allows you to write HTML in your JavaScript <br>

```
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}
```

#### Creating Custom Components

render is a method that our component class expects to receive because it extends from React.Component.

<hr>

 #### An Introduction to Props
 > props :can think of these as "properties" for our components

  learn about :
  - add css 
  - add value in props
  - use ClassName in jsx  when  related with css file

 #### Conditional JSX
 ~~~
 class App extends React.Component {
  render() {
    var name = this.props.name;
    if (name === 'Tim') {
      name = 'favorite instructor';
    } else if (name === 'Matt' || name === 'Elie') {
      name = 'very solid instructor';
    }
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{name}</p>
        {name === 'student' ? (
          <h1>Good job on the course so far!</h1>
        ) : (
          <h1>Hello, {name}!</h1>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App name="Moxie" />, document.getElementById('app'));
~~~
> the out put in Conditional JSX  is  Moxie Moxie hello Moxie

 #### Using Babel In Production
 - websites are rather slow
 - The reason for the slow down is that we are transpiling our code on the client side 
 - the browser is downloading babel and doing the work of transpiling from JSX to plain JavaScript
 - We need a better tool for transpiling our code
 -  we need to make sure that transpiling doesn't happen on the client side
 - Webpack is going to help us transpile our JSX
 - Webpack is a very helpful tool, but it also has a very steep learning curve.
 -

 ## JSX Exercises:
  > link: https://github.com/rithmschool/react_exercises/tree/master/01-introduction-to-react/jsx-and-babel
 ###  Solutions  part 1 in folder name part1

<hr>

 # Webpack 
 ### Objectives
 - Explain what webpack and babel are useful for
 - Create an application using create-react-app
 - Configure applications using webpack

 #### Introduction To Webpack
  what is webpack? defined as a module bundler <br>
  Ultimately the goal of a build tool is to take all of your files (JavaScript, CSS, etc), then combine and minify those files into a single JavaScript file and a single CSS file<br>
  When files are combined and minified, the user of your application can download the website faster. <br>
using webpack to transpile the import syntax into something the browser can understand. <br>


#### Create React App
- **create-react-app**
Create React app is a command line tool that will generate a very well setup React application, which includes all of the configuration for webpack. <br>
- **create-react-app** uses Node.js to manage JavaScript dependencies
 - **npm install -g create-react-app**
  You will only need to run this one time on your machine <br>

- **create-react-app my-app**
- **cd my-app/**
- **npm start**

The most important files for our purposes are the:- <br>
- index.js,
. If you would like to change the component you render, you would look in index.js 
- public/index.html 
If you need to change anything about your html, you would do it in public/index.html<br>
- App.js
The App.js file is the component that is being rendered in index.js <br>

#### Essential Files For Webpack
npm's package.json
Since we will be using npm which is the package manager for node.js to fetch packages (react, webpack etc). We will want to create a package.json <br>
 A package.json is a file that describes the application we are building and lists all of the dependencies and development dependencies (which are not installed in production).

- npm init -y

 #### Installing dependencies :
  - npm install -g webpack
  - npm install --save-dev babel-core babel-loader \
                       babel-preset-es2015

  - The **--save-dev** flag will save the names and versions of these modules to the package.json file in a section called devDependencies  .

  - **devDependencies**  are dependencies that you need for development, but not production code
  - **npm install** install all dependencies


  #### Creating our first webpack.config.js 
  > webpack.config.js :
  what goes inside. <br>

  - context
  - entry
  - output
  - devtool
  - module

> webpack.config.js
  ~~~
  module.exports = {
  // The absolute path to your project
  context: __dirname + "/",
  // the entry point for our app
  entry: "./main.js",
  // where to put the compiled output (what our script tag will link to)
  output: {
    // where does it go?
    path: __dirname + "/",
    // what is the file called?
    filename: "bundle.js"
  },
  // how can we debug our bundle? for production, we can use 'source-map'
  devtool: "eval",
  module: {
    rules: [
      {
        //Check for all js files
        test: /\.js$/,
        // Don't include node_modules directory in the search for js files
        exclude: /node_modules/,
        // Use the babel-loader plugin to transpile the javascript
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["es2015"] }
          }
        ]
      }
    ]
  }
};
~~~
###### Babel Configs in .babelrc
Since we have included babel as a loader, there is one more file that we need to configure. This file is called a .babelrc and it specifies which babel "presets" or plugins we want to use. The one we will be using is for ES2015. This allows us to use ES2015 modules, which we will see in the next section! Let's create a .babelrc file, it's quite small, but essential. <br>
~~~
{
  "presets": ["es2015"]
}
~~~
<hr>

# Using webpack with React
- npm install --save-dev babel-preset-react react react-dom
<hr>

 #### { Props. }
  > Objectives
- Define what `props` is and how it is used with React
- Describe what the `children` prop is used for
- Use `PropTypes` and `defaultProps`

## Props
- Often a prop may be passed down from a parent component to a child
- The most important thing to understand about props are that they are immutable
- Props can not be changed from within the component itself
- You should not be trying to change the value of a prop
- To make dynamic content that can changed based on input
- To make dynamic content that can changed based on input use  state 

### React Component: Our First Props Example


#### Children
A special property that all react components have is called children. The children of a component is all of the JSX inside of the component. For example, think of html tags: <br>

```
<div>
   <p>I am a child element of the div</p>
   <p>I am another child of the div</p>
</div>
```
 ## Prop Validation with PropTypes :
  - One way to describe the props that a component accepts is PropTypes.
  -  Using PropTypes also has the added benefit of doing some type checking (type checking asserts that the data that you are getting is a certain type.
 - **npm install prop-types**

```
import PropTypes from "prop-types";

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};
```
##### Composing Components With Props
```
import React, { Component } from "react";

export default class App extends Component {
  render() {
    const instList = this.props.instructors.map(instructor => {
      return (
        <li key={instructor.id}>
          <h2>{instructor.name}</h2>
          <img src={instructor.avatar} alt={instructor.name} />
          <p>
            <strong>Hobby:</strong> {instructor.hobby}
          </p>
        </li>
      );
    });
    return (
      <div>
        <h1>Instructors</h1>
        <ul>{instList}</ul>
      </div>
    );
  }
}

// Specifies the default values for props:
App.defaultProps = {
  instructors: [
    {
      id: 0,
      name: "Michael",
      avatar:
        "https://www.rithmschool.com/content/react_fundamentals/michael.jpg",
      hobby: "hiking"
    },
    {
      id: 1,
      name: "Matt",
      avatar: "https://www.rithmschool.com/content/react_fundamentals/matt.jpg",
      hobby: "math"
    },
    {
      id: 2,
      name: "Elie",
      avatar: "https://www.rithmschool.com/content/react_fundamentals/elie.jpg",
      hobby: "cello"
    },
    {
      id: 3,
      name: "Whiskey",
      avatar:
        "https://www.rithmschool.com/content/react_fundamentals/whiskey.jpg",
      hobby: "napping"
    }
  ]
};
```
- key is a special prop in react that helps react render our components more intelligently
- The key should be set to something that uniquely identifies your data in some list of data. 
- the key will be some id that is coming from the server.


#### Refactoring Our Component :
 <hr>

## State
> Objectives
- Describe how props and state are different
- Initialize state in a React component
- Describe what a pure function is and how it applies to setState
- Pass state down from a parent component to a child component via props

### State
 - when building dynamic web applications, we often want to be able to change our data.
 - In React, we store dynamic data as state in the app.
 - The reason why people are wary of including too much state in your application is that it adds complexity to your application
 - The more state you have to manage, the more difficult it becomes to reason about your application.

 #### Important State Concepts:
 - State should be owned by only one component
 - When state is changed inside of a component,he `render` method will eventually be invoked by React
- he `render` method will eventually be invoked by React
- This concept will lead to some rules we'll discuss about how state can change.

##### Initializing state:

```
import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Michael"
    };
  }
  render() {
    return (
      <div>
        <h2>Our state is {this.state.name}</h2>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
``` 
-  The `constructor` does the setup for your component (and more generally a constructor function sets up a class).
-  In React, whenever you have a constructor, you will want to pass in props as a parameter and on the first line of the constructor, 

- you should called `super(props)`; - React will yell at you if you don't.
- after calling super on the props, we set up a state object for our App component
-  The state object is simply a normal JavaScript object.


```
import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Michael"
    };

    setTimeout(this.changeName.bind(this), 5000);
  }

  changeName = () => {
    this.setState({ name: "Whiskey" });
  };

  render() {
    return (
      <div>
        <h2>Our state is {this.state.name}</h2>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
```
-  On our component class, we are creating a function, `changeName`
- that will call `setState` which will change the name property of our state object to Whiskey
- In the constructor, we have a `setTimeout` that will invoke changeName for us in 5 seconds (5000ms)
- The call to setState will trigger another call to render which will return new JSX which has this.state.name equal to Whiskey.
- Now that we have seen `setState`, we need to take a moment to back up and review some functional programming concepts.


 <hr>
 <hr>

 # Functional Programming: Pure Functions

 > A pure function is a foundational concept in functional programing. 

 `The idea is that a function when invoked should not have any side effects and it should not modify the parameters it was given`
  - should not have any side effects
  -  should not modify the parameters it was given

###  an impure function
One rule of thumb when testing for `a pure function` is
- to ask yourself, can the function be run multiple times 
- will I still get the same result

```
function doubleValues(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
}
const arr1 = [2, 4, 5];
doubleValues(arr1);
doubleValues(arr1);
```

### an example of a pure function:
```
function doubleValues(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] * 2);
  }
  return result;
}

const arr1 = [2, 4, 5];
const result = doubleValues(arr1);
result = doubleValues(arr1);
```
> a pure function.
-  get the same result given the same input,
- no matter how many times the function is run
- Since our input is not modified and the function has no other side effects
 
 <hr>

 # Pure Functions and setState:
 







  


