const mongoose = require("mongoose");
const slugify = require("slugify");
const { nanoid } = require("nanoid");

const Course = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, maxLength: 255 },
    videoId: { type: String, maxLength: 255 },
    slug: { type: String, unique: true },
  },
  { timestamps: true }
);

Course.pre("save", function (next) {
  if (!this.slug) {
    const baseSlug = slugify(this.name, { lower: true, strict: true });
    const uniqueId = nanoid(6); // e.g., '3f72dX'
    this.slug = `${baseSlug}-${uniqueId}`;
  }
  next();
});

// Start from zero

module.exports = mongoose.model("Course", Course);
