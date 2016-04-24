### Creating the project

> Express.js-Sample-Apps$ express students-courses

```
   create : students-courses
   create : students-courses/package.json
   create : students-courses/app.js
   create : students-courses/public
   create : students-courses/public/stylesheets
   create : students-courses/public/stylesheets/style.css
   create : students-courses/routes
   create : students-courses/routes/index.js
   create : students-courses/routes/users.js
   create : students-courses/views
   create : students-courses/views/index.jade
   create : students-courses/views/layout.jade
   create : students-courses/views/error.jade
   create : students-courses/bin
   create : students-courses/bin/www

   install dependencies:
     $ cd students-courses && npm install

   run the app:
     $ DEBUG=students-courses:* npm start

   create : students-courses/public/javascripts
   create : students-courses/public/images
```

> Express.js-Sample-Apps$ cd students-courses && npm install

```
npm WARN deprecated jade@1.11.0: Jade has been renamed to pug, please install the latest version of pug instead of jade
debug@2.2.0 node_modules/debug
└── ms@0.7.1

cookie-parser@1.3.5 node_modules/cookie-parser
├── cookie@0.1.3
└── cookie-signature@1.0.6

serve-favicon@2.3.0 node_modules/serve-favicon
├── parseurl@1.3.1
├── etag@1.7.0
├── fresh@0.3.0
└── ms@0.7.1

morgan@1.6.1 node_modules/morgan
├── basic-auth@1.0.3
├── on-headers@1.0.1
├── depd@1.0.1
└── on-finished@2.3.0 (ee-first@1.1.1)

body-parser@1.13.3 node_modules/body-parser
├── content-type@1.0.1
├── bytes@2.1.0
├── depd@1.0.1
├── qs@4.0.0
├── on-finished@2.3.0 (ee-first@1.1.1)
├── http-errors@1.3.1 (statuses@1.2.1, inherits@2.0.1)
├── iconv-lite@0.4.11
├── raw-body@2.1.6 (unpipe@1.0.0, bytes@2.3.0, iconv-lite@0.4.13)
└── type-is@1.6.12 (media-typer@0.3.0, mime-types@2.1.10)

express@4.13.4 node_modules/express
├── escape-html@1.0.3
├── cookie-signature@1.0.6
├── content-type@1.0.1
├── methods@1.1.2
├── merge-descriptors@1.0.1
├── vary@1.0.1
├── etag@1.7.0
├── cookie@0.1.5
├── parseurl@1.3.1
├── range-parser@1.0.3
├── utils-merge@1.0.0
├── array-flatten@1.1.1
├── serve-static@1.10.2
├── fresh@0.3.0
├── content-disposition@0.5.1
├── path-to-regexp@0.1.7
├── depd@1.1.0
├── qs@4.0.0
├── on-finished@2.3.0 (ee-first@1.1.1)
├── finalhandler@0.4.1 (unpipe@1.0.0)
├── proxy-addr@1.0.10 (forwarded@0.1.0, ipaddr.js@1.0.5)
├── accepts@1.2.13 (negotiator@0.5.3, mime-types@2.1.10)
├── type-is@1.6.12 (media-typer@0.3.0, mime-types@2.1.10)
└── send@0.13.1 (statuses@1.2.1, destroy@1.0.4, ms@0.7.1, mime@1.3.4, http-errors@1.3.1)

jade@1.11.0 node_modules/jade
├── commander@2.6.0
├── character-parser@1.2.1
├── void-elements@2.0.1
├── mkdirp@0.5.1 (minimist@0.0.8)
├── constantinople@3.0.2 (acorn@2.7.0)
├── jstransformer@0.0.2 (is-promise@2.1.0, promise@6.1.0)
├── with@4.0.3 (acorn@1.2.2, acorn-globals@1.0.9)
├── clean-css@3.4.12 (commander@2.8.1, source-map@0.4.4)
├── transformers@2.1.0 (promise@2.0.0, css@1.0.8, uglify-js@2.2.5)
└── uglify-js@2.6.2 (async@0.2.10, uglify-to-browserify@1.0.2, source-map@0.5.3, yargs@3.10.0)
```

