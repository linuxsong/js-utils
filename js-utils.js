        /*
        Resize image size with same ratio.
        useage: 
                $(function() {
                        $("img").one("load", function() {
                                resizeImage(320,320, this);
                        }).each(function() {
                                if(this.complete) $(this).load();
                        });
                 });
        */
        function resizeImage(maxWidth, maxHeight, objImg)
        {
                var img = new Image();
                img.src = objImg.src;
                if (img.width <= maxWidth && img.height <= maxHeight) return;
                var minRatio = Math.min(maxWidth/img.width, maxHeight/img.height);
                objImg.width = img.width * minRatio;
                objImg.height = img.height * minRatio;
        }
