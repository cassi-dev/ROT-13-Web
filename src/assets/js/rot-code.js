let blobObject = null;

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


function downloadfile(anchorSelector, str, fileName) {
    if(window.navigator.msSaveOrOpenBlob) {
		let fileData = [str];
		blobObject = new Blob(fileData);
		$(anchorSelector).click(function(){
			window.navigator.msSaveOrOpenBlob(blobObject, fileName);
		});
	} else {
		let url = "data:text/plain;charset=utf-8," + encodeURIComponent(str);
		$(anchorSelector).attr("href", url);
	}
}

$(function () {
	downloadfile("#export", document.getElementById('rotoutput').value ,"rot13exportoutput.txt");
});



function coslog() {
    if (document.getElementById('rotoutput').value == 0) {
        console.log("[INFO] >> Null")
    } else {
        console.log(document.getElementById('rotoutput').value);
    }
}

