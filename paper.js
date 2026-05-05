// ၁။ မာတိကာ (Table of Contents) အဖွင့်အပိတ်
function toggleTOC() {
    const tocOverlay = document.getElementById('toc-overlay');
    if (tocOverlay) {
        const isOpening = tocOverlay.style.display !== 'block';
        if (isOpening) {
            tocOverlay.style.display = 'block';
            setTimeout(() => {
                const activeItem = document.querySelector('.active-chapter');
                const tocList = document.querySelector('.toc-list');
                if (activeItem && tocList) {
                    activeItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
        } else {
            tocOverlay.style.display = 'none';
        }
    }
}

// ၂။ Setting Menu
function toggleSetting() {
    const settingOverlay = document.getElementById('setting-overlay');
    if (settingOverlay) {
        settingOverlay.style.display = (settingOverlay.style.display === 'block') ? 'none' : 'block';
    }
}

// ၃။ PDF ဒေါင်းလော့ဆွဲရန်
function downloadPDF() {
    toggleSetting();
    setTimeout(() => { window.print(); }, 500);
}

// ၄။ စာလုံးဆိုဒ် ချိန်ညှိခြင်း
let currentFontSize = 19;
function changeFontSize(action) {
    const display = document.getElementById('font-size-display');
    const contentArea = document.getElementById('reading-content');
    if (!contentArea) return;
    if (action === 'large' && currentFontSize < 70) currentFontSize += 1;
    else if (action === 'small' && currentFontSize > 4) currentFontSize -= 1;
    contentArea.style.fontSize = currentFontSize + 'px';
    if (display) display.innerText = currentFontSize;
    localStorage.setItem('userFontSize', currentFontSize);
}

// ၅။ စာလုံးအထူအပါး ချိန်ညှိခြင်း
let currentWeight = 400;
function setWeightPreset(weight) {
    currentWeight = weight;
    applyWeightUpdate();
}
function spinWeight(amount) {
    let nextWeight = currentWeight + amount;
    if (nextWeight >= 100 && nextWeight <= 900) {
        currentWeight = nextWeight;
        applyWeightUpdate();
    }
}
function applyWeightUpdate() {
    const contentArea = document.querySelector('article');
    if (contentArea) contentArea.style.fontWeight = currentWeight;
    document.getElementById('digit-hundreds').innerText = Math.floor(currentWeight / 100);
    document.getElementById('digit-tens').innerText = Math.floor((currentWeight % 100) / 10);
    document.getElementById('digit-ones').innerText = currentWeight % 10;
    localStorage.setItem('userFontWeight', currentWeight);
}

// ၆။ အသံဖိုင် စနစ်
function toggleAudio(audioId, btn) {
    const audio = document.getElementById(audioId);
    const allAudios = document.getElementsByTagName('audio');
    const allBtns = document.getElementsByClassName('custom-play-btn');
    for (let i = 0; i < allAudios.length; i++) {
        if (allAudios[i].id !== audioId) {
            allAudios[i].pause();
            allBtns[i].innerText = ">"; 
        }
    }
    if (audio.paused) {
        audio.play();
        btn.innerText = "||";
    } else {
        audio.pause();
        btn.innerText = ">";
    }
}

// ၇။ Progress Bar နှင့် အခြား Event များ
document.addEventListener('DOMContentLoaded', () => {
    // အချိန် မှတ်သားခြင်း
    const savedSize = localStorage.getItem('userFontSize');
    if (savedSize) {
        currentFontSize = parseInt(savedSize);
        document.getElementById('reading-content').style.fontSize = currentFontSize + 'px';
        document.getElementById('font-size-display').innerText = currentFontSize;
    }
    const savedWeight = localStorage.getItem('userFontWeight');
    if (savedWeight) { currentWeight = parseInt(savedWeight); applyWeightUpdate(); }

    // Scroll မှတ်သားခြင်း
    const sections = document.querySelectorAll('section');
    const tocLinks = document.querySelectorAll('.toc-list li a');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                tocLinks.forEach(link => {
                    link.classList.remove('active-chapter');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active-chapter');
                        localStorage.setItem('lastReadChapter', id);
                    }
                });
            }
        });
    }, { rootMargin: '-10% 0px -70% 0px' });
    sections.forEach(section => observer.observe(section));
});

document.addEventListener('timeupdate', function(e) {
    if (e.target.tagName === 'AUDIO') {
        const idNum = e.target.id.replace('audio', '');
        const progress = document.getElementById('progress' + idNum);
        if (progress && e.target.duration > 0) {
            progress.style.width = (e.target.currentTime / e.target.duration) * 100 + "%";
        }
    }
}, true);

function seekAudio(audioId, event) {
    const audio = document.getElementById(audioId);
    if (!audio.duration) return;
    audio.currentTime = (event.offsetX / event.currentTarget.offsetWidth) * audio.duration;
}

function adjustSpeed(audioId, amount) {
    const audio = document.getElementById(audioId);
    const display = document.getElementById('speed-display-' + audioId);
    if (audio) {
        let newSpeed = Math.round((audio.playbackRate + amount) * 100) / 100;
        if (newSpeed >= 0.5 && newSpeed <= 2.0) {
            audio.playbackRate = newSpeed;
            display.innerText = newSpeed.toFixed(2).replace('.00', '') + 'x';
        }
    }
}
