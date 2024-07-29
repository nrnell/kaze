let data = {}
if (!localStorage.hasOwnProperty('kaze')) {
    data['uuid'] = crypto.randomUUID()
    data['name'] = prompt('ユーザー名')
    localStorage.setItem('kaze',JSON.stringify(data));
}
data = JSON.parse(localStorage.getItem('kaze'));