### Project structure and files

![](_misc/default%20project%20structure.png)

*bin/www*

```javascript
#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('students-courses:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
```

*public/stylesheets/style.css*

```css
body {
  padding: 50px;
  font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
}

a {
  color: #00B7FF;
}
```

*routes/index.js*

```javascript
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
```

*routes/users.js*

```javascript
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
```

*views/error.jade*

```jade
extends layout

block content
  h1= message
  h2= error.status
  pre #{error.stack}
```

*views/index.jade*

```jade
extends layout

block content
  h1= title
  p Welcome to #{title}
```

*views/layout.jade*

```jade
doctype html
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    block content
```

*app.js*

```javascript
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
```

*package.json*

```json
{
  "name": "students-courses",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.13.2",
    "cookie-parser": "~1.3.5",
    "debug": "~2.2.0",
    "express": "~4.13.1",
    "jade": "~1.11.0",
    "morgan": "~1.6.1",
    "serve-favicon": "~2.3.0"
  }
}
```


### Designing the RESTful Web API 

List out the set of operations that the API performs

| HTTP Method        | URI           |  Action to perform |
| ------------- |:-------------|:-----|
| GET     | /students | Get all students |
| GET      | /students/:id      |   Get the student with a specified id |
| DELETE | /students/:id      |    Delete a student with a specified id |
| GET     | /courses | Get all courses that students subscribed to |
| DELETE     | /courses/:course-name | Delete the course with a specified course name |

Define methods in a module and export them so that they can be bound to the API operations listed above.

### Defining methods to support API operations

Create a directory models under the main project directory and a file under it to contain the methods. The model gets its data from a pre-populated json file.

*models/students.js*

```javascript
var fs = require('fs');

function readData() {
	var filename = '../data/students.json';
	return fs.readFileSync(filename);
} 

function getStudents() {
	return JSON.parse(readData());
}

function getStudent(id) {
	var students = getStudents();

	for(var iter = 0; iter < students.length; iter++) {
		var student = students[iter];

		if(student.id == id) {
			return student;
		}
	}

	return null;
}

function getCourses() {
	var students = getStudents();
	var allCourses = new Array();

	for(var iter = 0; iter < students.length; iter++) {
		var coursesOfAStudent = students[iter].courses;

		for(var iter1 = 0; iter1 < coursesOfAStudent.length; iter1++) {
			var course = coursesOfAStudent[iter1];
			if(allCourses.indexOf(course) == -1) {
				allCourses.push(course);
			}
		}
	}

	return allCourses;
}

function getStudentsOfACourse(course) {
	var students = getStudents();
	var studentsOfACourse = new Array();
	
	for(var iter = 0; iter < students.length; iter++) {
		var studentName = students[iter].name;
		var coursesOfAStudent = students[iter].courses;

		if(coursesOfAStudent.indexOf(course) != -1 && studentsOfACourse.indexOf(studentName) == -1) {
			studentsOfACourse.push(studentName);
		}
	}

	return studentsOfACourse;
}

function genericQuery(property, value) {
	var students = getStudents();
	var results = new Array();

	for(var iter = 0; iter < students.length; iter++) {
		if(students[iter][property] === value) {
			results.push(students[iter]);
		}
	}

	return results;	
}

module.exports.getStudents = getStudents;
module.exports.getStudent = getStudent;
module.exports.getCourses = getCourses;
module.exports.getStudentsOfACourse = getStudentsOfACourse;
module.exports.genericQuery = genericQuery;

/**
	Testing functions in the module
*/

//console.log(getStudents());

//console.log(getStudent(11));

//console.log(getCourses());

//console.log(getStudentsOfACourse("Android"));

//console.log(genericQuery("id", 10));
```

