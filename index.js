//express module
const express = require("express");
const app = express();
const ejs = require("ejs");

app.set("view engine", "ejs");
//middleware
app.use((req, res, next) => {
  console.log("Global middleware");
  console.log("request path: " + req.path);
  console.log("request method: " + req.method);
  next();
});

app.use("/", (req, res, next) => {
  console.log("Processing request");
  next();
});
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});


app.get("/services", (req, res) => {
  const data = {
    owner: "abiel",
    services: [
      {
        name: "Sanding",
        picture: "https://img.mirka.com/contenthubprod/globalassets/mirkacom/2-wood/applications/wood-oiling/mirka-oil-sanding-wood-sanding-recoating-wood-maintenance-2200-1237-16-9.jpg",
        description: "Sanding is one of the many ",
        cost: "20-50$",
      },
      {
        name: "polishing",
        picture: "https://images.squarespace-cdn.com/content/v1/56f2595e8a65e2db95a7d983/1615584722025-MSSFCH7VB8WR48YDITD0/wood-polishing.jpg",
        description: "Way to add a shine to woodwork",
        cost: "40$",
      },
      {
        name: "furniture",
        picture: "https://media.istockphoto.com/id/1063601390/photo/assembling-of-furniture-closeup.jpg?s=612x612&w=0&k=20&c=B3Wq6hEP9H_aG1iRGNTuUSCmUIvypf8s5ajjGmLYz8s=",
        description: "Willing to work on & ",
        cost: "100-2000$",
      },
    ],
  };
  res.render("services.ejs", data);
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/contact.html");
});

app.listen(3000, () => {
  console.log('server running')
});
