import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// export const BASE_URL = "https://pixabay.com/api/";
// export const API_KEY = "46106680-1f6bf9cc8c5ebc2359fb269e0";
// const ul = document.querySelector(".wrapper");
// const urlParams = new URLSearchParams({ q: "", image_type: "photo", orientation: "horizontal", safesearch: "true" })

// export function fetchData(searchQuery) {
//     return fetch(`${BASE_URL}?key=${API_KEY}&${urlParams}`).then(response => {
//         if (!response.ok) {
//             throw new Error('Sorry, there are no images matching your search query. Please try again!');
//         }
//         return response.json();
//     })
// }
// const form = document.querySelector(".container");

// function checkForm(event) {
//     event.preventDefault();
//     const form = event.currentTarget;
//     const { query } = form.elements;
//     fetchData(query.value).then(data => {
//         const imagesMarkup = renderMarkup(data);
//      ul.insertAdjacentHTML("beforeend", dataMarkup);
   
   
// }).catch(error => {
//    iziToast.error({
//     title: 'Error',
//     message: error.message,
// });
// });
  
//     function renderMarkup({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) {
//         return `<li class="image">
//         <img src = "${webformatURL}" alt = "${tags}" />
//         <div class = "card-body">   
//           <p class="text">Likes ${likes}</p>
//           <p class="text">Views ${views}</p>
//           <p class="text">Comments ${comments}</p>
//           <p class="text">Downloads ${downloads}</p>
//           </div>
//         </li>`;

//     }
    
    
//     // if (inputEl.trim() === "") {
//     //     btn.disabled = true;
//     //     return;
//     // }
//     // else {
//     //     btn.disabled = false;
//     // }
// }

// form.addEventListener("submit", checkForm);

// // fetchData(query.value).then(data => {
// //     const { hits } = data;
// //     const dataMarkup = hits.reduce((acc, item) => {
// //         return (acc += `<li class="image">
// //         <img src = "${item.webformatURL}" alt = "${item.tags}" />
// //         <div class = "card-body">   
// //           <p class="text">Likes ${item.likes}</p>
// //           <p class="text">Views ${item.views}</p>
// //           <p class="text">Comments ${item.comments}</p>
// //           <p class="text">Downloads ${item.downloads}</p>
// //           </div>
// //         </li>`);

// //     }, "");
        
// //     ul.insertAdjacentHTML("beforeend", dataMarkup);
   
// // }).catch(error => {
// //     console.error(error.message);
// // });