fillform();

function fillForm() {
	var games_cnt = 0;
	var op = ["Enable", "Disable"];
	var games = ["amzn1.ask.skill.565084a1-9246-4cb0-8166-e2f2ecc83158", "amzn1.ask.skill.a0874f27-b28d-442d-9f53-e3fa8ad4f0a4"];

	document.getElementsByName('customerId')[0].value = 'A397ZIFEY035JR';
	document.getElementsByName('applicationId')[0].value = games[games_cnt];
	$('#regionDrdn').val('EUAmazon');
	document.getElementById(op[1]).checked = true;

	games_cnt++;

	var form_data = new FormData($('#ApplicationForm')[0]);
	            
  $.ajax({
	    type: 'POST',
	    url: '',
	    data: form_data,
	    cache: false,
	    dataType: 'html',
	    processData: false,
	    contentType: false,
	    async: true,
	    success: function() { setTimeout(fillForm, 60 * 1000); }
   });
}
