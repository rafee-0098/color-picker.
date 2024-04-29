const getcolor=()=>{
  const randomNUM =Math.floor(Math.random()*16777215);
  const randomCode = "#"+ randomNUM.toString(16);
 
 document.body.style.backgroundColor=randomCode;
 document.getElementById("color").innerText = randomCode;
 document.getElementById("btn").style.backgroundColor=randomCode;

}
document.getElementById("btn").addEventListener(
  "click",
  getcolor
)
 getcolor();

