const Course = require("../models/course.model");

class SiteController {
  // [GET] /
  async home(req, res) {
    try {
      const courses = await Course.find({});
      res.json(courses);
    } catch (err) {
      res.status(400).json({ err: "ERROR!!!", details: err.message });
    }
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
