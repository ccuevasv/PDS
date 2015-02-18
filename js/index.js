var actCount = 1;
$(function(){
	$('[data-toggle="popover"]').popover()
	var actNum = 1;
	
	var newAct = $('.tr-act').html();
	$('.tr-act').remove();

	$('#addActButton').on('click', function () {
		$("#agregarActividad").modal("hide");    
		$('tr.clicked').toggleClass("clicked");

	    $('.tbody-act').append("<tr>"+newAct.replace(/1/g,actCount)+"</tr>");

		$('#fechaAct-'+actCount).text(getCurrentDate());
	    $('#horaInAct-'+actCount).text(getTime()); 
	    $('#tipoAct-'+actCount).text($('#planAct-'+actNum).text());
	    
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
			$('#avance-'+actNo).text('100%');
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
		return time;
	}
});
