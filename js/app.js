window.Chat = {
	socket: null,
	url: 'ws://192.168.0.102:8088/ws',
	init: function() {
		if (window.WebSocket) {
			if (Chat.socket && Chat.socket.readyState) {
				return;
			}
			Chat.socket = new WebSocket(Chat.url);
// 			Chat.socket.onopen = function() {
// 				console.log("已成功建立连接")
// 			}
// 			Chat.socket.onclose = function() {
// 				console.log("连接已关闭");
// 			}
// 			Chat.socket.onmessage = function(e) {
// 				console.log("接收到消息:" + e.data);
// 				var msgDiv = document.getElementById("msg");
// 				msgDiv.innerHTML += "<br>接收到服务器消息:" + e.data;
// 			}
		} else {
			alert("浏览器不支持webSocket");
		}
	},
	setLocal: function(key, value) {
		localStorage.setItem(key, value);
	},
	getLocal: function(key) {
		return localStorage.getItem(key)
	},
	toEnd: function() {
		document.getElementById("end").scrollIntoView();
	}
	
// 	send: function() {
// 		var text = document.getElementById("sendText").value;
// 		socket.send(text);
// 	}

// 前端缓存群聊消息 每次加载进来后加载群聊消息
}