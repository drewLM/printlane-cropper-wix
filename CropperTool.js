

let imageurl = document.querySelector('#image');

window.addEventListener('DOMContentLoaded', Cropperstart())

function Cropperstart() {
  const image = imageurl
  const cropper = new Cropper(image, {
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
}



