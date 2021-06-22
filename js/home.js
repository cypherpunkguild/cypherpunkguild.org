$(document).ready(function() {
    var $videoSrc;
    $('.pop').click(function() {
        $videoSrc = $(this).data( "src" );
    });
    
    $('#myModal').on('shown.bs.modal', function (e) {

    $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
    })
      
    $('#myModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src',$videoSrc); 
    }) 
});