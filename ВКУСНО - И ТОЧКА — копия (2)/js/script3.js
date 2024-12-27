const newsContainers = document.querySelectorAll('.container-new');
        const newDetailsOverlay = document.getElementById('newDetailsOverlay');
        const newDetailsContent = document.getElementById('newDetailsContent');

        newsContainers.forEach(container => {
             const button = container.querySelector('.orange-button');
            button.addEventListener('click', (event) => {
                  event.stopPropagation();
                const newsName = container.getAttribute('data-name');
                const newsImg = container.getAttribute('data-img');
                const newsDate = container.getAttribute('data-date');
                 const newsDescription = container.getAttribute('data-description');

                   newDetailsContent.innerHTML = `
                    <button class="close-button" id="closeDetails">&times;</button>
                    <h2>${newsName}</h2>
                     <img src="${newsImg}" alt="${newsName}">
                    <p><strong>Дата:</strong> ${newsDate}</p>
                     <p><strong>Описание:</strong> ${newsDescription}</p>

                `;

                newDetailsOverlay.style.display = 'flex';

                 const closeButton = document.getElementById('closeDetails');
                    closeButton.addEventListener('click',() =>{
                        newDetailsOverlay.style.display = 'none';
                    })
            });
        });