# Google Books Search

### **Overview**

A React-based Google Books Search app utilizes React lifecycle methods to query and display books based on user searches, and uses Node, Express and MongoDB so that users can save books to review or purchase later.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### **Instructions**
- Create `React components`
- Work with helper/util functions
- Utilize `React lifecycle methods` to query and display books based on user searches
- Use `Node`, `Express`, and `MongoDB` so that users can save books to review or purchase later

----
### Specifications
| _Behavior_ | _Input_ | _Output_ |
|:---------------------------------------------------------------------:|:---------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------:|
| Search a Book | Enter Keywords: Princess Bride | Result: Books with "Princess Bride" in Title |
| View a Book | Select View: Redirects to Google Books | Result: View or Purchase Book |
| Save a Book | Select Save: Book now Saved | Result: Book Saved to Library |
| Delete a Book | Select Delete: Book now Deleted | Result: Book Deleted from Library |

----
### Setup/Installation Requirements

To run locally:

1. Make sure Node.js and npm are installed on your computer
  * npm is automatically installed on your computer when you download Node.js

2. Click the below link to install Node.js 
  * https://nodejs.org/en/download/

then...

#### Clone this repository: https://github.com/ChereeNielson/GoogleBooks

```git clone https://github.com/ChereeNielson/GoogleBooks```

#### OPEN project folder ('GoogleBooks') in Code Editor of choice

* To start the project on a development server run the following commands from the command line
* ```npm install``` or ```yarn install```
* ```npm start``` or ```yarn start``` 

---
### Hosted on Heroku

A working version of the application can be found at [https://herokuapp.com/](https://herokuapp.com/ "React Google Books Search")

---
### What This Application Does

![Search Books](./images/search.png)
* Search - User can search for books via the `Google Books API` and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the `Mongo` database.

![Save Books](./images/saved.png)
* Saved - Renders all books saved to the `Mongo` database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the `Mongo` database.

---
### Technologies Used
* HTML
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Webpack.js](https://webpack.js.org/guides/getting-started/)
* [Node](https://nodejs.org/en/docs/)
* [Express](http://expressjs.com/)
* [MongoDB](https://docs.mongodb.com/)
* [React](https://reactjs.org/docs/getting-started.html)
* [Babel](https://babeljs.io/docs/en/)
* [Yarn](https://yarnpkg.com/en/)
* [npm](https://docs.npmjs.com/)

----
### Built By

[Cheree Nielson](https://github.com/ChereeNielson) © 2019