var actCount = 1;
var actPlanCount = 1;
var planRow = [];
var planDesc = ["#planAct-","#planTipo-","#planUni-","#planDif-","#planHoras-"];
var planIn = ["#planInAct-","#planInTipo-","#planInUni-","#planInDif-","#planInHoras-"];
$(function(){
	
$.fn.editable.defaults.mode = 'inline';
    //$('#note-1').editable();
	$('[data-toggle="popover"]').popover()
	var actNum = 1;
	var initialMin = 0;
	var initialHours = 0;
	var newAct = $('.tr-act').html();
	$('.tr-act').remove();
	var newActPlan = $('#tr-ActPlan').html();
	$('#tr-ActPlan').remove();
	
	//Agregar actividad desde index
	$('#addActButton').on('click', function () {

		$("#agregarActividad").modal("hide");    
		$('tr.clicked').toggleClass("clicked");

	    $('.tbody-act').append("<tr>"+newAct.replace(/1/g,actCount)+"</tr>");
		$('#note-'+actCount).editable({
			emptytext: '+',			
		});
		$('#fechaAct-'+actCount).text(getCurrentDate());
		initialTime = getTime();
	    $('#horaInAct-'+actCount).text(initialTime); 
	    
		
		
		if($('#recipient-name').val() != ""){
			$('#tipoAct-'+actCount).text($('#recipient-name').val());			
			$('#recipient-name').val("");
		}else{
			$('#tipoAct-'+actCount).text($('#planAct-'+actNum).text());
		}
		
	    actCount++;
	});
	//Agregar Nueva actividad desde coordinador
	$('#addNewActButton').on('click', function () {

		$("#nuevaActividad").modal("hide");    
		
	    $('.tbody-actpp').append('<tr id="tr-'+actPlanCount+'">'+newActPlan.replace(/1/g,actPlanCount)+"</tr>");
		$('.tbody-ActPlan').append('<tr id="tr-'+actPlanCount+'">'+newActPlan.replace(/1/g,actPlanCount)+"</tr>");
		
		  planRow[0] = $('#nuevaActividadPlan').val();
		  planRow[1]  = $('#nuevaTipo').val();
		  planRow[2]  = $('#nuevaUnidadNegocio').val();
		  planRow[3]  = $('#nuevaDificultad').val();
		  planRow[4]  = $('#nuevaHorasPlan').val();
		
	    actPlanCount++;
	});
	
	$('#tblGrid').on('click','tr', function () {
		var trId = $(this).attr('id');
		actNum = trId.slice(-1);
	    $(this).toggleClass("clicked");
	});
	 
	$(document).on('click','button',function(event) {
		var id = $(this).attr('id');
		var btnTer = "btn-terminar-"
		var btnPaus = "btn-pausar-"
		var actNo = actCount-1;
		
		if ( id == btnTer + actNo){
			var endTime = new Date();
			var finalMin = endTime.getMinutes() - initialMin;
			var finalHours = endTime.getHours() - initialHours;
			
		
			console.log("finalmin"+finalMin+"im"+initialMin+"finalHours"+finalHours+"initialHours"+initialHours);
			$('#avance-'+actNo).text(finalHours+":"+finalMin);
			$('#horaFinAct-'+actNo).text(getTime());
		}
		
		if( (id == "addActModal") || (id == "addActIndModal")){
		console.log("holi"+actPlanCount);
		var num = actPlanCount-1;
		var i;
			for(i=0;i<5;i++){
				$(planDesc[i]+num).text(planRow[i]);
				$(planIn[i]+num).text(planRow[i]);
			console.log(planIn[i]+num);
			}
						
		}
		
	
	});
	
	function getCurrentDate(){
		var dt = new Date();
	    var date = dt.toISOString().slice(0,10);
		return date;
	}
	
	function getTime(){
		var dt = new Date();
		var mins = ("0"+dt.getMinutes()).slice(-2)
	    var time = dt.getHours()+":"+mins;
		initialMin = dt.getMinutes();
		initialHours = dt.getHours();
		return time;
	}
});

 




