// index.js




// Callbacks
const handleClick = (ramen) => {
  // Add code
  const nameElement = document.querySelector('.name');
  const restaurantElement = document.querySelector('.restaurant');
  const ratingElement = document.querySelector('#rating-display');
  const commentElement = document.querySelector('#comment-display');
  const detailImageElement = document.querySelector('.detail-image');
  
  nameElement.textContent = ramen.name;
  restaurantElement.textContent = ramen.restaurant;
  ratingElement.textContent = ramen.rating;
  commentElement.textContent = ramen.comment;
  detailImageElement.src = ramen.image;

};

const addSubmitListener = () => {
  // Add code
  const formElement = document.querySelector('#new-ramen');
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const ramName = document.querySelector('#new-name').value;
    const ramRestaurant = document.querySelector('#new-restaurant').value;
    const ramImage = document.querySelector('#new-image').value;
    const ramRating = document.querySelector('#new-rating').value;
    const ramComment = document.querySelector('#new-comment').value;

    const newRamen = {
      name: ramName,
      restaurant: ramRestaurant,
      image: ramImage,
      rating: ramRating,
      comment: ramComment,
    };

  
    const divRamenElement = document.querySelector('#ramen-menu');
    const imgElement = document.createElement('img');
    imgElement.id = 'food-images';
    imgElement.src = newRamen.image;
    divRamenElement.appendChild(imgElement);

    imgElement.addEventListener('click', () => {
      handleClick(newRamen);
    });
  });
}

const displayRamens = () => {
  // Add code
  fetch('http://localhost:3000/ramens')
  .then(response => response.json())
  .then(ramens => {
    const divRamenElement = document.getElementById('ramen-menu');
    
      ramens.forEach(ramen => {
      const imgElement = document.createElement('img');
      imgElement.id = 'food-images'
      imgElement.src = ramen.image;
      divRamenElement.appendChild(imgElement)
      
      imgElement.addEventListener('click', () => {
        handleClick(ramen)
      })
    })
  })
}

const main = () => {
  document.addEventListener('DOMContentLoaded', () => {
  // Invoke displayRamens here
  displayRamens()
  // Invoke addSubmitListener here
  addSubmitListener()
  })
}

main() 

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
