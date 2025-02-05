require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

const port = process.env.PORT || 5000;

connectDB(); // Ensure this function uses process.env.MONGO_URI

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
