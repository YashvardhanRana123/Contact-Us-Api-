const express = require('express');
require('./db/config');
const nodemailer = require('nodemailer');
const contact = require('./db/contact');

const app = express();
app.use(express.json());


app.post("/Contact", async (req,resp)=>{
    let con = new contact(req.body)
    let result= await con.save();
   var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: 'yashgourvyper@gmail.com',
        pass: 'gaxe waqe xbnj behd'
    }
   })
   var mailOption = {
    from: 'yashgourvyper@gmail.com',
    to: req.body.emai,
    cc: 'yashgourvyper@gmail.com',
    subject:'thanks for giving feedback',
    Text:'thanks for your message'
};

    transporter.sendMail(mailOption, function(error,info){
        if(error)
        {
            console.log(error);
        }
        else{
            resp.send("subbmited");
            console.log("email send ")
        }
    })

    })

    app.listen(8700);