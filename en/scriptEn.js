			$(document).on('ready', funcMain);


			function funcMain()

			{
				// alert("pagina cargada");
				

				 $("loans_table").on('click','.fa-trash-alt',deleteProduct);

				$("body").on('click',".fa-trash-alt",deleteProduct);
			}






		function Costo()
		{
			
			var t_piezas = parseFloat(document.getElementById("total_piezas").innerHTML);
			var t_lb = parseFloat(document.getElementById("total_lb").innerHTML);
			var t_lbVOL= parseFloat(document.getElementById("total_lbvol").innerHTML);
			var t_piecubico=parseFloat(document.getElementById("total_piecubico").innerHTML); 
            var aeroLIBRA=0;
            var aeroVOLUMEN=0;
            var Maritimo=0;

 
			//if((document.getElementById("Piezas").value=="")||(document.getElementById("Largo").value=="")||(document.getElementById("Ancho").value=="")||(document.getElementById("Alto").value=="")||(document.getElementById("Peso").value==""))
			//{
 			//	alert("Por favor ingrese los datos de forma correcta.");
 			//}
 			//else
			//{ 
    if (document.getElementById('radio1').checked) //Servicio Aéreo.
    {
                if(t_lb <=10)
                {
					// alert("libra menor = a 10 ");
                    // console.log(t_lb,"/" ,t_lbVOL);
                    
                    aeroLIBRA =t_lb*50;
                    aeroVOLUMEN =t_lbVOL*50;
                    if(aeroLIBRA>aeroVOLUMEN)
					{
						
						document.getElementById('resultado').innerHTML=("	Cost of your Air shipment $" + aeroLIBRA.toFixed(2));
					}
					else
					{
						
						document.getElementById('resultado').innerHTML=("	Cost of your Air shipment $" + aeroVOLUMEN.toFixed(2));
					}
						
                }//condicion multiplicar a 50
                    else
                    {
						// alert("Libra mayor a  10!");
                        // console.log(t_lb,"/" ,t_lbVOL);
                        aeroLIBRA=t_lb*4.50;
                        aeroVOLUMEN = t_lbVOL*4.50;
                       
                       
                       if(aeroLIBRA>aeroVOLUMEN)
                       {
                           
                           document.getElementById('resultado').innerHTML=("	Cost of your Air shipment $" + aeroLIBRA.toFixed(2));
                       }
                       else
                       {
                           
                           document.getElementById('resultado').innerHTML=("	Cost of your Air shipment $" + aeroVOLUMEN.toFixed(2));
                       }
					}//cierre condicion 


    }//if checked
				
			
	else //Servicio Marítimo.
	{
        
					 Maritimo=t_piecubico*17.00;
                    document.getElementById('resultado').innerHTML=("Cost of your shipment by the Ocean $" + Maritimo.toFixed(2));
               
	}
			
}//functions
        



		function agregarproducto(){
			if((document.getElementById("Piezas").value=="")||(document.getElementById("Largo").value=="")||(document.getElementById("Ancho").value=="")||(document.getElementById("Alto").value=="")||(document.getElementById("Peso").value==""))
			{
				alert("THE FIELDS CAN NOT BE EMPTY");
				var input = document.getElementById('Piezas');
					input.focus();
					input.select();
				return false;
			}else{


			
				var Piezas=parseInt(document.getElementById("Piezas").value);
				var Largo=parseInt(document.getElementById("Largo").value);
				var Ancho=parseInt(document.getElementById("Ancho").value);
				var Alto=parseInt(document.getElementById("Alto").value);
				var Peso=parseInt(document.getElementById("Peso").value);
				var P_LB= parseFloat(Peso)*parseFloat(Piezas);
				var P_Total_LB= ((Largo*Ancho*Alto)/166)*Piezas;
				var PieCubico=(Largo/12)*(Ancho/12)*(Alto/12)*Piezas;

				var name_table=document.getElementById("tabla_factura");


				var row = name_table.insertRow(0+1);
				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				var cell3 = row.insertCell(2);
				var cell4 = row.insertCell(3);
				var cell5 = row.insertCell(4);
				var cell6 = row.insertCell(5);
				var cell7 = row.insertCell(6);
				var cell8 = row.insertCell(7);

				cell1.innerHTML = '<p name="piezas_f[]" class="non-margin">'+Piezas+'</p>';
				cell2.innerHTML = '<p name="largo_f[]" class="non-margin">'+Largo+'</p>';
				cell3.innerHTML = '<p name="ancho_f[]" class="non-margin">'+Ancho+'</p>';
				cell4.innerHTML = '<p name="alto_f[]" class="non-margin">'+Alto+'</p>';
				cell5.innerHTML = '<p name="peso_f[]" class="non-margin">'+P_LB+'</p>';
				cell6.innerHTML = '<p name="peso_vol_f[]" class="non-margin">'+P_Total_LB+'</p>';
				cell7.innerHTML = '<p name="pie_cubico_f[]" class="non-margin">'+PieCubico+'</p>';
				cell8.innerHTML = '<span class="fas fa-trash-alt"></span>';
				

				
				vaciar_campo();
			}	
			totales(Piezas, P_LB, P_Total_LB, PieCubico, 1);

		}



		function totales(Piezas,P_LB,P_Total_LB,PieCubico,accion)
		{
			var t_piezas = parseFloat(document.getElementById("total_piezas").innerHTML);
			var t_lb = parseFloat(document.getElementById("total_lb").innerHTML);
			var t_lbVOL= parseFloat(document.getElementById("total_lbvol").innerHTML);
			var t_piecubico=parseFloat(document.getElementById("total_piecubico").innerHTML); 


			if(accion==1)
			{
				document.getElementById("total_piezas").innerHTML=parseFloat(t_piezas)+parseFloat(Piezas);
				document.getElementById("total_lb").innerHTML=parseFloat(t_lb)+parseFloat(P_LB);
				document.getElementById("total_lbvol").innerHTML=parseFloat(t_lbVOL)+parseFloat(P_Total_LB);
				document.getElementById("total_piecubico").innerHTML=parseFloat(t_piecubico)+parseFloat(PieCubico);

			}else if(accion ==2) 
				{
					document.getElementById("total_piezas").innerHTML=parseFloat(t_piezas)-parseFloat(Piezas);
					document.getElementById("total_lb").innerHTML=parseFloat(t_lb)-parseFloat(P_LB);
					document.getElementById("total_lbvol").innerHTML=parseFloat(t_lbVOL)-parseFloat(P_Total_LB);
					document.getElementById("total_piecubico").innerHTML=parseFloat(t_piecubico)-parseFloat(PieCubico);
	
				}else{
					alert("INVALID ACTION");
				}

		}

		function calculateTotalsBySumColumn()
		{
			var total_piezas=0;
			var array_piezas=document.getElementsByName("piezas_f[]");
			for (var i=0; i<array_piezas.length; i++) {
				total_piezas+=parseFloat(array_piezas[i].innerHTML);
			}
			document.getElementById("total_piezas").innerHTML=total_piezas;


			var total_lb=0;
			var array_lb=document.getElementsByName("peso_f[]");
			for (var i=0; i<array_lb.length; i++) {
				total_lb+=parseFloat(array_lb[i].innerHTML);
			}
			document.getElementById("total_lb").innerHTML=total_lb;


			var total_lbvol=0;
			var array_lbvol=document.getElementsByName("peso_vol_f[]");
			for (var i=0; i<array_lbvol.length; i++) {
				total_lbvol+=parseFloat(array_lbvol[i].innerHTML);
			}
			document.getElementById("total_lbvol").innerHTML=total_lbvol;


			var total_piecubico=0;
			var array_piecubico=document.getElementsByName("pie_cubico_f[]");
			for (var i=0; i<array_piecubico.length; i++) {
				total_piecubico+=parseFloat(array_piecubico[i].innerHTML);
			}
			document.getElementById("total_piecubico").innerHTML=total_impuesto;

			
		}

		function deleteProduct()
		{
			//Guardando la referencia del objeto presionado
			var _this = this;
			//Obtener las filas los datos de la fila que se va a elimnar
			var array_fila=getRowSelected(_this);

			//Restar esos datos a los totales mostrados al finales
			totales(array_fila[0],array_fila[4],array_fila[5],array_fila[6],2)

			$(this).parent().parent().fadeOut("slow",function(){$(this).remove();});
		}

		function getRowSelected(objectPressed)
		{
			//Obteniendo la linea que se esta eliminando
			var a=objectPressed.parentNode.parentNode;
			//b=(fila).(obtener elementos de clase columna y traer la posicion 0).(obtener los elementos de tipo parrafo y traer la posicion0).(contenido en el nodo)
			var Piezas=a.getElementsByTagName("td")[0].getElementsByTagName("p")[0].innerHTML;
			var Largo=a.getElementsByTagName("td")[1].getElementsByTagName("p")[0].innerHTML;
			var Ancho=a.getElementsByTagName("td")[2].getElementsByTagName("p")[0].innerHTML;
			var Alto=a.getElementsByTagName("td")[3].getElementsByTagName("p")[0].innerHTML;
			var Peso=a.getElementsByTagName("td")[4].getElementsByTagName("p")[0].innerHTML;
			var P_LB=a.getElementsByTagName("td")[5].getElementsByTagName("p")[0].innerHTML;
			// var P_Total_LB=a.getElementsByTagName("td")[6].getElementsByTagName("p")[0].innerHTML;
			var PieCubico=a.getElementsByTagName("td")[6].getElementsByTagName("p")[0].innerHTML;

			var array_fila = [Piezas, Largo, Ancho, Alto, Peso, P_LB, PieCubico];

			return array_fila;
			//console.log(numero+' '+codigo+' '+descripcion);
		}

		
		function vaciar_campo() 
			{
				var Piezas=(document.getElementById("Piezas").value ="");
				var Largo=(document.getElementById("Largo").value ="");
				var Ancho=(document.getElementById("Ancho").value="");
				var Alto=(document.getElementById("Alto").value="");
				var Peso=(document.getElementById("Peso").value="");
    			
				var input = document.getElementById('Piezas');
					input.focus();
					input.select();
				return;
    
			}
