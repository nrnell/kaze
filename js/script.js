let kaze = {};
if(!localStorage.hasOwnProperty('kaze')){
    kaze['uuid'] = crypto.randomUUID();
    kaze['name'] = null;
    kaze['stts'] = {'hp':[100,1],'atk':[1,1],'def':[1,1],'mov':1}; // 実数・倍率
    kaze['skil'] = [{'name':'test','ct':[0,10]}]
    kaze['buff'] = {'atk':[0,0],'def':[0,0],'mov':0}; // 倍率・実数
    while(!kaze['name']){kaze['name'] = prompt('ユーザー名');};
    localStorage.setItem('kaze',JSON.stringify(kaze));
};
kaze = JSON.parse(localStorage.getItem('kaze'));

let delay = 1;
function auto(){
    kaze['skil'] = kaze['skil'].map(function(e){
        if(e['ct'][0]>0){
            e['ct'][0]-=1;
            console.log(e['name']+' : '+e['ct'][0]+' / '+e['ct'][1]);
        };
        return e;
    });
    if(true){
        delay = kaze['stts']['mov'] - kaze['buff']['mov'];
        if(delay<0){delay=0;};
        setTimeout(auto,1000*delay);
    };
};
kaze['skil'] = kaze['skil'].map(function(e){e['ct'][0]=0;return e;});
auto()