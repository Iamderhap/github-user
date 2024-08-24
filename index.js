const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000;


app.use(express.json())
app.use (bodyParser.urlencoded({ extended: false }))

app.post("/github-page", (req, res) => {
  res.sendFile(__dirname + "/github.html")
  
  app.get("/api", async(req, res)=>{

    const baseurl = "https://api.github.com/users";
    const username = req.body.username;
 
    const responseData = await fetch (`${baseurl}/${username}`);
    const newData = await responseData.json();
 
    res.json(newData.username)
 })
})

app.listen(port, function() {
  console.log("Server started on port" + port);
})


git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Iamderhap/github-user.git
git push -u origin main