// ここからメッセージ見ないでもろて・・byこはく

function showAlert() {
    alert('ワァ！見つかったァ\n次回の舞台は神社！');
}

document.addEventListener('DOMContentLoaded', (event) => {
    const specificLink = document.getElementById('specific-link');
    specificLink.addEventListener('click', showAlert);
});