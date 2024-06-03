import {Viewer} from 'mapillary-js';

const container = document.createElement('div');
container.style.width = '400px';
container.style.height = '300px';
document.body.appendChild(container);

const viewer = new Viewer({
  accessToken: 'MLY|7710068445706096|81568db47daeefc6818d788e1df6aac3',
  container,
  imageId: 'pexels-pixabay-87651.jpg',
});