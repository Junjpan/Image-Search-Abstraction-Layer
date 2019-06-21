$(document).ready(function(){
    $("#queryForm").submit(function(){
        var query=$("#query").val();
        var number=$("#number").val();
      $(this).attr("action","/api/imagesearch/"+query+"?offset="+number);   
    
    })  
   
    $("#button").on('click',function(){
      var query=$("#query").val();
     var number=$("#number").val();
    document.location.href='/api/image/'+query+"?offset="+number
    })

})