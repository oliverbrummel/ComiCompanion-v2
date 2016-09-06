var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
// var Comic = require('./comic').schema;

var Schema = mongoose.Schema;

var SALT_WORK_FACTOR = 10;

var UserSchema = new Schema ({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

UserSchema.pre('save', function(next){
  var user = this;

  if(!user.isModified('password')){
    return next();
  }

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
    if(err){
      return next(err);
    }

    bcrypt.hash(user.password, salt, function(err, hash){
      if(err){
        return next(err);
      }

      user.password = hash;

      next();
    });//closes bcrypt.hash()
  });//closes bcrypt.genSalt()
});//closes UserSchema.pre()

UserSchema.methods.comparePassword = function(candidatePassword, dont){
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    if(err){
      return done(err);
    } else {
      done(null, isMatch);
    }
  });//closes bcrypt.compare()
};//closes UserSchema.methods.comparePassword = function()

module.exports = mongoose.model('user', UserSchema);
