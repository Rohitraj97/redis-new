const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://redis:redis123@cluster0.hl09p.mongodb.net/redis?retryWrites=true&w=majority"
  );
};
