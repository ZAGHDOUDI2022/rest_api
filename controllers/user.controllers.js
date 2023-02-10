const User = require('../models/user.models')

module.exports.getallusers = async(req, res) => {
    User.find()
      .then((users) => res.send(users))
      .catch((err) => console.log(err));
  };

module.exports.adduser=async(req, res) => {
    console.log(req.body);
    const { name, lastName, age } = req.body;
    const newUser = new User({
      name,
      lastName,
      age,
    });
    newUser
      .save()
      .then((response) => res.send(`user added:${response}`))
      .catch((err) => console.log(err));
  };
  
module.exports.edituser = async(req, res) => {
    let { _id } =req.params
    User.findByIdAndUpdate({ _id }, {$set: {...req.body }})
    .then(() => res.status(200).json({msg:"User updated"}))
    .catch(err =>res.status(400).json(err))
};

module.exports.deleteuser = async(req, res) =>{
    let {_id} =req.params
    User.findByIdAndRemove(_id)
    .then(()=>res.status(200).json({msg:"user has been deleted"}))
    .catch(err=>res.status(400).json(err))

}

