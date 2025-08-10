const open = document.querySelector('.open');
const speakerList = document.querySelector('.speakers-lineout');
const btn = document.getElementById('button');

document.addEventListener('DOMContentLoaded', () => {
  open.addEventListener('click', () => {
    open.classList.toggle('oppenned');
  });

  fetch('speakers.json')
    .then((response) => response.json())
    .then((speakers) => {
      let speakerCards = '';
      speakers.forEach((speaker, i) => {
        speakerCards += `<div id="speaker-${i + 1}" class="only-desktop">
          <img src="${speaker.image}" alt="Image of ${speaker.name}">
          <div>
            <h3>${speaker.name}</h3>
            <p class="speaker-summary">${speaker.summary}</p>
            <hr>
            <p>${speaker.summary2}</p>
          </div>
        </div>`;
      });

      speakerList.innerHTML = speakerCards;

      const eachSpeaker = document.querySelectorAll('#speaker-3, #speaker-4, #speaker-5, #speaker-6');

      if (window.innerWidth < 768) {
        eachSpeaker.forEach((el) => {
          el.style.display = 'none';
        });

        btn.addEventListener('click', () => {
          eachSpeaker.forEach((el) => {
            el.style.display = 'flex';
          });

          btn.style.display = 'none';
        });
      }
    });
});
