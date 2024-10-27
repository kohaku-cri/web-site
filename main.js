// F12からメッセージ見るとかサイテー・・・ こはく

function showAlert() {
    alert("ワァ！見つかったァ\nトリックorトリック\nもうすぐハロウィン！");
}
document.addEventListener("DOMContentLoaded", (event) => {
    const specificLink = document.getElementById("specific-link");
    specificLink.addEventListener("click", showAlert);
});
