(function(j,w,d){
    $.fn.resimage = function(options){
        var settings = $.extend({   
        }, options);
        return this.each(function(){
            var img = $(this);
            if(img.get(0).tagName !== 'IMG' || img.attr('src') == '') return true;
            img.data('orgimage', img.attr('src'));
            $.fn.resimage.udpate(img);
            $(w).resize(function(){
                $.fn.resimage.udpate(img);
            })
        });
    }
    $.fn.resimage.udpate = function(obj){
        var wWidth = $(w).width();
        var image = {
            orignal : obj.data('orgimage'),
            mobile : obj.data('mobile'),
            ipad : obj.data('ipad')
        }
        if(wWidth <= 320){
            if(image.mobile != undefined && image.mobile != ""){
                $.fn.resimage.change(obj, image.mobile);
            }else if(image.ipad != undefined && image.ipad != ""){
                $.fn.resimage.change(obj, image.ipad);
            }else{
                $.fn.resimage.change(obj, image.orignal);
            }
        }else if(wWidth <= 768){
            if(image.ipad != undefined && image.ipad != ""){
                $.fn.resimage.change(obj, image.ipad);
            }else{
                $.fn.resimage.change(obj, image.orignal);
            }
        }else if(wWidth <= 1024){
            if(image.ipad != undefined && image.ipad != ""){
                $.fn.resimage.change(obj, image.ipad);
            }else{
                $.fn.resimage.change(obj, image.orignal);
            }
        }else{
            $.fn.resimage.change(obj, image.orignal);
        }
    }
    $.fn.resimage.change = function(obj, src){
        obj.attr('src', src);
    }
})(jQuery, window, document);