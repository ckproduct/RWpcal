<head>
<meta http-equiv="Content-Language" content="zh-tw" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="shortcut icon" type="image/x-icon" href="http://bobokkj6868.myweb.hinet.net/favicon.ico" />
<title>呆灣策略聯盟 - 產品計算機</title>
<style type="text/css">
.style2 {
	text-align: left;
}
.style3 {
	margin-bottom: 0px;
}
#picker { width: 50px; height: 50px }
#slide { width: 30px; height: 50px }
div{ float:left}
a {
	color: #008000;
}
a:visited {
	color: #008000;
}
a:active {
	color: #008000;
}
a:hover {
	color: #008000;
}
</style>
<script type="text/javascript" src="colorpicker.js"></script>
<script type="text/javascript" language="javascript"> 
var i;
var blk;
var money;
var tmoney;
var tmpmoney;
var moneynum;
var tfuel = 0;
var twood = 0;
var tmetal = 0;
var tstone = 0;
var twater = 0;
var br = unescape("%0A");
var want = "I want succes!!"
var labelctrl = 0;
var copper = 0;
var steel = 0;
var preciousmetal = 0;
var silicon = 0;
var gem = 0;
var sulfur = 0;
var tapwater = 0;
var distilledwater = 0;
var normaltimber = 0;
var hightimber = 0;
var refinedtimber = 0;
var naturalgas = 0;
var petroleum = 0;
var liquidfuel = 0;
var chickenriceball = 0;
var bbqcorn = 0;
var steamedcrab = 0;
var steamedroll = 0;
var beershrimp = 0;
var milk = 0;
var beer = 0;
var medicatedwine = 0;
var whiskey = 0;
var gloves = 0;
var boots = 0;
var cloak = 0;
var pearljewel = 0;
var gemjewel = 0;
var glass = 0;
var board = 0;
var bed = 0;
var television = 0;
var audio = 0;
var airconditioner = 0;
var barrel = 0;
var fishingrod = 0;
var pickax = 0;
var drill = 0;
var saw = 0;
var bucket = 0;
var shovel = 0;
var manmadefibers = 0;
var plastic = 0;
var rubber = 0;
var mold = 0;
var mechanicalstructure = 0;
var engine = 0;
var wire = 0;
var integratedcircuit = 0;
var tire = 0;
var carbody = 0;
var boatbody = 0;
var rowboat = 0;
var car = 0;
var truck = 0;
var tent = 0;
var bandage = 0;
var antidote = 0;
var flashlight = 0;
var fist = 0;
var stick = 0;
var blade = 0;
var sword = 0;
var axe = 0;
var halberd = 0;
var belt = 0;
var bracers = 0;
var leggings = 0;
var helm = 0;
var breastplate = 0;
var Herbageperfume = 0;
var sunflowerperfume = 0;
var herbperfume = 0;
var lilyperfume = 0;
var roseperfume = 0;
var compactdisk = 0;
var flute = 0;
var guitar = 0;
var mitt = 0;
var bat = 0;
var landmine = 0;
var rocket = 0;
var antimissile = 0;
var missile = 0;
var nuclearbomb = 0;
var planebody = 0;
var glider = 0;

