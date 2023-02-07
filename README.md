## Table of contents
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Demo Video](#demo-video)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
​
​

## Overview
### Employee Tracker
​
    An interface to allow user to manage their database of employees, as to which role (or job) they fit into, their pay, and who's their manager. This application gives the user the ability to add and view departments of their company, view and add roles to their company, and view or add employees, as well as update their information.
​
### Screenshot
​
![](https://i.imgur.com/w5u9uyu.png)

### Links
- [GitHub Repository](https://github.com/anomic84/Employee-Tracker)
​
## Docs, Installation, and Usage
​
### Built with
- [Node](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Inquirer](https://www.example.com)
- [MySQL](https://www.example.com)
​
### Installation

    First, clone this repo into your local machine.

    You will need to make sure you have Node.js downloaded via the link above. 
    After you have Node.js on your local machine, in your command line, run: 

        ```npm install```

    Which will automatically install Express, Inquirer, MySQL.

### Usage

    To use you must source the schema.sql, as well as seeds.sql. Enter MySQL by typing in the command line:

    ```mysql -u root -p```

    Enter your password, then enter:

    ```source db/schema.sql```

    Followed by:

    ```source db/seeds.sql```

    Then, type `quit` to exit MySQL

    Finally, enter:

    ```node index.js```

    And the application will start!

### Demo Video
​[Demo Video](https://watch.screencastify.com/v/b8HW91qXvdgF3gf9OH7q)

## Author
    Spencer Carlson
- Website - [Spencer Carlson](https://spencerccarlson.com)
- GitHub - [anomic84](https://github.com/anomic84)
​

​
## Acknowledgments
    I'd like to thank Jacob Nordan for helping me along with this project.
​


