function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
function timestampToTime(timestamp) {
  console.log(timestamp)
  var date = new Date(timestamp); 
  formatTime(date)
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
/**
 * 转换地址数据
 * */
function replacePhone(arr, isreplace) {
  var newAddr = []
  for (let i = 0; i < arr.length; i++) {
    if (isreplace) {
      let phone = arr[i].phone
      arr[i].phone = phone.replace(phone.substring(3, 7), '****')
    }
    newAddr[i] = arr[i].name + ' ' + arr[i].phone + '\n' + arr[i].province + arr[i].city + arr[i].addr
  }

  return newAddr
}
function  changeToAnswer(testRecord){
  
var a =[]
for(var i=0;i<testRecord.questions.length;i++){
  var q = testRecord.questions[i]
  if(q.type=="single"||q.type=="judge"){
    var items = q.items
    var x = 0;
    for(var j=0;j<items.length;j++){
      if (items[j].isAnswer != null && items[j].isAnswer){
        a.push(j)
        x++;
        break
      }
    }
    if(x==0){
      a.push(-1)
    }
    
  } else if (q.type == "mutiply") {
    var x =[]
    var items = q.items
    for (var j = 0; j < items.length; j++) {
      if (items[j].isAnswer != null && items[j].isAnswer) {
        x.push(j)
      
      }
    }
    a.push(x)


  } else if (q.type == "ask"){

    a.push(items[0].answer != null ? items[0].answer:"")
  
    
  }else{
    var x = []
    var items = q.items

    for (var j = 0; j < items.length; j++) {
      x.push(items[0].answer)
    }
    a.push(x)
   
  }
}

  return a;

}
module.exports = {
  formatTime: formatTime,
  replacePhone: replacePhone,
  timestampToTime: timestampToTime,
  changeToAnswer: changeToAnswer
}
