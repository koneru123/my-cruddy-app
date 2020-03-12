/*

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)

*/

// Local Storage Utility Functions
//get item
  // code goes here
  var getItem = function(key){
    return window.localStorage.getItem(key);
  }

//create
  // code goes here
  var setItem = function(key, val) {
    return window.localStorage.setItem(key, val);
  }

//update
  // code goes here
  // might not need?

//delete
  // code goes here
  var removeItem = function(key) {
    return window.localStorage.removeItem(key);
  }

//clear everything
  // code goes here
  var clear = function() {
    return window.localStorage.clear();
  }

// key exists? 
  // code goes here
  // might not need?


///////////////////////////////////////////
$(document).ready(function() {

  // read all data from local storage
  var localStorageHTML = '';
 
  for(var n = 0; n < localStorage.length; n++) {
    // format data into html string
    var deleteButton = `<button class="btn-delete" data-key=${localStorage.key(n)}>delete</button>`
    localStorageHTML = localStorageHTML + `<div>${localStorage.key(n)}: ${getItem(localStorage.key(n))}${deleteButton}</div>`
  }
  $('.display').html(localStorageHTML); // pass formated data to .html()

  $('.btn-create').on('click', function(e) { 
    console.log(e);
    // click event listener for create
      // read value from input boxes
      var inputKey = $('.inp-key').val();
      var inputValue = $('.inp-value').val();
      setItem(inputKey, inputValue);
      // set item in local storage
          // local storage needs key and value

  });

 // click event listener for delete
   $('.btn-delete').on('click', function(e){
    removeItem(e.currentTarget.dataset.key)
   });

   // click event for clear 
   $('.btn-clear-all').on('click',  function(){
     clear();
   });
 
});
