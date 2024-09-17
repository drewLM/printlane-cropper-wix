const $image = $('#image');

function cropperInit(){
  var image = $image;
  var cropper = new Cropper(image, {
    viewMode: 1,
    dragMode: 'move',
    aspectRatio: 2100/100,
    autoCropArea: 1,
    restore: false,
    center: false,
    cropBoxMovable: false,
    cropBoxResizable: false,
    toggleDragModeOnDblclick: false,
    zoomable: false,
    background:false,
    guides: false,
    center: false,

    
  });

  cropperBox.$center('contain')

};