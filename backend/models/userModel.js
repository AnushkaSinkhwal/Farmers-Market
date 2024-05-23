const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: 'Invalid email format',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    validate: {
      validator: (value) => validator.isStrongPassword(value),
      message: 'Password must contain at least one uppercase, one lowercase, one number and one special character',
    },
  },
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    console.log("new password", this.password)
    const hashedpassword = await bcrypt.hash(this.password, 10);
    console.log("hashed password", hashedpassword)
    this.password = hashedpassword
  }
  next();
});

userSchema.statics.signup = async function (username, phoneNumber, address, email, password) {
  if (!username || !phoneNumber || !address || !email || !password) {
    throw Error('Fields cannot be empty');
  }

  if (!validator.isEmail(email)) {
    throw Error('Email must be a valid email');
  }

  if (!validator.isStrongPassword(password)) {
    throw Error('Password must contain at least 8 characters with one uppercase, one lowercase, one symbol and one number');
  }

  const usernameexists = await this.findOne({ username });
  if (usernameexists) {
    throw Error('Username already exists');
  }

  const emailexists = await this.findOne({ email });
  if (emailexists) {
    throw Error('email already exists');
  }

  const user = await this.create({ username, phoneNumber, address, email, password });
  return user;
};

userSchema.statics.login = async function({ username, password }) {
    if (!username || !password) {
      throw Error('fields cannot be empty');
    }
  
    try {
      const user = await this.findOne({ username }); // Check query here
      if (!user) {
        throw Error('incorrect username');
      }
      const match = await bcrypt.compare(password, user.password);
      console.log("incomming password: ",password)
      console.log("exiting password",user.password)
      console.log("match: ",match)
      if (!match) {
        throw Error('incorrect password');
      }
      return user;
    } catch (error) {
      throw Error('Error logging in: ' + error.message);
    }
  };
  

module.exports = mongoose.model('User', userSchema);
