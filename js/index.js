var actCount = 1;
$(function(){
	
$.fn.editable.defaults.mode = 'inline';
    //$('#note-1').editable();
	$('[data-toggle="popover"]').popover()
	var actNum = 1;
	var initialMin = 0;
	var initialHours = 0;
	var newAct = $('.tr-act').html();
	$('.tr-act').remove();

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
	    $('#tipoAct-'+actCount).text($('#planAct-'+actNum).text());
		$('#codeAct-'+actCount).text($('#codAct-'+actNum).text());
	    
	    actCount++;
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

 




