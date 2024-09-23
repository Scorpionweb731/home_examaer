function submitForm(formId) {
  if (formId === "contactForm") {
    // Assuming you have a form with a specific id
    const form = document.getElementById(formId);
    const formData = new FormData(form);

    // Function to check if all fields are filled
    const areAllFieldsFilled = () => {
      for (let [key, value] of formData.entries()) {
        if (!value) {
          return false; // If any field is empty, return false
        }
      }
      return true; // All fields are filled
    };

    // Prepare to send data if all fields are filled
    if (areAllFieldsFilled()) {
      const jsonData = {};

      for (const [key, value] of formData) {
        if (key === "schedule") {
          const formattedDate = moment(value).format("YYYY-MM-DDTHH:mm:ss");
          const timezoneOffset = moment(value).utcOffset();
          const hours = Math.floor(Math.abs(timezoneOffset) / 60);
          const minutes = Math.abs(timezoneOffset) % 60;
          const timezoneOffsetString = `+${hours
            .toString()
            .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
          jsonData[key] = `${formattedDate}${timezoneOffsetString}`;
        } else {
          jsonData[key] = value;
        }
      }

      const xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        "https://newep.pythonanywhere.com/api/v1/contact/",
        true
      );
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          var servResponse = JSON.parse(xhr.responseText);
          document.querySelector("#successMessage").innerHTML =
            servResponse.message;
          $("#success-modal").modal("show");
          // Optionally clear the form or do other UI updates
        } else {
          document.querySelector("#successMessage").innerHTML = "";
          console.error("Error submitting contact form:", xhr.statusText);
          $("#error-modal").modal("show");
          // Optionally display an error message
        }
      };

      xhr.send(JSON.stringify(jsonData));
    } else {
      alert("Please fill all the empty fields.");
      // Optionally show an error message to the user
    }

    return false; // Prevent the default form submission if necessary
	
  } else if (formId === "careerForm") {
    if (validateform()) {
      const form = document.getElementById(formId);
      // const resume =  document.querySelector('#hidden_file');
      // // console.log(resume);
      const formData = new FormData(form);

      console.log(formData);
      //const jsonData = {};
      //for (const [key, value] of formData) {
      //		jsonData[key] = value;
      //}

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://newep.pythonanywhere.com/api/v1/career/", true);
      //xhr.open('POST', form.action, true);
      //xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          var servResponse = JSON.parse(xhr.responseText);
          document.querySelector("#successMessage").innerHTML =
            servResponse.message;
          $("#success-modal").modal("show");
          // You can also update the UI or display a success message here
        } else {
          document.querySelector("#successMessage").innerHTML = "";
          console.error("Error submitting Career form:", xhr.statusText);
          $("#error-modal").modal("show");
          // You can also display an error message to the user here
        }
      };

      //xhr.send(JSON.stringify(jsonData));

      xhr.send(formData);
      return false;
    }
  }
}

function closeErrorModal() {
  $("#error-modal").modal("hide");
}

function closeSuccessModal() {
  $("#success-modal").modal("hide");
}
