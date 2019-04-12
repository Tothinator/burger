$(function() {
    
    $(".eat-burger").on("click", function(event) {
        var id = $(this).data("id");

        var isEaten = {
            eaten: true
        };

        console.log(isEaten);

        $.ajax('/api/burgers/' + id, {
            method: "PUT",
            data: isEaten
        }).then(function() {
            console.log("Burger " + id + "has been eaten");

            location.reload();
        });
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim()
        };

        $.ajax("/api/burgers", {
            method: "POST",
            data: newBurger
        }).then(function() {
            console.log("Created new Burger");

            location.reload();
        })
    })

});