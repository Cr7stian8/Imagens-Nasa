const apiKey = 'XNDfJe9BMgcT1s0MXNp3RC4kworzZekn9ORy9hYu';
const apiUrl = 'https://api.nasa.gov/planetary/apod';

const getImageData = async (date) => {
  const url = `${apiUrl}?api_key=${apiKey}&date=${date}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const addImageToPage = (data) => {
  const imageElement = document.createElement('img');
  imageElement.src = data.hdurl;
  imageElement.style.width = '40vw';
  imageElement.style.paddingRight = '5vw';
  imageElement.style.paddingLeft = '5vw';

  const imageContainer = document.querySelector('#imagem');
  imageContainer.innerHTML = '';
  imageContainer.appendChild(imageElement);
};

const addContentToPage = (data) => {
  const titleElement = document.createElement('h2');
  titleElement.innerHTML = data.title;
  titleElement.style.color = 'white';

  const dateElement = document.createElement('p');
  dateElement.innerHTML = data.date;
  dateElement.style.color = 'white';

  const descriptionElement = document.createElement('p');
  descriptionElement.innerHTML = data.explanation;
  descriptionElement.style.color = 'white';

  const contentContainer = document.querySelector('#conteudo');
  contentContainer.innerHTML = '';
  contentContainer.appendChild(titleElement);
  contentContainer.appendChild(dateElement);
  contentContainer.appendChild(descriptionElement);
};

const clearPage = () => {
  const imageContainer = document.querySelector('#imagem');
  imageContainer.innerHTML = '';

  const contentContainer = document.querySelector('#conteudo');
  contentContainer.innerHTML = '';
};

const onSearchButtonClick = async () => {
    // Clear the existing content
    clearPage();

    const day = document.querySelector('#dia').value;
    const month = document.querySelector('#mes').value;
    const year = document.querySelector('#ano').value;
    const date = `${year}-${month}-${day}`;

    const data = await getImageData(date);
    addImageToPage(data);
    addContentToPage(data);
  };


const initialize = () => {
  document.querySelector('#buscar').addEventListener('click', onSearchButtonClick);
};

const LimpaImagem = () => {
    const imageElement = document.querySelector('#imagem img');
    if (imageElement && imageElement.parentNode) {
      imageElement.parentNode.removeChild(imageElement);
    }
  };

initialize();