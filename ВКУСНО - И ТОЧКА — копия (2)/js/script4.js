const vacContainers = document.querySelectorAll('.vac-container');
const vacDetailsOverlay = document.getElementById('vacDetailsOverlay');
const vacDetailsContent = document.getElementById('vacDetailsContent');

vacContainers.forEach(container => {
    const button = container.querySelector('button');
    button.addEventListener('click', (event) => {event.stopPropagation();
        const profession = container.getAttribute('data-profession');
        const phone = container.getAttribute('data-phone');
        const schedule = container.getAttribute('data-schedule');
        const available = container.getAttribute('data-available');
        const salary = container.getAttribute('data-salary');
        const description = container.getAttribute('data-description');
    vacDetailsContent.innerHTML = `
            <button class="close-button" id="closeDetails">&times;</button>
            <h2>${profession}</h2>
            <p><strong>Описание:</strong> ${description}</p>
             <p><strong>Номер телефона для связи:</strong> ${phone}</p>
             <p><strong>График работы:</strong> ${schedule}</p>
             <p><strong>Свободные места:</strong> ${available}</p>
            <p><strong>Зарплата:</strong> ${salary} Р/месяц</p>

        `;
      vacDetailsOverlay.style.display = 'flex';

     const closeButton = document.getElementById('closeDetails');
            closeButton.addEventListener('click',() =>{
                vacDetailsOverlay.style.display = 'none';
            })

    });
});


