// start of code

var plants = new Array (
    'monstera', 
    'bregne', 
    'elefantfot', 
    'vindusblad',
); 

function search() {

    var txt = document.getElementById('addPlantsTextField').value; 

    var index = plants.indexOf(txt);

    if(index == -1){
        alert ('its here'); 
    }

}