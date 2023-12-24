const Employee = require('./../modals/employee');

exports.createEmployee = async(req,res)=>{
    try{
            const newEmployee = await Employee.create(req.body);
            res.status(201).json({
                status: 'success',
                data: {
                    newEmployee
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
exports.getallemployee = async (req, res) => {
    try {
      const allEmployee = await Employee.find();
  
      res.status(200).json({
        status: "success",
        data: {
          allEmployee,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  }
  exports.deleteemployee = async (req, res) => {
    try {
      const newemployee = await Employee.findByIdAndDelete(req.params.id);
      res.status(201).json({
        status: "success",
        data: {
            newemployee
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        massage: "invalid request",
      });
    }
  }