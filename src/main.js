import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

document.head.insertAdjacentHTML("beforeend", `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,500&display=swap" rel="stylesheet">`)

export const BASE_URL = "https://pixabay.com/api/";
export const API_KEY = "46106680-1f6bf9cc8c5ebc2359fb269e0";

const ul = document.querySelector(".gallery");
const btn = document.querySelector(".btn");
const form = document.querySelector(".container");
const loader = document.querySelector(".div-loader");


export function fetchData(searchQuery) {
const urlParams = new URLSearchParams({ q: searchQuery, image_type: "photo", orientation: "horizontal", safesearch: "true" });

return fetch(`${BASE_URL}?key=${API_KEY}&${urlParams}`).then(response => {
        if (!response.ok) {
            throw new Error('Sorry, there are no images matching your search query. Please try again!');
        }
        return response.json();
    })
}


function showErrorMessage(message) {
    iziToast.error({
        title: 'Error',
        message,
    });
}

function toggleLoader(show) {
    loader.style.visibility = show ? "visible" : "hidden";
}

function checkForm(event) {
    event.preventDefault();
    
    const form = event.currentTarget;
    const searchQuery = form.elements.query.value.trim();

    if ( !searchQuery) {
        showErrorMessage('Sorry, there are no images matching your search query. Please try again!');
        return;
    }

    ul.innerHTML = "";
    toggleLoader(true);
    btn.disabled = true;
  

    fetchData(searchQuery).then(data => {
       if (data.hits.length === 0) {
           showErrorMessage('Sorry, there are no images matching your search query. Please try again!');
            return;
        }
 
        const images = data.hits;
        const imagesMarkup = images.map(renderMarkup).join("");
        ul.insertAdjacentHTML("beforeend", imagesMarkup);
        lightbox.refresh();
        form.reset();
    })
        
        .catch(error => {
        showErrorMessage(error.message);
        })
        
        .finally(() => {
        toggleLoader(false)
        btn.disabled = false;
    });
  
    function renderMarkup({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) {
        return `<li class="image">
        <a class = "gallery-link" href = "${webformatURL}">  
        <img src = "${largeImageURL}" alt = "${tags}" />
        </a>
        <div class = "card-body">   
          <p class="text">Likes <span class = "value">${likes}</span></p>
          <p class="text">Views <span class = "value">${views}</span></p>
          <p class="text">Comments <span class = "value">${comments}</span></p>
          <p class="text">Downloads <span class = "value">${downloads}</span></p>
          </div>
        </li>`;
 
    }
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',        
    captionPosition: 'bottom',  
    captionDelay: 250, 
});

form.addEventListener("submit", checkForm);