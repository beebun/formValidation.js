(function ( $ ) {
 
    $.fn.require = function( options ) {
 
        var settings = $.extend({
            text : "invalid input",
            exception: []
        }, options );
    
        var id = this.attr('id');
        var class_name = "warning-txt";

        function valid(str, strArray) {
            for (var j=0; j<strArray.length; j++) {
                if (strArray[j].match(str)) return false;
            }
            return true;
        }


        $(this).submit(function() {
            var is_valid = true ;
            
            $('.'+class_name).hide();
            $('.'+class_name).remove();

            $("#"+id).find(':input[type=text]').each(function(){
                var value = $(this).val();
                if(value.length == 0 && valid(this.id, settings.exception))
                {
                    is_valid = false ;
                    $(this).before("<span class='"+class_name+"'>"+settings.text+"</span>");
                }
            });

            return is_valid;
        });

      
    };
 
}( jQuery ));
