

(async function () {

    //const theBody = document.querySelector('body');
    const thisSection = document.querySelector('section');



    const videoElem = document.querySelector('video');
    const videoList = await fetch('videos.json');
    const videoList2 = await videoList.json();
    videoList2.forEach((e) => {
        const newVideo = document.createElement('div');
        newVideo.innerHTML = `<p>${e.title}
</p><img src = "${e.image}"></img>`;

        thisSection.appendChild(newVideo);

        newVideo.addEventListener('click', (c) => {
            videoElem.src = e.url;

        })
    })
})();