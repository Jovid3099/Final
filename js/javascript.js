const edad = parseInt(prompt('Ingrese su edad',''));

 if(edad >= 13){
            alert("Éste sitio web usa cookies, si permanece aquí acepta su uso.Puede leer más sobre el uso de cookies en nuestra");

        }else if(edad < 13 && edad > 0){
            alert("Usted no puede continuar navegando en esa web");
        }else{
            alert("El dato es incorrecto");
        }

function mouselog1(event){
			$(".img").animate({
                'width': '260px',
                'height': '200px',
                'opacity': 1

        }, "slow");
		};
function mouse1(event){
			$(".img").animate({
                'width': '200px',
                'height': '125px',
                'opacity': 1
        });
		};
		function mouselog(event){
			$(".img1").animate({
                'width': '300px',
                'height': '240px',
                'opacity': 1

        }, "slow");
		};
function mouse(event){
			$(".img1").animate({
                'width': '200px',
                'height': '160px',
                'opacity': 1
        });
		};