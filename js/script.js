var bandera = 1;
var nombre = ".slider";
function mostrarImagenSlide(){
	$(".slider").hide();
	$(nombre+bandera).fadeToggle();
}
$(function(){
		mostrarImagenSlide();
		$(".prev").click(function(){
			if(bandera > 1){
				bandera--;
			}else{
				bandera = 3;
			}
			mostrarImagenSlide();
		});
		$(".prox").click(function(){
			if(bandera < 3){
				bandera++;
			}else{
				bandera = 1;
			}
			mostrarImagenSlide();
		});
});