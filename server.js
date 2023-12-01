const app = require("./app");
const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Svyatoslav:99887766@cluster0.9aeffpx.mongodb.net/contacts_reader";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
