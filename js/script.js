let data = {}
if (!localStorage.hasOwnProperty('json')) {
    data['uuid'] = crypto.randomUUID()
    data['name'] = prompt('ユーザー名')
    localStorage.setItem('json',JSON.stringify(data));
}
data = JSON.parse(localStorage.getItem('json'));