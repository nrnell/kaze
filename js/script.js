let data = {};
if(!localStorage.hasOwnProperty('kaze')){
    data['uuid'] = crypto.randomUUID();
    data['name'] = null;
    while(!data['name']){data['name'] = prompt('ユーザー名');};
    localStorage.setItem('kaze',JSON.stringify(data));
};
data = JSON.parse(localStorage.getItem('kaze'));
const socket = new WebSocket(location.host);
socket.onopen = function(e){
    console.log('接続成功');
};
socket.onerror = function(e){};
socket.onmessage = function(e){console.log(e.data);};
socket.onclose = function(){};
let form = document.querySelector('.chat');
form.onsubmit = function(e){
    e.preventDefault();
    socket.send(form.message.value);
};