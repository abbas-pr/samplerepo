var popoverlay=document.querySelector(".overlay")
var box=document.querySelector(".popbox")
var plus=document.getElementById("add-pop")

plus.addEventListener("click",function()
{
    popoverlay.style.display="block"
    box.style.display="block"
})
var cansl=document.getElementById("cancel")
cansl.addEventListener("click",function(event){
   event.preventDefault()
    popoverlay.style.display="none"
    box.style.display="none"
})
var addbook=document.getElementById("addb")
var cont=document.querySelector(".box")
var title=document.getElementById("bookt")
var disc=document.getElementById("bookd")
var author=document.getElementById("booka")
addbook.addEventListener("click",function(event){
    event.preventDefault()
   var div=document.createElement("div")
   div.setAttribute("class","book")
   div.innerHTML=`<h2>${title.value}</h1>
                <h5>${author.value}</h5>
                <p>${disc.value}</p>
                <button onclick="dlt(event)">delete</button>
            </div>
        `
   cont.append(div)
   popoverlay.style.display="none"
    box.style.display="none"
})
function dlt(event)
{
    event.target.parentElement.remove()
}