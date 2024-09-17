

let imageurl = document.querySelector('#image');

window.addEventListener('DOMContentLoaded', function (){
  const image = imageurl
  const WallCrop = new Cropper(image, {
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
});


window.onmessage = (event) => {
  if(event.data) {
         let newlink = event.data;
         this.WallCrop.replace(newlink);
                 }
    };
