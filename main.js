var plants = new Array (
    'monstera', 
    'bregne', 
    'elefantfot', 
    'vindusblad',
); 

var el = document.getElementById('plants'); 
console.log(plants[0]);  


function search() {

    var txt = document.getElementById('addPlantsTextField').value; 

    var index = plants.indexOf(txt);

    if(index == -1){
        alert ('its here'); 
    }

}