let click = 0;
let flipSound = document.getElementById("flipSound");
let bgSound = document.getElementById("bgSound");
bgSound.volume = 0;

function flipTheCard() {
    playFlipSound();
    playBgMusic();
    click++;
    if (click % 2 == 1) {
        document.querySelector(".flip-card-inner").style.transform = 'rotateY(-180deg)';
    } else {
        document.querySelector(".flip-card-inner").style.transform = 'rotateY(0deg)';
    }
}

function playFlipSound() {
    flipSound.play();
}

function playBgMusic() {
    bgSound.play();
    $(bgSound).animate({ volume: 1.0 }, 10000); // Music fade-in when flip the card
}

/** Start of snow JS **/
document.addEventListener('DOMContentLoaded', function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function () {
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": false
                }
            },
            "retina_detect": true
        });
    }
    document.head.append(script);
});
/** End of snow JS **/