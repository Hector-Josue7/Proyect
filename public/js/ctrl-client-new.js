$(document).ready(function(){
	$.ajax({
		url:"/api/test/equipos",
		method:"GET",
		dataType:"json",
		success:function(res){
			console.log(res);
			for (var i=0;i<res.length;i++){
				$("#slc-Equipos").append(`<option value="${res[i].ID_EQUIPO}">${res[i].NOMBRE_EQUIPO}</option>`);
				$("#slc-Equipos").val(null);
			}
		},
		error:function(error){
			console.error(error);
		}
	});


});

$('#slc-Equipos').change(function(e){
    obtenerComponentes();
  
});

function obtenerComponentes(){
        $.ajax({
		// url:`/usuarios/${$('#usuario-actual').val()}/posts`,
		url: `/api/test/${$('slc-Equipos').val()}/componentes`,
        method:"GET",
        dataType:"json",
        success:(res)=>{
            //console.log(res);
            imprimirComponentes(res.ID_EQUIPO);
        },
        error:(error)=>{
            console.error(error);
        }

    });
}



// function imprimirComponentes(equipo){
//     $("#slc-Componente").empty();
// for (let i=0; i<ID_COMPONENTE.length; i++ ){

//}


//     for (let i=0;i<usuarios.length;i++){
//         for (let j=0;j<usuarios[i].posts.length;j++){
//         
//           
//             $("#slc-Componente").append(
//                     `<div class="col-lg-12">
//                     <div class="card mb-4 shadow-sm">
//                         <div class="card-header">
//                             <img class="img-fluid img-thumbnail rounded-circle" src="${usuarios[i].imagen}">    
//                             <span>${usuarios[i].nombre}</span>
//                         </div>
//                         <div class="card-body px-0 py-0">
//                         <div class="image-post" style="background-image: url(${usuarios[i].posts[j].imagen});">

//                         </div>
//                         <div class="px-3 py-3 post">
//                             <span class="pointer" onclick="like('${usuarios[i].posts[j]._id}','${usuarios[i]._id}');"><i class="far fa-heart"></i></span>&nbsp;<span id="likes-${usuarios[i].posts[j]._id}">${usuarios[i].posts[j].likes.length}</span> Likes<br>
//                             <span class="post-user">${usuarios[i].nombre}</span>
//                             <span class="post-content">${usuarios[i].posts[j].contenidoPost}</span>
//                             <hr> 
//                             <b>Comments</b><br>
//                             <div id="comentarios">
//                                 ${comentarios}
//                             </div>
//                             <hr>
//                             <div class="px-0">
//                                 <div class="input-group mb-3">
//                                     <input type="text" class="form-control" placeholder="Comment" id="comentario-post-${usuarios[i].posts[j]._id}">
//                                     <div class="input-group-append">
//                                         <button type="button" onclick="comentar('${usuarios[i].posts[j]._id}','${usuarios[i]._id}');" class="btn btn-outline-danger"><i class="far fa-paper-plane"></i></button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         </div>
//                     </div>
//                     </div>`
//             );
//         }
//     }
// }

// http://localhost:4000/api/test/:id_equipo/componentes


// $(document).ready(function(){
// 	$.ajax({
// 		url:"/api/test/",
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




