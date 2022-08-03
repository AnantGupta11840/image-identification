Webcame.set ({
    width:310,
    height:300,
    image_format : 'png',
    png_quality:90,

    constraints: {
        facingMode: "envirnoment"
    }
});
camera = document.getElementById("camera")
 
Webcame.attach('#camera');

