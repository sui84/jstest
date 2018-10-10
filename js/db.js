
//var bg = chrome.extension.getBackgroundPage();
//var offline = bg.offline;
var offline = true;
var db_name="testdb";
var db_desc="testdb desc";
var db_size=2E5; //200000

function opendb() {
	try {
		if (window.openDatabase){
			g_db = openDatabase(db_name, "1.0", db_desc, db_size);
		}
		else
			alert("opendb: open database is not available!")
	} catch (a) {
		alert("opendb: Caught exception while opening database: " + a.message)
	}
	return g_db
}


function saveDataTable() {
	try {
			var db = opendb();
			db.transaction(function (context) {
		           context.executeSql('CREATE TABLE IF NOT EXISTS testTable (id unique, name)');
		           // REPLACE INTO 是删了再加一条，效果不好，出错信息捕捉不到。。。
		       	  //   context.executeSql('REPLACE INTO testTable (id, name) VALUES (8, "Byron5")',[],function () {},function (e, f) {alert(f);});
			        context.executeSql('INSERT INTO testTable (id, name) VALUES (4, "Casper")');
	         });
		} catch (a) {
			alert("opendb: Caught exception while opening database: " + a.message)
		}
}



