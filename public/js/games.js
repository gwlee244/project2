// GET route for games from game database
$.get("/api/games", (data) => {
if (data.length !== 0) {
for (var i = 0; i < data.length; i++) {
    let card = $(`
        <div class="col-1-of-2">
        <button class="remove btn btn-danger" data-id="${data[i].id}">Delete</button>
            <div class="game-card">
                <div class="game-card__side game-card__side--front">

                    <div class="game-card__game-details">
                        <div class="game-card__game-details--button-top">
                            <span class="game-details game-details--location">${data[i].location}</span>
                            <span class="game-details game-details--icon">${moment(data[i].time, "hh:mm A").format("hh:mm A")}</span>
                            
                        </div>
                        <div class="game-card__container">
                            <div class="col-1-of-3">
                                <span class="game-details game-details--sub">${moment(data[i].date).format("MMMM")}</span>
                                <span class="game-details game-details--main">${moment(data[i].date).format("DD")}</span>
                            </div>
                            <div class="col-1-of-3">
                                <span class="game-details game-details--sub">Max</span>
                                <span class="game-details game-details--main">${data[i].max_players}</span>
                            </div>
                            <div class="col-1-of-3">
                                <span class="game-details game-details--sub">Open</span>
                                <span class="game-details game-details--main">${data[i].max_players}</span>
                            </div>
                            
                        </div>

                        <div class="game-card__game-details--button-bottom">&nbsp;</div>
                    </div>
                
                    <div class="game-card__picture">
                        <div class="game-card__picture--1">&nbsp;</div>
                    </div>

                </div>

                <div class="game-card__side game-card__side--back game-card__side--back-1">
                    <div class="game-card__cta">
                        <div class="col-1-of-3">
                            <span class="game-details game-details--icon">Directions</span>
                            <span class="game-details game-details--icon"><i class="fas fa-street-view fa-4x icon-back"></i></span>
                        </div>
                        <div class="col-1-of-3">
                            <span class="game-details game-details--icon">Save</span>
                            <span class="game-details game-details--icon"><i class="far fa-bookmark fa-4x icon-back"></i></span>
                        </div>
                        <div class="col-1-of-3">
                            <span class="game-details game-details--icon">Join</span>
                            <span class="game-details game-details--icon"><i class="fas fa-user-plus fa-4x icon-back"></i></span>
                        </div>
                        
                    </div>
                    
                </div>
                    
            </div>
            
        </div>
        `);
    $(".games-container").prepend(card);
}
}
});

$(".games-container").on("click",".remove", function(event) {
  event.preventDefault();
  const id = $(event.target).data("id");
  console.log(id);
  $.ajax({
    method: "DELETE",
    url: "/api/games/" + id
  })
    .done(function(response) {

      window.location.reload();
    });

});




