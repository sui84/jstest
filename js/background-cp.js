document.write("<script type='text/javascript' src='js/clipboard.min.js'></script>");  

var get_selection = function() {

    var selection = document.getSelection();
    // console.log(selection)
    var text = selection.toString();

    return text

}

var ltrim_lines = function(str) {
    return str.replace(/^(\s*\n)*/, '');
}

var rtrim = function(str) {
    return str.replace(/[\s\n]*$/, '');
}


function copyTextToClipboard(text,uri) {
    var copyFrom,agent,body;

    copyFrom = document.createElement("a");
    copyFrom.setAttribute("id","target");
    copyFrom.setAttribute("href",uri);
    copyFrom.innerHTML = text;
    agent = document.createElement("button");
    body = document.getElementsByTagName('body')[0];
    body.appendChild(copyFrom);
    body.appendChild(agent);
    // 麻烦：无法传入'.btn'元素 我们可以创建一个btn作为代理
    var clipboard = new ClipboardJS(agent, {
        target: function() {
            return document.querySelector('#target');
        }
    });

    clipboard.on('success', function(e) {
        console.log(e);
    });

    clipboard.on('error', function(e) {
        console.log(e);
    });
    agent.click();
    // copyFrom.focus();
    // copyFrom.select();  // 问题所在 无法对copyFrom对象使用select()方法
    // document.execCommand('copy'); // 采用Clipboard.js方案
    body.removeChild(copyFrom);
    body.removeChild(agent);
    

}

