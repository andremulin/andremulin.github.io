function myFunction() {
    var topLeft = document.getElementById("borderRadiusTopLeft").value;
    var topRight = document.getElementById("borderRadiusTopRight").value;
    var bottomRight = document.getElementById("borderRadiusBottomRight").value;
    var bottomLeft = document.getElementById("borderRadiusBottomLeft").value;
    if (topLeft == ""){
        topLeft = 0
    }
    if (topRight == ""){
        topRight = 0
    }
    if (bottomLeft == ""){
        bottomLeft = 0
    }
    if (bottomRight == ""){
        bottomRight = 0
    }
    var style = document.createElement('style');
    document.head.appendChild(style);
    var newValue = "border-radius: "+topLeft+"px "+topRight+"px "+bottomRight+"px "+bottomLeft+"px;"
    style.sheet.insertRule("#box-result {"+newValue+"}");

    document.getElementById("result").value = newValue
}