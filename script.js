const memeImage = document.getElementById('meme-img');
const memeButton = document.getElementById('btn-meme');


memeButton.addEventListener('click', fetchMemeImage);

function fetchMemeImage() {
    let clientID = "7X1Bq7VBMovLbx4u5uoA15AoSjME2KTHkcmQu0q_FDo";
    let endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;

    let imageElement = document.querySelector("#unplashImage");
    let imageLink = document.querySelector("#imageLink");

    fetch(endpoint)
        .then((response) => response.json())
        .then((jsonData) => {
            imageElement.src = jsonData.urls.regular;
            imageLink.setAttribute("href", jsonData.links.html);

        })
        .catch((error) => {
            console.log("Error: " + error);

    });

}


