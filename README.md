# React-Fundamentals

#### Introduction to React

<Objectives

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
