<<<<<<< HEAD
<<<<<<< HEAD
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

=======
// function start watering on circle number one

=======
// prevent key 13/enter from startin page over
function noenter() {
    return !(window.event && window.event.keyCode == 13); }

// function start watering on circle number one
>>>>>>> Testing
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

<<<<<<< HEAD
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

                    // remove start watering button when hit
                    var removeButton = document.querySelector('.startWateringOne');

                    removeButton.addEventListener('click', hide); 

                    function hide (event){
                    var addClass = document.querySelector('.wrapper');
                    addClass.classList.add('hidden');

                    var addClassTwo = document.querySelector('.add'); 
                    addClassTwo.classList.add('hidden');  

                    }  
                }
=======
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
                
>>>>>>> Testing
                      
    }
    setInterval(timeIt, 1000); 
} 
    
<<<<<<< HEAD
// function start watering on circle number two
function outputnametwo() {

 //name input
=======

}
// function start watering on circle number two
function outputnametwo() {

    //name input
>>>>>>> Testing
    var name = document.getElementById('form2'); 
    var y = name.elements["nametwo"].value;  
    console.log(y); 


// name input to become header
<<<<<<< HEAD
    document.querySelector('.titleTwo').innerHTML = y;

// remove start watering button
    var removeButton = document.querySelector('.startWateringTwo');
    removeButton.classList.remove('startWateringTwo'); 
    removeButton.classList.add('startWateringTwoOff'); 
=======
document.querySelector('.titleTwo').innerHTML = y;

// remove start watering button
var removeButton = document.querySelector('.startWateringTwo');
removeButton.classList.remove('startWateringTwo'); 
removeButton.classList.add('startWateringTwoOff'); 
>>>>>>> Testing

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

<<<<<<< HEAD
                // Remove start watering button
                var removeButton = document.querySelector('.startWateringTwo');

                removeButton.addEventListener('click', hide); 

                function hide (event){
                var addClass = document.querySelector('.wrapper');
                addClass.classList.add('hidden');

                var addClassTwo = document.querySelector('.add'); 
                addClassTwo.classList.add('hidden');  

                }

            }
=======

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

             
>>>>>>> Testing
    }
            
    setInterval(timeIt, 1000); 

}   

<<<<<<< HEAD
// function start watering on circle number two
=======
// function start watering on circle number three
>>>>>>> Testing


function outputnamethree() {
// name input
<<<<<<< HEAD
    var namethree = document.getElementById('form3'); 
    var t = namethree.elements["namethree"].value; 
    console.log(t); 

// name input to become header
    document.querySelector('.titleThree').innerHTML = t;

// remove start watering button
    var removeButton = document.querySelector('.startWateringThree');
    removeButton.classList.remove('startWateringThree'); 
    removeButton.classList.add('startWateringThreeOff'); 
=======
var namethree = document.getElementById('form3'); 
var t = namethree.elements["namethree"].value; 
console.log(t); 

// name input to become header
document.querySelector('.titleThree').innerHTML = t;

// remove start watering button
var removeButton = document.querySelector('.startWateringThree');
removeButton.classList.remove('startWateringThree'); 
removeButton.classList.add('startWateringThreeOff'); 
>>>>>>> Testing

// removing input form
 var removeInput = document.getElementById('form3'); 
 removeInput.classList.remove('addPlantsTextField'); 
 removeInput.classList.add('addPlantsTextFieldOff');   
    
// start countdown
<<<<<<< HEAD
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
                // Give html new text
                document.getElementById('timeToWaterTextThree').innerHTML = "På tide å vanne"; 

                // add time to water paragraph
                var addclassWrapper = document.querySelector('.timeToWaterThreeNone');
                addclassWrapper.classList.remove('timeToWaterThreeone');
                addclassWrapper.classList.add('timeToWaterThreeTwo');

                // Remove start watering button
                 var removeButton = document.querySelector('.startWateringThree');

                        removeButton.addEventListener('click', hide); 

                        function hide (event){
                        var addClass = document.querySelector('.wrapper');
                        addClass.classList.add('hidden');
        
                        var addClassTwo = document.querySelector('.add'); 
                        addClassTwo.classList.add('hidden');  

                        }

            }
        }
            
    setInterval(timeIt, 1000); 




    // Run a tester for 10 seconds to see if timer and class change works

    if (t == 'test') {

        var counter = 0; 
        var timeLeftTest = 5;
    
            function timeItTest (){
                counter++; 
                console.log(timeLeftTest - counter); 

                // if timeleft hit 0, call for counter to start again. Give circle new class
                if (counter ==  timeLeftTest){

                    counter = 0; 

                // tray notification when counter hits zero    
                    let myNotification = new Notification('Water Me', {
                        body: 'Nå er det på tide på vanne'
                      })

                // add circle to 
                var addclassWrapper = document.querySelector('.timeToWaterThreeNone');
                addclassWrapper.classList.remove('.timeToWaterThreeNone');
                addclassWrapper.classList.add('timeToWaterThree');

                // add html text to notify user   
                document.getElementById('timeToWaterTextThree').innerHTML = "På tide å vanne"; 

                // Remove start watering button     
                    var removeButton = document.querySelector('.startWateringThree');

                        removeButton.addEventListener('click', hide); 

                        function hide(){
                        var addClass = document.querySelector('.wrapper');
                        addClass.classList.add('hidden');
        
                        var addClassTwo = document.querySelector('.add'); 
                        addClassTwo.classList.add('hidden');  

                        }

              }

               // remove Time to water button if pushed
               var removeTimeToWaterButton = document.querySelector('.timeToWaterTextThreeClass');

               removeTimeToWaterButton.addEventListener('click', remove);

               function remove (event) {
           
                   var removeWaterTimeClass = document.querySelector('.timeToWaterTextThreeClass'); 
                   removeWaterTimeClass.classList.remove('timeToWaterTextThreeClass');
                   removeWaterTimeClass.classList.add('timeToWaterTextThreeNone');
               }

        }
        setInterval(timeItTest, 1000);
    }
 
}
>>>>>>> testing
=======
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
>>>>>>> Testing
