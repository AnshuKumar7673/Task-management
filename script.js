function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    // Pad single digit minutes and seconds with leading zero
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    var timeString = hours + ':' + minutes + ':' + seconds;
    
    document.getElementById('clock').textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();






const inputBox=document.getElementById("input-box");

const listContainer=document.getElementById("list-container");

function addTask(){
     if(inputBox.value==''){
        alert("You must anshu write something");
     }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
     }
     inputBox.value="";
     saveData();
}

listContainer.addEventListener("click",function(e){
if (e.target.tagName==="LI") {
    e.target.classList.toggle("checked");  
    saveData(); 
}else if (e.target.tagName==="SPAN"){
e.target.parentElement.remove();
saveData();
}
},false);
 

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();