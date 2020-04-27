function print(str,style){
  return str + ": " + style.getPropertyValue(str) + ";\n";
}
function copyToClipboard(){
  var box = document.getElementById('box')
  var style = window.getComputedStyle(box),
    topLeft = print('border-top-left-radius',style), 
    topRight = print("border-top-right-radius",style),
    bottomLeft = print('border-bottom-left-radius',style), 
    bottomRight = print('border-bottom-right-radius',style);
  var final = topLeft + topRight + bottomLeft + bottomRight
  const el = document.createElement('textarea');
  el.value = final;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};