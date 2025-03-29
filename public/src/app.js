const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "humanity",
});

connection.connect((error) => {
  if (error) {
    console.log("Error connecting to the MySQL Database:", error);
    return;
  }
  console.log("Connection established successfully");
});

// Contoh query
// connection.query("SELECT * FROM playerucp", (error, results) => {
//   if (error) throw error;
//   console.log("Results:", results);
// });

connection.end();
