
const mongoose = require("mongoose");
require("dotenv").config(); 

const uri = process.env.MONGO_URI; 

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log(" MongoDB Connected Successfully"))
.catch((err) => console.error("MongoDB Connection Error:", err));