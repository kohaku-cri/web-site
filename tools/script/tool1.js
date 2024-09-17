function run() {
    let get_int = document.getElementById("get_int").value;
    get_int = get_int.split(" ");
    let x = parseInt(get_int[0]);
    let z = parseInt(get_int[2]);
    x /= 16;
    z /= 16;
    x = Math.floor(x);
    z = Math.floor(z);
    x *= 16;
    z *= 16;
    x += 8;
    z += 8;
    const result = `x=${x},z=${z}`;
    const result_text = `${x} ~ ${z}`
    if(result.match("NaN")) {
        document.getElementById("result_text").innerText = "探索失敗..." ;
        document.getElementById("result_error").innerText = "※無効な入力形式です※";
    }
    else {
        document.getElementById("result_text").innerText = `${result} に発見されました` ;
        document.getElementById("result_error").innerText = result_text;
    }
}
function reset() {
    let reset = document.getElementById("get_int");
    reset.value = "";
    document.getElementById("result_text").innerText = "";
    document.getElementById("result_error").innerText = "";
}