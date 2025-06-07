document.addEventListener('DOMContentLoaded', () => {
  const artistsData = [
    { name: 'Henrique e Juliano', image: './imagens/art-henrique-e-juliano.png', showcase: false },
    { name: 'MC Cabelinho', image: './imagens/art-mc-cabelinho.png', showcase: false },
    { name: 'MC GP', image: './imagens/art-mc-gp.png', showcase: false },
    { name: 'Silvanno Salles', image: './imagens/art-silvanno-salles.png', showcase: false },
    { name: 'Wesley Safadão', image: './imagens/art-wesley-safadão.jpg', showcase: false },
    { name: 'Zé Neto e cristiano', image: './imagens/art-zé Neto e cristiano.png', showcase: false }
  ];

  const albumsData = [
    { name: 'Caçador de tesouro', artist: 'MC Kevin e MC IG', image: './imagens/alb-caçador-de-tesouros.png' },
    { name: 'Arrocha brasil', artist: 'Pablo', image: './imagens/alb-arrocha-brasil.png' },
    { name: 'Arrocha do Safadão', artist: 'Wesley Safadão', image: './imagens/alb-arrocha-do-safadão.png' },
    { name: 'Resenha do arrocha', artist: 'J.Eskine', image: './imagens/alb-resenha-do-arrocha.png' },
    { name: 'Seresta pra paredão 1.0', artist: 'Nadson Ferinha', image: './imagens/alb-seresta-praparedão-1.0.png' },
    { name: 'Vagabundo de luxo', artist: 'Wiu', image: './imagens/alb-vagabundo-de-luxo.png' }
  ];

  const dvds = [
    { name: 'Nós Combina', artist: 'Mãolee, Filipe Ret', image: './imagens/musica - nome da música 8.png' },
    { name: 'Mônaco Freestyle', artist: 'Veigh, Supernova Ent', image: './imagens/musica - nome da música 6.png' },
    { name: '333', artist: 'Matuê', image: './imagens/musica - nome da música 5.png' },
    { name: 'Obrigado Deus', artist: 'Leo Foguete', image: './imagens/musica - nome da música 4.png' },
    { name: 'Beijinho de mel', artist: 'Iguinho e Lulinha', image: './imagens/musica - nome da música 3.png' },
    { name: 'Bateria acabou', artist: 'Toque dez', image: './imagens/musica - nome da música 2.png' }
  ];

  const renderItems = (data, containerSelector, cardClass, htmlBuilder) => {
    const container = document.querySelector(containerSelector);
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = cardClass;
      card.innerHTML = htmlBuilder(item);
      container.appendChild(card);
    });
  };

  const createArtistHTML = ({ name, image, showcase }) => `
    <img src="${image}" alt="Imagem do ${name}">
    <div>
      <h3>${name.replace('-', ' ')}</h3>
      <p>Artista</p>
      ${showcase ? '<span class="showcase-label">Mostruário</span>' : ''}
    </div>
  `;

  const createAlbumHTML = ({ name, artist, image }) => `
    <img src="${image}" alt="Capa do álbum ${name}">
    <div>
      <h3>${name}</h3>
      <p>${artist}</p>
    </div>
  `;

  const createDVDHTML = ({ name, artist, image }) => `
    <img src="${image}" alt="Capa do DVD ${name}">
    <div>
      <h3>${name}</h3>
      <p>${artist}</p>
    </div>
  `;

  renderItems(artistsData, '.artists-grid', 'artist-card', createArtistHTML);
  renderItems(albumsData, '.albums-grid', 'album-card', createAlbumHTML);
  renderItems(dvds, '.dvds-grid', 'dvd-card', createDVDHTML);
});
window.addEventListener('load', centralizarHome);
window.addEventListener('resize', centralizarHome);

function centralizarHome() {
  const topBar = document.querySelector('.top-bar');
  const homeButton = document.querySelector('.home-button');

  const topBarWidth = topBar.offsetWidth;
  const homeButtonWidth = homeButton.offsetWidth;

  const deslocamento = -180;

  const leftPosition = (topBarWidth - homeButtonWidth) / 2 - 180;

  homeButton.style.position = 'absolute';
  homeButton.style.left = leftPosition + 'px';
  homeButton.style.top = '10px'; 
}

window.addEventListener('load', centralizarSearchBar);
window.addEventListener('resize', centralizarSearchBar);

function centralizarSearchBar() {
  const topBar = document.querySelector('.top-bar');
  const searchBar = document.querySelector('.search-bar');

  const topBarWidth = topBar.offsetWidth;
  const searchBarWidth = searchBar.offsetWidth;

  const leftPosition = (topBarWidth - searchBarWidth) / 2;

  searchBar.style.position = 'absolute';
  searchBar.style.left = leftPosition + 'px';
  searchBar.style.top = '10px'; 
}
