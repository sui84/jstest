
function RequestGet(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            try {
                htmlstr = xhr.responseText;
                alert($(htmlstr).find('.search-result').length)
                return  htmlstr;
            }
            catch(error) {
                alert(error);
            }
        }
    }
    xhr.send();
}

/*
异步 - True 或 False？

xmlhttp.open("POST","ajax_test.asp",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("fname=Bill&lname=Gates");

$.get("test.cgi", { name: "John", time: "2pm" },
  function(data,status){
    alert("Data: " + data + "\nStatus: " + status);
    });

$.post("demo_test_post.asp",
  {
    name:"Donald Duck",
    city:"Duckburg"
  },
  function(data,status){
    alert("Data: " + data + "\nStatus: " + status);
  });


*/