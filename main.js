// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const error=document.getElementById('modal');
error.setAttribute('class','hidden');
function removeError(){
  error.removeAttribute('hidden');
}

const heartIcon = document.querySelectorAll('.like-glyph');
const errorModal = document.getElementById('error-modal');
const errorMessage = errorModal.querySelector('.error-message');
heartIcons.forEach(heartIcon => {
  heartIcon.addEventListener('click', () => {
    heartIcon.FULL_HEART;
  });

  heartIcon.addEventListener('dblclick', () => {
   heartIcon.EMPTY_HEART;
  });
});

// When a user clicks on an empty heart
heartIcon.addEventListener('click', () => {
  mimicServerCall()
    .then(() => {
      // When the "server" returns a success status
      // Change the heart to a full heart
      heartIcon.classList.add('activated-heart');
    })
    .catch((error) => {errorModal.classList.remove('hidden');
    // Display the server error message in the modal
    errorMessage.textContent = error;
    // Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
    setTimeout(() => {
      errorModal.classList.add('hidden');
    }, 3000);
  });
});
// When a user clicks on a full heart
heartIcon.addEventListener('dblclick', () => {
// Change the heart back to an empty heart
heartIcon.classList.remove('activated-heart');
});
 


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
