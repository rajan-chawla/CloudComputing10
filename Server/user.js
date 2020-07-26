var express = require("express");
var userRoutes = express.Router();
var pool = require("./db");

userRoutes.post("/api/login", function (req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    const query = "SELECT * FROM `cloudcomputing`.`user` WHERE email = '" + email + "'";
    pool.query(query, (q_err, q_res) => {
      if (q_err != null) {
        console.log("error ocurred", q_err);
        res.send({
          code: 400,
          failed: "error ocurred"
        });
      } else {
        console.log(JSON.stringify(q_res, null, 2));
        if (q_res.length > 0) {
          console.log("Password - ", q_res[0].password, req.body.password);
          if (q_res[0].password == password) {
            res.send({
              code: 200,
              success: "login sucessfull",
              userid: q_res[0].id
            });
          } else {
            res.send({
              code: 204,
              success: "Email and password does not match"
            });
          }
        } else {
          res.send({
            code: 204,
            success: "Email does not exist"
          });
        }
      }
    });
  });
  
  userRoutes.post("/api/signup", function (req, res, next) {
    var firstName = req.body.firstname;
    var lastName = req.body.lastname;
    var email = req.body.email;
    var password = req.body.password;
    const query1 =
      "SELECT email FROM `cloudcomputing`.`user` WHERE email = '" + email + "'";
    pool.query(query1, (q_err, q_res) => {
      if (q_err != null) {
        console.log("error ocurred", q_err);
        res.send({
          code: 400,
          failed: "error ocurred"
        });
      } else {
        console.log(JSON.stringify(q_res, null, 2));
        if (q_res.length > 0) {
          if (q_res[0].email == req.body.email) {
            res.send({
              code: 204,
              success: "There is an acoount with same Email"
            });
          }
        } else {
          const query2 =
            "INSERT INTO `cloudcomputing`.`user` (firstname, lastname, email,password) VALUES ('" +
            firstName +
            "', '" +
            lastName +
            "', '" +
            email +
            "', '" +
            password +
            "')";
          pool.query(query2, (q_err, q_res) => {
            if (q_err != null) {
              console.log("error ocurred", q_err);
              res.send({
                code: 400,
                failed: "error ocurred"
              });
            } else {
              console.log(JSON.stringify(q_res, null, 2));
              res.send({
                code: 200,
                success: "signup sucessfull"
              });
            }
          });
        }
      }
    });
  });

userRoutes.get("/api/profile", function(req, res) {
  var id = req.query.id;
  console.log({id})
  const query = "Select email, firstname, lastname where id='" + id + "'";
  pool.query(query, (q_err, q_res) => {
    if (q_err) {
      console.log(q_err);
      res.status(401).json(q_err);
    }
    if (q_res.length < 1) {
      return res.status(404).json({ message: "User not found" });
    } else if (q_res.length == 1) {
      console.log(JSON.stringify(q_res, null, 2));
      res.status(200).json(q_res);
    }
  });
});




module.exports = userRoutes;