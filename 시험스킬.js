// 화이트 모드 버튼
const whiteMode = document.getElementById("white-mode");
const body = document.body;

whiteMode.addEventListener("click", () => {
    body.classList.toggle("white-mode")
});

// -------------------------------------------------------
// 스킬 모션 그래프
const bars = document.querySelectorAll(".percent-bar .percent");

bars.forEach((bar) => {
    const totalPercent = parseFloat(bar.getAttribute("data-percent"));

    let t = 0;
    let motion;

    bar.addEventListener("mouseover", () => {
        if(!motion) {
            motion = setInterval(() => {
                if( t > totalPercent ) {
                    clearInterval(motion);
                    motion = null;
                    t = 0;
                } else {
                    bar.style.width = (t++) + "%";
                }
            },10);
        }
    });
});

