const selectElement = function(element){
    return document.querySelector(element);
};


let body1 = selectElement('.item1');
let body2 = selectElement('.item2');

body1.addEventListener('click', function(){
    
    body1.classList.toggle('stay');
    
    
});

body2.addEventListener('click', function(){
    
        body2.classList.toggle('stay');
    
   
        
    });