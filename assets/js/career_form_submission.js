
function validateform(){
    let hidden_file = document.querySelector('#hidden_file');
    if (hidden_file.files.length === 0) {
      alert('Please upload a resume.');
      return false; // Prevent form submission
    }else{
        return true; //
    }     
}
