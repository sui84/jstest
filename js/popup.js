window.onload = function () {
    var bg = chrome.extension.getBackgroundPage();
    var msg = bg.g_msg;

    var clear = document.getElementById('clear'),
	oText = document.getElementById('text'),
	getcookie = document.getElementById('getcookie'),
	info = document.getElementById('info')

	, savefile = document.getElementById('savefile')
	, text_filename = document.getElementById('text_filename');

    var urlArr = ['http://www.filesloop.com/search/','http://www.panduoduo.net/s/name/','http://whois.chinaz.com/','http://ip.tool.chinaz.com/']

//alert('xxxxxxxxx');

//alert(window.localStorage['randid'])
//console.error(window.localStorage)
chrome.tabs.executeScript( {
          code: "(" + get_selection + ")();" 
    }, function(selections) {
       oText.placeholder = selections
    });
    

var  btns = $('#guowaiwp,#baiduwp,#whois,#ip')
for(var i=0;i<btns.length;i++){
	btns[i].onclick = function(index) {
		objid = $(this).attr('id')
		var message = oText.value.trim();
		if(objid === "guowaiwp")
			url = 'http://www.filesloop.com/search/';
		else if (objid=== "baiduwp")
			url = 'http://www.panduoduo.net/s/name/';
		else if (objid === "whois")
			url = 'http://whois.chinaz.com/';
		else if (objid === "ip")
			url = 'http://ip.tool.chinaz.com/';
		window.open(url + message);
	};
}

/*
URL = ''
chrome.tabs.getSelected(null,function(tab) {  
	URL = tab.url;
	info.value = tab.url;
});
*/

CookieStr = ''
chrome.cookies.getAll({}, function(cookies) {
	var string = "";
		string += "[\n";
		for(var i=0; i<cookies.length; i++) {
			cookie = cookies[i];
			cookie.id = i+1;
			string += 	JSON.stringify(cookie, null, 4);
			if(i<cookies.length-1)
				string += ",\n";
		}
		string += "\n]";
		CookieStr = string;
});

getcookie.onclick = function() {
    domain = URL.split('/')[2];
	info.value = CookieStr;
	
};



savefile.onclick = function() {
	try {

	//	alert(chrome.tabs[0])

	//	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){  
          //  chrome.tabs.sendMessage(chrome.tabs[0].id,"这是由pupup.js发送给main.js的消息");  
      //  });

		chrome.runtime.sendMessage("发送给background.js的消息",function(response){
            alert('content get response:',response);
            console.log('发送给background.js的消息')
            info.value =  response;
        });

/*
		  blob = new Blob(
			  ['ffff' ]
			, {type: "text/plain;charset=" + document.characterSet}
		)

		object_url=chrome.extension.getURL('aaa.txt')
		save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
		save_link.href = object_url;
		save_link.download = 'test.txt';
		//click(save_link);
		filesaver.readyState = filesaver.DONE;
		dispatch_all();
		return;
		*/
	} catch (error) {
      alert(error);
  }
};

//popup.js代码，直接取background.js中的值
function bindEvent(){
    msg += 'test'
    bg.msg = msg
    alert(chrome.extension.getBackgroundPage().msg)
    info.value =  msg;
};
//bindEvent();



//RequestGet('https://www.shodan.io/search?query=www.baidu.com',function(data){})
//
 $.get("https://www.shodan.io/search?query=www.baidu.com", 
  function(data,status){
   // alert("Data: " + data + "\nStatus: " + status);
});

chrome.extension.sendMessage({cmd: "getNewsArr"},function(response) {
	if(response.arr){
	var len=response.arr.length;
		  alert(response.arr[2])
	}
});


//saveDataTable();
alert(SHA256('test'));

//refresh_windows();
sha =  SHA256lib().sha256(a, b);


}