window.onload = function MainLoad() {

    //get url params
    let params = new URLSearchParams(window.location.search);
    let rating = params.get("rating");

    //insert into html
    let ratingtxt = document.createElement("p");
    ratingtxt.textContent = rating;
    ratingtxt.classList.add("il-text");

    let beforetxt = document.querySelector(".il-text");

    beforetxt.insertAdjacentElement("afterend", ratingtxt);
}
