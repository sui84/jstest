
var g_msg = 'background.js给popup.js的值';
//var offline = true;

//传递消息
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if(request.cmd=='setNewsArr'){
		console.log(request.arr)
		g_newsArr=request.arr;
	}else if(request.cmd=='getNewsArr'){
		sendResponse({'arr':g_newsArr});
	}
})

//chrome://settings/cookies
//右键菜单
var links =  [
	{ "id": "Baidu",
	  "type": "all",
	  "url": "http://www.baidu.com/s?wd=%s"}
	,{"id": "Bing",
	  "type": "all",
	  "url": "http://cn.bing.com/search?q=%s"}
	,{"id": "Taobao",
	  "type": "all",
	  "url": "https://s.taobao.com/search?q=%s&commend=all&ssid=s5-e&search_type=item&sourceId=tb.index&spm=a21bo.2018.201856-taobao-item.1&ie=utf8&initiative_id=tbindexz_20170306"}
	,{"id": "Panduoduo",
      "type": "all",
	  "url": "http://www.panduoduo.net/s/name/%s"}
    ,{"id": "Sosuopan",
      "type": "all",
	  "url": "http://www.sosuopan.com/search?q=%s"}
	,{"id": "Whois",
	  "type": "all",
	  "url": "http://whois.chinaz.com/%s"}
	,{"id": "Ip",
	  "type": "all",
	  "url": "http://ip.tool.chinaz.com/%s"}
	,{"id": "Filesloop",
	  "type": "all",
	  "url": "http://www.filesloop.com/search/%s"}
	,{"id": "Cmd5",
	  "type": "all",
	  "url": "http://www.cmd5.com/"}
	 ,{"id": "Opcrack",
	  "type": "all",
	  "url": "https://www.objectif-securite.ch/en/ophcrack.php"}
	 ]
//https://chrome.google.com/webstore/search/timeStats

chrome.contextMenus.onClicked.addListener(function(info,tab){
	//alert("info: " + JSON.stringify(info));  
    //alert("tab: " + JSON.stringify(tab)); 
	item = links.find(function(x) {
		return x.id == info.menuItemId;
	})
	if (item != undefined) {
		if (info.selectionText || info.frameUrl || info.pageUrl) {
			checkUrl = item.url.replace(/%s/,info.selectionText);
		}
		/*
		else if (info.linkUrl) {
			checkUrl = info.linkUrl;
		}
		else if (info.frameUrl) {
			checkUrl = info.frameUrl;
		}
		*/
		chrome.tabs.create({
			'url': checkUrl
		});
	}
	
});



links.forEach(function(value,index,array){
	if(value.type === "all"){
		chrome.contextMenus.create({
			//"type": "checkbox",
			'title': "Search in "+value.id+ ' -> "%s"' ,
			'contexts': ["page", "selection"], //, "image", "link"],  // ['all'],
			'id' : value.id //,
			//documentUrlPatterns:['http://*/*'],  //选中文本的时候出不来 
			//'onclick': contextMenuHandler
		});
	}
});
var parents = chrome.contextMenus.create({"title":"我的右键菜单","contexts":["page","selection"],});
var child1 = chrome.contextMenus.create(
  {"title": "我的右键菜单的第一个子菜单", "parentId": parents, "onclick": selectionOnClick,"contexts":["selection"],});
var child1 = chrome.contextMenus.create(
  {"title": "我的右键菜单的第二个子菜单", "parentId": parents, "onclick": selectionOnClick,"contexts":["selection"],});


//图标上的数字
var clicks = 0;
chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
	if (tab.status === 'loading') {
		//chrome.browserAction.disable(tabId);
		chrome.browserAction.setBadgeText({
			text: (++clicks).toString()
		});
		chrome.browserAction.setBadgeBackgroundColor({
			//color: '#000'
		});
	}
});

chrome.tabs.onActivated.addListener(function (activeInfo) {
	if (activeInfo.tabId) {
		chrome.tabs.get(activeInfo.tabId, function (tab) {
			//updateBrowserAction(tab.id, tab.url);
		});
	}
});

// Cleanup the variables when a tab is closed
chrome.tabs.onRemoved.addListener(function (id) {
	//
});

/*
* Inject cssviewer.js/cssviewer.css into the current page
*/
chrome.browserAction.onClicked.addListener(function(tab) {
 // chrome.tabs.insertCSS(tab.id, { file: "combined.css" });
 // chrome.tabs.executeScript(tab.id, { file: "combined.js" });
});


