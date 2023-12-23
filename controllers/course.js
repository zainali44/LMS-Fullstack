const Course = require( '../models/course' );
const getAllCourses = (req,res) =>
{
    Course.find().then( ( data ) =>
    {
        res.json( data );
    } ).catch( ( err ) =>
    {
        res.json( err );
    })
};
const addMarks = async (req, res) => {
  try {
    const result = await Course.findOneAndUpdate(
      {
        _id: req.params.cid,
        "students.id": req.params.sid,
      },
      {
        $set: {
          "students.$.marks": req.body.marks,
        },
      },
      { new: true }
    );
    res.status(200).send(result);
  } catch (error) {
    console.warn(error);
  }
};
module.exports={
    getAllCourses,
    addMarks
}