function mooa() {
reset();
var myindex=document.getElementById("select").value;
if (myindex == 1) {var copper = document.getElementById("num").value;
var money = 7500;
mcopper(copper);}
if (myindex == 2) {var steel = document.getElementById("num").value;
var money = 15000;
msteel(steel);}
if (myindex == 3) {var preciousmetal = document.getElementById("num").value;
var money = 37500;
mpreciousmetal(preciousmetal);}
if (myindex == 4) {var silicon = document.getElementById("num").value;
var money = 7500;
msilicon(silicon);}
if (myindex == 5) {var gem = document.getElementById("num").value;
var money = 15000;
mgem(gem);}
if (myindex == 6) {var sulfur = document.getElementById("num").value;
var money = 37500;
msulfur(sulfur);}
if (myindex == 7) {var tapwater = document.getElementById("num").value;
var money = 7500;
mtapwater(tapwater);}
if (myindex == 8) {var distilledwater = document.getElementById("num").value;
var money = 15000;
mdistilledwater(distilledwater);}
if (myindex == 9) {var normaltimber = document.getElementById("num").value;
var money = 7500;
mnormaltimber(normaltimber);}
if (myindex == 10) {var hightimber = document.getElementById("num").value;
var money = 15000;
mhightimber(hightimber);}
if (myindex == 11) {var refinedtimber = document.getElementById("num").value;
var money = 37500;
mrefinedtimber(refinedtimber);}
if (myindex == 12) {var naturalgas = document.getElementById("num").value;
var money = 7500;
mnaturalgas(naturalgas);}
if (myindex == 13) {var petroleum = document.getElementById("num").value;
var money = 15000;
mpetroleum(petroleum);}
if (myindex == 14) {var liquidfuel = document.getElementById("num").value;
var money = 37500;
mliquidfuel(liquidfuel);}
if (myindex == 15) {var chickenriceball = document.getElementById("num").value;
var money = 31650;
mchickenriceball(chickenriceball);}
if (myindex == 16) {var bbqcorn = document.getElementById("num").value;
var money = 57750;
mbbqcorn(bbqcorn);}
if (myindex == 17) {var steamedcrab = document.getElementById("num").value;
var money = 69000;
msteamedcrab(steamedcrab);}
if (myindex == 18) {var steamedroll = document.getElementById("num").value;
var money = 70500;
msteamedroll(steamedroll);}
if (myindex == 19) {var beershrimp = document.getElementById("num").value;
var money = 170850;
mbeershrimp(beershrimp);}
if (myindex == 20) {var milk = document.getElementById("num").value;
var money = 84750;
mmilk(milk);}
if (myindex == 21) {var beer = document.getElementById("num").value;
var money = 90900;
mbeer(beer);}
if (myindex == 22) {var medicatedwine = document.getElementById("num").value;
var money = 148500;
mmedicatedwine(medicatedwine);}
if (myindex == 23) {var whiskey = document.getElementById("num").value;
var money = 254250;
mwhiskey(whiskey);}
if (myindex == 24) {var gloves = document.getElementById("num").value;
var money = 73500;
mgloves(gloves);}
if (myindex == 25) {var boots = document.getElementById("num").value;
var money = 90000;
mboots(boots);}
if (myindex == 26) {var cloak = document.getElementById("num").value;
var money = 2052000;
mcloak(cloak);}
if (myindex == 27) {var pearljewel = document.getElementById("num").value;
var money = 2908500;
mpearljewel(pearljewel);}
if (myindex == 28) {var gemjewel = document.getElementById("num").value;
var money = 3937500;
mgemjewel(gemjewel);}
if (myindex == 29) {var glass = document.getElementById("num").value;
var money = 45000;
mglass(glass);}
if (myindex == 30) {var board = document.getElementById("num").value;
var money = 337500;
mboard(board);}
if (myindex == 31) {var bed = document.getElementById("num").value;
var money = 703500;
mbed(bed);}
if (myindex == 32) {var television = document.getElementById("num").value;
var money = 2235937;
mtelevision(television);}
if (myindex == 33) {var audio = document.getElementById("num").value;
var money = 3445312;
maudio(audio);}
if (myindex == 34) {var airconditioner = document.getElementById("num").value;
var money = 4078125;
mairconditioner(airconditioner);}
if (myindex == 35) {var barrel = document.getElementById("num").value;
var money = 45000;
mbarrel(barrel);}
if (myindex == 36) {var fishingrod = document.getElementById("num").value;
var money = 151875;
mfishingrod(fishingrod);}
if (myindex == 37) {var pickax = document.getElementById("num").value;
var money = 180000;
mtool(pickax);}
if (myindex == 38) {var drill = document.getElementById("num").value;
var money = 180000;
mtool(drill);}
if (myindex == 39) {var saw = document.getElementById("num").value;
var money = 180000;
mtool(saw);}
if (myindex == 40) {var bucket = document.getElementById("num").value;
var money = 180000;
mtool(bucket);}
if (myindex == 41) {var shovel = document.getElementById("num").value;
var money = 180000;
mtool(shovel);}
if (myindex == 42) {var manmadefibers = document.getElementById("num").value;
var money = 45000;
mmanmadefibers(manmadefibers);}
if (myindex == 43) {var plastic = document.getElementById("num").value;
var money = 56250;
mplastic(plastic);}
if (myindex == 44) {var rubber = document.getElementById("num").value;
var money = 67500;
mrubber(rubber);}
if (myindex == 45) {var mold = document.getElementById("num").value;
var money = 225000;
mmold(mold);}
if (myindex == 46) {var mechanicalstructure = document.getElementById("num").value;
var money = 562500;
mmechanicalstructure(mechanicalstructure);}
if (myindex == 47) {var engine = document.getElementById("num").value;
var money = 5568750;
mengine(engine);}
if (myindex == 48) {var wire = document.getElementById("num").value;
var money = 140625;
mwire(wire);}
if (myindex == 49) {var integratedcircuit = document.getElementById("num").value;
var money = 900000;
mintegratedcircuit(integratedcircuit);}
if (myindex == 50) {var tire = document.getElementById("num").value;
var money = 810000;
mtire(tire);}
if (myindex == 51) {var carbody = document.getElementById("num").value;
var money = 4500000;
mcarbody(carbody);}
if (myindex == 52) {var boatbody = document.getElementById("num").value;
var money = 4500000;
mboatbody(boatbody);}
if (myindex == 53) {var rowboat = document.getElementById("num").value;
var money = 19828125;
mrowboat(rowboat);}
if (myindex == 54) {var car = document.getElementById("num").value;
var money = 23623125;
mcar(car);}
if (myindex == 55) {var truck = document.getElementById("num").value;
var money = 51181875;
mtruck(truck);}
if (myindex == 56) {var tent = document.getElementById("num").value;
var money = 90000;
mtent(tent);}
if (myindex == 57) {var bandage = document.getElementById("num").value;
var money = 182250;
mbandage(bandage);}
if (myindex == 58) {var antidote = document.getElementById("num").value;
var money = 307500;
mantidote(antidote);}
if (myindex == 59) {var flashlight = document.getElementById("num").value;
var money = 430312;
mflashlight(flashlight);}
if (myindex == 60) {var fist = document.getElementById("num").value;
var money = 1566750;
mfist(fist);}
if (myindex == 61) {var stick = document.getElementById("num").value;
var money = 3375000;
mstick(stick);}
if (myindex == 62) {var blade = document.getElementById("num").value;
var money = 3543750;
mblade(blade);}
if (myindex == 63) {var sword = document.getElementById("num").value;
var money = 18225000;
msword(sword);}
if (myindex == 64) {var axe = document.getElementById("num").value;
var money = 18432000;
maxe(axe);}
if (myindex == 65) {var halberd = document.getElementById("num").value;
var money = 18900000;
mhalberd(halberd);}
if (myindex == 66) {var belt = document.getElementById("num").value;
var money = 522000;
mbelt(belt);}
if (myindex == 67) {var bracers = document.getElementById("num").value;
var money = 2137500;
mbracers(bracers);}
if (myindex == 68) {var leggings = document.getElementById("num").value;
var money = 2523000;
mleggings(leggings);}
if (myindex == 69) {var helm = document.getElementById("num").value;
var money = 3150000;
mhelm(helm);}
if (myindex == 70) {var breastplate = document.getElementById("num").value;
var money = 3198000;
mbreastplate(breastplate);}
if (myindex == 71) {var herbageperfume = document.getElementById("num").value;
var money = 112500;
mherbageperfume(herbageperfume);}
if (myindex == 72) {var sunflowerperfume = document.getElementById("num").value;
var money = 139500;
msunflowerperfume(sunflowerperfume);}
if (myindex == 73) {var herbperfume = document.getElementById("num").value;
var money = 143500;
mherbperfume(herbperfume);}
if (myindex == 74) {var lilyperfume = document.getElementById("num").value;
var money = 163500;
mlilyperfume(lilyperfume);}
if (myindex == 75) {var roseperfume = document.getElementById("num").value;
var money = 172500;
mroseperfume(roseperfume);}
if (myindex == 76) {var compactdisk = document.getElementById("num").value;
var money = 337500;
mcompactdisk(compactdisk);}
if (myindex == 77) {var flute = document.getElementById("num").value;
var money = 1687500;
mflute(flute);}
if (myindex == 78) {var guitar = document.getElementById("num").value;
var money = 2227500;
mguitar(guitar);}
if (myindex == 79) {var mitt = document.getElementById("num").value;
var money = 1860000;
mmitt(mitt);}
if (myindex == 80) {var bat = document.getElementById("num").value;
var money = 7706250;
mbat(bat);}
if (myindex == 81) {var landmine = document.getElementById("num").value;
var money = 717187;
mlandmine(landmine);}
if (myindex == 82) {var rocket = document.getElementById("num").value;
var money = 3009375;
mrocket(rocket);}
if (myindex == 83) {var antimissile = document.getElementById("num").value;
var money = 4500000;
mantimissile(antimissile);}
if (myindex == 84) {var missile = document.getElementById("num").value;
var money = 6963750;
mmissile(missile);}
if (myindex == 85) {var nuclearbomb = document.getElementById("num").value;
var money = 24412500;
mnuclearbomb(nuclearbomb);}
if (myindex == 86) {var planebody = document.getElementById("num").value;
var money = 6918750;
mplanebody(planebody);}
if (myindex == 87) {var glider = document.getElementById("num").value;
var money = 61762500;
mglider(glider);}
var moneynum = document.getElementById("num").value;
calmoney(money,moneynum);
disptotal();
}

function reset() {
document.area1.TextArea1.value = "";
document.area2.TextArea2.value = "";
document.area3.TextArea3.value = "";
document.area4.TextArea4.value = "";
document.getElementById("Label1").innerText = "";
tfuel = 0;
twood = 0;
tmetal = 0;
tstone = 0;
twater = 0;
}

function disptotal() {
var tmp = "總計所需基礎資源："+"<br />";
if (tmetal > 0 ) {tmp += "金屬： "+tmetal+"<br />";}
if (tstone > 0 ) {tmp += "原石： "+tstone+"<br />";}
if (tfuel > 0 ) {tmp += "燃料： "+tfuel+"<br />";}
if (twood > 0 ) {tmp += "原木： "+twood+"<br />";}
if (twater > 0 ) {tmp += "清水： "+twater;}
document.getElementById("Label1").innerHTML = tmp;
}
function display(str) {
if (labelctrl == 1) {
tmp2 = document.area1.TextArea1.value;
tmp = document.area1.TextArea1.value+str;
if ( tmp2  != null) {
document.area1.TextArea1.value = tmp+br;} 
else {
document.area1.TextArea1.value = str+br;}
}

if (labelctrl == 2) {
tmp2 = document.area2.TextArea2.value;
tmp = document.area2.TextArea2.value+str;
if ( tmp2  != null) {
document.area2.TextArea2.value = tmp+br;} 
else {
document.area2.TextArea2.value = str+br;}
}

if (labelctrl == 3) {
tmp2 = document.area3.TextArea3.value;
tmp = document.area3.TextArea3.value+str;
if ( tmp2  != null) {
document.area3.TextArea3.value = tmp+br;} 
else {
document.area3.TextArea3.value = str+br;}
}

if (labelctrl == 4) {
tmp2 = document.area4.TextArea4.value;
tmp = document.area4.TextArea4.value+str;
if ( tmp2  != null) {
document.area4.TextArea4.value = tmp+br;} 
else {
document.area4.TextArea4.value = str+br;}
}

}

function calmoney(x,y){
var tmpmoney = document.moneyfor.magntext.value;
var tmoney = tmpmoney *y* x/100;
document.moneyfor.Text1.value= tmoney ;
document.getElementById("Label2").innerHTML = numberWithCommas(tmoney);
basemoney(tmoney);
}

