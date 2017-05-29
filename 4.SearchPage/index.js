$(document).ready(function(){
    $("#clearButton").hide();
    
    // search 
    $("#searchButton").on("click", function(){
        var keyword = $("#search").val();
        
        // change keyword to lowercase
        var loKeyword = keyword.toLowerCase();
        
        // error
        var error = "Sorry, your keyword does not match with any tour.Please try with another keyword.";
    
        // fetch data
        $.getJSON('data.json',  function(data) {
        for (var i =0; i< data.tours.length; i++){
        var title = data.tours[i].title;
        
        // change title to lowercase
        var loTitle = title.toLowerCase();
        
        if(loTitle.match(loKeyword)){
            $("#result").prepend("<div>" + data.tours[i].title + " " + data.tours[i].currency + data.tours[i].price + "</div>" );
        } 
        }
        
        // if input field is empty, show alert message 
        if (keyword == ""){
             $("#result div").remove();
             alert("Please type keyword");
         }
     
     $("#searchButton").hide();
     $("#clearButton").show();
    });  
    
    }); 
    
    // enable enter key for a click effect   
     $(".container").keypress(function(e){
         var key = e.which;
         if(key == 13) // enter key code
         {
         $("#searchButton").click();
         return false;
         }
     });
        
    // clear data
    
    $("#clearButton").on("click", function(){
         $("#search").val("");
         $("#result div").remove();
         $("#clearButton").hide();
         $("#searchButton").show();
     })
});
