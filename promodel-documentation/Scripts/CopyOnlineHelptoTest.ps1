Import-Module bitstransfer
$Username = "PROMODEL\SVC-COTSBUILD"
$Password = ConvertTo-SecureString "veil-s@tk2" -AsPlainText -Force
$mycreds = New-Object System.Management.Automation.PSCredential($Username, $Password)
$sourcePath = "\\MIBITBUCKET\Content\onlinehelp"
$destPath = "\\miwebtest1\web\Test"
Start-BitsTransfer -Source $sourcePath -Destination $destPath -Credential $mycreds

$sourcePath = "\\MIBITBUCKET\Content\onlinehelp"
net use x: \\miwebtest1\web\test2.promodel.com\onlinehelp /user:PROMODEL\SVC-COTSBUILD veil-s@tk2
robocopy $sourcePath x: /e /move /r:1 /w:1
net use x: /delete
