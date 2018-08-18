# Cheshire_Blog

## MEAN Stack.
MongoDB, Express, Angular, NodeJS. (Maybe Angular 6)

### In Express Middle Ware (Outer middle ware)
* morgan : provide simple logger middle ware
* method-override : provide basic Verb like DELETE, PUT.. In Clients Do not supported
* body-parser : handling requested data and support various request type
* compression : compress responsed data using gzip\/deflate
* express.static : support static file service
* cookie-parser : interpret cookie to fill the req.cookies object
* session : support persistent session, Express-session is easy to tracking user's behavior

### Mongoose
* In connect, Check useNewUrlParser.(if using version >= 4.0)
* First Set Schema and Register it, Second Set Controller, Last Set Route and register route in express

***
## Created By Cheshire. Updated 18-08-18