const mongoose = require('mongoose');
require('dotenv').config()


main().catch(err => console.log(err));

async function main() {
    const uri = process.env.MONGODB_URI;
  await mongoose.connect(uri);
}

module.exports = mongoose;