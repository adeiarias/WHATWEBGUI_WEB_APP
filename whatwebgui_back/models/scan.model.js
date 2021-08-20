const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scanSchema = new Schema({
  target: { type: String, required: true },
  cms: { type: String, required: true },
  cmsVersion: { type: String, required: true },
  server: { type: String, required: true },
  serverVersion: { type: String, required: true },
  ip: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Scan = mongoose.model('Scan', scanSchema);

module.exports = Scan;