const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://wealhammi:myK0uXXmcAs2Suyi@cluster0.zgos7bh.mongodb.net/?retryWrites=true&w=majority', {
      //must add in order to not get any error messeges:
      // useUnifiedTopology: true,
      useNewUrlParser: true,
      // useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
