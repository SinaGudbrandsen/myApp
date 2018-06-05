// function start watering on circle number one

function outputname() {
    
    // name input
    
    var waterIt = document.getElementById('form1'); 
    
    var y = waterIt.elements['addNameOne'].value;  
    
    console.log(y); 

    document.querySelector('.titleOne').innerHTML = y; 
    
    
    var counter = 0; 
    var timeLeft = 604800; 

            function timeIt(){
    
                counter++; 
                console.log(timeLeft - counter);   
                      
    }
    setInterval(timeIt, 1000); 
} 
    
// function start watering on circle number two

function outputnametwo() {

    //name input

    var name = document.getElementById('form2'); 
    
    var y = name.elements["nametwo"].value;  
    
    console.log(y); 

    document.querySelector('.titleTwo').innerHTML = y;

    var counter = 0; 
    var timeLeft = 1209600; 

        function timeIt(){

            counter++; 
            console.log(timeLeft - counter); 
    }
            
    setInterval(timeIt, 1000); 

}   


function outputnamethree() {

    var namethree = document.getElementById('form3'); 

    var t = namethree.elements["namethree"].value; 

    console.log(t); 

    document.querySelector('.titleThree').innerHTML = t;

    var counter = 0; 
    var timeLeft = 302400; 

        function timeIt(){

            counter++; 
            console.log(timeLeft - counter); 
    }
            
    setInterval(timeIt, 1000); 
}

