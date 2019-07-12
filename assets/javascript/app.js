var topDestinations = ["Singapore", "Thailand", "China", "Germany", "HongKong"];

            function renderButtons() {


                $("#buttons-view").empty();

                for (var i = 0; i < movies.length; i++) {


                    var a = $("<button>");
                    a.addClass("destinations");
                    a.attr("data-name", topDestinations[i]);
                    a.text(topDestinations[i]);
                    $("#buttons-view").append(a);
                }
            }

            $("button").on("click", function() {
                // In this case, the "this" keyword refers to the button that was clicked
                var person = $(this).attr("data-person");
          
                // Constructing a URL to search Giphy for the name of the person who said the quote
                var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                  person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
          
                // Performing our AJAX GET request
                $.ajax({
                  url: queryURL,
                  method: "GET"
                })
                
                renderButtons();
            });

            renderButtons();
