var http = require('../utils/http')
const base ="/services/FyTestRecordSvc"
function queryTestRecord(params,cb) {
  http.request(base +"/queryTestRecord",params,cb)
}
function addTestRecord(params, cb) {
  http.request(base + "/addTestRecord", params, cb)
}
module.exports = {
  queryTestRecord: queryTestRecord,
  addTestRecord: addTestRecord
}  