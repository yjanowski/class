(async function () {
  'use strict';

  const videoElem = document.querySelector('video');

  async function loadVideos() {
    try {
      const r = await fetch('videos.json');
      if (!r.ok) {
        throw new Error(`${r.status} - ${r.statusText}`);
      }
      return r.json();
    } catch (e) {
      console.error(e);
    }
  }

  async function displayVideos() {
    const videos = await loadVideos();
    if (!videos) {
      return;
    }

    let activeVideoLi;
    const videoList = document.querySelector('#videos');
    videos.forEach(video => {
      const videoLi = document.createElement('li');
      videoLi.innerHTML = `<span>${video.name}</span><img src="media/${video.picture || 'default.jpeg'}" alt="${video.name}" />`;
      videoList.appendChild(videoLi);

      videoLi.addEventListener('click', () => {
        videoElem.src = video.url;
        //videoElem.play();

        if (activeVideoLi) {
          // activeVideoLi.style.borderColor = 'black';
          document.querySelector('.active').className = 'visited';
        }

        //videoLi.style.borderColor = 'red';
        //videoLi.style.color = 'lightGray';
        videoLi.className = 'visited active';
        activeVideoLi = videoLi;
      });
    });
  }

  displayVideos();
}());
