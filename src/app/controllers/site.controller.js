const Course = require("../models/course.model");
const { multipleMongooseToObject } = require("../../utils/mongoose");

class SiteController {
  // [GET] /
  home(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", { courses: multipleMongooseToObject(courses) });
      })
      .catch(next);
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
