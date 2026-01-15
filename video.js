function searchVideos() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let videoItems = document.getElementsByClassName('video-item');
    let sections = document.getElementsByClassName('video-section');

    // ဗီဒီယို တစ်ခုချင်းစီကို စစ်ဆေးခြင်း
    for (let i = 0; i < videoItems.length; i++) {
        let titleText = videoItems[i].querySelector('.text').textContent.toLowerCase();
        
        if (titleText.includes(input)) {
            videoItems[i].style.display = "flex";
        } else {
            videoItems[i].style.display = "none";
        }
    }

    // ဗီဒီယို လုံးဝမရှိတော့တဲ့ Section ခေါင်းစဉ်ကြီးကိုပါ ဖျောက်ခြင်း
    for (let i = 0; i < sections.length; i++) {
        let itemsInSection = sections[i].getElementsByClassName('video-item');
        let hasVisibleItem = false;

        for (let j = 0; j < itemsInSection.length; j++) {
            if (itemsInSection[j].style.display !== "none") {
                hasVisibleItem = true;
                break;
            }
        }

        if (hasVisibleItem) {
            sections[i].classList.remove('hidden');
        } else {
            sections[i].classList.add('hidden');
        }
    }
}
