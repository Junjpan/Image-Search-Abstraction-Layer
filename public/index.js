$(document).ready(function(){
    $("#queryForm").submit(function(){
        var query=$("#query").val();
        var number=$("#number").val();
      $(this).attr("action","/api/imagesearch/"+query+"?offset="+number);    
 
    })  
})