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
}

function cropperDestory() {
        $image.cropper("destroy"); 
}
  
function updateCropperImage(url) {
        $image.attr("src" , url);
        refreshCropper();
    }

function refreshCropper() {
        cropperDestory();
        cropperInit();
    }

window.onmessage = e => {
  let {data} = e;
     if(data.toUpdateImageURL === true) {
            let url = data.updateImageURL;
            updateCropperImage(url);
        }

};