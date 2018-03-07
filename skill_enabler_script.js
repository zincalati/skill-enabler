
function fillForm() {
       var games_cnt = 0;
       var op = ["Enable", "Disable"];
       var games = ["amzn1.ask.skill.565084a1-9246-4cb0-8166-e2f2ecc83158", "amzn1.ask.skill.a0874f27-b28d-442d-9f53-e3fa8ad4f0a4"];
       var the_form = document.forms['ApplicationForm'];

       $('input[name="customerId"]').val('A397ZIFEY035JR');
       the_form.elements["applicationId"].value = games[games_cnt];
       $('#regionDrdn').val('EUAmazon');
       document.getElementById(op[1]).checked = true;

       games_cnt++;

       var $form = $('form[id="ApplicationForm"]'),
              url   = location.protocol + '//' + location.host + $form.attr('action'), 
              $data = $form.serialize();

          $.ajax({
             type: "POST",
             url: url,
             data: $data,
             success: function() { setTimeout(fillForm, 60 * 1000); }
          });
}

if (window.jQuery === undefined) {
    var script    = document.createElement( 'script' );
    script.src    = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
    script.onload = function() { fillForm; }
    document.body.appendChild(script);
}
else {
    fillForm();
}
