const express = require("express");
const http = require('http');
const path = require('path');
const fs = require('fs');
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const credentials = require("./credentials.json");
//const templateInfo = require("./assets/templates.json");

const oauth2Client = new OAuth2(
  credentials.clientSecret, // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: credentials.refreshToken
});

const accessToken = oauth2Client.getAccessToken();


const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

const port = process.env.PORT || 3002;


app.use(express.static(__dirname + '/dist/hkfashionshop'));

const server = http.createServer(app);
server.listen(port, 'localhost',() => console.log(`listening on ${port}`));

app.get('*', function (req, res){
  res.sendFile(path.join(__dirname+'/dist/hkfashionshop/index.html'));
});




//const templates = [];
//const asset = "assets";

//app.use(express.static(_dirname + '/assets/'));

// Object.values(templateInfo).forEach(item => {
//   let source = path.join(asset,item.url);
//   let template;

//   function getTemplate(callback){
//     let variants = [];

//     fs.readdir(source, (err,files)=>{
//     files.map(file => {
//       if(err){
//         return err;
//       }

//       var name = path.basename(file);
//       var url = path.join(source, name);
//       name = name.substr(0, name.lastIndexOf('.'));
//       variants.push({color:name,img:url});
//     });
  
//       callback(variants);
//     }); 
//   }
  
//   getTemplate(variants=>{
//     templates.push ({title: item.title, desc: item.desc, current: 0, variants: variants});
//   });

// })

// app.get("/templates", (req,res) => {
//   //console.log(templates);
//   //console.log(templates[0].variants[0]);
//   res.send(JSON.stringify(templates));

// })

app.post("/sendmail", (req, res) => {
  console.log("request came");
  let msg = req.body;
  sendMail(msg, success => {
    console.log(`The mail has been sent and the status is ${success}`);
    res.send(success);
  });
});

async function sendMail(msg={}, callback) {
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
         type: "OAuth2",
         user: "coisinihk@gmail.com", 
         clientId: credentials.clientId,
         clientSecret: "x5YSEt0J-9qvlOk-Qjj0fk7g",
         refreshToken: "1//04Wm3I2sMZ-O_CgYIARAAGAQSNwF-L9IrF7NrcP9GvBxaPNd_J1Ue5Z_UyiQawyKNvCglI1Z7mMw0ERCZoqmswn9lim53toJkWBk",
         accessToken: accessToken
    }
  });
  
  const mailOptions = {
    from: "coisinihk@gmail.com",
    to: "coisinihk@gmail.com",
    subject: "Customer message from Teeshop!",
    generateTextFromHTML: true,
    html: `<h1>Customer message from teeshop</h1>
           <p>Name of customer : <b>${msg.name}</b></p>
           <p>Phone No./Email of customer : <b>${msg.tel}</b></p>
           <p>His/her message : <b>${msg.content}</b>`
  };

  let success = false;
  smtpTransport.sendMail(mailOptions, (err, res) => {
    if(err){
      console.log(err); 
    }else{
      success = true;
      console.log(res);
    }
    callback(success);
  });
  
  
}
