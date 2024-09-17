window.addEventListener('DOMContentLoaded', function () {
  var image = document.querySelector('#image');
  var cropper = new Cropper(image, {
    viewMode: 1,
    dragMode: 'move',
    aspectRatio: 230/100,
    autoCropArea: 1,
    restore: false,
    center: false,
    cropBoxMovable: false,
    cropBoxResizable: false,
    toggleDragModeOnDblclick: false,
    zoomable: false,
    background:false,
    
  });
  cropperBox.$center('contain')
});
