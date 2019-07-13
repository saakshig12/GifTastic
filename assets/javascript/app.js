

var topDestinations = ["Singapore", "Thailand", "China", "Germany", "HongKong"];

            function renderButtons() {


                $("#buttons-view").empty();

                for (var i = 0; i < destination.length; i++) {


                    var a = $("<button>");
                    a.addClass("destinations");
                    a.attr("data-name", topDestinations[i]);
                    a.text(topDestinations[i]);
                    $("#buttons-view").append(a);
                }
            }

            $("button").on("click", function() {
                var person = $(this).attr("data-destination");
          
                var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                  destination + "&api_key=4iN4egUVS1L7wWP1Uc72DV5lPN6Ncjpz";
          
                $.ajax({
                  url: queryURL,
                  method: "GET"
                })

                renderButtons();
            });

            renderButtons();