*data/students.json*

```json
[
	{
		"name": "Albert Einstein",
		"id": 10,
		"grade": 8,
		"emailId": "eistein.albert@gmail.com",
		"profilepic": "http://localhost:3000/images/profile/einstein.jpg",
		"courses": ["AngularJS", "ReactJS", "NodeJS", "MeteorJS"]
	},
	{
		"name": "Isaac Newton",
		"id": 11,
		"grade": 8,		
		"emailId": "isaac.newton@gmail.com",
		"profilepic": "http://localhost:3000/images/profile/newton.jpg",
		"courses": ["AngularJS", "ReactJS", "NodeJS", "Android"]
	}
]
```

![](_misc/Project%20Structure%20with%20data%20and%20model.png)

### Testing the model

To test the functions, uncomment one of the lines in *models/students.js* (say console.log(getStudents()) and run the following command

```
droid@droidserver:~/onBB/Express.js-Sample-Apps/students-courses-app/models$ node students.js
[ { name: 'Albert Einstein',
    id: 10,
    grade: 8,
    emailId: 'eistein.albert@gmail.com',
    profilepic: 'http://localhost:3000/images/profile/einstein.jpg',
    courses: [ 'AngularJS', 'ReactJS', 'NodeJS', 'MeteorJS' ] },
  { name: 'Isaac Newton',
    id: 11,
    grade: 8,
    emailId: 'isaac.newton@gmail.com',
    profilepic: 'http://localhost:3000/images/profile/newton.jpg',
    courses: [ 'AngularJS', 'ReactJS', 'NodeJS', 'Android' ] } ]
```

Uncommenting console.log(getStudent(11));

```
droid@droidserver:~/onBB/Express.js-Sample-Apps/students-courses-app/models$ node students.js
{ name: 'Isaac Newton',
  id: 11,
  grade: 8,
  emailId: 'isaac.newton@gmail.com',
  profilepic: 'http://localhost:3000/images/profile/newton.jpg',
  courses: [ 'AngularJS', 'ReactJS', 'NodeJS', 'Android' ] }
```

Uncommenting console.log(getCourses());

```
droid@droidserver:~/onBB/Express.js-Sample-Apps/students-courses-app/models$ node students.js
[ 'AngularJS', 'ReactJS', 'NodeJS', 'MeteorJS', 'Android' ]
```

Uncommenting console.log(getStudentsOfACourse("Android"));

```
droid@droidserver:~/onBB/Express.js-Sample-Apps/students-courses-app/models$ node students.js
[ 'Isaac Newton' ]
```

### Adding Assets

Add assets for students and courses

![](_misc/Project%20Structure%202.png)


### Defining routes

*routes/students.js*

```javascript
var express = require('express');
var router = express.Router();

var studentsModel= require('../models/students.js');

router.get('/', function(req, res, next) {
	res.json(studentsModel.getStudents());  
});

module.exports = router;
```

Load *models/students.js*. Note that the path that should be used in the *require* function should be relative to the path of the javascript file in which *require* is used.

*app.js*

```javascript
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var students = require('./routes/students');    <--------------------

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/students', students);   <------------------------   

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
```

### Start the server

```
droid@droidserver:~/onBB/Express.js-Sample-Apps/students-courses-app$ npm start

> students-courses@0.0.0 start /home/droid/onBB/Express.js-Sample-Apps/students-courses-app
> node ./bin/www

```

### Testing in the browser



On the server side

```
droid@droidserver:~/onBB/Express.js-Sample-Apps/students-courses-app$ npm start

> students-courses@0.0.0 start /home/droid/onBB/Express.js-Sample-Apps/students-courses-app
> node ./bin/www

GET /students 500 1003.733 ms - 1253			<-------------
GET /stylesheets/style.css 304 5.466 ms - -
```

**Reason why this happened**



