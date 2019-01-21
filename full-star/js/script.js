let stars = document.querySelectorAll(".fa-star");
let starNo = 1;
let isStarred = false;
let rating = 0;

for (let star of stars) {
    // Register a mouseover event on each star
    star.addEventListener("mouseover", (e) => {
        // if ((starNo !== parseInt(star.className.match(/\d/g)[0])) && isStarred) {
            // let previousStarNo = starNo - 1;
            starNo = parseInt(star.className.match(/\d/g)[0]);
            for (let i = starNo - 1; i >= rating; i--) {
                stars[i].classList.add("star-highlighted");
            }
        // }
        
    }, false);
   
    // Register a click event on each star
    star.addEventListener("click", (e) => {
        
        if (rating === starNo || rating === 0) {
            isStarred = !isStarred;
            // If we have starred the stars from 0 to n
            rating = isStarred ? starNo : 0;
        } else if (rating > starNo) {
            for (let i = rating - 1; i >= starNo; i--) {
                stars[i].classList.remove("star-highlighted");
            }
            rating = starNo;
        } else if (rating < starNo) {
            for (let i = rating - 1; i >= starNo; i--) {
                stars[i].classList.add("star-highlighted");
            }
            rating = starNo;
        }
        
    }, false);

}

document.getElementById("fiveStarsRating").addEventListener("mouseout", (e) => {
    if (!isStarred) {
        for (let i = starNo - 1; i >= 0; i--) {
            stars[i].classList.remove("star-highlighted");
        }
    } else {
        for (let i = rating; i <= 4; i++) {
            stars[i].classList.remove("star-highlighted");
        }
    }
}, false);