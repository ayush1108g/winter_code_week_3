const Patient = require('./../modals/patientmodal')

exports.createPatient = async(req,res)=>{
    try{
            const newPatient = await Patient.create(req.body);
            res.status(201).json({
                status: 'success',
                data: {
                    newPatient
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
exports.getallPatients = async (req, res) => {
    try {
      const allPatient = await Patient.find();
  
      res.status(200).json({
        status: "success",
        data: {
          allPatient,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  }

  exports.deletePatient = async (req, res) => {
    try {
      const newPatient = await Patient.findByIdAndDelete(req.params.id);
      res.status(201).json({
        status: "success",
        data: {
            newPatient
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        massage: "invalid request",
      });
    }
  }