
(()=>{
    $.ajax({
        url:"/usuarios/obtenersitios",
        method:"GET",
        dataType:"json",
        success:(res)=>{
            //console.log(res);
        
            for(let i=0;i<res.length;i++){
                //Llenar el select list de usuarios
                $('#slc-sitio').append(`<option value="${res[i].ID_SITIO}">${res[i].NOMBRE_SITIO}</option>`);

         
            }
            $('#slc-sitio').val(null);
        },
        error:(error)=>{
            console.error(error);
        }

    });
})();
