function setBorder(){
  var position = this.getAttribute("id").replace("-input",""),
  box = document.getElementById("box");
  switch(position){
    case "top-left":box.style.borderTopLeftRadius           = this.value > 0?this.value + "px":0 + "px"; break;
    case "top-right":box.style.borderTopRightRadius         = this.value > 0?this.value + "px":0 + "px";break;
    case "bottom-left":box.style.borderBottomLeftRadius     = this.value > 0?this.value + "px":0 + "px";break;
    case "bottom-right":box.style.borderBottomRightRadius   = this.value > 0?this.value + "px":0 + "px";break;
  }
}

var topLeft     = document.getElementById("top-left-input"),
  topRight    = document.getElementById("top-right-input"),
  bottomLeft  = document.getElementById("bottom-left-input"),
  bottomRight = document.getElementById("bottom-right-input"); 

topLeft.addEventListener("change",setBorder)
topRight.addEventListener("change",setBorder)
bottomLeft.addEventListener("change",setBorder)
bottomRight.addEventListener("change",setBorder)