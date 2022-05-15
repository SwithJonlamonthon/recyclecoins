
var obj = new Object();
obj = {
  "iron" : {
    "Price" : 10,
    "coin" : 0.00002
  },

"glass" : {
    "Price" : 5,
    "coin": 0.00001
},
"paper" : {
    "Price" : 0.5,
    "coin": 0.00001
},
"scrapiron" : {
    "Price" : 40,
    "coin": 0.00003
},
"glassbottle" : {
    "Price" : 10,
    "coin": 0.00002
},
"plasticbottle" : {
    "Price" : 10,
    "coin": 0.00002
},
"can" : {
    "Price" : 40,
    "coin": 0.00003
},
"Pl" : {
    "Price" : 10,
    "coin": 0.00002
}
}
document.getElementById("input1").onkeyup = function() {populate()};
document.getElementById("input2").onkeyup = function() {populate()};
document.getElementById("input3").onkeyup = function() {populate()};
var si = document.getElementById("profile-icon")
            var re = document.getElementById("register")
            var icon = document.getElementById("profile")
            document.getElementById("signup").addEventListener("click", clicksignup);
            function clicksignup() {
   
            si.classList.add("notlogin");
            re.classList.remove("notlogin");
            icon.classList.add("notlogin")
            re.classList.add("login");
    

            }





  
  
  

        function populate(opt1){
            var opt1 = document.getElementById("opt1").value;
            var opt2 = document.getElementById("opt2").value;
            var n1 = document.getElementById("input1").value;
            var n2 = document.getElementById("input2").value;
            var n3 = document.getElementById("input3").value;
          
            if(opt1 == "Iron"){
                var s = obj.iron.Price ;
                var y = n1 * s;
                var z = n1 * obj.iron.coin;
            }
            else if(opt1 == "Pl"){
                var s = obj.Pl.Price;
                var y = n1 * s;
                var z = n1 * obj.Pl.coin;
            }
            else if(opt1 == "Glass"){
                var s = obj.glass.Price;
                var y = n1 * s;
                var z = n1 * obj.glass.coin;
            }
            else if(opt1 == "Paper"){
                var s = obj.paper.Price;
                var y = n1 * s;
                var z = n1 * obj.paper.coin;
            }
            else if(opt1 == "Scrap iron"){
                var s = obj.scrapiron.Price;
                var y = n1 * s;
                var z = n1 * obj.scrapiron.coin;
            }
            else if(opt1 == "Glass bottle"){
                var s = obj.glassbottle.Price;
                var y = n1 * s;
                var z = n1 * obj.glassbottle.coin;
            }
            else if(opt1 == "Plastic bottle"){
                var s = obj.plasticbottle.Price;
                var y = n1 * s;
                var z = n1 * obj.plasticbottle.coin;
            }
            else if(opt1 == "Can"){
                var s = obj.can.Price;
                var y = n1 * s;
                var z = n1 * obj.can.coin;
            }
            
            document.getElementById("opt2").value = s
            document.getElementById("input2").value = y
            document.getElementById("input3").value = z;

        }
       
            var table = document.getElementById("table");

         // check the empty input
            function checkEmptyInput()
            {
                var isEmpty = false,
                    n1 = document.getElementById("input1").value;

                    if(n1 === ""){
                    alert("Weight Cannot Be Empty");
                    isEmpty = true;
                }
                
                return isEmpty;
            }
            
            // add Row
            function addHtmlTableRow()
            {
                
                if(!checkEmptyInput()){
                var newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    cell4 = newRow.insertCell(3),
                    cell5 = newRow.insertCell(4),
                    opt1 = document.getElementById("opt1").value,
                    opt2 = document.getElementById("opt2").value,
                    n1 = document.getElementById("input1").value,
                    n2 = document.getElementById("input2").value;
                    n3 = document.getElementById("input3").value;
            
                cell1.innerHTML = opt1;
                cell2.innerHTML = opt2;
                cell3.innerHTML = n1;
                cell4.innerHTML = n2;
                cell5.innerHTML = n3;
                
                }
            }
            
          
            
            function sum() {
            var table = document.getElementById("table"), sumVal = 0, weightVal = 0, coinVal = 0;
           
            
            for(var i = 1; i < table.rows.length; i++)
            {
                sumVal = sumVal + parseInt(table.rows[i].cells[3].innerHTML);
                weightVal = weightVal + parseFloat(table.rows[i].cells[2].innerHTML);
                coinVal = coinVal + parseFloat(table.rows[i].cells[4].innerHTML);
            }
            
            document.getElementById("s_tot").innerHTML =  sumVal + "bath";
            document.getElementById("w_tot").innerHTML =  weightVal + "kg";
            document.getElementById("c_tot").innerHTML =  coinVal.toFixed(6) + "coin";
           
            }

            
           