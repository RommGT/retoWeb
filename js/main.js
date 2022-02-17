function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function equal() {
    let exp = document.form.textview.value;

    if (exp) {
        document.form.textview.value = eval(exp);
    }
}
//La flag es udlaCTF{j4v4scr1pt_h3re}
function clean() {
    document.form.textview.value = '';
}

function back() {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}