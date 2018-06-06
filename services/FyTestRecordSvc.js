var http = require('../utils/http')
const base ="/services/FyTestRecordSvc"
function queryTestRecord(params,cb) {
  http.request(base +"/queryTestRecord",params,cb)
}
function addTestRecord(params, cb) {
  http.request(base + "/addTestRecord", params, cb)
}
function submit(params, cb) {
  http.request(base + "/submit", {...params,method:"POST"}, cb)
}
module.exports = {
  queryTestRecord: queryTestRecord,
  addTestRecord: addTestRecord,
  submit:submit
}  