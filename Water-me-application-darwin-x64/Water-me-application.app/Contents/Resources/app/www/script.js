// function start watering on circle number one

function outputname() {
    
// name input
    var waterIt = document.getElementById('form1'); 
    var y = waterIt.elements['addNameOne'].value;  
    console.log(y); 

// name input to become header
    document.querySelector('.titleOne').innerHTML = y; 

// remove 'start watering' button
    var removeButton = document.querySelector('.startWateringOne');
    removeButton.classList.remove('startWateringOne'); 
    removeButton.classList.add('startWateringOneOff'); 

// removing input form
    var removeInput = document.getElementById('form1'); 
    removeInput.classList.remove('addPlantsTextField'); 
    removeInput.classList.add('addPlantsTextFieldOff');
    
    
// start coundown
    var counterOne = 0; 
    var timeLeftOne = 604800; 

            function timeIt(){
    
                counterOne++; 
                console.log(timeLeftOne - counterOne);
                
                if (counterOne == timeLeftOne){

                    counterOne = 0; 

// add circle when counter has hit 0
                    var addclassWrapper = document.querySelector('.timeToWaterNone');
                        addclassWrapper.classList.remove('timeToWaterNone');
                        addclassWrapper.classList.add('timeToWater');
                }
                      
    }
    setInterval(timeIt, 1000); 
} 
    
// function start watering on circle number two
function outputnametwo() {

 //name input
    var name = document.getElementById('form2'); 
    var y = name.elements["nametwo"].value;  
    console.log(y); 


// name input to become header
    document.querySelector('.titleTwo').innerHTML = y;

// remove start watering button
    var removeButton = document.querySelector('.startWateringTwo');
    removeButton.classList.remove('startWateringTwo'); 
    removeButton.classList.add('startWateringTwoOff'); 

// removing input form
var removeInput = document.getElementById('form2'); 
removeInput.classList.remove('addPlantsTextField'); 
removeInput.classList.add('addPlantsTextFieldOff');    

// start countdown
    var counterTwo = 0; 
    var timeLeftTwo = 1209600; 

        function timeIt(){

            counterTwo++; 
            console.log(timeLeftTwo - counterTwo); 

            if (counterTwo == timeLeftTwo){

                counterTwo = 0; 

// add circle when counter has hit 0
                var addclassWrapper = document.querySelector('.timeToWaterTwoNone');
                    addclassWrapper.classList.remove('timeToWaterTwoNone');
                    addclassWrapper.classList.add('timeToWaterTwo');
        
            }
    }
            
    setInterval(timeIt, 1000); 

}   

// function start watering on circle number two
function outputnamethree() {
// name input
    var namethree = document.getElementById('form3'); 
    var t = namethree.elements["namethree"].value; 
    console.log(t); 

// name input to become header
    document.querySelector('.titleThree').innerHTML = t;

// remove start watering button
    var removeButton = document.querySelector('.startWateringThree');
    removeButton.classList.remove('startWateringThree'); 
    removeButton.classList.add('startWateringThreeOff'); 

// removing input form
 var removeInput = document.getElementById('form3'); 
 removeInput.classList.remove('addPlantsTextField'); 
 removeInput.classList.add('addPlantsTextFieldOff');   
    
// start countdown
    var counterThree = 0; 
    var timeLeftThree = 302400; 

        function timeIt(){

            counterThree++; 
            console.log(timeLeftThree - counterThree); 

    // if timeleft hit 0, call for counter to start again. Give circle new class
            if (counterThree == timeLeftThree){

                counterTest = 0; 

                var addclassWrapper = document.querySelector('.timeToWaterThreeNone');
                    addclassWrapper.classList.remove('timeToWaterThreeNone');
                    addclassWrapper.classList.add('timeToWaterThree');

            }
    }
            
    setInterval(timeIt, 1000); 


// Run a tester for 10 seconds to see if timer and class change works

    if (t === 'test'){

        var counterTest = 0; 
        var timeLeftTest = 10; 
    
            function timeIt(){
    
                counterTest++; 
                console.log(timeLeftTest - counterTest); 

                // if timeleft hit 0, call for counter to start again. Give circle new class
                if (counterTest ==  timeLeftTest){

                    counterTest = 0; 

                    var addclassWrapper = document.querySelector('.timeToWaterThreeNone');
                    addclassWrapper.classList.remove('timeToWaterThreeNone');
                    addclassWrapper.classList.add('timeToWaterThree');

                    document.querySelector('.startWateringThree').innerHTML = "På tide å vanne"; 

                    
                    var removeButton = document.querySelector('.startWateringThree'); 
        
                    removeButton.addEventListener('click', hide); 
        
                    function hide (event){
        
                    var addClass = document.querySelector('.wrapper');
                    addClass.classList.add('hidden');
        
                    var addClassTwo = document.querySelector('.add'); 
                    addClassTwo.classList.add('hidden');    
                    

                }
        }
                  
        setInterval(timeIt, 1000);     

    }
}

}