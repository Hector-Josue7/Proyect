

$(document).ready(function(){

	$.ajax({
		url:"/usuarios/usuariosi",
		method:"GET",
		dataType:"json",
		success:function(res){
			console.log(res);
			for (var i=0;i<res.length;i++){
				$("#slc-unidad").append(`<option value="${res[i].ID_FORMATO}">${res[i].NOMBRE_FORMATO}</option>`);
			
			}
		},
		error:function(error){
			console.log(error);
		}
	});

	// setInterval(function(){
	// 		if($("#receptor").val()!=""){
	// 			$("#conversation").html("");
	// 			cargarConversacion($("#receptor").val());
	// 		}
	// 	},	5000
	// );
});

// $(document).ready(function(){
// 	$.ajax({
// 		url:"/usuarios",
// 		method:"GET",
// 		dataType:"json",
// 		success:function(res){
// 			console.log(res);
// 			for (var i=0;i<res.length;i++){
// 				$("#slc-usuario").append(`<option value="${res[i].codigo_usuario}">${res[i].nombre_usuario}</option>`);
// 				$("#contactos").append(
// 					`<div class="row sideBar-body" onclick="seleccionarContacto(${res[i].codigo_usuario},'${res[i].nombre_usuario}','${res[i].url_imagen_perfil}');">
// 						<div class="col-sm-3 col-xs-3 sideBar-avatar">
// 						<div class="avatar-icon">
// 							<img src="${res[i].url_imagen_perfil}">
// 						</div>
// 						</div>
// 						<div class="col-sm-9 col-xs-9 sideBar-main">
// 						<div class="row">
// 							<div class="col-sm-8 col-xs-8 sideBar-name">
// 							<span class="name-meta">${res[i].nombre_usuario}
// 							</span>
// 							</div>
// 							<div class="col-sm-4 col-xs-4 pull-right sideBar-time">
// 							<span class="time-meta pull-right">18:18
// 							</span>
// 							</div>
// 						</div>
// 						</div>
// 					</div>`
// 				);
// 			}
// 		},
// 		error:function(error){
// 			console.error(error);
// 		}
// 	});

// 	setInterval(function(){
// 			if($("#receptor").val()!=""){
// 				$("#conversation").html("");
// 				cargarConversacion($("#receptor").val());
// 			}
// 		},	5000
// 	);
// });