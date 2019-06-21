$(document).ready(function(){
    $("#queryForm").submit(function(){
        var query=$("#query").val();
        var number=$("#number").val();
      $(this).attr("action","/"+query+"?offset="+number);    
 //api/imagesearch/
    })  
})