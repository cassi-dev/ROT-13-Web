function rot(a, b) {
    return a.replace(/[a-zA-Z]/g, function (c) {
        return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + b) ? c : c - 26);
    });
}
function rotupdate() {
    document.getElementById('rotoutput').value = rot(document.getElementById('rotinput').value, +document.getElementById('rot').value);
}


function copytext(text) {
    let copyText = document.getElementById('rotoutput');
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copyText.value);
}


