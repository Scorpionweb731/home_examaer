function submitForm(formId) {
	if ( formId === 'contactForm' )
	{

		const form = document.getElementById(formId);
		const formData = new FormData(form);
		const jsonData = {};
		
		for (const [key, value] of formData) {
			if (key === 'schedule') {
				const formattedDate = moment(value).format('YYYY-MM-DDTHH:mm:ss');
				const timezoneOffset = moment(value).utcOffset();
				const hours = Math.floor(Math.abs(timezoneOffset) / 60);
				const minutes = Math.abs(timezoneOffset) % 60;
				const timezoneOffsetString = `+${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
				jsonData[key] = `${formattedDate}${timezoneOffsetString}`;
			} else {
				jsonData[key] = value;
			}
		}
		
		const xhr = new XMLHttpRequest();
		// xhr.open('POST', 'https://newep.pythonanywhere.com/api/v1/contact/', true);
		xhr.open('POST', form.action, true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		
		xhr.onload = function() {
			if (xhr.status === 200) {
			  console.log('Form submitted successfully!');
			  $('#success-modal').modal('show');
			  // You can also update the UI or display a success message here
			} else {
			  console.error('Error submitting form:', xhr.statusText);
			  $('#error-modal').modal('show');
			  // You can also display an error message to the user here
			}
		};
	
		xhr.send(JSON.stringify(jsonData));
	
		return false;
	}
	elif ( formId === 'careerForm' )
	{
		
	}
}

function closeErrorModal() {
	$('#error-modal').modal('hide');
}

function closeSuccessModal() {
	$('#success-modal').modal('hide');
}