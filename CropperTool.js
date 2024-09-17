

let imageurl = document.querySelector('#image');

window.onmessage = (event) => {
  let {data} = event;
  if(data.toUpdateImageURL === true) {
         let newlink = data.updateImageURL;
                 }
    };


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
  ready() {
  cropper.replace(newlink)
  }
    
  });
}


