// recieve input from user in form 1 and 2

function outputwater() {
    
    // water input
    
    var waterIt = document.getElementById('form2'); 
    
    var y = waterIt.elements["water"].value;  
    
    console.log(y); 
    
    
// name input 
    
    var plant = document.getElementById('form1'); 
    
    var x = plant.elements["addPlants"].value;    

    console.log(x); 
    
    
// start timer if user input is 1
    if (y === '1') {
        
        
        var counter = 0; 
        var timeLeft = 604800; 

            function timeIt(){
    
                counter++; 
                console.log(timeLeft - counter); 
                
        var tbl = document.getElementById('headerPlantTwo').innerHTML = x;                       
    }

    setInterval(timeIt, 1000); 
    
    }
    
// start timer if user input is 2     
     if (y === '2') {
        
        
        var counter = 0; 
        var timeLeft = 302400; 

            function timeIt(){
    
                counter++; 
                console.log(timeLeft - counter); 
    }
                
    setInterval(timeIt, 1000); 
    
    } 
    
 }   


    // add no display class to wrapper

    var el = document.querySelector('.add'); 
        
    el.addEventListener('click', doSomething); 
        
    function doSomething (event){
        
        var addClass = document.querySelector('.wrapper');
        addClass.classList.add('hidden');
        
        var addClassTwo = document.querySelector('.add'); 
        addClassTwo.classList.add('hidden');
        
// add new classes to plant information
        
        var addclassWrapper = document.querySelector('.wrapperPlantNoDisplay');
        addclassWrapper.classList.remove('wrapperPlantNoDisplay');
        addclassWrapper.classList.add('wrapperPlant');
        
        var addClassHeader = document.querySelector('.headerPlantNoDisplay');
        addClassHeader.classList.remove('headerPlantNoDisplay');
        addClassHeader.classList.add('headerPlant');
        
        var addClassInfoPlant = document.querySelector('.infoPlantNoDisplay');
        addClassInfoPlant.classList.remove('infoPlantNoDisplay');
        addClassInfoPlant.classList.add('infoPlant');
        
        var addClassAddNew = document.querySelector('.addNewNoDisplay');
        addClassAddNew.classList.remove('addNewNoDisplay');
        addClassAddNew.classList.add('addNew');
        
    }  
// open inout form


    
// open new 
var anotherOne = document.querySelector('.addNewNoDisplay');

anotherOne.addEventListener('click', openNewEntry); 

function openNewEntry(event) {

    console.log("fgbdfv");

    var removeClass = document.querySelector('.wrapper');
    removeClass.classList.remove('hidden');

    var addClassTwo = document.querySelector('.add'); 
    addClassTwo.classList.remove('hidden');

    var newPosition = document.querySelector('.wrapperPlant');
    newPosition.classList.remove('wrapperPlant');
    newPosition.classList.add('wrapperPlantPos2');
    
    var div = document.querySelector('.wrapper'),
    clone = div.cloneNode(true); // true means clone all childNodes and all event handlers
    clone.id = "some_id";
    document.body.appendChild(clone);
}

/*var anotherOne = document.querySelector('.addNewNoDisplay');

anotherOne.addEventListener('click', openNewEntry); 

function openNewEntry(event) {

    var div = document.querySelector('.wrapperPlant'),
    clone = div.cloneNode(true); // true means clone all childNodes and all event handlers
    clone.id = "some_id";
    document.body.appendChild(clone);
}
*/

