function lol(){
    document.getElementById('ahh').style.backgroundColor = "black";
    document.getElementById('ahh').style.color = "white";
    document.getElementById("lol").style.display = "none";
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
function exploit(){
    document.getElementById("start").style.display = "none";
    alert("Signing")
    document.getElementById("statuslol").innerHTML = "Signing.";
    setTimeout(() => { document.getElementById("statuslol").innerHTML = "Signing.."; }, 2000);
    setTimeout(() => { document.getElementById("statuslol").innerHTML = "Signing..."; }, 10000);
    setTimeout(() => {document.getElementById("statuslol").innerHTML = "INSTALL"; }, 15000);
    setTimeout(() => { alert("Signed. The Certificate May be Revoked ❌") }, 15000);
    // document.getElementById("statuslol").innerHTML = "Status: Exploited!";
}