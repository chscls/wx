var http = require('../utils/http')
const base ="/services/FyTestSvc"
function queryTest(params,cb) {
  http.request(base+"/queryTest",params,cb)
}
module.exports = {
  queryTest: queryTest,
 
}  