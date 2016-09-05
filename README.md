# Olympic Scoreboard
React app that displays results from the 2008 Beijing Olympics

![Alt text](/screenshot.png?raw=true "2008 Beijing Olympics scoreboard")

### Dependencies
* Node/npm
* Gulp

### Development
**Running the app**

- Run `npm install`
- Run `NODE_ENV=development gulp`
- Go to `localhost:8889` to display the app

Alternatively you can open the index.html file in the dist directory

**Run tests in browser**

Go to `localhost:8889/testrunner.html` to see your tests

**Minify the code, ready for production**

Run `NODE_ENV=production gulp deploy`

### Problem
We have attached below all athletic medalists from the 2008 Beijing Olympics. Write a front end application which parses this data, and ranks countries by total medal win in descending order. Display the total medal count per country, as well as as total gold, silver and bronze per country.

JSON Endpoint
https://gist.githubusercontent.com/michaelfbradley...
