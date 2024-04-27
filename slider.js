var slideimage=document.getElementById("sldimg");
        var image= new Array(
            "ChocolateCroissantSlider.jpg",
            "CosmopolitanSlider.jpg",
            "PastaSlider.jpg",
            "HakkaNoodlesSlider.jpg"
        );
        var len=image.length;
        var i=0;
        function slider(){
            if(i>len-1){
                i=0;
            }
            slideimage.src=image[i];
            i++;
            setTimeout('slider()',5000);

        }