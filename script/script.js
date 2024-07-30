let game = [

    [ // ステータス
    ],

    [ // レリック
    ],

    [ // スキル　NAME,TAG,CT
        ['攻撃','アタック',3],['防御','ブロック',5]
    ]

];

let save = {};
if(!localStorage.hasOwnProperty('save')){
    save['uuid'] = crypto.randomUUID();
    save['name'] = null;
    save['stts'] = {'hp':[100,1],'atk':[1,1],'def':[1,1],'mov':1}; // 実数・倍率
    save['skil'] = [[0,0],[1,0]]; // ID・CT
    save['buff'] = {'atk':[0,0],'def':[0,0],'mov':0,'skil':[[]]}; // 倍率・実数
    while(!save['name']){save['name'] = prompt('ユーザー名');};
    localStorage.setItem('save',JSON.stringify(save));
};
save = JSON.parse(localStorage.getItem('save'));
let delay = 1;
function auto(){
    document.querySelector('h1').textContent = '';
    save['skil'] = save['skil'].map(function(e){
        if(e[1]>0){
            e[1]-=1;
        }else{
            e = [e[0],skil(e[0])];
        };
        document.querySelector('h1').textContent += e[1] + '　';
        return e;
    });
    if(true){
        delay = save['stts']['mov'] - save['buff']['mov'];
        if(delay<0){delay=0;};
        setTimeout(auto,1000*delay);
    };
};
function skil(e){
    e = game[2][e];
    console.log(save['name']+' の '+e[0]);
    return e[2];
};
// save['skil'] = save['skil'].map(function(e){e[1]=0;return e;});
auto()