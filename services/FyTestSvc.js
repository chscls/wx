var http = require('../utils/http')
const base ="/services/FyTestSvc"
function queryTest(params,cb) {
  http.request(base+"/queryTest",params,cb)
}
function findTest(params, cb) {
  http.request(base + "/findTest", params, cb)
}
module.exports = {
  queryTest: queryTest,
  findTest: findTest
 
}  