// 開発者ツールからメッセージ見るとかサイテー・・・ こはく

function showAlert() {
    alert("ワァ！見つかったァ\n神社が舞台のものかそれとも\nクリスマスマップかはたまたホラー系か・・・\n未定ってことですね！（？）");
}
document.addEventListener("DOMContentLoaded", (event) => {
    const specificLink = document.getElementById("specific-link");
    specificLink.addEventListener("click", showAlert);
});
