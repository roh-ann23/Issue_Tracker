const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rohanjadhavronny04:K6eJTymHKYtED1o7@cluster0.xzxuatf.mongodb.net/IssueTracker');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));   // K6eJTymHKYtED1o7

db.once('open', () => {
  console.log('Connected to Database');
});

module.export = db;
