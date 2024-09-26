function submitForm(formId) {
  const form = document.getElementById(formId);
  
  if (form.checkValidity()) {
    const formData = new FormData(form);
    const jsonData = {};

    // Handle the specific case for the contact form
    if (formId === "contactForm") {
      for (const [key, value] of formData) {
        if (key === "schedule") {
          const formattedDate = moment(value).format("YYYY-MM-DDTHH:mm:ss");
          const timezoneOffset = moment(value).utcOffset();
          const hours = Math.floor(Math.abs(timezoneOffset) / 60);
          const minutes = Math.abs(timezoneOffset) % 60;
          const timezoneOffsetString = `+${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
          jsonData[key] = `${formattedDate}${timezoneOffsetString}`;
        } else {
          jsonData[key] = value;
        }
      }

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://newep.pythonanywhere.com/api/v1/contact/", true);
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          const servResponse = JSON.parse(xhr.responseText);
          document.querySelector("#successMessage").innerHTML = servResponse.message;
          $("#success-modal").modal("show");
          form.reset();
        } else {
          console.error("Error submitting contact form:", xhr.statusText);
          $("#error-modal").modal("show");
        }
      };

      xhr.send(JSON.stringify(jsonData));

    } else if (formId === "careerForm") {
      const isValid = validateform();
      if (isValid) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://newep.pythonanywhere.com/api/v1/career/", true);

        xhr.onload = function () {
          if (xhr.status >= 200 && xhr.status < 300) {
            const servResponse = JSON.parse(xhr.responseText);
            document.querySelector("#successMessage").innerHTML = servResponse.message;
            $("#success-modal").modal("show");
            form.reset();
          } else {
            console.error("Error submitting Career form:", xhr.statusText);
            $("#error-modal").modal("show");
          }
        };

        xhr.send(formData);
      }
    }
  }else{
    alert("Please ensure that all the input fields are filled out with the required details.")
  }

  return false; // Prevent the default form submission if necessary
}

function closeErrorModal() {
  $("#error-modal").modal("hide");
}

function closeSuccessModal() {
  $("#success-modal").modal("hide");
}
