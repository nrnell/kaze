let data = {}
if (!localStorage.hasOwnProperty("json")) {
    data["uuid"] = crypto.randomUUID()
    data["name"] = prompt("名前決めろ")
    localStorage.setItem("json",JSON.stringify(data));
}