const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

const articles = document.querySelectorAll('article')

const entry = video => () => {
  video.currentTime = 0
  video.play()
}
const exit = video => () => {
  video.pause()
}

for (const article of articles) {
  const video = article.querySelector('video')
  video.addEventListener('loadeddata', () => article.dataset.loaded = true)
  article.addEventListener('pointerenter', entry(video))
  article.addEventListener('pointerleave', exit(video))
}
