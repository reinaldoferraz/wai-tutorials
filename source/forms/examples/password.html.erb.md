---
title: Full Password Example
source: ../notifications.html#complex-messages
layout: fullcode
---

{::nomarkdown}
<%= sample_start %>

<form method="post" action="#">
	<label for="ex2_password">Password:</label>
	<input type="text" name="password" id="ex2_password">
	<span id="passwordmeter"><span></span></span>
	<span id="passwordmessage" aria-live="polite"></span>
</form>

<style>
	#passwordmeter {
		display:inline-block;
		width:125px;
		height: 20px;
		border: 1px solid #666;
		vertical-align:middle;
	}
	#passwordmeter span {
		display:inline-block;
		height:1em;
		background-color: gray;
		width:25px;
		height: 20px;
	}
</style>

<script>
(function(){var a;a=function(){var a,b;b=document.createElement("script");b.src="../../../javascripts/zxcvbn.js";b.type="text/javascript";b.async=!0;a=document.getElementsByTagName("script")[0];return a.parentNode.insertBefore(b,a)};null!=window.attachEvent?window.attachEvent("onload",a):window.addEventListener("load",a,!1)}).call(this);

document.getElementById('ex2_password').addEventListener('keyup',
		function(){
			var meter = document.querySelector('#passwordmeter span');
			var msg = document.getElementById('passwordmessage');
			var pw = zxcvbn(this.value);
			meter.style.width = (pw.score+1) * 25 + 'px';
			if (pw.score == 0) {
				meter.style.backgroundColor = 'red';
				msg.innerHTML = '<strong>Weak:</strong> Cracked instantly';
			} else if (pw.score < 3) {
				meter.style.backgroundColor = 'red';
				msg.innerHTML = '<strong>Weak:</strong> Cracked in ' + pw.crack_time_display;
			} else if (pw.score == 3) {
				meter.style.backgroundColor = 'yellow';
				msg.innerHTML = '<strong>Okay:</strong> Cracked in ' + pw.crack_time_display;
			} else {
				meter.style.backgroundColor = 'green';
				msg.innerHTML = '<strong>Strong:</strong> Cracked in ' + pw.crack_time_display;
			}
			if (this.value == "") {
				meter.style.backgroundColor = 'gray';
				msg.innerHTML = ' ';
			}
	});

</script>

<%= sample_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('','HTML') %>
{:/nomarkdown}

~~~ html
<label for="password">Password:</label>
<input type="text" name="password" id="password">
<span id="passwordmeter"><span></span></span>
<span id="passwordmessage" aria-live="polite"></span>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'CSS') %>
{:/nomarkdown}

~~~ css
#passwordmeter {
	display:inline-block;
	width:125px;
	height: 20px;
	border: 1px solid #666;
	vertical-align:middle;
}
#passwordmeter span {
	display:inline-block;
	height:1em;
	background-color: gray;
	width:25px;
	height: 20px;
}
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

{::nomarkdown}
<%= code_start('', 'JavaScript') %>
{:/nomarkdown}

~~~ js
document.getElementById('password').addEventListener('keyup',
		function(){
			// (1) Select the password meter and message elements.
			var meter = document.querySelector('#passwordmeter span');
			var msg = document.getElementById('passwordmessage');

			// (2) Calculate the strength of the password.
			var pw = get_pw_strength(this.value);

			// (3) Set the with of the password meter to a multiple of the score.
			meter.style.width = (pw.score+1) * 25 + 'px';

			/* (4) Set the color of the meter to
						 a) red if the score < 3
						 b) yellow if the score = 3
						 c) green if the score = 4

				(5) Change the text of the password message element accordingly. */
        if (pw.score == 0) {
          meter.style.backgroundColor = 'red';
          msg.innerHTML = '<strong>Really Weak</strong> Password';
        } else if (pw.score < 3) {
          meter.style.backgroundColor = 'red';
          msg.innerHTML = '<strong>Weak</strong> Password (cracked in ' + pw.crack_time_display + ')';
        } else if (pw.score == 3) {
          meter.style.backgroundColor = 'yellow';
          msg.innerHTML = '<strong>Good</strong> Password (cracked in ' + pw.crack_time_display + ')';
        } else {
          meter.style.backgroundColor = 'green';
          msg.innerHTML = '<strong>Strong</strong> Password (cracked in ' + pw.crack_time_display + ')';
        }

			/* (6) If the input is empty, there is no text output
						 and the color of the meter is set to gray. */
			if (this.value == "") {
				meter.style.backgroundColor = 'gray';
				msg.innerHTML = ' ';
			}
	});
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}
