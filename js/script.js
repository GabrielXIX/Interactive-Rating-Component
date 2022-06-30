//elements
const submit = document.querySelector("[data-submit]");
const numbers = document.querySelectorAll("[data-rating]");
const alert = document.querySelector("[data-alert]");

window.onload = function MainLoad() {

    //uncheck every button
    numbers.forEach(e => {

        e.checked = false;
    });
}

//submit
submit.addEventListener('click', e => {

    let rating = 0;

    //get rating
    for(let i = 0; i < numbers.length; i++) {

        if(numbers[i].checked == true) {

            rating = i + 1;
            break;
        }
    }

    //if rating is selected, then pass it through query string
    if(rating != 0) {

        //URL search params
        let params = new URLSearchParams();
        params.append("rating", rating);

        //redirect
        location.href = "ty-state.html?" + params.toString();
    }
    else {

        alert.focus();
    }
});