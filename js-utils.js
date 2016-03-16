        /*
        Resize image size with same ratio.
        useage: 
                $(function() {
                        $("img").one("load", function() {
                                resizeImage(320,320, this);
                        }).each(function() {
                                //when the image is cached
                                if(this.complete) $(this).load();
                        });
                 });
        */
        function resizeImage(maxWidth, maxHeight, objImg)
        {
                var img = new Image();
                img.src = objImg.src;
                if (img.width <= maxWidth && img.height <= maxHeight) return;
                var ratio = Math.min(maxWidth/img.width, maxHeight/img.height);
                objImg.width = img.width * ratio;
                objImg.height = img.height * ratio;
        }