function basemoney(x){
var tmp = (tmetal+tstone+tfuel+twood+twater)*500;
var temp = x/tmp;
document.getElementById("Label3").innerHTML = numberWithCommas(tmp);
document.getElementById("Label4").innerHTML = temp.toFixed(3)+"倍";

}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function emp(x) {
for (i=1;i<=x;i++){
display("　");
}
}

function fm(x) {
for (i=x;i<=4;i++) {
labelctrl += 1;
display("　");
}
for (i=x;i<=4;i++) {
labelctrl -= 1;
}
}


function mcopper(x) {
var metal = x*10;
tmetal += x*10;
temp = "金屬(Metal): "+metal;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function msteel(x) {
var metal = x*20;
tmetal += x*20;
temp = "金屬(Metal): "+metal;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function mpreciousmetal(x) {
var metal = x*50;
tmetal += x*50;
temp = "金屬(Metal): "+metal;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function msilicon(x) {
var stone = x*10;
tstone += x*10;
temp = "原石(Stone): "+stone;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function mgem(x) {
var stone = x*20;
tstone += x*20;
temp = "原石(Stone): "+stone;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function msulfur(x) {
var stone = x*50;
tstone += x*50;
temp = "原石(Stone): "+stone;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function mtapwater(x) {
var water = x*10;
twater += x*10;
temp = "清水(Water): "+water;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function mdistilledwater(x) {
var water = x*20;
twater += x*20;
temp = "清水(Water): "+water;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function mnormaltimber(x) {
var wood = x*10;
twood += x*10;
temp = "原木(Wood): "+wood;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function mhightimber(x) {
var wood = x*20;
twood += x*20;
temp = "原木(Wood): "+wood;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function mrefinedtimber(x) {
var wood = x*50;
twood += x*50;
temp = "原木(Wood): "+wood;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function mnaturalgas(x) {
var fuel = x*10;
tfuel += x*10;
temp = "燃料(Fuel): "+fuel;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function mpetroleum(x) {
var fuel = x*20;
tfuel += x*20;
temp = "燃料(Fuel): "+fuel;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function mliquidfuel(x) {
var fuel = x*50;
tfuel += x*50;
temp = "燃料(Fuel): "+fuel;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function mchickenriceball(x) {
var rice = x*8;
temp = "稻米(Rice): "+rice;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
var naturalgas = x*2;
temp = "天然氣(Natural Gas): "+naturalgas;
labelctrl += 1;
display(temp);
mnaturalgas(naturalgas);
labelctrl -= 1;
var chicken = x*3;
temp = "雞肉(Chicken): "+chicken;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function mbbqcorn(x) {
var corn = x*10;
temp = "玉米(Corn): "+corn;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
var normaltimber = x*5;
temp = "一般木材(Normal Timber): "+normaltimber;
labelctrl += 1;
display(temp);
mnormaltimber(normaltimber);
labelctrl -= 1;
}

function msteamedcrab(x) {
var tapwater = x*2;
temp = "自來水(Tap Water): "+tapwater;
labelctrl += 1;
display(temp);
mtapwater(tapwater);
labelctrl -= 1;
var naturalgas = x*2;
temp = "天然氣(Natural Gas): "+naturalgas;
labelctrl += 1;
display(temp);
mnaturalgas(naturalgas);
labelctrl -= 1;
var bigcrab = x;
temp = "大閘蟹(Big Crab): "+bigcrab;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function msteamedroll(x) {
var tapwater = x*5;
temp = "自來水(Tap Water): "+tapwater;
labelctrl += 1;
display(temp);
mtapwater(tapwater);
labelctrl -= 1;
var naturalgas = x*1;
temp = "天然氣(Natural Gas): "+naturalgas;
labelctrl += 1;
display(temp);
mnaturalgas(naturalgas);
labelctrl -= 1;
var wheat = x*5;
temp = "小麥(Wheat): "+wheat;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function mbeershrimp(x) {
var naturalgas = x*2;
temp = "天然氣(Natural Gas): "+naturalgas;
labelctrl += 1;
display(temp);
mnaturalgas(naturalgas);
labelctrl -= 1;
var bigshrimp = x;
temp = "草蝦(Big Shrimp): "+bigshrimp;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
var beer = x;
temp = "啤酒(Beer): "+beer;
labelctrl += 1;
display(temp);
mbeer(beer);
labelctrl -= 1;
}

function  mmilk(x) {
var glass = x;
temp = "玻璃(Glass): "+glass;
labelctrl += 1;
display(temp);
mglass(glass);
labelctrl -= 1;
var naturalgas = x;
temp = "天然氣(Natural Gas): "+naturalgas;
labelctrl += 1;
display(temp);
mnaturalgas(naturalgas);
labelctrl -= 1;
var rawmilk = x;
temp = "生乳(Raw Milk): "+rawmilk;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function mbeer(x) {
var barrel = x;
temp = "木桶(barrel): "+barrel;
labelctrl += 1;
display(temp);
mbarrel(barrel);
labelctrl -= 1;
var distilledwater = x;
temp = "蒸餾水(Distilled Water): "+distilledwater;
labelctrl += 1;
display(temp);
mdistilledwater(distilledwater);
labelctrl -= 1;
var barley = x;
temp = "大麥(Barley): "+barley;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
emp(3);
}

function mmedicatedwine(x) {
var glass = x;
temp = "玻璃(Glass): "+glass;
labelctrl += 1;
display(temp);
mglass(glass);
labelctrl -= 1;
var distilledwater = x*2;
temp = "蒸餾水(Distilled Water): "+distilledwater;
labelctrl += 1;
display(temp);
mdistilledwater(distilledwater);
labelctrl -= 1;
var antler = x;
temp = "鹿茸(Antler): "+antler;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function mwhiskey(x) {
var glass = x*2;
temp = "玻璃(Glass): "+glass;
labelctrl += 1;
display(temp);
mglass(glass);
labelctrl -= 1;
var distilledwater = x*5;
temp = "蒸餾水(Distilled Water): "+distilledwater;
labelctrl += 1;
display(temp);
mdistilledwater(distilledwater);
labelctrl -= 1;
var barley = x*15;
temp = "大麥(Barley): "+barley;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function mgloves(x) {
var cotton = x*10;
temp = "棉花(Cotton): "+cotton;
labelctrl += 1;
display(temp);
labelctrl -= 1;
fm(labelctrl);
var leather = x*5;
temp = "皮革(Leather): "+leather;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
emp(1);
}

function mboots(x) {
var wool = x*10;
temp = "羊毛(Wool): "+wool;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
var leather = x*5;
temp = "皮革(Leather): "+leather;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function mcloak(x) {
var cotton = x*20;
temp = "棉花(Cotton): "+cotton;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
var manmadefibers = x*30;
temp = "人造纖維(Man Made Fibers): "+manmadefibers;
labelctrl += 1;
display(temp);
mmanmadefibers(manmadefibers);
labelctrl -= 1;
}

function  mpearljewel(x) {
var pearl = x*2;
temp = "珍珠(Pearl): "+pearl;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
var preciousmetal = x*50;
temp = "貴金屬(preciousmetal): "+preciousmetal;
labelctrl += 1;
display(temp);
mpreciousmetal(preciousmetal);
labelctrl -= 1;
emp(1);
}

function  mgemjewel(x) {
var gem = x*50;
temp = "寶石(Gem): "+gem;
labelctrl += 1;
display(temp);
mgem(gem);
labelctrl -= 1;
var preciousmetal = x*50;
temp = "貴金屬(preciousmetal): "+preciousmetal;
labelctrl += 1;
display(temp);
mpreciousmetal(preciousmetal);
labelctrl -= 1;
emp(1);
}

function mglass(x) {
var silicon = x*4;
temp ="矽沙(Silicon): "+silicon;
labelctrl += 1;
display(temp);
msilicon(silicon);
labelctrl -= 1;
}

function mboard(x) {
var normaltimber = x*30;
temp ="一般木材(Normal Timber): "+normaltimber;
labelctrl += 1;
display(temp);
mnormaltimber(normaltimber);
labelctrl -= 1;
}

function mbed(x) {
var cotton = x*10;
temp = "棉花(Cotton): "+cotton;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
var hightimber = x*30;
temp ="高級木材(High Timber): "+hightimber;
labelctrl += 1;
display(temp);
mhightimber(hightimber);
labelctrl -= 1;
var wool = x*5;
temp = "羊毛(Wool): "+wool;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function mtelevision(x) {
var glass = x*5;
temp ="玻璃(Glass): "+glass;
labelctrl += 1;
display(temp);
mglass(glass);
labelctrl -= 1;
var wire = x;
temp ="電線(Wire): "+wire;
labelctrl += 1;
display(temp);
mwire(wire);
labelctrl -= 1;
var integratedcircuit = x;
temp ="積體電路(Integrated Circuit): "+integratedcircuit;
labelctrl += 1;
display(temp);
mintegratedcircuit(integratedcircuit);
labelctrl -= 1;
var mold = x;
temp ="模具(Mold): "+mold;
labelctrl += 1;
display(temp);
mmold(mold);
labelctrl -= 1;
}

function maudio(x) {
var refinedtimber = x*5;
temp ="精製木材(Refined Timber): "+refinedtimber;
labelctrl += 1;
display(temp);
mrefinedtimber(refinedtimber);
labelctrl -= 1;
var wire = x;
temp ="電線(Wire): "+wire;
labelctrl += 1;
display(temp);
mwire(wire);
labelctrl -= 1;
var integratedcircuit = x*2;
temp ="積體電路(Integrated Circuit): "+integratedcircuit;
labelctrl += 1;
display(temp);
mintegratedcircuit(integratedcircuit);
labelctrl -= 1;
var plastic = x*3;
temp ="塑膠(Plastic): "+plastic;
labelctrl += 1;
display(temp);
mplastic(plastic);
labelctrl -= 1;
}

function mairconditioner(x) {
var wire = x*2;
temp ="電線(Wire): "+wire;
labelctrl += 1;
display(temp);
mwire(wire);
labelctrl -= 1;
var mechanicalstructure = x;
temp ="機構(Mechanical Structure): "+mechanicalstructure;
labelctrl += 1;
display(temp);
mmechanicalstructure(mechanicalstructure);
labelctrl -= 1;
var steel = x*5;
temp = "鋼鐵(Steel): "+steel;
labelctrl += 1;
display(temp);
msteel(steel);
labelctrl -= 1;
var integratedcircuit = x*2;
temp ="積體電路(Integrated Circuit): "+integratedcircuit;
labelctrl += 1;
display(temp);
mintegratedcircuit(integratedcircuit);
labelctrl -= 1;
}

function mbarrel(x) {
var normaltimber = x*20;
temp ="一般木材(Normal Timber): "+normaltimber;
labelctrl += 1;
display(temp);
mnormaltimber(normaltimber);
labelctrl -= 1;
var steel = x;
temp = "鋼鐵(Steel): "+steel;
labelctrl += 1;
display(temp);
msteel(steel);
labelctrl -= 1;
emp(1);
}

function mfishingrod(x) {
var manmadefibers = x;
temp = "人造纖維(Man Made Fibers): "+manmadefibers;
labelctrl += 1;
display(temp);
mmanmadefibers(manmadefibers);
labelctrl -= 1;
var plastic = x;
temp ="塑膠(Plastic): "+plastic;
labelctrl += 1;
display(temp);
mplastic(plastic);
labelctrl -= 1;
}

function mtool(x) {
var normaltimber = x*8;
temp ="一般木材(Normal Timber): "+normaltimber;
labelctrl += 1;
display(temp);
mnormaltimber(normaltimber);
labelctrl -= 1;
var steel = x*4;
temp = "鋼鐵(Steel): "+steel;
labelctrl += 1;
display(temp);
msteel(steel);
labelctrl -= 1;
}

function mmanmadefibers(x) {
var naturalgas = x*2;
temp = "天然氣(Natural Gas): "+naturalgas;
labelctrl += 1;
display(temp);
mnaturalgas(naturalgas);
labelctrl -= 1;
var petroleum = x;
temp = "石油(Petroleum): "+petroleum;
labelctrl += 1;
display(temp);
mpetroleum(petroleum);
labelctrl -= 1;
emp(1);
}

function mplastic(x) {
var naturalgas = x*3;
temp = "天然氣(Natural Gas): "+naturalgas;
labelctrl += 1;
display(temp);
mnaturalgas(naturalgas);
labelctrl -= 1;
var petroleum = x;
temp = "石油(Petroleum): "+petroleum;
labelctrl += 1;
display(temp);
mpetroleum(petroleum);
labelctrl -= 1;
emp(1);
}

function mrubber(x) {
var naturalgas = x*4;
temp = "天然氣(Natural Gas): "+naturalgas;
labelctrl += 1;
display(temp);
mnaturalgas(naturalgas);
labelctrl -= 1;
var petroleum = x;
temp = "石油(Petroleum): "+petroleum;
labelctrl += 1;
display(temp);
mpetroleum(petroleum);
labelctrl -= 1;
emp(1);
}

function mmold(x) {
var steel = x*10;
temp = "鋼鐵(Steel): "+steel;
labelctrl += 1;
display(temp);
msteel(steel);
labelctrl -= 1;
}

function mmechanicalstructure(x) {
var normaltimber = x*10;
temp = "一般木材(Normal Timber): "+normaltimber;
labelctrl += 1;
display(temp);
mnormaltimber(normaltimber);
labelctrl -= 1;
var steel = x*20;
temp = "鋼鐵(Steel): "+steel;
labelctrl += 1;
display(temp);
msteel(steel);
labelctrl -= 1;
emp(1);
}

function mengine(x) {
var mechanicalstructure = x*3;
temp ="機構(Mechanical Structure): "+mechanicalstructure;
labelctrl += 1;
display(temp);
mmechanicalstructure(mechanicalstructure);
labelctrl -= 1;
var integratedcircuit = x*1;
temp ="積體電路(Integrated Circuit): "+integratedcircuit;
labelctrl += 1;
display(temp);
mintegratedcircuit(integratedcircuit);
labelctrl -= 1;
var mold = x*5;
temp = "模具(Mold): "+mold;
labelctrl += 1;
display(temp);
mmold(mold);
labelctrl -= 1;
emp(5);
}

function mwire(x) {
var copper = x*5;
temp = "銅線(Copper): "+copper;
labelctrl += 1;
display(temp);
mcopper(copper);
labelctrl -= 1;
var plastic = x*1;
temp = "塑膠(Plastic): "+plastic;
labelctrl += 1;
display(temp);
mplastic(plastic);
labelctrl -= 1;
emp(2);
}

function mintegratedcircuit(x){
var silicon = x*10;
temp = "矽砂(Silicon): "+silicon;
labelctrl += 1;
display(temp);
msilicon(silicon);
labelctrl -= 1;
var distilledwater = x*10;
temp = "蒸餾水(Distilled Water): "+distilledwater;
labelctrl += 1;
display(temp);
mdistilledwater(distilledwater);
labelctrl -= 1;
var preciousmetal = x*10;
temp = "貴金屬(Precious Metal): "+preciousmetal;
labelctrl += 1;
display(temp);
mpreciousmetal(preciousmetal);
labelctrl -= 1;
emp(2);
}

function mtire(x) {
var rubber = x*8;
temp = "橡膠(Rubber): "+rubber;
labelctrl += 1;
display(temp);
mrubber(rubber);
labelctrl -= 1;
emp(1);
}

function mcarbody(x) {
var steel = x*50;
temp = "鋼鐵(Steel): "+steel;
labelctrl += 1;
display(temp);
msteel(steel);
labelctrl -= 1;
var mechanicalstructure = x*2;
temp ="機構(Mechanical Structure): "+mechanicalstructure;
labelctrl += 1;
display(temp);
mmechanicalstructure(mechanicalstructure);
labelctrl -= 1;
var mold = x*5;
temp = "模具(Mold): "+mold;
labelctrl += 1;
display(temp);
mmold(mold);
labelctrl -= 1;
emp(3);
}

function mboatbody(x) {
var steel = x*50;
temp = "鋼鐵(Steel): "+steel;
labelctrl += 1;
display(temp);
msteel(steel);
labelctrl -= 1;
var mechanicalstructure = x*2;
temp ="機構(Mechanical Structure): "+mechanicalstructure;
labelctrl += 1;
display(temp);
mmechanicalstructure(mechanicalstructure);
labelctrl -= 1;
var mold = x*5;
temp = "模具(Mold): "+mold;
labelctrl += 1;
display(temp);
mmold(mold);
labelctrl -= 1;
emp(3);
}

function mrowboat(x) {
var boatbody = x;
temp = "船體(Boat Body): "+boatbody;
labelctrl += 1;
display(temp);
mboatbody(boatbody);
labelctrl -= 1;
var engine = x;
temp = "引擎(Engine): "+engine;
labelctrl += 1;
display(temp);
mengine(engine);
labelctrl -= 1;
var petroleum = x*100;
temp = "石油(Petroleum): "+petroleum;
labelctrl += 1;
display(temp);
mpetroleum(petroleum);
labelctrl -= 1;
var normaltimber = x*100;
temp = "一般木材(Normal Timber): "+normaltimber;
labelctrl += 1;
display(temp);
mnormaltimber(normaltimber);
labelctrl -= 1;
var integratedcircuit = x*1;
temp ="積體電路(Integrated Circuit): "+integratedcircuit;
labelctrl += 1;
display(temp);
mintegratedcircuit(integratedcircuit);
labelctrl -= 1;
}

function mcar(x) {
var carbody = x;
temp = "車體(Car Body): "+carbody;
labelctrl += 1;
display(temp);
mcarbody(carbody);
labelctrl -= 1;
var engine = x;
temp = "引擎(Engine): "+engine;
labelctrl += 1;
display(temp);
mengine(engine);
labelctrl -= 1;
var petroleum = x*100;
temp = "石油(Petroleum): "+petroleum;
labelctrl += 1;
display(temp);
mpetroleum(petroleum);
labelctrl -= 1;
var tire = x*4;
temp = "輪胎(Tire): "+tire;
labelctrl += 1;
display(temp);
mtire(tire);
labelctrl -= 1;
var integratedcircuit = x*1;
temp ="積體電路(Integrated Circuit): "+integratedcircuit;
labelctrl += 1;
display(temp);
mintegratedcircuit(integratedcircuit);
labelctrl -= 1;
var leather = x*5;
temp = "皮革(Leather): "+leather;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function mtruck(x) {
var carbody = x;
temp = "車體(Car Body): "+carbody;
labelctrl += 1;
display(temp);
mcarbody(carbody);
labelctrl -= 1;
var engine = x;
temp = "引擎(Engine): "+engine;
labelctrl += 1;
display(temp);
mengine(engine);
labelctrl -= 1;
var petroleum = x*500;
temp = "石油(Petroleum): "+petroleum;
labelctrl += 1;
display(temp);
mpetroleum(petroleum);
labelctrl -= 1;
var tire = x*14;
temp = "輪胎(Tire): "+tire;
labelctrl += 1;
display(temp);
mtire(tire);
labelctrl -= 1;
var mechanicalstructure = x*5;
temp = "機構(Mechanical Structure): "+mechanicalstructure;
labelctrl += 1;
display(temp);
mmechanicalstructure(mechanicalstructure);
labelctrl -= 1;
var integratedcircuit = x*1;
temp ="積體電路(Integrated Circuit): "+integratedcircuit;
labelctrl += 1;
display(temp);
mintegratedcircuit(integratedcircuit);
labelctrl -= 1;
var steel = x*100;
temp = "鋼鐵(Steel): "+steel;
labelctrl += 1;
display(temp);
msteel(steel);
labelctrl -= 1;

}

function mtent(x) {
var manmadefibers = x;
temp = "人造纖維(Man Made Fibers): "+manmadefibers;
labelctrl += 1;
display(temp);
mmanmadefibers(manmadefibers);
labelctrl -= 1;
var steel = x;
temp = "鋼鐵(Steel): "+steel;
labelctrl += 1;
display(temp);
msteel(steel);
labelctrl -= 1;
}
function mbandage(x) {
var cotton = x*10;
temp = "棉花(Cotton): "+cotton;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
var plastic = x*2
temp = "塑膠(Plastic): "+plastic;
labelctrl += 1;
display(temp);
mplastic(plastic);
labelctrl -= 1;
}

function mantidote(x) {
var glass = x;
temp ="玻璃(Glass): "+glass;
labelctrl += 1;
display(temp);
mglass(glass);
labelctrl -= 1;
var distilledwater = x*10;
temp = "蒸餾水(Distilled Water): "+distilledwater;
labelctrl += 1;
display(temp);
mdistilledwater(distilledwater);
labelctrl -= 1;
var herb = x*20;
temp = "藥草(Herb): "+herb;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function mflashlight(x) {
var glass = x*2;
temp ="玻璃(Glass): "+glass;
labelctrl += 1;
display(temp);
mglass(glass);
labelctrl -= 1;
var wire = x;
temp ="電線(Wire): "+wire;
labelctrl += 1;
display(temp);
mwire(wire);
labelctrl -= 1;
var plastic = x;
temp = "塑膠(Plastic): "+plastic;
labelctrl += 1;
display(temp);
mplastic(plastic);
labelctrl -= 1;
}

function mfist(x) {
var leather = x*4;
temp = "皮革(Leather): "+leather;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
var steel = x*60;
temp = "鋼鐵(Steel): "+steel;
labelctrl += 1;
display(temp);
msteel(steel);
labelctrl -= 1;
var plastic = x*2;
temp = "塑膠(Plastic): "+plastic;
labelctrl += 1;
display(temp);
mplastic(plastic);
labelctrl -= 1;
}

function mstick(x){
var hightimber = x*60;
temp ="高級木材(High Timber): "+hightimber;
labelctrl += 1;
display(temp);
mhightimber(hightimber);
labelctrl -= 1;
var plastic = x*4;
temp = "塑膠(Plastic): "+plastic;
labelctrl += 1;
display(temp);
mplastic(plastic);
labelctrl -= 1;
var mold = x*5;
temp = "模具(Mold): "+mold;
labelctrl += 1;
display(temp);
mmold(mold);
labelctrl -= 1;
emp(3);
}

function mblade(x) {
var steel = x*60;
temp = "鋼鐵(Steel): "+steel;
labelctrl += 1;
display(temp);
msteel(steel);
labelctrl -= 1;
var plastic = x*6;
temp = "塑膠(Plastic): "+plastic;
labelctrl += 1;
display(temp);
mplastic(plastic);
labelctrl -= 1;
var mold = x*5;
temp = "模具(Mold): "+mold;
labelctrl += 1;
display(temp);
mmold(mold);
labelctrl -= 1;
}

function msword(x) {
var gemjewel = x*2;
temp = "寶石飾品(Gem Jewel): "+gemjewel;
labelctrl += 1;
display(temp);
mgemjewel(gemjewel);
labelctrl -= 1;
var manmadefibers = x*15;
temp = "人造纖維(Man Made Fibers): "+manmadefibers;
labelctrl += 1;
display(temp);
mmanmadefibers(manmadefibers);
labelctrl -= 1;
var steel = x*150;
temp = "鋼鐵(Steel): "+steel;
labelctrl += 1;
display(temp);
msteel(steel);
labelctrl -= 1;
var mold = x*6;
temp = "模具(Mold): "+mold;
labelctrl += 1;
display(temp);
mmold(mold);
labelctrl -= 1;
}

function maxe(x) {
var refinedtimber = x*5;
temp ="精製木材(Refined Timber): "+refinedtimber;
labelctrl += 1;
display(temp);
mrefinedtimber(refinedtimber);
labelctrl -= 1;
var pearljewel = x*3;
temp = "珍珠飾品(Pearl Jewel): "+pearljewel;
labelctrl += 1;
display(temp);
mpearljewel(pearljewel);
labelctrl -= 1;
var steel = x*150;
temp = "鋼鐵(Steel): "+steel;
labelctrl += 1;
display(temp);
msteel(steel);
labelctrl -= 1;
var mold = x*5;
temp = "模具(Mold): "+mold;
labelctrl += 1;
display(temp);
mmold(mold);
labelctrl -= 1;
}

function mhalberd(x) {
var rubber = x*15;
temp = "橡膠(Rubber): "+rubber;
labelctrl += 1;
display(temp);
mrubber(rubber);
labelctrl -= 1;
var manmadefibers = x*20;
temp = "人造纖維(Man Made Fibers): "+manmadefibers;
labelctrl += 1;
display(temp);
mmanmadefibers(manmadefibers);
labelctrl -= 1;
var mechanicalstructure = x*15;
temp = "機構(Mechanical Structure): "+mechanicalstructure;
labelctrl += 1;
display(temp);
mmechanicalstructure(mechanicalstructure);
labelctrl -= 1;
var steel = x*150;
temp = "鋼鐵(Steel): "+steel;
labelctrl += 1;
display(temp);
msteel(steel);
labelctrl -= 1;
}

function mbelt(x){
var leather = x*6;
temp = "皮革(Leather): "+leather;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
var steel = x*20;
temp = "鋼鐵(Steel): "+steel;
labelctrl += 1;
display(temp);
msteel(steel);
labelctrl -= 1;
}

function mbracers(x) {
var manmadefibers = x*25;
temp = "人造纖維(Man Made Fibers): "+manmadefibers;
labelctrl += 1;
display(temp);
mmanmadefibers(manmadefibers);
labelctrl -= 1;
var steel = x*20;
temp = "鋼鐵(Steel): "+steel;
labelctrl += 1;
display(temp);
msteel(steel);
labelctrl -= 1;
}

function mleggings(x) {
var leather = x*4;
temp = "皮革(Leather): "+leather;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
var steel = x*20;
temp = "鋼鐵(Steel): "+steel;
labelctrl += 1;
display(temp);
msteel(steel);
labelctrl -= 1;
var mold = x*6;
temp = "模具(Mold): "+mold;
labelctrl += 1;
display(temp);
mmold(mold);
labelctrl -= 1;
}

function mhelm(x) {
var steel = x*20;
temp = "鋼鐵(Steel): "+steel;
labelctrl += 1;
display(temp);
msteel(steel);
labelctrl -= 1;
var mold = x*8;
temp = "模具(Mold): "+mold;
labelctrl += 1;
display(temp);
mmold(mold);
labelctrl -= 1;
}

function mbreastplate(x) {
var manmadefibers = x*10;
temp = "人造纖維(Man Made Fibers): "+manmadefibers;
labelctrl += 1;
display(temp);
mmanmadefibers(manmadefibers);
labelctrl -= 1;
var leather = x*4;
temp = "皮革(Leather): "+leather;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
var steel = x*20;
temp = "鋼鐵(Steel): "+steel;
labelctrl += 1;
display(temp);
msteel(steel);
labelctrl -= 1;
var mold = x*6;
temp = "模具(Mold): "+mold;
labelctrl += 1;
display(temp);
mmold(mold);
labelctrl -= 1;
}

function mherbageperfume(x) {
var glass = x*1;
temp ="玻璃(Glass): "+glass;
labelctrl += 1;
display(temp);
mglass(glass);
labelctrl -= 1;
var herbage = x*600;
temp = "牧草(Herbage): "+herbage;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function msunflowerperfume(x) {
var glass = x*1;
temp ="玻璃(Glass): "+glass;
labelctrl += 1;
display(temp);
mglass(glass);
labelctrl -= 1;
var sunflower = x*80;
temp = "向日葵(Sunflower): "+sunflower;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}
function mherbperfume(x) {
var glass = x*1;
temp ="玻璃(Glass): "+glass;
labelctrl += 1;
display(temp);
mglass(glass);
labelctrl -= 1;
var herb = x*100;
temp = "藥草(Herb): "+herb;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}
function mlilyperfume(x) {
var glass = x*1;
temp ="玻璃(Glass): "+glass;
labelctrl += 1;
display(temp);
mglass(glass);
labelctrl -= 1;
var lily = x*80;
temp = "百合(Lily): "+lily;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}
function mroseperfume(x) {
var glass = x*1;
temp ="玻璃(Glass): "+glass;
labelctrl += 1;
display(temp);
mglass(glass);
labelctrl -= 1;
var rose = x*80;
temp = "玫瑰(Rose): "+rose;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function mcompactdisk(x) {
var preciousmetal = x*2;
temp = "貴金屬(Precious Metal): "+preciousmetal;
labelctrl += 1;
display(temp);
mpreciousmetal(preciousmetal);
labelctrl -= 1;
var sulfur = x*1;
temp = "硫磺(Sulfur): "+sulfur;
labelctrl += 1;
display(temp);
msulfur(sulfur);
labelctrl -= 1;
var plastic = x*2;
temp = "塑膠(Plastic): "+plastic;
labelctrl += 1;
display(temp);
mplastic(plastic);
labelctrl -= 1;
}

function mflute(x) {
var refinedtimber = x*10;
temp ="精製木材(Refined Timber): "+refinedtimber;
labelctrl += 1;
display(temp);
mrefinedtimber(refinedtimber);
labelctrl -= 1;
var preciousmetal = x*2;
temp = "貴金屬(Precious Metal): "+preciousmetal;
labelctrl += 1;
display(temp);
mpreciousmetal(preciousmetal);
labelctrl -= 1;
var mold = x*3;
temp = "模具(Mold): "+mold;
labelctrl += 1;
display(temp);
mmold(mold);
labelctrl -= 1;
}

function mguitar(x){
var refinedtimber = x*15;
temp ="精製木材(Refined Timber): "+refinedtimber;
labelctrl += 1;
display(temp);
mrefinedtimber(refinedtimber);
labelctrl -= 1;
var manmadefibers = x*6;
temp = "人造纖維(Man Made Fibers): "+manmadefibers;
labelctrl += 1;
display(temp);
mmanmadefibers(manmadefibers);
labelctrl -= 1;
var mechanicalstructure = x*1;
temp = "機構(Mechanical Structure): "+mechanicalstructure;
labelctrl += 1;
display(temp);
mmechanicalstructure(mechanicalstructure);
labelctrl -= 1;
var steel = x*6;
temp = "鋼鐵(Steel): "+steel;
labelctrl += 1;
display(temp);
msteel(steel);
labelctrl -= 1;
}

function mmitt(x){
var cotton = x*25;
temp = "棉花(Cotton): "+cotton;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
var gloves = x*5;
temp = "手套(Gloves): "+gloves;
labelctrl += 1;
display(temp);
mgloves(gloves);
labelctrl -= 1;
var manmadefibers = x*10;
temp = "人造纖維(Man Made Fibers): "+manmadefibers;
labelctrl += 1;
display(temp);
mmanmadefibers(manmadefibers);
labelctrl -= 1;
var leather = x*50;
temp = "皮革(Leather): "+leather;
labelctrl += 1;
display(temp);
fm(labelctrl);
labelctrl -= 1;
}

function mbat(x) {
var refinedtimber = x*25;
temp ="精製木材(Refined Timber): "+refinedtimber;
labelctrl += 1;
display(temp);
mrefinedtimber(refinedtimber);
labelctrl -= 1;
var manmadefibers = x*10;
temp = "人造纖維(Man Made Fibers): "+manmadefibers;
labelctrl += 1;
display(temp);
mmanmadefibers(manmadefibers);
labelctrl -= 1;
var preciousmetal = x*10;
temp = "貴金屬(Precious Metal): "+preciousmetal;
labelctrl += 1;
display(temp);
mpreciousmetal(preciousmetal);
labelctrl -= 1;
var stick = x*1;
temp = "棍(Stick): "+stick;
labelctrl += 1;
display(temp);
mstick(stick);
labelctrl -= 1;
}

function mlandmine(x) {
var wire = x;
temp ="電線(Wire): "+wire;
labelctrl += 1;
display(temp);
mwire(wire);
labelctrl -= 1;
var sulfur = x*3;
temp = "硫磺(Sulfur): "+sulfur;
labelctrl += 1;
display(temp);
msulfur(sulfur);
labelctrl -= 1;
var mold = x*1;
temp = "模具(Mold): "+mold;
labelctrl += 1;
display(temp);
mmold(mold);
labelctrl -= 1;
}

function mrocket(x) {
var liquidfuel = x*3;
temp = "液態燃料(Liquid Fuel): "+liquidfuel;
labelctrl += 1;
display(temp);
mliquidfuel(liquidfuel);
labelctrl -= 1;
var integratedcircuit = x*1;
temp ="積體電路(Integrated Circuit): "+integratedcircuit;
labelctrl += 1;
display(temp);
mintegratedcircuit(integratedcircuit);
labelctrl -= 1;
var mechanicalstructure = x*1;
temp = "機構(Mechanical Structure): "+mechanicalstructure;
labelctrl += 1;
display(temp);
mmechanicalstructure(mechanicalstructure);
labelctrl -= 1;
var sulfur = x*10;
temp = "硫磺(Sulfur): "+sulfur;
labelctrl += 1;
display(temp);
msulfur(sulfur);
labelctrl -= 1;
var plastic = x*1;
temp = "塑膠(Plastic): "+plastic;
labelctrl += 1;
display(temp);
mplastic(plastic);
labelctrl -= 1;
}

function mantimissile(x) {
var petroleum = x*5;
temp = "石油(Petroleum): "+petroleum;
labelctrl += 1;
display(temp);
mpetroleum(petroleum);
labelctrl -= 1;
var integratedcircuit = x*2;
temp ="積體電路(Integrated Circuit): "+integratedcircuit;
labelctrl += 1;
display(temp);
mintegratedcircuit(integratedcircuit);
labelctrl -= 1;
var mechanicalstructure = x*2;
temp = "機構(Mechanical Structure): "+mechanicalstructure;
labelctrl += 1;
display(temp);
mmechanicalstructure(mechanicalstructure);
labelctrl -= 1;
}

function mmissile(x) {
var liquidfuel = x*8;
temp = "液態燃料(Liquid Fuel): "+liquidfuel;
labelctrl += 1;
display(temp);
mliquidfuel(liquidfuel);
labelctrl -= 1;
var rubber = x*1;
temp = "橡膠(Rubber): "+rubber;
labelctrl += 1;
display(temp);
mrubber(rubber);
labelctrl -= 1;
var integratedcircuit = x*3;
temp ="積體電路(Integrated Circuit): "+integratedcircuit;
labelctrl += 1;
display(temp);
mintegratedcircuit(integratedcircuit);
labelctrl -= 1;
var mechanicalstructure = x*2;
temp = "機構(Mechanical Structure): "+mechanicalstructure;
labelctrl += 1;
display(temp);
mmechanicalstructure(mechanicalstructure);
labelctrl -= 1;
var sulfur = x*12;
temp = "硫磺(Sulfur): "+sulfur;
labelctrl += 1;
display(temp);
msulfur(sulfur);
labelctrl -= 1;
}

function mnuclearbomb(x) {
var liquidfuel = x*100;
temp = "液態燃料(Liquid Fuel): "+liquidfuel;
labelctrl += 1;
display(temp);
mliquidfuel(liquidfuel);
labelctrl -= 1;
var gem = x*20;
temp = "寶石(Gem): "+gem;
labelctrl += 1;
display(temp);
mgem(gem);
labelctrl -= 1;
var manmadefibers = x*5;
temp = "人造纖維(Man Made Fibers): "+manmadefibers;
labelctrl += 1;
display(temp);
mmanmadefibers(manmadefibers);
labelctrl -= 1;
var preciousmetal = x*50;
temp = "貴金屬(Precious Metal): "+preciousmetal;
labelctrl += 1;
display(temp);
mpreciousmetal(preciousmetal);
labelctrl -= 1;
var integratedcircuit = x*10;
temp ="積體電路(Integrated Circuit): "+integratedcircuit;
labelctrl += 1;
display(temp);
mintegratedcircuit(integratedcircuit);
labelctrl -= 1;
var mold = x*5;
temp = "模具(Mold): "+mold;
labelctrl += 1;
display(temp);
mmold(mold);
labelctrl -= 1;
}

function mplanebody(x){
var manmadefibers = x*10;
temp = "人造纖維(Man Made Fibers): "+manmadefibers;
labelctrl += 1;
display(temp);
mmanmadefibers(manmadefibers);
labelctrl -= 1;
var steel = x*90;
temp = "鋼鐵(Steel): "+steel;
labelctrl += 1;
display(temp);
msteel(steel);
labelctrl -= 1;
var mechanicalstructure = x*3;
temp = "機構(Mechanical Structure): "+mechanicalstructure;
labelctrl += 1;
display(temp);
mmechanicalstructure(mechanicalstructure);
labelctrl -= 1;
var mold = x*5;
temp = "模具(Mold): "+mold;
labelctrl += 1;
display(temp);
mmold(mold);
labelctrl -= 1;
emp(5)
}

function mglider(x) {
var engine = x*2;
temp = "引擎(Engine): "+engine;
labelctrl += 1;
display(temp);
mengine(engine);
labelctrl -= 1;
var petroleum = x*500;
temp = "石油(Petroleum): "+petroleum;
labelctrl += 1;
display(temp);
mpetroleum(petroleum);
labelctrl -= 1;
var planebody = x*1;
temp = "飛機機體(Plane Body): "+planebody;
labelctrl += 1;
display(temp);
mplanebody(planebody);
labelctrl -= 1;
var manmadefibers = x*30;
temp = "人造纖維(Man Made Fibers): "+manmadefibers;
labelctrl += 1;
display(temp);
mmanmadefibers(manmadefibers);
labelctrl -= 1;
var wire = x*10;
temp ="電線(Wire): "+wire;
labelctrl += 1;
display(temp);
mwire(wire);
labelctrl -= 1;
var steel = x*100;
temp = "鋼鐵(Steel): "+steel;
labelctrl += 1;
display(temp);
msteel(steel);
labelctrl -= 1;
var tire = x*5;
temp = "輪胎(Tire): "+tire;
labelctrl += 1;
display(temp);
mtire(tire);
labelctrl -= 1;
var mechanicalstructure = x*5;
temp = "機構(Mechanical Structure): "+mechanicalstructure;
labelctrl += 1;
display(temp);
mmechanicalstructure(mechanicalstructure);
labelctrl -= 1;
var integratedcircuit = x*5;
temp ="積體電路(Integrated Circuit): "+integratedcircuit;
labelctrl += 1;
display(temp);
mintegratedcircuit(integratedcircuit);
labelctrl -= 1;
}
</script> 
</head>

<body style="color: #66CCFF; background-color: #003399">

<table align="left">
	<tr>
		<td style="width: 176px; height: 11px;" valign="top" class="style2">
		<form onsubmit="return false" method="post" style="width: 216px" action="--WEBBOT-SELF--">
			<!--webbot bot="SaveResults" S-Builtin-Fields="" S-Form-Fields="" -->
			<select id="select" style="width: 213px">
			<option>請選擇</option>
			<optgroup label="基礎加工"> 
			<option value="1">銅線(Copper)</option>
			<option value="2">鋼鐵(Steel)</option>
			<option value="3">貴金屬(Precious Metal)</option>
			<option value="4">矽砂(Silicon)</option>
			<option value="5">寶石(Gem)</option>
			<option value="6">硫磺(Sulfur)</option>
			<option value="7">自來水(Tap Water)</option>
			<option value="8">蒸餾水(Distilled Water)</option>
			<option value="9">一般木材(Normal Timber)</option>
			<option value="10">高級木材(High Timber)</option>
			<option value="11">精製木材(Refined Timber)</option>
			<option value="12">天然氣(Natural Gas)</option>
			<option value="13">石油(Petroleum)</option>
			<option value="14">液態燃料(Liquid Fuel)</option>
			</optgroup>
			<optgroup label="食品飲料"> 
			<option value="15">雞肉飯糰(Chicken Rice Ball)</option>
			<option value="16">炭烤玉米(Bbq Corn)</option>
			<option value="17">清蒸大閘蟹(Steamed Crab)</option>
			<option value="18">饅頭(Steamed Roll)</option>
			<option value="19">啤酒蝦(Beer Shrimp)</option>
			<option value="20">牛奶(Milk)</option>
			<option value="21">啤酒(Beer)</option>
			<option value="22">藥酒(Medicated Wine)</option>
			<option value="23">威士忌(Whiskey)</option>
			</optgroup>
			<optgroup label="服裝設計"> 
			<option value="24">手套(Gloves)</option>
			<option value="25">鞋(Boots)</option>
			<option value="26">披風(Cloak)</option>
			<option value="27">珍珠飾品(Pearl Jewel)</option>
			<option value="28">寶石飾品(Gem Jewel)</option>
			</optgroup>
			<optgroup label="家電用品"> 
			<option value="29">玻璃(Glass)</option>
			<option value="30">留言板(Board)</option>
			<option value="31">床(Bed)</option>
			<option value="32">電視機(Television)</option>
			<option value="33">音響(Audio)</option>
			<option value="34">冷氣機(Air Conditioner)</option>
			<option value="35">木桶(Barrel)</option>
			<option value="36">釣竿(Fishing Rod)</option>
			<option value="37">十字鎬(Pickax)</option>
			<option value="38">鑽頭(Drill)</option>
			<option value="39">木鋸(Saw)</option>
			<option value="40">水桶(Bucket)</option>
			<option value="41">鏟子(Shovel)</option>
			</optgroup>
			<optgroup label="化學機械電子"> 
			<option value="42">人造纖維(Man Made Fibers)</option>
			<option value="43">塑膠(Plastic)</option>
			<option value="44">橡膠(Rubber)</option>
			<option value="45">模具(Mold)</option>
			<option value="46">機構(Mechanical Structure)</option>
			<option value="47">引擎(Engine)</option>
			<option value="48">電線(Wire)</option>
			<option value="49">積體電路(Integrated Circuit)</option>
			</optgroup>
			<optgroup label="運輸載具"> 
			<option value="50">輪胎(Tire)</option>
			<option value="51">車體(Car Body)</option>
			<option value="52">船體(Boat Body)</option>
			<option value="53">小船(Rowboat)</option>
			<option value="54">汽車(Car)</option>
			<option value="55">卡車(Truck)</option>
			<option value="86">飛機機體(Plane Body)</option>
			<option value="87">滑翔機(Glider)</option>
			</optgroup>
			<optgroup label="冒險用品"> 
			<option value="56">帳篷(Tent)</option>
			<option value="57">繃帶(Bandage)</option>
			<option value="58">解毒劑(Antidote)</option>
			<option value="59">手電筒(Flashlight)</option>
			</optgroup>
			<optgroup label="近身武器"> 
			<option value="60">拳套(Fist)</option>
			<option value="61">棍(Stick)</option>
			<option value="62">刀(Blade)</option>
			<option value="63">劍(Sword)</option>
			<option value="64">斧(Axe)</option>
			<option value="65">戟(Halberd)</option>
			</optgroup>
			<optgroup label="盔甲防禦"> 
			<option value="66">腰帶(Belt)</option>
			<option value="67">護腕(Bracers)</option>
			<option value="68">腿甲(Leggings)</option>
			<option value="69">頭盔(Helm)</option>
			<option value="70">胸甲(Breast Plate)</option>
			</optgroup>
			<optgroup label="香水"> 
			<option value="71">牧草香水(Herbage Perfume)</option>
			<option value="72">向日葵香水(Sunflower Perfume)</option>
			<option value="73">藥草香水(Herb Perfume)</option>
			<option value="74">百合香水(Lily Perfume)</option>
			<option value="75">玫瑰香水(Rose Perfume)</option>
			</optgroup>
			<optgroup label="音樂娛樂"> 
			<option value="76">音樂光碟(Compact Disk)</option>
			<option value="77">笛(Flute)</option>
			<option value="78">吉他(Guitar)</option>
			<option value="79">棒球手套(Mitt)</option>
			<option value="80">棒球球棒(Bat)</option>
			</optgroup>
			<optgroup label="遠距武器"> 
			<option value="81">地雷(Landmine)</option>
			<option value="82">火箭(Rocket)</option>
			<option value="83">導彈防禦機(Antimissile)</option>
			<option value="84">導彈(Missile)</option>
			<option value="85">核彈(Nuclear Bomb)</option>
			</optgroup></select><br />
			數量<input id="num" name="num" value="1000" type="text" style="width: 74px" /><input name="Calbutton" type="button" value="計算" onclick="mooa()" style="height: 21px"/></form>
		</td>
		<td style="width: 117px" rowspan="3" valign="top">
		<form name="area1">
			<textarea name="TextArea1" class="style3" style="width: 270px; height: 460px"></textarea></form>
		&nbsp;</td>
		<td style="width: 94px" rowspan="3" valign="top">
		<form name="area2">
			<textarea name="TextArea2" style="width: 270px; height: 460px"></textarea></form>
		&nbsp;</td>
		<td style="width: 144px" rowspan="3" valign="top">
		<form name="area3">
			<textarea name="TextArea3" style="width: 270px; height: 460px"></textarea></form>
		&nbsp;</td>
		<td rowspan="3" valign="top">
		<form name="area4">
			<textarea name="TextArea4" style="width: 270px; height: 460px"></textarea></form>
		&nbsp;</td>
	</tr>
	<tr>
		<td style="width: 176px; height: 237px;" valign="top" class="style2">
		<form name="moneyfor" style="height: 142px">
			獲利倍率：<input name="magntext" type="text" style="width: 45px" value="100" />%<br />
			<br />
			獲利：<input name="Text1" type="text" style="width: 207px" /><label id="Label2"></label>
			<br />
			基礎獲利：<label id="Label3"></label><br />
			利潤：<label id="Label4"></label><br />
		</form>
			<form name="total" style="height: 208px; width: 207px"><label id="Label1">總計所需基礎資源：</label></form>
			<form method="post" action="" style="width: 207px; height: 59px">
			<div id="picker"></div>
                <div id="slide"></div>
                <script type="text/javascript">
                  ColorPicker(
                    document.getElementById('slide'),
                    document.getElementById('picker'),
                    function(hex, hsv, rgb) {
                      document.body.style.backgroundColor = hex;
                    });
                </script>
			</form>
			<form name="goback" style="width: 207px; height: 43px;">
			<script type="text/javascript" id="_wau9wy">var _wau = _wau || []; _wau.push(["small", "qs7w67bs34sy", "9wy"]);
(function() {var s=document.createElement("script"); s.async=true;
s.src="http://widgets.amung.us/small.js";
document.getElementsByTagName("head")[0].appendChild(s);
})();</script>
				</form>
		</td>
	</tr>
	<tr>
		<td style="width: 176px; height: 64px;" valign="top" class="style2">
		<a href="ProductCal_StyleII.htm">
		<strong>產品計算機(直立式)</strong></a><strong><br />
		<br />
		</strong><a href="InlayCal.htm">
		<strong>鑲嵌計算機</strong></a></td>
	</tr>
	</table>

</body>

