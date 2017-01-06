var selectAll = document.querySelectorAll(".div_question");
for(var i = 1; i<selectAll.length -1 ; i++ ){
   var random = parseInt(Math.random()*(3-1)+1);
   var tmp = document.getElementById("divquestion" + i).querySelectorAll(".ulradiocheck li")[random-1];
   tmp.querySelectorAll(".jqRadio")[0].click();
}  
