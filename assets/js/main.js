window.onload = function(){

    _('.add-task-btn').addEventListener('click', function(ev){
    console.dir(ev);
    });














}// end window.onload

    // FUNCTIONS
    /*
    ? Shortcut for document.querySelector
    @param String
    @return Object
    */
   const _ = (element = '') => document.querySelector(element);
