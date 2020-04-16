var msg="The truly happy person doesn’t follow wicked advice doesn’t stand on the road of sinners and doesn’t sit with the disrespectful. Instead of doing those things, these persons love the Lord Instruction and they recite God Instruction day and night! They are like a tree replanted by streams of water which bears fruit at just the right time ";
var arr = msg.split(' ');

for(var i=0;i<arr.length;i++)
{
var sp = document.createElement("span");
sp.setAttribute("class","active");
sp.innerHTML=arr[i]+" ";
document.getElementById('dis').appendChild(sp);
}