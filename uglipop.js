/*|--uglipop.js--|
|--(A Minimalistic Pure JavaScript Modal )--|
|--Author : flouthoc (gunnerar7@gmail.com)(https://github.com/flouthoc)--|
|--Contributers : Add Your Name Below--|
|-- zhuharev (kirill at zhuharev.ru)(https://github.com/zhuharev)--|*/

(function(w, doc) {
    "use strict";

    function on(el, eventName, handler) {
        if (el.addEventListener) {
            el.addEventListener(eventName, handler);
        } else {
            el.attachEvent('on' + eventName, function() {
                handler.call(el);
            });
        }
    }

    function init() {

        var overlay = doc.createElement('div');
        var content_fixed = doc.createElement('div');
        var popbox = doc.createElement('div');
        var overlay_wrapper = doc.createElement('div');
        var close_button = doc.createElement('div');
        content_fixed.id = 'uglipop_content_fixed';
        content_fixed.setAttribute('style', 'position:fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);opacity:1;');
        popbox.id = 'uglipop_popbox';
        overlay_wrapper.id = "uglipop_overlay_wrapper";
        overlay_wrapper.setAttribute('style', 'position:absolute;top:0;bottom:0;left:0;right:0;');
        overlay.id = "uglipop_overlay";
        overlay.setAttribute('style', 'position:fixed;top:0;bottom:0;left:0;right:0;opacity:0.3;width:100%;height:100%;background-color:black;');
        close_button.id="uglipop_close";
        close_button.innerHTML='&#10006;';
        close_button.setAttribute('style','font-size:20px;position:fixed;right:-7px;top:-7px;color:#FFF;background-color:#000;-moz-border-radius:20px;-webkit-border-radius:20px;border-radius:20px;padding:1px 2px 1px 2px;text-align:center;height:22px;width:20px;cursor:pointer;display:none;');
        overlay_wrapper.appendChild(overlay);
        content_fixed.appendChild(close_button);
        content_fixed.appendChild(popbox);
        doc.body.appendChild(overlay_wrapper);
        doc.body.appendChild(content_fixed);
        doc.getElementById('uglipop_overlay_wrapper').style.display = 'none';
        doc.getElementById('uglipop_overlay').style.display = 'none';
        doc.getElementById('uglipop_content_fixed').style.display = 'none';
        overlay_wrapper.addEventListener('click', remove);
        close_button.addEventListener('click', remove);
        on(w, 'keypress', function(e) {
            //kill pop if button is ESC ;)
            if (e.keyCode == 27) {
                remove();
            }
        });


        //create global variable
        w.uglipop = uglipop
    }

    function uglipop(config) {

        if (config) {
            if (typeof config.class == 'string' && config.class) {
                doc.getElementById('uglipop_popbox').setAttribute('class', config.class);
            }
            if (config.keepLayout && (!config.class)) {
                doc.getElementById('uglipop_popbox').setAttribute('style', 'position:relative;height:300px;width:300px;background-color:white;opacity:1;');
            }

            if (typeof config.content == 'string' && config.content && config.source == 'html') {
                doc.getElementById('uglipop_popbox').innerHTML = config.content;
            }

            if (typeof config.content == 'string' && config.content && config.source == 'div') {
                doc.getElementById('uglipop_popbox').innerHTML = doc.getElementById(config.content).innerHTML;
            }
          
            if (typeof config.content == 'string' && config.content && config.close_button == true) {
              doc.getElementById('uglipop_close').style.display = '';
            }
        }

        doc.getElementById('uglipop_overlay_wrapper').style.display = '';
        doc.getElementById('uglipop_overlay').style.display = '';
        doc.getElementById('uglipop_content_fixed').style.display = '';


    }

    function remove() {
        doc.getElementById('uglipop_overlay_wrapper').style.display = 'none';
        doc.getElementById('uglipop_overlay').style.display = 'none';
        doc.getElementById('uglipop_content_fixed').style.display = 'none';
        doc.getElementById('uglipop_close').style.display = 'none';
    }

    //init on window loaded
    on(doc, "DOMContentLoaded", init)
})(window, document)