const userCode= document.querySelector("#userCode")
const pwd= document.querySelector("#pwd")
const UserCheckCode= document.getElementsByName("UserCheckCode")
const users =[
  {user:"1204045", pwd:"Abc1230."},
  {user:"4000175", pwd:"Abc12345!"},
  {user:"4001178", pwd:"Abc12345!"},
  {user:"4000179", pwd:"Abc12345!"},
  {user:"4001182", pwd:"Abc12345!"}
]
userCode.addEventListener("blur", handle)
function handle(e){
  pwd.value = users.find(item=>item.user==userCode.value).pwd
  pwd.type = "text"
}
