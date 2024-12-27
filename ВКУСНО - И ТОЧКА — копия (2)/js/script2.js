document.addEventListener('DOMContentLoaded', () => {
    const combinedForm = document.getElementById('combined-form');
  
    combinedForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (combinedForm.checkValidity()) {
        const formData = new FormData(combinedForm);
        const data = Object.fromEntries(formData.entries());
        console.log('Данные отправлены', data);
        alert('Данные отправлены');
        combinedForm.reset();
      }
    });
  });