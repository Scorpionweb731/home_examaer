
const form = document.querySelector('.career_form_validate');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let hidden_file = document.querySelector('#hidden_file');
    
    if (hidden_file.files.length === 0) {
      alert('Please upload a resume.');
    }else{
        try {
            form.submit();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }     
})
