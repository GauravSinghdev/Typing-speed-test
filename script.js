const paragraphs = [
    "The sun rose majestically over the horizon, painting the sky with hues of pink and gold. Birds began their morning chorus, filling the air with melodies that echoed through the waking world. Dew glistened on the grass, a testament to the coolness of the night just passed. In the distance, a river meandered lazily, its tranquil waters reflecting the beauty of the dawn. Trees swayed gently in the breeze, their leaves rustling softly as if whispering secrets to the morning.",
    "As the day unfolded, people emerged from their homes, eager to embrace the opportunities that lay ahead. Cars hummed along the streets, carrying commuters to their destinations with purposeful intent. The city buzzed with activity, a symphony of movement and sound that filled the air with energy. In parks and squares, friends gathered to share laughter and conversation, basking in the warmth of each other's company.",
    "Meanwhile, workers toiled in offices and factories, their minds focused on the tasks at hand. Time seemed to stretch and bend, each moment pregnant with possibility and potential. Across the world, millions of lives intersected and intertwined, creating a tapestry of human experience that spanned continents and cultures. And as the day drew to a close, the sky once again transformed, this time ablaze with the fiery hues of sunset.",
    "Night descended like a soft blanket, wrapping the world in darkness punctuated by the twinkle of stars. The moon rose, casting its silvery glow over the landscape below. Creatures of the night stirred from their slumber, venturing forth to explore the shadows that now enveloped the earth. And so, the cycle continued, each day blending seamlessly into the next, a never-ending dance of light and dark, of life and of dreams.",
    "Mountains stood sentinel in the distance, their peaks etched against the canvas of the sky. Rivers carved their way through valleys, their waters sparkling in the sunlight. Forests whispered secrets to those who dared to listen, their ancient wisdom echoing through the ages. And high above it all, clouds drifted lazily, their ever-changing shapes a testament to the passage of time.",
    "From bustling cities to remote wilderness, the world was alive with possibility, each moment pregnant with potential. People laughed, people cried, people loved, and people dreamed. And in the end, isn't that what life is all about? To live, to love, and to embrace the journey, wherever it may lead.",
    "In recent years, some teeming herons are thought of simply as numbers. Nowhere is it disputed that an unlaid fur is a marble of the mind. Far from the truth, few can name a glossy lier that isn't an ingrate bone. The chicken is a giraffe. They were lost without the abscessed leek that composed their fowl. An interviewer is a tussal bomb. Vanward maracas show us how scarfs can be doubts. Few can name an unguled punch that isn't pig.",
    "A cough is a talk from the right perspective. A designed tractor's tray comes with it the thought that the snuffly flax is a rainbow. Their health was, in this moment, an earthy passbook. This could be, or perhaps the swordfishes could be said to resemble healthy sessions. A capricorn is a helium from the right perspective. However, a sled is a mailman's tennis. The competitor of an alarm becomes a toeless raincoat. Their twist was, in this moment.",
    "Authors often misinterpret the flag as a wayless trigonometry, when in actuality it feels more like a bousy gold. Few can name a jasp oven that isn't a stutter grape. They were lost without the huffy religion that composed their booklet. Those waves are nothing more than pedestrians. Few can name a quartered semicolon that isn't a rounding scooter. Though we assume the latter, the literature would have us believe.",
    "This could be, or perhaps few can name a pasteboard quiver that isn't a brittle alligator. A swordfish is a death's numeric. Authors often misinterpret the mist as a swelling asphalt, when in actuality it feels more like a crosswise closet. Some posit the tonal brother-in-law to be less than newborn. We know that the sizes could be said to resemble sleepwalk cycles. Before seasons, supplies were only fighters. Their stew was, in this moment.",
    "The frosts could be said to resemble backstage chards. One cannot separate colleges from pinkish bacons. Far from the truth, the mom of a rooster becomes a chordal hydrogen. A tempo can hardly be considered a purer credit without also being a pajama. The first combined ease is, in its own way, a pantyhose. Extending this logic, the guides could be said to resemble reddest monkeies. Framed in a different way, an addle hemp is a van.",
    "In the heart of the city, skyscrapers reached towards the sky, their glass facades reflecting the bustling streets below. People hurried past each other, lost in their own thoughts and desires, their footsteps echoing off the pavement. Cars honked impatiently as they navigated the crowded roads, while cyclists weaved through the traffic with practiced ease. Street vendors lined the sidewalks, their colorful wares tempting passersby with exotic scents and flavors. Amidst the chaos, a sense of energy and excitement permeated the air, a tangible reminder of the city's relentless pace and boundless potential.",
    "As night fell, the city transformed into a dazzling display of lights, each building competing for attention with its own neon brilliance. The sounds of laughter and music spilled out from bars and clubs, mingling with the cacophony of car horns and sirens. High above, the stars twinkled faintly in the polluted sky, a silent reminder of the natural world beyond the urban sprawl. Yet despite the chaos and noise, there was a certain beauty to be found in the city's relentless energy, a vibrancy that drew people from all walks of life to its bustling streets.","In the quiet suburbs, rows of houses stretched out as far as the eye could see, their neatly manicured lawns and picket fences offering a stark contrast to the chaos of the city. Children played in the streets, their laughter echoing off the pavement as they chased each other in a game of tag. Parents watched from their front porches, sipping iced tea as they soaked in the warmth of the afternoon sun. It was a scene of idyllic tranquility, a world away from the hustle and bustle of the city, yet no less alive with the hum of human activity.",
    "As night fell, the city transformed into a dazzling display of lights, each building competing for attention with its own neon brilliance. The sounds of laughter and music spilled out from bars and clubs, mingling with the cacophony of car horns and sirens. High above, the stars twinkled faintly in the polluted sky, a silent reminder of the natural world beyond the urban sprawl. Yet despite the chaos and noise, there was a certain beauty to be found in the city's relentless energy, a vibrancy that drew people from all walks of life to its bustling streets.", "In the desert, dunes stretched out as far as the eye could see, their shifting sands sculpted by the wind into graceful curves and ridges. The sun beat down mercilessly, casting shimmering waves of heat across the barren landscape. Scorpions scuttled across the sand, their claws clicking softly as they hunted for prey. Cacti stood tall and proud, their spiny arms reaching towards the sky in defiance of the harsh environment. And yet, amidst the desolation, there was a certain beauty to be found in the starkness of the desert, a sense of awe-inspiring grandeur that spoke of nature's power and resilience.",
    "In the frozen wastelands of the Arctic, ice stretched out in all directions, its shimmering surface broken only by the occasional iceberg jutting out of the sea. The air was cold and biting, stinging the skin and freezing the breath in the lungs. Yet despite the harshness of the environment, life found a way to flourish. Polar bears prowled the ice floes, their white fur blending seamlessly with the snow. Seals basked on the shore, their sleek bodies glistening in the weak sunlight. And high above, the northern lights danced across the sky, painting it with hues of green and purple in a mesmerizing display of natural beauty.",
    "In the heart of the jungle, dense foliage obscured the ground beneath, creating a lush green canopy that stretched as far as the eye could see. The air was thick with humidity, clinging to the skin and filling the lungs with each breath. Monkeys swung through the trees, their calls echoing through the jungle as they searched for food. Birds flitted among the branches, their colorful plumage flashing in the dappled sunlight. And hidden deep within the undergrowth, unseen creatures slithered and crawled, their presence felt more than seen. It was a world of untamed beauty, a realm where nature reigned supreme.",
];

const typingText = document.querySelector(".typing-text p")
const inpField = document.querySelector(".wrapper .input-field")
const tryAgainBtn = document.querySelector(".content button")
const timeTag = document.querySelector(".time span b")
const mistakeTag = document.querySelector(".mistake span")
const wpmTag = document.querySelector(".wpm span")
const cpmTag = document.querySelector(".cpm span")

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = mistakes = isTyping = 0;

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        console.log(char);
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0: wpm;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        inpField.value = "";
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);
