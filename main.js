function mostrarCiudad(opcion) {
    document.querySelector("#contenedor-carta").classList.add("oculto");
  
    setTimeout (() => {
      switch (opcion) {
        case 0:
          document.querySelector("#contenedor-carta").classList.remove("oculto");
          document.getElementById("imagen").src = "img/Morro-de-Arica.jpg";
          document.querySelector(".card-title").innerHTML = ("Morro de Arica");
          document.querySelector(".card-text").innerHTML = ("El morro de Arica es el sitio más representativo de la región.");
          break;
        case 1:
          document.querySelector("#contenedor-carta").classList.remove("oculto");
          document.getElementById("imagen").src = "img/gigante-de-tarapaca.webp";
          document.querySelector(".card-title").innerHTML = ("El Gigante de Tarapacá");
          document.querySelector(".card-text").innerHTML = ("El gigante de Tarapacá es un sitio histórico de interesante procedencia ubicado en pleno desierto.");
          break;
        case 2:
          document.querySelector("#contenedor-carta").classList.remove("oculto");
          document.getElementById("imagen").src = "img/antofapasta.jpg";
          document.querySelector(".card-title").innerHTML = ("Antofapasta");
          document.querySelector(".card-text").innerHTML = ("Especial cuidado con los zombies en esta región.");
          break;
        case 3:
        document.querySelector("#contenedor-carta").classList.remove("oculto");
          document.getElementById("imagen").src = "img/copiapo.jpg";
          document.querySelector(".card-title").innerHTML = ("Copiapó");
          document.querySelector(".card-text").innerHTML = ("Una de las playas más codiciadas del país , Bahía Inglesa");
          break;
        case 4:
          document.querySelector("#contenedor-carta").classList.remove("oculto");
          document.getElementById("imagen").src = "img/coquimbo.jpg";
          document.querySelector(".card-title").innerHTML = ("Coquimbo");
          document.querySelector(".card-text").innerHTML = ("En las costas de Coquimbo se pueden visitar réplicas de barcos pirata y vivir la experiencia de una batalla en altamar.");
          break;
        case 5:
          document.querySelector("#contenedor-carta").classList.remove("oculto");
          document.getElementById("imagen").src = "img/valparaiso.jpg";
          document.querySelector(".card-title").innerHTML = ("Valparaiso");
          document.querySelector(".card-text").innerHTML = ("El “Queen Victoria Memorial Organ” es un órgano de tubos que data desde finales del siglo XIX. Los días domingos se realizan conciertos gratuitos en la iglesia anglicana St. Paul en Cerro Concepción.");
          break;
        case 6:
          document.querySelector("#contenedor-carta").classList.remove("oculto");
          document.getElementById("imagen").src = "img/rm-stgo.jpg";
          document.querySelector(".card-title").innerHTML = ("Chilezuela");
          document.querySelector(".card-text").innerHTML = ("El infierno de Chile y en el cual se concentra la mayor densidad poblacional del país.");
          break;
        case 7:
          document.querySelector("#contenedor-carta").classList.remove("oculto");
          document.getElementById("imagen").src = "img/rancaguant.png";
          document.querySelector(".card-title").innerHTML = ("Rancagua");
          document.querySelector(".card-text").innerHTML = ("Antiguos mitos dicen que existe un territorio llamado Rancagua, aún no se sabe a ciencia cierta su existencia.");
          break;
        case 8:
          document.querySelector("#contenedor-carta").classList.remove("oculto");
          document.getElementById("imagen").src = "img/talca.jpg";
          document.querySelector(".card-title").innerHTML = ("Talca");
          document.querySelector(".card-text").innerHTML = ("La ciudad más funada de Chile, la del completo mojado y las negligencias clínicas, sin embargo ha dado a luz grandes profesionales como el profe Oscarito.");
          break;
        case 9:
          document.querySelector("#contenedor-carta").classList.remove("oculto");
          document.getElementById("imagen").src = "img/chillan.jpg";
          document.querySelector(".card-title").innerHTML = ("Chillan");
          document.querySelector(".card-text").innerHTML = ("El imperio de las longanizas. Si pasa por ahí, pruébelas.");
          break;
        case 10:
        document.querySelector("#contenedor-carta").classList.remove("oculto");
          document.getElementById("imagen").src = "img/conce.jpg";
          document.querySelector(".card-title").innerHTML = ("Concepción");
          document.querySelector(".card-text").innerHTML = ("Una de las ciudades más pobladas del país, conocida como la capital del sur, alberga un reconocido capital intelectual, universidades y mucho ROCK");
          break;
        case 11:
          document.querySelector("#contenedor-carta").classList.remove("oculto");
          document.getElementById("imagen").src = "img/temuco.jpeg";
          document.querySelector(".card-title").innerHTML = ("Temuco");
          document.querySelector(".card-text").innerHTML = ("La naturalmente imponente, pero socialmente infame región de la araucanía, si va a este lugar lleve chaleco antibalas y recuerde no fumar, ya que es inflamable.");
          break;
        case 12:
          document.querySelector("#contenedor-carta").classList.remove("oculto");
          document.getElementById("imagen").src = "img/Valdivia.jpg";
          document.querySelector(".card-title").innerHTML = ("Valdivia");
          document.querySelector(".card-text").innerHTML = ("La hermosa ciudad de Valdivia es el sitio ideal para probar cervezas artesanales y emborracharse con una linda vista.");
          break;
        case 13:
          document.querySelector("#contenedor-carta").classList.remove("oculto");
          document.getElementById("imagen").src = "img/puerto.jpeg";
          document.querySelector(".card-title").innerHTML = ("Lago Llanquihue");
          document.querySelector(".card-text").innerHTML = ("A 45 minutos de Puerto Montt, en la ciudad de Osorno, se encuentra el lago Llanquihue. Uno de los lugares más hermosos del país, rodeado de reservas naturales y hermosos parajes en cada uno de sus pueblos aledaños.");
          break;
        case 14:
          document.querySelector("#contenedor-carta").classList.remove("oculto");
          document.getElementById("imagen").src = "img/coyhaique.jpg";
          document.querySelector(".card-title").innerHTML = ("Coyhaique");
          document.querySelector(".card-text").innerHTML = ("En el corazón de la patagonia chilena, se encuentra Coyhaique, una hermosa ciudad con un atractivo tan impresionante como sus bajos grados celsius.");
          break;
        case 15:
          document.querySelector("#contenedor-carta").classList.remove("oculto");
          document.getElementById("imagen").src = "img/williams.jpg";
          document.querySelector(".card-title").innerHTML = ("Punta Arenas/Puerto Williams");
          document.querySelector(".card-text").innerHTML = ("Pucha que hace frío oiga.");
          break;
      }
    },500);
  }

  function ocultarCiudad() {
    // document.querySelector("#contenedor-carta").setAttribute("hidden", true);
    document.querySelector("#contenedor-carta").classList.add("oculto");
  }



