const intro = document.querySelector(".intro")
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
// END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

// SCROLL MAGIC
const controller = new ScrollMagic.Controller()

// Scenes
const scene = new ScrollMagic.Scene({
    duration: 11030, // HOW LONG THE VIDEO IS
    triggerElement: intro,
    triggerHook: 0 // When to start the video
})
.setPin(intro)
.addTo(controller)

// Video Animation
let accelamount = 0.1; // Accleration of the video
let scrollpos = 0;
let delay = 0;

// Event Listener on scroll
scene.on("update", e=>{
    scrollpos = e.scrollPos/1000; // Convert to seconds
});

// Set a delay so video keeps playing a little bit after you stop scrolling
setInterval(()=>{
    delay += (scrollpos - delay) * accelamount; 

    video.currentTime = delay;
}, 41.6); // 1000/(Frame rate of the video)

video.addEventListener('loadedmetadata', function() {
    if (video.buffered.length === 0) return;

    var bufferedSeconds = video.buffered.end(0) - video.buffered.start(0);
  });