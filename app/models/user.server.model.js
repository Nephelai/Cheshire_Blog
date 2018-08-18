var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String
});

// 'Define User Model and Register in mongoose
mongoose.model('User', UserSchema);