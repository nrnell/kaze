let data = {};
if(!localStorage.hasOwnProperty('kaze')){
    data['uuid'] = crypto.randomUUID();
    data['name'] = null;
    while(!data['name']){data['name'] = prompt('ユーザー名');};
    localStorage.setItem('kaze',JSON.stringify(data));
};
data = JSON.parse(localStorage.getItem('kaze'));
const socket = new WebSocket('https://nrnell.github.io/kaze/');
socket.onopen = function(e){};
socket.onerror = function(e){};
socket.onmessage = function(e){console.log(e.data);};
socket.onclose = function(){};
let form = document.querySelector('.chat');
form.onsubmit = function(e){
    e.preventDefault();
    socket.send(form.message.value);
};