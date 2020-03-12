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

//create
  // code goes here

//update
  // code goes here

//delete
  // code goes here

//clear everything
  // code goes here

// key exists? 
  // code goes here


///////////////////////////////////////////
$(document).ready(function() {

  // read all data from local storage
  var localStorageHTML = '';

  // TODO add delete button with key? attached so inline deleting is possible. 
  for(var n = 0; n < localStorage.length; n++) {
    // format data into html string
    localStorageHTML = localStorageHTML + `<div>${localStorage.key(n)}: ${localStorage.getItem(localStorage.key(n))}</div>`
  }
  $('.display').html(localStorageHTML); // pass formated data to .html()

  $('.btn-create').on('click', function(e) { 
    console.log(e);
    // click event listener for create
      // read value from input boxes
      var inputKey = $('.inp-key').val();
      var inputValue = $('.inp-value').val();
      localStorage.setItem(inputKey, inputValue);
      // set item in local storage
          // local storage needs key and value

  });

 // click event listener for delete
   $('.btn-delete').on('click', function(e){
    var inputKey = $('.inp-key').val();
    localStorage.removeItem(inputKey);
   });
 
});
