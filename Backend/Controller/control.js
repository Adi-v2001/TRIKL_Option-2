const model = require("../Models/myModel");
const User = model.mySchema;

exports.createData = async (req, res) => {
  console.log(req.body);
  const addData = new User(req.body);

  await addData
    .save()
    .then(res.status(201).json("created"))
    .catch((err) => console.log(err));
};

exports.getData = async(req,res)=>{
    const data = await User.find().exec();
    res.json(data);
}

exports.updateData = async(req, res)=>{
    const rname = req.params.name;
    const updated = await User.findOneAndUpdate({ name: rname }, req.body);
    res.json(updated);
}

exports.deleteData = async(req, res)=>{
    const rname= req.params.name;
    const deleted = await User.findOneAndDelete({ name: rname });
    res.json(deleted);
}
