(async function () {
  'use strict';

  let pictures;

  async function loadPictures(search) {
    try {
      const r = await fetch(`${search}.json`);
      if (!r.ok) {
        throw new Error(`${r.status} - ${r.statusText}`);
      }
      return r.json();
    } catch (e) {
      console.error(e);
    }
  }

  const pictureElem = document.querySelector('#picture');
  const pictureCaption = document.querySelector('figcaption');

  let activeIndex = 0;
  function updatePicture() {
    pictureElem.src = `images/${pictures[activeIndex].media.m.replace('https://live.staticflickr.com/65535/', '').replace('_m', '')}`;
    pictureCaption.innerText = pictures[activeIndex].title;
  }

  const searchInput = document.querySelector('#search');

  document.querySelector('#go').addEventListener('click', async () => {
    pictures = (await loadPictures(searchInput.value)).items;

    updatePicture();
  });

  document.querySelector('#left').addEventListener('click', () => {
    if(--activeIndex < 0) {
      activeIndex = pictures.length - 1;
    }
    updatePicture();
  });

  document.querySelector('#right').addEventListener('click', () => {
    if(++activeIndex == pictures.length) {
      activeIndex = 0;
    }
    updatePicture();
  });
}());
