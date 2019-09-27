$(document).ready(function(){
    //Ya cargó el DOM
    llenarTabla();
});






function llenarTabla(){
    document.getElementById('tabla-registros').innerHTML = '';
    $.ajax({
        url:'usuarios/obtenerTabla',
        method:'GET',
        dataType:'json',
        success:(res)=>{
            console.log('Success');
            console.log(res);
            for(let i=0;i<res.length;i++){
                   anexarFilaTabla(res[i]);
            }
             

        },
        error:(error)=>{
            console.log('Error');
            console.log(error);
        }
    });
}




function anexarFilaTabla(res){
    document.getElementById('tabla-registros').innerHTML += 
                    `<tr>
                        <td>${res.ID_UNIDAD}</td>
                         <td>${res.ID_SITIO}</td>
                         <td>${res.NOMBRE_UNIDAD}</td>
                  </tr>`;
}

function exportTableToExcel(tablaYeso, filename = 'ensayoSistemas'){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tablaYeso);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
}





