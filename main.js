
let para1=document.getElementById("para1")
let para2=document.getElementById("para2")
let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")

btn1.addEventListener("click",function(e){
    let f=Number(document.getElementById("f").value);
    let ans=(f-32)*(5/9)
    para1.innerHTML=`celsius = ${ans} degree C`
})

btn2.addEventListener("click",function(e){
    let c=Number(document.getElementById("c").value);
    let ans=(9/5)*c+32
    para2.innerHTML=`celsius = ${ans} degree F`
})