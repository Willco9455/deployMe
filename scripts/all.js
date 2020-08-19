//button: width-89px
document.getElementById("title").style="padding-right:89px;";
var testGlobal = "var was global";
{
    let testGlobal = "var was not global";
    document.write(testGlobal);
}
