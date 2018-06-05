var http = require('../utils/http')
const base ="/services/FyTestRecordSvc"
function queryTestRecord(params,cb) {
  http.request(base +"/queryTestRecord",params,cb)
}
module.exports = {
  queryTestRecord: queryTestRecord,
 
}  