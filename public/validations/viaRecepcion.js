$(function (){
 
    $("form").submit(function(e){
        
        var mensaje = ""
        if($("#via_recepcion_nombre").val() == "")
        {
            mensaje = "<div>- Indique el Nombre</div>";
        } 
        if(mensaje == "")
            return true
        
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "showDuration": "20000",
        }
        
        toastr.error(mensaje)
        return false
        
    })
    
    
})