const Course = require("../../models/Course");

const getAllCourses = async (req, res, next) => {
  try {
    const courses = await Course.find();
    return res.status(200).json(courses);
  } catch (error) {
    next(error);
  }
};
const createCourse = async (req, res, next) => {
  const newCourse = await Course.create();
  return res.status(201).json(newCourse);
};

module.exports = { getAllCourses, createCourse };
