$(function() {
  $(".devoured").on("click", function(event) {
    var idburguer = $(this).data("id");
    var devoured = 1
    var devouredStatus = {
      devoured: devoured
    };
    $.ajax("/api/burguer/" + idburguer, {
      type: "PUT",
      data: devouredStatus
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    if($("#burguerName").val().trim() !== "")
    {
      var newBurguer = {
        burguer_name: $("#burguerName").val().toUpperCase().trim(),
        devoured: 0
      };
      $.ajax("/api/burguer", {
        type: "POST",
        data: newBurguer
      }).then(
        function() {
          location.reload();
        }
      );
    }
  });

  $(".deleteBurguer").on("click", function(event) {
    var idburguer = $(this).data("id");
    $.ajax("/api/burguer/" + idburguer, {
      type: "DELETE"
    }).then(
      function() {
        location.reload();
      }
    );
  });
});
