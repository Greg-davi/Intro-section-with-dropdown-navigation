/* When the user clicks on the button,
/*toggle between hiding and showing the dropdown content */

function myFeatureFunction() {
  document.getElementById("myFeatureDropdown").classList.toggle("show");
  document.getElementById("feature-img").src = "./images/icon-arrow-up.svg";
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#feature')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];        
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');          
      }
    }
  }
}





function myCompanyFunction() {
  document.getElementById("myCompanyDropdown").classList.toggle("show");
  
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#company')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];        
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');          
      }
    }
  }
}






const mobile = document.querySelector('.mobile-container');
document.getElementById('burger').addEventListener('click', function(){
  mobile.classList.toggle('show');
})

document.getElementById('close-btn').addEventListener('click', function(){
  mobile.classList.remove('show');
})





// Mobile JS
function myMobileFunction() {
  document.getElementById("mobile-feature").classList.toggle("shower");
  
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#company')) {
    var dropdowns = document.getElementById('mobile-feature');
    
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];        
      if (openDropdown.classList.contains('shower')) {
        openDropdown.classList.remove('shower');          
      }
    }
  }
}


function myCompanyFunction() {
  document.getElementById("mobile-company").classList.toggle("shower");
  
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#company')) {
    var dropdowns = document.getElementById('mobile-company');
    
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];        
      if (openDropdown.classList.contains('shower')) {
        openDropdown.classList.remove('shower');          
      }
    }
  }
}
