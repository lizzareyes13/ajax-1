$("#fvi-button").on("click", function(){
  console.log("hello");
  $.ajax({
    url: "http://fvi-grad.com/ajax/lesson1.txt",
    success: function(resp, txt, xhr){
        console.log(resp);
        $("p").html(resp);
    }
  })
});
