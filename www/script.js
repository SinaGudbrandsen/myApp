// prevent key 13/enter from startin page over
function noenter() {
    return !(window.event && window.event.keyCode == 13); }

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

                // Tray Notification when counter hits zero
                let myNotification = new Notification('Water Me', {
                body: 'Nå er det på tide på vanne'
                })

                 // Give html new text
                document.getElementById('timeToWaterTextOne').innerHTML = "På tide å vanne"; 

                 // add circle when counter has hit 0
                var addclassWrapper = document.querySelector('.timeToWaterNone');
                addclassWrapper.classList.remove('timeToWaterNone');
                addclassWrapper.classList.add('timeToWater');

               // remove Time to water button if pushed
               var removeTimeToWaterButton = document.querySelector('.timeToWaterTextClass');
               removeTimeToWaterButton.addEventListener('click', remove);

               function remove (event) {
          
                   var removeWaterTimeClass = document.querySelector('.timeToWaterTextOneClass'); 
                   removeWaterTimeClass.classList.remove('timeToWaterTextOneClass');
                   removeWaterTimeClass.classList.add('timeToWaterTextOneNone');

                    var removeRing = document.querySelector('.timeToWater'); 
                   removeRing.classList.remove('timeToWater'); 
                   removeRing.classList.add('timeToWaterNone');
               }
                
                      
    }
    setInterval(timeIt, 1000); 
} 
    

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

                 // Tray Notification when counter hits zero
                 let myNotification = new Notification('Water Me', {
                    body: 'Nå er det på tide på vanne'
                  })

                // Give html new text
                document.getElementById('timeToWaterTextTwo').innerHTML = "På tide å vanne"; 

                // add circle when counter has hit 0
                var addclassWrapper = document.querySelector('.timeToWaterTwoNone');
                addclassWrapper.classList.remove('timeToWaterTwoNone');
                addclassWrapper.classList.add('timeToWaterTwo');


                 // remove Time to water button if pushed
                var removeTimeToWaterButton = document.querySelector('.timeToWaterTextTwoClass');
                removeTimeToWaterButton.addEventListener('click', remove);

                function remove (event) {
           
                    var removeWaterTimeClass = document.querySelector('.timeToWaterTextTwoClass'); 
                    removeWaterTimeClass.classList.remove('timeToWaterTextTwoClass');
                    removeWaterTimeClass.classList.add('timeToWaterTextTwoNone');

                     var removeRing = document.querySelector('.timeToWaterTwo'); 
                    removeRing.classList.remove('timeToWaterTwo'); 
                    removeRing.classList.add('timeToWaterTwoNone');
                }

            }

             
    }
            
    setInterval(timeIt, 1000); 
    
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

// function start watering on circle number three


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

            // Tray Notification when counter hits zero
            let myNotification = new Notification('Water Me', {
                body: 'Nå er det på tide på vanne'
            })
            // add circle to 
             var addclassWrapper = document.querySelector('.timeToWaterThreeNone');
            addclassWrapper.classList.remove('timeToWaterThreeNone');
            addclassWrapper.classList.add('timeToWaterThree');

            // Give html new text
            document.getElementById('timeToWaterTextThree').innerHTML = "På tide å vanne"; 
               
            // remove Time to water button if pushed
          
            var removeTimeToWaterButton = document.querySelector('.timeToWaterTextThreeClass');
            removeTimeToWaterButton.addEventListener('click', remove);

            function remove (event) {
           
                var removeWaterTimeClass = document.querySelector('.timeToWaterTextThreeClass'); 
                removeWaterTimeClass.classList.remove('timeToWaterTextThreeClass');
                removeWaterTimeClass.classList.add('timeToWaterTextThreeNone');

                var removeRing = document.querySelector('.timeToWaterThree'); 
                removeRing.classList.remove('timeToWaterThree'); 
                removeRing.classList.add('timeToWaterThreeNone');
            }
               

        }
    }
            
setInterval(timeIt, 1000); 


// Run a tester for 10 seconds to see if timer and class change works

if (t == 'test') {

    var counter = 0; 
    var timeLeftTest = 10;
    
    function timeItTest (){

        counter++; 
        console.log(timeLeftTest - counter); 

        // if timeleft hit 0, call for counter to start again. Give circle new class
        if (counter ==  timeLeftTest){

            counter = 0; 

        // tray notification when counter hits zero    
        let myNotification = new Notification('Water Me', { body: 'Nå er det på tide på vanne'})
    
        // add circle to 
        var addclassWrapper = document.querySelector('.timeToWaterThreeNone');
        addclassWrapper.classList.remove('timeToWaterThreeNone');
        addclassWrapper.classList.add('timeToWaterThree');

        // add html text to notify user   

        document.getElementById('timeToWaterTextThree').innerHTML = "På tide å vanne"; 

        // remove Time to water button if pushed
        var removeTimeToWaterButton = document.querySelector('.timeToWaterTextThreeClass');
        removeTimeToWaterButton.addEventListener('click', remove);

         function remove (event) {
           
            var removeWaterTimeClass = document.querySelector('.timeToWaterTextThreeClass'); 
            removeWaterTimeClass.classList.remove('timeToWaterTextThreeClass');
            removeWaterTimeClass.classList.add('timeToWaterTextThreeNone');

            var removeRing = document.querySelector('.timeToWaterThree'); 
            removeRing.classList.remove('timeToWaterThree'); 
            removeRing.classList.add('timeToWaterThreeNone');
         }
    }   

}
        setInterval(timeItTest, 1000);
}
 


}
