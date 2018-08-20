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

### Mongoose Schema
* trim : Remove space at String.
* Setting Data type already. using 'set' function, There is 'get' function in withdraw
* Add Virtual attributes, Using Variable.
* Model verification. using required, match function. in role, using enum
* .length attribute can set the length words

### Mongoose Middleware
* can steal the init, validate, save, remove of Instance method. pre, post middleware
* pre middle ware do before the some operation. example. before save data, check the id in model.
* post middle ware do after the some operation. example. after save data, logging data.
* Mongoose's DBref is used like 'join' operation. manage this like inheritance.

### Passport (In Local Strategy)
* passport's strategies store in config/strategies. Must separate Logip
* First set strategy and then set passport(register in passport)
* Using Connect Module to save data in session. Message that saved in flash object removed after show in user.


***
## Created By Cheshire. Updated 18-08-20