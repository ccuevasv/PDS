$(function(){

	var actNum = 1;
	var actCount = 1;
	var newAct = $('.tr-act').html();
	$('.tr-act').remove();

	$('#addActButton').on('click', function () {
		$("#agregarActividad").modal("hide");    
		$('tr.clicked').toggleClass("clicked");

	    $('.tbody-act').append("<tr>"+newAct.replace(/1/g,actCount)+"</tr>");

	    var dt = new Date();
	    var date = dt.toISOString().slice(0,10);
	    var time = dt.getHours()+":"+dt.getMinutes();
	    $('#fechaAct-'+actCount).text(date);
	    $('#horaInAct-'+actCount).text(time); 
	    $('#tipoAct-'+actCount).text($('#planAct-'+actNum).text());
	    //alert(actNum);
	    
	    actCount++;
	  });


	$('#btn-terminar-1').on('click', function (e) {
			alert(e.target.id);
	    $('#avance-'+actCount-1).text('100%');
		});

	$('#tblGrid').on('click','tr', function () {
		var trId = $(this).attr('id');
		actNum = trId.slice(-1);
	    $(this).toggleClass("clicked");
	 });

})

function advance(){

	var pId = $(this).attr("id");
	var id = pId.slice(-1);
	alert(id);
	$('#avance-'+id).text('100%'); 

}