// ここからメッセージ見ないでよ・・・byこはく

function showAlert() {
    alert("ワァ！見つかったァ\n次作の舞台は神社！そして過去最高規模！\nでも制作が難航しまくってるらしいよ");
}
document.addEventListener("DOMContentLoaded", (event) => {
    const specificLink = document.getElementById("specific-link");
    specificLink.addEventListener("click", showAlert);
});
