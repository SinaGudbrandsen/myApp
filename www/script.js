// create object containing information on each plant

plants = [
    {name: 'monstera' , water: 2, fertil: 1},
    {name: 'bregne', water: 2, fertil: 1},
    {name: 'smaragdpalme', water: 1, fertil: 1}, 
    {name: 'arekapalme', water: 1, fertil: 1}, 
]


// check if users input exists in objects and open new html if that is the case
function outputname() {
    
    var plant = document.getElementById('form1'); 
    
    var x = plant.elements["addPlants"].value;    

    for (var i = 0; i < plants.length; i++){

        if (x == plants[i].name){

             console.log('its a match'); 
         
             window.open('file:///Users/sinahoelstadgudbrandsen/Documents/App_WaterMe/Nettside/myApp/www/plant.html');
    
         }
        else {
            console.log('false'); 
        } 
    }
}

