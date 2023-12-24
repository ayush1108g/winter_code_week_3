const Hostel = require("./../modals/Hostel");

exports.createHostel = async (req, res) => {
  try {
    const newHostel = await Hostel.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newHostel,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getallHostel = async (req, res) => {
  try {
    const allHostel = await Hostel.find({ isActive: true });

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
};

exports.changeStatus = async (req, res) => {
  const id = req.body.id;
  console.log(id);
  try {
    const update = await Hostel.findByIdAndUpdate(
      id,
      { $set: { isActive: false } },
      { new: true }
    );
    if (!update) {
      return res.status(404).json({
        status: "fail",
        message: "Hostel not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: update,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getallHostelHistory = async (req, res) => {
  try {
    const allHostel = await Hostel.find({ isActive: false });
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
};
