function Pad(id,len,char) {
 while (id.length < len) {
  id = char + id;
 }
 return id;
}

function UpdateClientTime() {
 var d = new Date();
 var day = Pad((d.getDate())+"",2,"0");
 var month = Pad((d.getMonth() + 1)+"",2,"0");
 var year = Pad((d.getFullYear())+"",4,"0");
 var hours = Pad((d.getHours())+"",2,"0");
 var minutes = Pad((d.getMinutes())+"",2,"0");
 var seconds = Pad((d.getSeconds())+"",2,"0");
 var ct=document.getElementById("clientTime");
 ct.value = year +"-"+ month +"-"+ day +" "+ hours +":"+ minutes +":"+ seconds;
}