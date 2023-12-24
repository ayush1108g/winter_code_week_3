const Hostel = require('./../modals/Hostel');

exports.createHostel = async(req,res)=>{
    try{
            const newHostel = await Hostel.create(req.body);
            res.status(201).json({
                status: 'success',
                data: {
                    newHostel
                }
            });
    }
    catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}
exports.getallHostel = async (req, res) => {
    try {
      const allHostel = await Hostel.find();
  
      res.status(200).json({
        status: "success",
        data: {
          allHostel,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  }
