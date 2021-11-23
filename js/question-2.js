const apiCall = fetch('https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=2642d44e9faf43be9df0277e0d3b2e0e')
.then(apiResponse => apiResponse.json())
.then(games => {
    games.results.forEach((game,index) => {
        if(index < 8){
        console.log(game)
        output(game)
        }
    });
})

function output (game) {
    const wrapper=document.createElement("div")
    const name = document.createElement("p");
    const rating = document.createElement("p");
    const tags  = document.createElement("p");

    name.innerHTML= `Name: ${game.name}`
    rating.innerHTML = `Rating: ${game.rating}`
    tags.innerHTML = `Tags: ${game.tags.length}`

    wrapper.appendChild(name);
    wrapper.appendChild(rating);
    wrapper.appendChild(tags);

    document.getElementById('gameWrapper').appendChild(wrapper)

}
