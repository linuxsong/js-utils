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
                var minRatio = 1;
                if (img.width > maxWidth ||  img.height > maxHeight) {
                        minRatio = Math.min(maxWidth/img.width, maxHeight/img.height);
                }
                objImg.style.width = img.width * minRatio;
                objImg.style.height = img.height * minRatio;
        }
