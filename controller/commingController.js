const UserModel = require("../model/commingModel");

async function registerpost(req ,res) {
    var data =req.body
    console.log(data);

    var data = await UserModel.create({
        email: data.email
    })
    console.log(data,'db');

    res.redirect('/')
}

async function register(req ,res) {
    var data = await UserModel.find({
        // email:'admin@gmail.com'
    })
    res.render('commingsoon',{data})
}

module.exports = {
    register,
    registerpost
}