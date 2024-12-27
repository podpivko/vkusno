const sliderInner = document.querySelector('.slider-inner');
const images = document.querySelectorAll('.slider-inner img');
let currentImage = 0;

function showImage(index) {
  const translateX = -index * 700; // 700 - ширина изображения
  sliderInner.style.transform = `translateX(${translateX}px)`;
  currentImage = index;
}

function nextImage() {
  showImage((currentImage + 1) % images.length);
}

function prevImage() {
  showImage((currentImage - 1 + images.length) % images.length);
}


setInterval(nextImage, 4000); // Автоматическая смена каждые 3 секунды

// Добавление кнопок управления (опционально)
// ... (код для добавления кнопок "Вперед" и "Назад") ...


const foodContainers = document.querySelectorAll('.container-food');
const foodDetailsOverlay = document.getElementById('foodDetailsOverlay');
const foodDetailsContent = document.getElementById('foodDetailsContent');

foodContainers.forEach(container => {
    container.addEventListener('click', () => {
        const foodName = container.getAttribute('data-name');
        const foodImg = container.getAttribute('data-img');
        const foodWeight = container.getAttribute('data-weight');
                const foodPrice = container.getAttribute('data-price');
                 const foodAvailable = container.getAttribute('data-available');
                 const foodPhone = container.getAttribute('data-phone');
                  const foodDescription = container.getAttribute('data-description');
                
               foodDetailsContent.innerHTML = `
                    <button class="close-button" id="closeDetails">&times;</button>
                    <h2>${foodName}</h2>
                     <img src="${foodImg}" alt="${foodName}">
                    <p>Вес: ${foodWeight}</p>
                    <p>Цена: ${foodPrice}</p>
                    <p>Доступен к продаже: ${foodAvailable}</p>
                    <p>Номер телефона для заказа: ${foodPhone}</p>
                    <p>Описание: ${foodDescription}</p>
                `;

                 foodDetailsOverlay.style.display = 'flex';

                  const closeButton = document.getElementById('closeDetails');
                    closeButton.addEventListener('click',() =>{
                        foodDetailsOverlay.style.display = 'none';
                    })
                
            });
        });