let movienameref = document.getElementById("movieName");
let searchbtn = document.getElementById("searchBtn");
let result = document.getElementById("result");



let getmovie = () => {
    let movieName = movienameref.value;
    key = "b8c2fb37";
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class = "msg">Please Enter a Movie Name</h3>`;
    }

    else {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if (data.Response == 'True') {
                    result.innerHTML = `
            <div class = "info">
                    <img src = ${data.Poster} class = "poster">
                <div>
                        <h2>${data.Title}</h2>
                        <div class = "rating">
                                <img src = "./images/366-3660086_rounded-star-icon-svg-hd-png-download.png">
                                <h4>${data.imdbRating}</h4>
                        </div>
                        <div class = "details"> 
                        <span>${data.Rated}</span>
                        <span>${data.Year}</span>
                        <span>${data.Runtime}</span>
                        </div>
                        <div class = "genre"
                              <div>${data.Genre.split(",").join("<div></div>")}</div>
                        </div>
                </div>
            </div>
            <h3>Plot:</h3>
            <p>${data.Plot}</p>
            <h3>Cast : </h3>
            <p>${data.Actors}</p>

            `;
                }
                else {
                    result.innerHTML = `<h3 class = "msg">${data.error}</h3>`;
                }
            })
            .catch(() => {
                result.innerHTML = `<h3 class = "msg">error occured</h3>`;
            })
    }
};

searchbtn.addEventListener("click", getmovie);

window.addEventListener("load", getmovie);