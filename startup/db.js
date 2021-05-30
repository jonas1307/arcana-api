const mongoose = require("mongoose");

module.exports = function () {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };
  mongoose
    .connect(process.env.MONGODB_CONNECTION, options)
    .then(() => console.info("MongoDB connected."));
};
