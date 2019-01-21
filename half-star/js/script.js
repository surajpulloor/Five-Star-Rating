let halfStars = document.querySelectorAll(".fa-star-half");
let halfStarNo = 1;
let isStarred = false;
let rating = 0;

for (let star of halfStars) {
    // Register a mouseover event on each star
    star.addEventListener("mouseover", (e) => {
        halfStarNo = parseInt(star.className.match(/\d+/g)[0]);
        for (let i = halfStarNo - 1; i >= rating * 2; i--) {
            halfStars[i].classList.add("star-highlighted");
        }
    }, false);
   
    // Register a click event on each star
    star.addEventListener("click", (e) => {
        
        if (rating * 2 === halfStarNo || rating * 2 === 0) {
            isStarred = !isStarred;
            // If we have starred the stars from 0 to n
            rating = isStarred ? halfStarNo / 2 : 0;
        } else if (rating * 2 > halfStarNo) {
            for (let i = (rating * 2) - 1; i >= halfStarNo; i--) {
                halfStars[i].classList.remove("star-highlighted");
            }
            rating = halfStarNo / 2;
        } else if (rating * 2 < halfStarNo) {
            for (let i = (rating * 2) - 1; i >= halfStarNo; i--) {
                halfStars[i].classList.add("star-highlighted");
            }
            rating = halfStarNo / 2;
        }

        
        document.querySelector('#rating').innerHTML = "Rating: " + rating;
        
    }, false);

}

document.getElementById("halfStarRating").addEventListener("mouseout", (e) => {
    if (!isStarred) {
        for (let i = halfStarNo - 1; i >= 0; i--) {
            halfStars[i].classList.remove("star-highlighted");
        }
    } else {
        for (let i = rating * 2; i <= 9; i++) {
            halfStars[i].classList.remove("star-highlighted");
        }
    }
}, false);