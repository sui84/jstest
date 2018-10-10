function sendmessage(){
    var msg = {content:'从main.js发送给background.js',};
    chrome.runtime.sendMessage(msg,function(response) {
        console.log('content get response:',response);
    });
}
//sendmessage()

//main.js中添加一个监听，监听来自background.js的消息
chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse){
        console.log(request);
    }
);

var newsArray=[];
len = 6
for(var i=0;i<len;i++){
newsArray.push('test'+i.toString());
}
chrome.extension.sendMessage({cmd: "setNewsArr",'arr':newsArray},function(response) {
});