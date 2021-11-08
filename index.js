
function puntoEnCirculo(){

    radio = document.getElementById("radio").value;
    xFixed = document.getElementById("xFixed").value;
    yFixed = document.getElementById("yFixed").value;

    console.log(radio, xFixed,yFixed)

    xmin=-(radio);
    xmax=parseInt(radio);
    ymin=-(radio);
    ymax=parseInt(radio);

    console.log(typeof xmin,typeof xmax, typeof ymin, typeof ymax);

    if ((xFixed >= xmin) && (xFixed <=xmax)){

        if ((yFixed >=ymin) && (yFixed<=ymax)){

            result = true;
        }

        else {
            result = false;
        }

    }

    else {
        result = false;
    }

    if (result == true){
        document.getElementById("Respuesta").innerHTML = "El punto (" + xFixed + "," + yFixed + ") está dentro del círculo con radio " + radio + ".";
    }

    else{
        document.getElementById("Respuesta").innerHTML = "El punto (" + xFixed + "," + yFixed + ") NO está dentro del círculo con radio " + radio + ".";
    }


}

function borrar() {
    document.getElementById("radio").value = "";
    document.getElementById("xFixed").value = "";
    document.getElementById("yFixed").value = "";
    document.getElementById("Respuesta").innerHTML = "";

}

