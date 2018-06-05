var http = require('../utils/http')
const base="FyTestSvc"
function queryTest(params,cb) {
  http.request(base+"/queryTest",params,cb)
}