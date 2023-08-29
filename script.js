const settingsOpen = document.getElementById("settingsBtn");
const settingsClose = document.getElementById("settingsCloseBtn");
const darkModeBtn = document.getElementById("darkModeBtn");
var darkMode = 1;
let isConfirming = false;
const beginingSound = document.getElementById("beginSound");

    darkTest();
const soundBtn = document.getElementById("soundBtn");
var soundOn = 1;
const musicBtn = document.getElementById("musicBtn");
var musicOn = 1;

const computerLotText = document.getElementById("computerLot");
const computerStatusText = document.getElementById("computerStatus");
const computerHoldingText = document.getElementById("computerHolding");
const buyComputer = document.getElementById("buyComputer");
const sellComputer = document.getElementById("sellComputer");

const pharmaLotText = document.getElementById("pharmaLot");
const pharmaStatusText = document.getElementById("pharmaStatus");
const pharmaHoldingText = document.getElementById("pharmaHolding");
const buyPharma = document.getElementById("buyPharma");
const sellPharma = document.getElementById("sellPharma");

const farmLotText = document.getElementById("farmLot"); 
const farmStatusText = document.getElementById("farmStatus"); 
const farmHoldingText = document.getElementById("farmHolding"); 
const buyFarm = document.getElementById("buyFarm"); 
const sellFarm = document.getElementById("sellFarm");

const foodLotText = document.getElementById("foodLot"); 
const foodStatusText = document.getElementById("foodStatus"); 
const foodHoldingText = document.getElementById("foodHolding"); 
const buyFood = document.getElementById("buyFood"); 
const sellFood = document.getElementById("sellFood");

const dressLotText = document.getElementById("dressLot"); 
const dressStatusText = document.getElementById("dressStatus"); 
const dressHoldingText = document.getElementById("dressHolding"); 
const buyDress = document.getElementById("buyDress"); 
const sellDress = document.getElementById("sellDress");

const waterLotText = document.getElementById("waterLot"); 
const waterStatusText = document.getElementById("waterStatus"); 
const waterHoldingText = document.getElementById("waterHolding"); 
const buyWater = document.getElementById("buyWater"); 
const sellWater = document.getElementById("sellWater");

const shopLotText = document.getElementById("shopLot"); 
const shopStatusText = document.getElementById("shopStatus"); 
const shopHoldingText = document.getElementById("shopHolding"); 
const buyShop = document.getElementById("buyShop"); 
const sellShop = document.getElementById("sellShop");

const oilLotText = document.getElementById("oilLot"); 
const oilStatusText = document.getElementById("oilStatus"); 
const oilHoldingText = document.getElementById("oilHolding"); 
const buyOil = document.getElementById("buyOil"); 
const sellOil = document.getElementById("sellOil");

const buildLotText = document.getElementById("buildLot"); 
const buildStatusText = document.getElementById("buildStatus"); 
const buildHoldingText = document.getElementById("buildHolding"); 
const buyBuild = document.getElementById("buyBuild"); 
const sellBuild = document.getElementById("sellBuild");

const moneyText = document.getElementById("money");
const nextDay = document.getElementById("skipDay");
const dayText = document.getElementById("day");
const newsParent = document.getElementById("news");
const newsOpen = document.getElementById("newsBtn");
const newsClose = document.getElementById("closeNews");
const portfolioParent = document.getElementById("portfolio");
const setIstanbul = document.getElementById("setIstanbul");
const setCurrency = document.getElementById("setCurrency");
const currencyParent = document.getElementById("currencyPortfolio");
const setEmtia = document.getElementById("setEmtia");
const emtiaParent = document.getElementById("emtiaPortfolio");
const setBigInvestments = document.getElementById("setBigInvestments");
const bigInvestmentsParent = document.getElementById("bigInvestmentsPortfolio");
const setBusiness = document.getElementById("setBusiness");
const businessParent = document.getElementById("businessPortfolio");
const legal = document.getElementById("legal");
const payTaxes = document.getElementById("payTaxes");
const setLegal = document.getElementById("setLegal");


const alert = document.getElementById("alert");
const alertHeader = document.getElementById("alertHeader");
const alertDescription = document.getElementById("alertDescription");

const stockIstanbul = document.getElementById("stocks");
const currencies = document.getElementById("currencies");
const emtia = document.getElementById("emtia");
const bigInvestments = document.getElementById("bigInvestments");
const businesses = document.getElementById("businesses");

const buyAllComputer = document.getElementById('buyAllComputer'); 
const sellAllComputer = document.getElementById('sellAllComputer');
const buyAllPharma = document.getElementById('buyAllPharma'); 
const sellAllPharma = document.getElementById('sellAllPharma');
const buyAllFarm = document.getElementById('buyAllFarm'); 
const sellAllFarm = document.getElementById('sellAllFarm');
const buyAllFood = document.getElementById('buyAllFood'); 
const sellAllFood = document.getElementById('sellAllFood');
const buyAllDress = document.getElementById('buyAllDress'); 
const sellAllDress = document.getElementById('sellAllDress');
const buyAllWater = document.getElementById('buyAllWater'); 
const sellAllWater = document.getElementById('sellAllWater');
const buyAllShop = document.getElementById('buyAllShop'); 
const sellAllShop = document.getElementById('sellAllShop');
const buyAllOil = document.getElementById('buyAllOil'); 
const sellAllOil = document.getElementById('sellAllOil');
const buyAllBuild = document.getElementById('buyAllBuild'); 
const sellAllBuild = document.getElementById('sellAllBuild');

var taxDebitDay = 0;
var money = 1000;
var day = 1;
var computerHoldings = 0;
var computerValue = 129;
var costComputer = 0;
var todayComputer = 0;
var taxDebit = 0;
var taxCountdown = 0;

var pharmaHoldings = 0;
var pharmaValue = 191;
var costPharma = 0;
var todayPharma = 0;

var farmHoldings = 0;
var farmValue = 232;
var costFarm = 0;
var todayFarm = 0;

var foodHoldings = 0;
var foodValue = 567;
var costFood = 0;
var todayFood = 0;

var dressHoldings = 0;
var dressValue = 700;
var costDress = 0;
var todayDress = 0;

var waterHoldings = 0;
var waterValue = 1800;
var costWater = 0;
var todayWater = 0;

var shopHoldings = 0;
var shopValue = 4780;
var costShop = 0;
var todayShop = 0;

var oilHoldings = 0;
var oilValue = 7800;
var costOil = 0;
var todayOil = 0;

var buildHoldings = 0;
var buildValue = 11782;
var costBuild = 0;
var todayBuild = 0;

var dollarHoldings = 0;
var euroHoldings = 0;
var wonHoldings = 0;
var poundHoldings = 0;
var rubleHoldings = 0;
var dinarHoldings = 0;



var dollarValue = 27.54;
var euroValue = 33.54;
var wonValue = 0.20;
var poundValue = 39.54;
var rubleValue = 0.29;
var dinarValue = 88.8;

var goldHoldings = 0;
var silverHoldings = 0;
var coalHoldings = 0;

var goldValue = 9100;
var silverValue = 5200;
var coalValue = 2200;

var petHoldings = 0;
var bankHoldings = 0;
var ecomHoldings = 0;
var techHoldings = 0;

var petValue = 90320;
var bankValue = 120982;
var ecomValue = 190320;
var techValue = 340320;

var cafeCost = 2560500;
var cafeTax = 5000;

var buildCost = 50670500;
var buildTax = 10000;

var compuCost = 100450500;
var compuTax = 20000;

var brandCost = 240670500;
var brandTax = 100000;

var carCost = 670890500;
var carTax = 100000;

var shopCost = 2440670500;
var shopTax = 100000;

var ecomCost = 15900670500;
var ecomTax = 120000;

var smartCost = 190788670500;
var smartTax = 200000;

var fonCost = 450900670500;
var fonTax = 300000;

var stocksBusCost = 1679440670500;
var stocksBusTax = 1000000;

var bankBusCost = 5899440670500;
var bankBusTax = 1500000;

var autoCost = 15789440670500;
var autoTax = 10000000;


var cafeOwn = 0;
var buildOwn = 0;
var compuOwn = 0;
var brandOwn = 0;
var carOwn = 0;
var shopOwn = 0;
var ecomOwn = 0;
var smartOwn = 0;
var fonOwn = 0;
var stocksOwn = 0;
var bankOwn = 0;
var autoOwn = 0;





var cafeValue = 1000000;
var buildBusValue = 10000000;
var compuBusValue = 20000000;
var brandValue = 50000000;
var carValue = 70000000;
var shopBusValue = 120000000;
var ecomBusValue = 700000000;
var smartValue = 2000000000;
var fonValue = 100000000000;
var stocksValue = 500000000000;
var bankBusValue = 1000000000000;
var autoValue = 4000000000000;



const setUpCafe = document.getElementById("setCafe");
const setUpBuild = document.getElementById("setBuild");
const setUpCompu = document.getElementById("setComputer");
const setUpBrand = document.getElementById("setBrand");
const setUpCar = document.getElementById("setCar");
const setUpShop = document.getElementById("setShop");
const setUpEcom = document.getElementById("setEcom");
const setUpSmart = document.getElementById("setSmart");
const setUpFon = document.getElementById("setFon");
const setUpStocks = document.getElementById("setStocksBus");
const setUpBank = document.getElementById("setBank");
const setUpAuto = document.getElementById("setAuto");


const dollarText = document.getElementById("dollarText");
const euroText = document.getElementById("euroText");
const wonText = document.getElementById("wonText");
const poundText = document.getElementById("poundText");
const rubleText = document.getElementById("rubleText");
const dinarText = document.getElementById("dinarText");

const goldText = document.getElementById('goldText');
const silverText = document.getElementById('silverText');
const coalText = document.getElementById('coalText');

const petText = document.getElementById('petText');
const bankText = document.getElementById('bankText');
const ecomText = document.getElementById('ecomText');
const techText = document.getElementById('techText');

const dollarInput = document.getElementById("dollarInput");
const euroInput = document.getElementById("euroInput");
const wonInput = document.getElementById("wonInput");
const poundInput = document.getElementById("poundInput");
const rubleInput = document.getElementById("rubleInput");
const dinarInput = document.getElementById("dinarInput");

const petInput = document.getElementById("petInput");
const bankInput = document.getElementById("bankInput");
const ecomInput = document.getElementById("ecomInput");
const techInput = document.getElementById("techInput");


const buyDollar = document.getElementById('buyDollar'); 
const sellDollar = document.getElementById('sellDollar');
const buyEuro = document.getElementById('buyEuro'); 
const sellEuro = document.getElementById('sellEuro');
const buyWon = document.getElementById('buyWon'); 
const sellWon = document.getElementById('sellWon');
const buyPound = document.getElementById('buyPound'); 
const sellPound = document.getElementById('sellPound');
const buyRuble = document.getElementById('buyRuble'); 
const sellRuble = document.getElementById('sellRuble');
const buyDinar = document.getElementById('buyDinar'); 
const sellDinar = document.getElementById('sellDinar');



const buyGold = document.getElementById('buyGold'); 
const sellGold = document.getElementById('sellGold');
const buySilver = document.getElementById('buySilver'); 
const sellSilver = document.getElementById('sellSilver');
const buyCoal = document.getElementById('buyCoal'); 
const sellCoal = document.getElementById('sellCoal');

const buyPet = document.getElementById('buyPet'); 
const sellPet = document.getElementById('sellPet');
const buyBank = document.getElementById('buyBank'); 
const sellBank = document.getElementById('sellBank');
const buyEcom = document.getElementById('buyEcom'); 
const sellEcom = document.getElementById('sellEcom');
const buyTech = document.getElementById('buyTech'); 
const sellTech = document.getElementById('sellTech');

var computerNewsNeg = ["Çip ithalatında kriz!", "İhraç edilecek bilgisayarlar AB tarafından reddedildi!", "Elektrik faturlarındaki artış en çok bilgisayar endüstrisini etkileyecek", "TR Merkezli bilgisayar şirketine siber saldırı!", "Yeni yasa kapıda! Bilgisayarlara büyük ÖTV zammı", "Çin'den getirilen 4 milyon çipin sahte olduğu öğrenildi", "Bilgisayar fabrikasında patlama!"];
var computerNewsPos = ["Türkiye bilgisayar alanında ihracat rekoru kırdı!", "Bilgisayarlara ÖTV indirimi geliyor!", "Bakan yaptığı açıklamada bilgisayar şirketlerine dağıtılmak üzere 67Milyar₺ fon ayrıldığını söyledi", "Türkiye çip ihracatına başladı!", "Devlet daireleri artık yerli bilgisayar kullanacak!", "Yeni çip fabrikası kuruldu!", "ATO tüm Türkiye'de yer alan bilgisayar A.Ş.'lere 10 Milyon₺ vereceğini duyurdu!"];

var pharmaNewsNeg = ["İlaç krizi yaşanıyor!","Medikal fabrikada patlama meydana geldi","Sağlık Bakanlığı ilaç şirketlerinden ek belge istedi","Döviz hareketliliği sebebiyle 3 adet ilaç markası ülkeden çekildi","Bakan açıkladı! İlaçlara vergi geliyor","İlaç fabrikasında şok eden olay! Fareler görüntülendi","Teknoloji sebebiyle ilaca talep azalıyor!"];
var pharmaNewsPos = ["İlaçlara talep artıyor!","Bakanlık ilaç firmalarına destek vereceğini açıkladı","SPK pandemi sebebiyle zarar gören ilaç şirketlerine yardım yapacak","İlaç firmalarının vergi yükü azaltılıyor!","Yeni hastalık! Bakanlık çalışmaları başlattı","DSÖ yaptığı açıklamada tüm ülkelerde ilaç firmalarına destek verileceğini söyledi","Sayın Cumhurbaşkanı yaptığı açıklamada ilaç firmalarına müjdeyi verdi!"];

var farmNewsNeg = ["Tarımda yeni vergiler","Tarıma talep azaldı. Artık paketli gıda dönemi","Döviz hareketliliği tarıma darbe vurdu","Çiftçi ağlıyor!","Tarım şirketlerine yeni vergi mükellefliği getirildi","Tarımda vergi muafiyeti kalktı!","Tarıma yeni KDV zammı"];
var farmNewsPos = ["Tarıma vergi muafiyeti","Tarım firmalarına destek","Tarıma talep artıyor","Yurt dışından gelen yatırımcının ilk durağı tarlalar oldu","Paketli gıdada çıkan böcek insanları meyvelere yönlendirdi","Dev skandal! Kuru meyve paketlerinden çöp poşeti çıkıyor! İnsanlar yeniden tarıma yöneldi","Tarıma devlet desteği müjdesi!"];

var foodNewsNeg = ["Paketli gıda fabrikasında skandal!","Abur cuburlara talep azaldı","Paketli gıdadan böcek çıktı!","Borsada gıda firmalarına SPK uyarı verdi","Gıda firmalarına yeni vergi","Ünlü gıda firmasının borçları açığa çıktı","Vergi kaçırdığı tespit edilen gıda firmasına 700 Milyon ₺ ceza kesildi"];
var foodNewsPos = ["Kıtlık insanları paketli gıdaya yönlendirdi","Türk gıda markasına AB ödülü!","Gıda firmalarına vergi muafiyeti","Yeni çıkan film paketli gıda tüketimini arttırdı","Ünlü gıda markası üstün lezzet ödülü aldı!","Ödüllü markadan yeni yatırım","Ünlü gıda markası yeni fabrika açtı"];

var dressNewsNeg = ["Kumaşlara zam!","Türk kumaş fabrikası yandı!","Türk kumaşı ününü yitiriyor!","Hint kumaşı popülaritesi diğer ülkelerde krize yol açtı!","Kriz geçiren personel giyim fabrikasını aleve verdi!","Mağazada çıldıran müşteri giyim mağazası personeline saldırdı","Giyim sektöründeki vergi desteği kalktı!"];
var dressNewsPos = ["Türk kumaşı ödül aldı","Ünlü Hint terzi Türk giyim markasını tercih ettiğini açıkladı!","Türk kumaşı yeni yılda da kendini kanıtladı","Paris moda haftasında kendi ürünlerine yer veren Türk şirket çok beğenildi!","Tekstil alanına vergi indirimi geldi","Tekstil şirketlerine vergi muafiyeti","Ünlü Türk tekstil markası yatırım aldı!"];

var waterNewsNeg = ["Barajda pis su bulundu","Ünlü Türk su şirketi üstün lezzet ödülünü kaybetti","Su firmasının fabrikasındaki temizlik Sağlık Bakanlığı tarafından cezaya çarptırıldı","Barajlarda hijyen sorunu!","Kuraklık barajları da etkiledi!","Su şirketlerine vergi zammı","Sulardan alınan KDV %1 arttırıldı"];
var waterNewsPos = ["Su markası üstün lezzet ödülü aldı!","Barajlarda yüksek doluluk!","Fabrikasındaki hijyen sayesinde bakanlık tarafından ödül verilen su şirketi açıklama yaptı!","Barajlarda hijyen rekoru bizde!","Türkiye tüm gezegene su ihraç ediyor","Su artık ithal edilmiyor. Türk suyu herkese yetiyor","Türk su markasına AB tarafından ödül verildi"];

var shopNewsNeg = ["Birden fazla marka satan işletmelere vergi zammı","İhracat devi mağazada skandal!","Çıldıran bir müşteri Aras mağazası müşterilerine saldırdı","Aras mağazasında skandal!","Aras Beykoz şubesinde vergi kaçırıldığı iddiası","Aras mağazalarına ceza kesildi","Ünlü büyük mağaza AB tarafından eleştirildi"];
var shopNewsPos = ["Aras mağazalarına ödül!","Ünlü mağaza 19 markayla iş birliği yapıyor","Ünlü büyük mağaza Dünya devi şirketin ürünlerini satacak","Ünlü lüks markanın ürünleri artık ülkemizde!","Aras, Avrupa üzerinde ilk şubesini açacak","Ünlü dev mağaza artık Amerikan devi markayla ortak!","Mağazalara vergi muafiyeti"];

var oilNewsNeg = ["Petrol istasyonu yandı!","Türk petrol markasının benzininde kurşuna rastlandı","Petrol aldı, aracı yandı!","Aldığı mazot sebebiyle aracı havaya uçtu!","AB tarafından düzenlenen araştırmadan 10 üzerinden 2 puan alan Türk yakıt şirketi suçlamaları reddetti!","Petrol istasyonunda skandal!","Petrol istasyonunda kavga!"];
var oilNewsPos = ["Türk petrolü ödül aldı!","Türk petrol şirketine dev yatırım","AB , Türk petrol şirketine ödül verdi","Araştırmalara göre, en iyi petrol bizim ülkemizde! ","Petrol şirketine ödül","Türk petrolüne ödül","Yeni petrol yatağı bulundu!"];

var buildNewsNeg = ["Şantiyede kavga!","Çimentoda deniz kumuna rastlandı","Ünlü müteahhit tutuklandı!","Depremde binaları yıkılmıştı, konuştu!","Müteahhit suçlanıyor!","Yapı şirketinde denetim sırasında skandal görüntüler!","Yapı şirketi iflas mı ediyor?"];
var buildNewsPos = ["Müteahhit ödül aldı!","Depremde en ufak yeri çatlamayan bina Zeus yapıya ait çıktı!","Zeus yapı ödül aldı!","Türk yapı şirketleri uluslararası pazara girdi!","AB Türk yapı şirketine ödül verdi","Ünlü yapı şirketi yatırımlar almaya devam ediyor!","Yatırımlarla şahlanacağını söyleyen müteahhit, gün geçtikçe gelişiyor!"];



settingsOpen.addEventListener("click", function(){
    document.getElementById("settings").style.display = "block";
});
settingsClose.addEventListener("click", function(){
    document.getElementById("settings").style.display = "none";
});
soundBtn.addEventListener("click", function(){
    if (soundOn == 0) {
        soundBtn.style.backgroundColor = "#32EA3E";
        document.getElementById("soundCircle").style.float = "right";
        document.getElementById("soundCircle").style.backgroundColor = "#fff";
        soundOn = 1;
    }
    else if(soundOn == 1){
        soundBtn.style.backgroundColor = "#fff";
        document.getElementById("soundCircle").style.float = "left";
        document.getElementById("soundCircle").style.backgroundColor = "#f2f2f2";
        soundOn = 0;
    }
    return soundOn
});
musicBtn.addEventListener("click", function(){
    if (musicOn == 0) {
        musicBtn.style.backgroundColor = "#32EA3E";
        document.getElementById("musicCircle").style.float = "right";
        document.getElementById("musicCircle").style.backgroundColor = "#fff";
        musicOn = 1;
        document.getElementById("music").play();
    }
    else if(musicOn == 1){
        musicBtn.style.backgroundColor = "#fff";
        document.getElementById("musicCircle").style.float = "left";
        document.getElementById("musicCircle").style.backgroundColor = "#f2f2f2";
        musicOn = 0;
        document.getElementById("music").pause();
    }
    return musicOn
});
darkModeBtn.addEventListener("click", function(){
    if (darkMode == 0) {
        darkModeBtn.style.backgroundColor = "#32EA3E";
        document.getElementById("darkModeCircle").style.float = "right";
        document.getElementById("darkModeCircle").style.backgroundColor = "#fff";

        document.body.style.color = "#f2f2f2";
        document.body.style.backgroundColor = "#272727";
        var stockElements = document.querySelectorAll(".stock");
        document.getElementById("news").style.backgroundColor = "#333333";
        document.getElementById("news").style.color = "#f2f2f2";

stockElements.forEach(function(element) {
    element.style.backgroundColor = "#4545";
    element.style.color = "#f2f2f2";
});
document.getElementById("settings").style.backgroundColor = "#272727";

var currencyElements = document.querySelectorAll(".currency");

currencyElements.forEach(function(element) {
    element.style.backgroundColor = "#4545";
    element.style.color = "#f2f2f2";
});
var emtiaElements = document.querySelectorAll(".emtiaStock");

emtiaElements.forEach(function(element) {
    element.style.backgroundColor = "#4545";
    element.style.color = "#f2f2f2";
});
var bigElements = document.querySelectorAll(".bigInvestment");

bigElements.forEach(function(element) {
    element.style.backgroundColor = "#4545";
    element.style.color = "#f2f2f2";
});
var bussElements = document.querySelectorAll(".business");

bussElements.forEach(function(element) {
    element.style.backgroundColor = "#4545";
    element.style.color = "#f2f2f2";
});
var buyElements = document.querySelectorAll(".buy");

buyElements.forEach(function(element) {
    element.style.backgroundColor = "#2E7D32";
    element.style.color = "#ffffff";
});
var sellElements = document.querySelectorAll(".sell");

sellElements.forEach(function(element) {
    element.style.backgroundColor = "#C62828";
    element.style.color = "#ffffff";
});
var buyAllElements = document.querySelectorAll(".buyAll");

buyAllElements.forEach(function(element) {
    element.style.backgroundColor = "#1976D2";
    element.style.color = "#ffffff";
});
var sellAllElements = document.querySelectorAll(".sellAll");

sellAllElements.forEach(function(element) {
    element.style.backgroundColor = "#FF5722";
    element.style.color = "#ffffff";
});
var legalElements = document.querySelectorAll(".legal");

legalElements.forEach(function(element) {
    element.style.backgroundColor = "#4545";
    element.style.color = "#ffffff";
});

        darkMode = 1;
    }
    else if (darkMode == 1) {
        darkModeBtn.style.backgroundColor = "#fff";
        document.getElementById("darkModeCircle").style.float = "left";
        document.getElementById("darkModeCircle").style.backgroundColor = "#f2f2f2";

        document.body.style.color = "#000";
        document.body.style.backgroundColor = "#fff";
        var stockElements = document.querySelectorAll(".stock");
        document.getElementById("news").style.backgroundColor = "#f2f2f2";
        document.getElementById("news").style.color = "#272727";
stockElements.forEach(function(element) {
    element.style.backgroundColor = "#f2f2f2";
    element.style.color = "#272727";
});
document.getElementById("settings").style.backgroundColor = "#fff";

var currencyElements = document.querySelectorAll(".currency");

currencyElements.forEach(function(element) {
    element.style.backgroundColor = "#f2f2f2";
    element.style.color = "#272727";
});
var emtiaElements = document.querySelectorAll(".emtiaStock");

emtiaElements.forEach(function(element) {
    element.style.backgroundColor = "#f2f2f2";
    element.style.color = "#272727";
});
var bigElements = document.querySelectorAll(".bigInvestment");

bigElements.forEach(function(element) {
    element.style.backgroundColor = "#f2f2f2";
    element.style.color = "#272727";
});
var bussElements = document.querySelectorAll(".business");

bussElements.forEach(function(element) {
    element.style.backgroundColor = "#f2f2f2";
    element.style.color = "#272727";
});
var buyElements = document.querySelectorAll(".buy");

buyElements.forEach(function(element) {
    element.style.backgroundColor = "green";
    element.style.color = "#f2f2f2";
});
var sellElements = document.querySelectorAll(".sell");

sellElements.forEach(function(element) {
    element.style.backgroundColor = "red";
    element.style.color = "#f2f2f2";
});
var buyAllElements = document.querySelectorAll(".buyAll");

buyAllElements.forEach(function(element) {
    element.style.backgroundColor = "blue";
    element.style.color = "#f2f2f2";
});
var sellAllElements = document.querySelectorAll(".sellAll");

sellAllElements.forEach(function(element) {
    element.style.backgroundColor = "orangered";
    element.style.color = "#f2f2f2";
});
var legalElements = document.querySelectorAll(".legal");

legalElements.forEach(function(element) {
    element.style.backgroundColor = "#f2f2f2";
    element.style.color = "#272727";
});
        darkMode = 0;
    }
    return darkMode
});
function onPageLoad() {

    window.addEventListener("beforeunload", function(event) {
        event.preventDefault(); 
        event.returnValue = ""; 
        return "Oyununuz kaydedilmemiş olabilir. Devam etmek istiyor musunuz?"; 
    });
}
function darkTest(){
    if (darkMode == 1) {
        darkModeBtn.style.backgroundColor = "#32EA3E";
        document.getElementById("darkModeCircle").style.float = "right";
        document.getElementById("darkModeCircle").style.backgroundColor = "#fff";

        document.body.style.color = "#f2f2f2";
        document.body.style.backgroundColor = "#272727";
        var stockElements = document.querySelectorAll(".stock");
        document.getElementById("news").style.backgroundColor = "#333333";
        document.getElementById("news").style.color = "#f2f2f2";
stockElements.forEach(function(element) {
    element.style.backgroundColor = "#4545";
    element.style.color = "#f2f2f2";
});
document.getElementById("settings").style.backgroundColor = "#272727";

var currencyElements = document.querySelectorAll(".currency");

currencyElements.forEach(function(element) {
    element.style.backgroundColor = "#4545";
    element.style.color = "#f2f2f2";
});
var emtiaElements = document.querySelectorAll(".emtiaStock");

emtiaElements.forEach(function(element) {
    element.style.backgroundColor = "#4545";
    element.style.color = "#f2f2f2";
});
var bigElements = document.querySelectorAll(".bigInvestment");

bigElements.forEach(function(element) {
    element.style.backgroundColor = "#4545";
    element.style.color = "#f2f2f2";
});
var bussElements = document.querySelectorAll(".business");

bussElements.forEach(function(element) {
    element.style.backgroundColor = "#4545";
    element.style.color = "#f2f2f2";
});
var buyElements = document.querySelectorAll(".buy");

buyElements.forEach(function(element) {
    element.style.backgroundColor = "#2E7D32";
    element.style.color = "#ffffff";
});
var sellElements = document.querySelectorAll(".sell");

sellElements.forEach(function(element) {
    element.style.backgroundColor = "#C62828";
    element.style.color = "#ffffff";
});
var buyAllElements = document.querySelectorAll(".buyAll");

buyAllElements.forEach(function(element) {
    element.style.backgroundColor = "#1976D2";
    element.style.color = "#ffffff";
});
var sellAllElements = document.querySelectorAll(".sellAll");

sellAllElements.forEach(function(element) {
    element.style.backgroundColor = "#FF5722";
    element.style.color = "#ffffff";
});
var legalElements = document.querySelectorAll(".legal");

legalElements.forEach(function(element) {
    element.style.backgroundColor = "#4545";
    element.style.color = "#ffffff";
});

        darkMode = 1;
    }
    else if (darkMode == 0) {
        darkModeBtn.style.backgroundColor = "#fff";
        document.getElementById("darkModeCircle").style.float = "left";
        document.getElementById("darkModeCircle").style.backgroundColor = "#f2f2f2";

        document.body.style.color = "#000";
        document.body.style.backgroundColor = "#fff";
        var stockElements = document.querySelectorAll(".stock");
        document.getElementById("news").style.backgroundColor = "#f2f2f2";
        document.getElementById("news").style.color = "#272727";
stockElements.forEach(function(element) {
    element.style.backgroundColor = "#f2f2f2";
    element.style.color = "#272727";
});
document.getElementById("settings").style.backgroundColor = "#fff";

var currencyElements = document.querySelectorAll(".currency");

currencyElements.forEach(function(element) {
    element.style.backgroundColor = "#f2f2f2";
    element.style.color = "#272727";
});
var emtiaElements = document.querySelectorAll(".emtiaStock");

emtiaElements.forEach(function(element) {
    element.style.backgroundColor = "#f2f2f2";
    element.style.color = "#272727";
});
var bigElements = document.querySelectorAll(".bigInvestment");

bigElements.forEach(function(element) {
    element.style.backgroundColor = "#f2f2f2";
    element.style.color = "#272727";
});
var bussElements = document.querySelectorAll(".business");

bussElements.forEach(function(element) {
    element.style.backgroundColor = "#f2f2f2";
    element.style.color = "#272727";
});
var buyElements = document.querySelectorAll(".buy");

buyElements.forEach(function(element) {
    element.style.backgroundColor = "green";
    element.style.color = "#f2f2f2";
});
var sellElements = document.querySelectorAll(".sell");

sellElements.forEach(function(element) {
    element.style.backgroundColor = "red";
    element.style.color = "#f2f2f2";
});
var buyAllElements = document.querySelectorAll(".buyAll");

buyAllElements.forEach(function(element) {
    element.style.backgroundColor = "blue";
    element.style.color = "#f2f2f2";
});
var sellAllElements = document.querySelectorAll(".sellAll");

sellAllElements.forEach(function(element) {
    element.style.backgroundColor = "orangered";
    element.style.color = "#f2f2f2";
});
var legalElements = document.querySelectorAll(".legal");

legalElements.forEach(function(element) {
    element.style.backgroundColor = "#f2f2f2";
    element.style.color = "#272727";
});
darkMode = 0;
}
return darkMode
}
window.onload = onPageLoad;
nextDay.addEventListener("click", function(){
    newsParent.innerHTML = '<button onclick="closeNews()" id="closeNews">Haberleri kapat</button> ';
    portfolioParent.innerHTML = "";
    currencyParent.innerHTML = "";
    emtiaParent.innerHTML = "";
    bigInvestmentsParent.innerHTML = "";
    day += 1;
    taxControl();
    incomeCheck();
    computerDailyValue();
    pharmaDailyValue();
    farmDailyValue();
    foodDailyValue();
    dressDailyValue();
    waterDailyValue();
    shopDailyValue();
    oilDailyValue();
    buildDailyValue();
    currenciesDaily();
    emtiaDaily();
    bigInvestsDaily();
    dayText.textContent = day+". gün";
    computerDay();
    pharmaDay();
    farmDay();
    foodDay();
    dressDay();
    waterDay();
    shopDay();
    oilDay();
    buildDay();
worthCheck();
portfolio();
currencyPort();
emtiaPort();
bigPort();
checkMoney();
isConfirming = false;
if (musicOn == 1) {
    document.getElementById("music").play();
}
        console.log(todayComputer);
    

    return day
});
newsOpen.addEventListener("click", function(){
 newsParent.style.display = "block";
});
setIstanbul.addEventListener("click", function(){
    setIstanbul.style.borderBottom = "2px solid #4545";
    setBusiness.style.borderBottom = "#272727";
    setCurrency.style.borderBottom = "#272727";
    setEmtia.style.borderBottom = "#272727";
    setLegal.style.borderBottom = "#272727";
    setBigInvestments.style.borderBottom = "#272727";
    stockIstanbul.style.display = "block";
    currencies.style.display = "none";
    emtia.style.display = "none";
    bigInvestments.style.display = "none";
    businesses.style.display = "none";
    legal.style.display = "none";
    currencyParent.style.display = "none";
    portfolioParent.style.display = "block";
    emtiaParent.style.display = "none";
    bigInvestmentsParent.style.display = "none";
    businessParent.style.display = "none";

});
setCurrency.addEventListener("click", function(){
    setIstanbul.style.borderBottom = "#272727";
    setCurrency.style.borderBottom = "2px solid #4545";
    setLegal.style.borderBottom = "#272727";
    setBusiness.style.borderBottom = "#272727";
    setEmtia.style.borderBottom = "#272727";
    setBigInvestments.style.borderBottom = "#272727";
    stockIstanbul.style.display = "none";
    legal.style.display = "none";
    currencies.style.display = "block";
    emtia.style.display = "none";
    businesses.style.display = "none";
    bigInvestments.style.display = "none";
    currencyParent.style.display = "block";
    portfolioParent.style.display = "none";
    emtiaParent.style.display = "none";
    bigInvestmentsParent.style.display = "none";
    businessParent.style.display = "none";


});
setEmtia.addEventListener("click", function(){
    setIstanbul.style.borderBottom = "#272727";
    setCurrency.style.borderBottom = "#272727";
    setEmtia.style.borderBottom = "2px solid #4545";
    setLegal.style.borderBottom = "#272727";
    setBusiness.style.borderBottom = "#272727";
    setBigInvestments.style.borderBottom = "#272727";
    stockIstanbul.style.display = "none";
    legal.style.display = "none";
    currencies.style.display = "none";
    emtia.style.display = "block";
    bigInvestments.style.display = "none";
    businesses.style.display = "none";
    currencyParent.style.display = "none";
    portfolioParent.style.display = "none";
    emtiaParent.style.display = "block";
    bigInvestmentsParent.style.display = "none";
    businessParent.style.display = "none";

});
setBigInvestments.addEventListener("click", function(){
    setIstanbul.style.borderBottom = "#272727";
    setCurrency.style.borderBottom = "#272727";
    setEmtia.style.borderBottom = "#272727";
    setBigInvestments.style.borderBottom = "2px solid #4545";
    setBusiness.style.borderBottom = "#272727";
    setLegal.style.borderBottom = "#272727";
    stockIstanbul.style.display = "none";
    currencies.style.display = "none";
    emtia.style.display = "none";
    bigInvestments.style.display = "block";
    businesses.style.display = "none";
    legal.style.display = "none";
    currencyParent.style.display = "none";
    portfolioParent.style.display = "none";
    emtiaParent.style.display = "none";
    bigInvestmentsParent.style.display = "block";
    businessParent.style.display = "none";
});

setBusiness.addEventListener("click", function(){
    setIstanbul.style.borderBottom = "#272727";
    setCurrency.style.borderBottom = "#272727";
    setEmtia.style.borderBottom = "#272727";
    setBigInvestments.style.borderBottom = "#272727";
    setBusiness.style.borderBottom = "2px solid #4545";
    setLegal.style.borderBottom = "#272727";
    stockIstanbul.style.display = "none";
    currencies.style.display = "none";
    emtia.style.display = "none";
    bigInvestments.style.display = "none";
    legal.style.display = "none";
    businesses.style.display = "block";
    currencyParent.style.display = "none";
    portfolioParent.style.display = "none";
    emtiaParent.style.display = "none";
    bigInvestmentsParent.style.display = "none";
    businessParent.style.display = "block";
});
setLegal.addEventListener("click", function(){
    setIstanbul.style.borderBottom = "#272727";
    setCurrency.style.borderBottom = "#272727";
    setEmtia.style.borderBottom = "#272727";
    setBigInvestments.style.borderBottom = "#272727";
    setBusiness.style.borderBottom = "#272727";
    setLegal.style.borderBottom = "2px solid #4545";
    stockIstanbul.style.display = "none";
    currencies.style.display = "none";
    emtia.style.display = "none";
    bigInvestments.style.display = "none";
    legal.style.display = "block";
    businesses.style.display = "none";
    currencyParent.style.display = "none";
    portfolioParent.style.display = "none";
    emtiaParent.style.display = "none";
    bigInvestmentsParent.style.display = "none";
    businessParent.style.display = "none";
});

setUpCafe.addEventListener("click", function(){
    if (cafeOwn == 0) {
        if (money >= cafeCost) {
            if (soundOn == 1) {
                const setAudio = document.getElementById("setSound");
        setAudio.play();
            }
            money -= cafeCost;
            moneyText.textContent = Math.trunc(money)+"₺";
            cafeOwn = 1;
            setUpCafe.style.backgroundColor = "red";
            setUpCafe.style.color = "#fff";
            setUpCafe.textContent = "İşi sat";
            return money, cafeOwn 
        }
        else{
            alertStocks("uyarı", "Yetersiz nakit");
        }
    }
    else{
        money += cafeValue;
        moneyText.textContent = Math.trunc(money)+"₺";
        setUpCafe.style.backgroundColor = "green";
        setUpCafe.style.color = "#fff";
        setUpCafe.textContent = "İşi kur";
        cafeOwn = 0;
        return money, cafeOwn
    }
});
setUpBuild.addEventListener("click", function(){
    if (buildOwn == 0) {
        if (money >= buildCost) {
            if (soundOn == 1) {
                const setAudio = document.getElementById("setSound");
        setAudio.play();
            }
            money -= buildCost;
            moneyText.textContent = Math.trunc(money)+"₺";
            buildOwn = 1;
            setUpBuild.style.backgroundColor = "red";
            setUpBuild.style.color = "#fff";
            setUpBuild.textContent = "İşi sat";
            return money, buildOwn 
        }
        else{
            alertStocks("uyarı", "Yetersiz nakit");
        }
    }
    else{
        money += buildValue;
        moneyText.textContent = Math.trunc(money)+"₺";
        setUpBuild.style.backgroundColor = "green";
        setUpBuild.style.color = "#fff";
        setUpBuild.textContent = "İşi kur";
        buildOwn = 0;
        return money, buildOwn
    }
});
setUpCompu.addEventListener("click", function(){
    if (compuOwn == 0) {
        if (money >= compuCost) {
            if (soundOn == 1) {
                const setAudio = document.getElementById("setSound");
        setAudio.play();
            }
            money -= compuCost;
            moneyText.textContent = Math.trunc(money)+"₺";
            compuOwn = 1;
            setUpCompu.style.backgroundColor = "red";
            setUpCompu.style.color = "#fff";
            setUpCompu.textContent = "İşi sat";
            return money, compuOwn 
        }
        else{
            alertStocks("uyarı", "Yetersiz nakit");
        }
    }
    else{
        money += compuBusValue;
        moneyText.textContent = Math.trunc(money)+"₺";
        setUpCompu.style.backgroundColor = "green";
        setUpCompu.style.color = "#fff";
        setUpCompu.textContent = "İşi kur";
        compuOwn = 0;
        return money, compuOwn
    }
});
setUpBrand.addEventListener("click", function(){
    if (brandOwn == 0) {
        if (money >= brandCost) {
            if (soundOn == 1) {
                const setAudio = document.getElementById("setSound");
        setAudio.play();
            }
            money -= brandCost;
            moneyText.textContent = Math.trunc(money)+"₺";
            brandOwn = 1;
            setUpBrand.style.backgroundColor = "red";
            setUpBrand.style.color = "#fff";
            setUpBrand.textContent = "İşi sat";
            return money, brandOwn 
        }
        else{
            alertStocks("uyarı", "Yetersiz nakit");
        }
    }
    else{
        money += brandValue;
        moneyText.textContent = Math.trunc(money)+"₺";
        setUpBrand.style.backgroundColor = "green";
        setUpBrand.style.color = "#fff";
        setUpBrand.textContent = "İşi kur";
        brandOwn = 0;
        return money, brandOwn
    }
});

setUpCar.addEventListener("click", function(){
    if (carOwn == 0) {
        if (money >= carCost) {
            if (soundOn == 1) {
                const setAudio = document.getElementById("setSound");
        setAudio.play();
            }
            money -= carCost;
            moneyText.textContent = Math.trunc(money)+"₺";
            carOwn = 1;
            setUpCar.style.backgroundColor = "red";
            setUpCar.style.color = "#fff";
            setUpCar.textContent = "İşi sat";
            return money, carOwn 
        }
        else{
            alertStocks("uyarı", "Yetersiz nakit");
        }
    }
    else{
        money += carValue;
        moneyText.textContent = Math.trunc(money)+"₺";
        setUpCar.style.backgroundColor = "green";
        setUpCar.style.color = "#fff";
        setUpCar.textContent = "İşi kur";
        carOwn = 0;
        return money, carOwn
    }
});
setUpShop.addEventListener("click", function(){
    if (shopOwn == 0) {
        if (money >= shopCost) {
            if (soundOn == 1) {
                const setAudio = document.getElementById("setSound");
        setAudio.play();
            }
            money -= shopCost;
            moneyText.textContent = Math.trunc(money)+"₺";
            shopOwn = 1;
            setUpShop.style.backgroundColor = "red";
            setUpShop.style.color = "#fff";
            setUpShop.textContent = "İşi sat";
            return money, shopOwn 
        }
        else{
            alertStocks("uyarı","Yetersiz nakit");
        }
    }
    else{
        money += shopBusValue;
        moneyText.textContent = Math.trunc(money)+"₺";
        setUpShop.style.backgroundColor = "green";
        setUpShop.style.color = "#fff";
        setUpShop.textContent = "İşi kur";
        shopOwn = 0;
        return money, shopOwn
    }
});
setUpEcom.addEventListener("click", function(){
    if (ecomOwn == 0) {
        if (money >= ecomCost) {
            if (soundOn == 1) {
                const setAudio = document.getElementById("setSound");
        setAudio.play();
            }
            money -= ecomCost;
            moneyText.textContent = Math.trunc(money)+"₺";
            ecomOwn = 1;
            setUpEcom.style.backgroundColor = "red";
            setUpEcom.style.color = "#fff";
            setUpEcom.textContent = "İşi sat";
            return money, ecomOwn 
        }
        else{
            alertStocks("uyarı","Yetersiz nakit");
        }
    }
    else{
        money += ecomBusValue;
        moneyText.textContent = Math.trunc(money)+"₺";
        setUpEcom.style.backgroundColor = "green";
        setUpEcom.style.color = "#fff";
        setUpEcom.textContent = "İşi kur";
        ecomOwn = 0;
        return money, ecomOwn
    }
});
setUpSmart.addEventListener("click", function(){
    if (smartOwn == 0) {
        if (money >= smartCost) {
            if (soundOn == 1) {
                const setAudio = document.getElementById("setSound");
        setAudio.play();
            }
            money -= smartCost;
            moneyText.textContent = Math.trunc(money)+"₺";
            smartOwn = 1;
            setUpSmart.style.backgroundColor = "red";
            setUpSmart.style.color = "#fff";
            setUpSmart.textContent = "İşi sat";
            return money, smartOwn 
        }
        else{
            alertStocks("uyarı","Yetersiz nakit");
        }
    }
    else{
        money += smartValue;
        moneyText.textContent = Math.trunc(money)+"₺";
        setUpSmart.style.backgroundColor = "green";
        setUpSmart.style.color = "#fff";
        setUpSmart.textContent = "İşi kur";
        smartOwn = 0;
        return money, smartOwn
    }
});
setUpFon.addEventListener("click", function(){
    if (fonOwn == 0) {
        if (money >= fonCost) {
            if (soundOn == 1) {
                const setAudio = document.getElementById("setSound");
        setAudio.play();
            }
            money -= fonCost;
            moneyText.textContent = Math.trunc(money)+"₺";
            fonOwn = 1;
            setUpFon.style.backgroundColor = "red";
            setUpFon.style.color = "#fff";
            setUpFon.textContent = "İşi sat";
            return money, fonOwn 
        }
        else{
            alertStocks("uyarı","Yetersiz nakit");
        }
    }
    else{
        money += fonValue;
        moneyText.textContent = Math.trunc(money)+"₺";
        setUpFon.style.backgroundColor = "green";
        setUpFon.style.color = "#fff";
        setUpFon.textContent = "İşi kur";
        fonOwn = 0;
        return money, fonOwn
    }
});
setUpStocks.addEventListener("click", function(){
    if (stocksOwn == 0) {
        if (money >= stocksBusCost) {
            if (soundOn == 1) {
                const setAudio = document.getElementById("setSound");
        setAudio.play();
            }
            money -= stocksBusCost;
            moneyText.textContent = Math.trunc(money)+"₺";
            stocksOwn = 1;
            setUpStocks.style.backgroundColor = "red";
            setUpStocks.style.color = "#fff";
            setUpStocks.textContent = "İşi sat";
            return money, stocksOwn 
        }
        else{
            alertStocks("uyarı","Yetersiz nakit");
        }
    }
    else{
        money += stocksValue;
        moneyText.textContent = Math.trunc(money)+"₺";
        setUpStocks.style.backgroundColor = "green";
        setUpStocks.style.color = "#fff";
        setUpStocks.textContent = "İşi kur";
        stocksOwn = 0;
        return money, stocksOwn
    }
});
setUpBank.addEventListener("click", function(){
    if (bankOwn == 0) {
        if (money >= bankBusCost) {
            if (soundOn == 1) {
                const setAudio = document.getElementById("setSound");
        setAudio.play();
            }
            money -= bankBusCost;
            moneyText.textContent = Math.trunc(money)+"₺";
            bankOwn = 1;
            setUpBank.style.backgroundColor = "red";
            setUpBank.style.color = "#fff";
            setUpBank.textContent = "İşi sat";
            return money, bankOwn 
        }
        else{
            alertStocks("uyarı","Yetersiz nakit");
        }
    }
    else{
        money += bankBusValue;
        moneyText.textContent = Math.trunc(money)+"₺";
        setUpBank.style.backgroundColor = "green";
        setUpBank.style.color = "#fff";
        setUpBank.textContent = "İşi kur";
        bankOwn = 0;
        return money, bankOwn
    }
});
setUpAuto.addEventListener("click", function(){
    if (autoOwn == 0) {
        if (money >= autoCost) {
            if (soundOn == 1) {
                const setAudio = document.getElementById("setSound");
        setAudio.play();
            }
            money -= autoCost;
            moneyText.textContent = Math.trunc(money)+"₺";
            autoOwn = 1;
            setUpAuto.style.backgroundColor = "red";
            setUpAuto.style.color = "#fff";
            setUpAuto.textContent = "İşi sat";
            return money, autoOwn 
        }
        else{
            alertStocks("uyarı","Yetersiz nakit");
        }
    }
    else{
        money += autoValue;
        moneyText.textContent = Math.trunc(money)+"₺";
        setUpAuto.style.backgroundColor = "green";
        setUpAuto.style.color = "#fff";
        setUpAuto.textContent = "İşi kur";
        autoOwn = 0;
        return money, autoOwn
    }
});
function incomeCheck(){
    if (cafeOwn == 1) {
        document.getElementById("cafeWorth").textContent = "İşin değeri: "+Math.trunc(cafeValue)+"₺";
        setUpCafe.style.backgroundColor = "red";
        setUpCafe.style.color = "#fff";
        setUpCafe.textContent = "İşi sat";
        if (taxDebit == 0) {
            if (day % 30 == 0) {

                var income = 50000;
                var exchange1 = Math.floor(Math.random() * (2 - -2 + 1)) + + -2;
                money += Math.floor(parseFloat((income * (100 + exchange1))/100));
                moneyText.textContent = money+"₺";
                cafeValue += income;
                document.getElementById("cafeWorth").textContent = "İşin değeri: "+Math.trunc(cafeValue)+"₺";
            }
        }
        else{
            money += 50000 - taxDebit;
            cafeValue -= taxDebit;
            taxDebit = 0;
            moneyText.textContent = money+"₺";
            document.getElementById("cafeWorth").textContent = "İşin değeri: "+Math.trunc(cafeValue)+"₺";
        }
    }
    if (buildOwn == 1) {
        document.getElementById("buildWorth").textContent = "İşin değeri: "+Math.trunc(buildBusValue)+"₺";
            console.log("WERT");
        setUpBuild.style.backgroundColor = "red";
        setUpBuild.style.color = "#fff";
        setUpBuild.textContent = "İşi sat";
        if (taxDebit == 0) {
             if (day % 30 == 0) {

                var income = 1700000;
                var exchange1 = Math.floor(Math.random() * (2 - -2 + 1)) + + -2;
                money += Math.floor(parseFloat((income * (100 + exchange1))/100));
                moneyText.textContent = money+"₺";
                buildBusValue += income / 1.5;
                document.getElementById("buildWorth").textContent = "İşin değeri: "+Math.trunc(buildBusValue)+"₺";
             }
        }
        else{
            money += 1700000 - taxDebit;
            buildBusValue -= taxDebit;
            taxDebit = 0;
            moneyText.textContent = money+"₺";
            document.getElementById("buildWorth").textContent = "İşin değeri: "+Math.trunc(buildBusValue)+"₺";
        }
    }
    if (compuOwn == 1) {
        document.getElementById("compuWorth").textContent = "İşin değeri: "+Math.trunc(compuBusValue)+"₺";
            console.log("WERT");
        setUpCompu.style.backgroundColor = "red";
        setUpCompu.style.color = "#fff";
        setUpCompu.textContent = "İşi sat";
        if (taxDebit == 0) {
             if (day % 30 == 0) {

                var income = 3700000;
                var exchange2 = Math.floor(Math.random() * (2 - -2 + 1)) + + -2;
                money += Math.floor(parseFloat((income * (100 + exchange2))/100));
                moneyText.textContent = money+"₺";
                compuBusValue += income / 1.5;
                document.getElementById("compuWorth").textContent = "İşin değeri: "+Math.trunc(compuBusValue)+"₺";
             }
        }
        else{
            money += 3700000 - taxDebit;
            compuBusValue -= taxDebit;
            taxDebit = 0;
            moneyText.textContent = money+"₺";
            document.getElementById("compuWorth").textContent = "İşin değeri: "+Math.trunc(compuBusValue)+"₺";
        }
    }
    if (brandOwn == 1) {
        document.getElementById("brandWorth").textContent = "İşin değeri: "+Math.trunc(brandValue)+"₺";
            console.log("WERT");
        setUpBrand.style.backgroundColor = "red";
        setUpBrand.style.color = "#fff";
        setUpBrand.textContent = "İşi sat";
        if (taxDebit == 0) {
             if (day % 30 == 0) {

                var income = 3700000;
                var exchange3 = Math.floor(Math.random() * (2 - -2 + 1)) + + -2;
                money += Math.floor(parseFloat((income * (100 + exchange3))/100));
                moneyText.textContent = money+"₺";
                brandValue += income / 1.5;
                document.getElementById("brandWorth").textContent = "İşin değeri: "+Math.trunc(brandValue)+"₺";
             }
        }
        else{
            money += 3700000 - taxDebit;
            brandValue -= taxDebit;
            taxDebit = 0;
            moneyText.textContent = money+"₺";
            document.getElementById("brandWorth").textContent = "İşin değeri: "+Math.trunc(brandValue)+"₺";
        }
    }
    if (carOwn == 1) {
        document.getElementById("carWorth").textContent = "İşin değeri: "+Math.trunc(carValue)+"₺";
            console.log("WERT");
        setUpCar.style.backgroundColor = "red";
        setUpCar.style.color = "#fff";
        setUpCar.textContent = "İşi sat";
        if (taxDebit == 0) {
             if (day % 30 == 0) {
                console.log("DERT");
                var income = 7900000;
                var exchange4 = Math.floor(Math.random() * (2 - -2 + 1)) + + -2;
                money += Math.floor(parseFloat((income * (100 + exchange4))/100));
                console.log(exchange4+" "+income);
                moneyText.textContent = money+"₺";
                carValue += income ;
                document.getElementById("carWorth").textContent = "İşin değeri: "+Math.trunc(carValue)+"₺";
             }
        }
        else{
            money += 7900000 - taxDebit;
            carValue -= taxDebit;
            taxDebit = 0;
            moneyText.textContent = money+"₺";
            document.getElementById("carWorth").textContent = "İşin değeri: "+Math.trunc(carValue)+"₺";
        }
    }
    if (shopOwn == 1) {
        document.getElementById("shopWorth").textContent = "İşin değeri: "+Math.trunc(shopBusValue)+"₺";
            console.log("WERT");
        setUpShop.style.backgroundColor = "red";
        setUpShop.style.color = "#fff";
        setUpShop.textContent = "İşi sat";
        if (taxDebit == 0) {
             if (day % 30 == 0) {
                console.log("DERT");
                var income = 33000000;
                var exchange5 = Math.floor(Math.random() * (2 - -2 + 1)) + + -2;
                money += Math.floor(parseFloat((income * (100 + exchange5))/100));
                console.log(exchange4+" "+income);
                moneyText.textContent = money+"₺";
                shopBusValue += income ;
                document.getElementById("shopWorth").textContent = "İşin değeri: "+Math.trunc(shopBusValue)+"₺";
             }
        }
        else{
            money += 33000000 - taxDebit;
            shopBusValue -= taxDebit;
            taxDebit = 0;
            moneyText.textContent = money+"₺";
            document.getElementById("shopWorth").textContent = "İşin değeri: "+Math.trunc(shopBusValue)+"₺";
        }
    }
    if (ecomOwn == 1) {
        document.getElementById("ecomBusWorth").textContent = "İşin değeri: "+Math.trunc(ecomBusValue)+"₺";
            console.log("WERT");
        setUpEcom.style.backgroundColor = "red";
        setUpEcom.style.color = "#fff";
        setUpEcom.textContent = "İşi sat";
        if (taxDebit == 0) {
             if (day % 30 == 0) {
                console.log("DERT");
                var income = 220000000;
                var exchange7 = Math.floor(Math.random() * (2 - -2 + 1)) + + -2;
                money += Math.floor(parseFloat((income * (100 + exchange7))/100));
                console.log(exchange4+" "+income);
                moneyText.textContent = money+"₺";
                ecomBusValue += income ;
                document.getElementById("ecomBusWorth").textContent = "İşin değeri: "+Math.trunc(ecomBusValue)+"₺";
             }
        }
        else{
            money += 220000000 - taxDebit;
            ecomBusValue -= taxDebit;
            taxDebit = 0;
            moneyText.textContent = money+"₺";
            document.getElementById("ecomBusWorth").textContent = "İşin değeri: "+Math.trunc(ecomBusValue)+"₺";
        }
    }
    if (smartOwn == 1) {
        document.getElementById("smartWorth").textContent = "İşin değeri: "+Math.trunc(smartValue)+"₺";
            console.log("WERT");
        setUpSmart.style.backgroundColor = "red";
        setUpSmart.style.color = "#fff";
        setUpSmart.textContent = "İşi sat";
        if (taxDebit == 0) {
             if (day % 30 == 0) {
                console.log("DERT");
                var income = 3300000000;
                var exchange8 = Math.floor(Math.random() * (2 - -2 + 1)) + + -2;
                money += Math.floor(parseFloat((income * (100 + exchange8))/100));
                console.log(exchange4+" "+income);
                moneyText.textContent = money+"₺";
                smartValue += income ;
                document.getElementById("smartWorth").textContent = "İşin değeri: "+Math.trunc(smartValue)+"₺";
             }
        }
        else{
            money += 3300000000 - taxDebit;
            smartValue -= taxDebit;
            taxDebit = 0;
            moneyText.textContent = money+"₺";
            document.getElementById("smartWorth").textContent = "İşin değeri: "+Math.trunc(smartValue)+"₺";
        }
    }   
    if (fonOwn == 1) {
        document.getElementById("fonWorth").textContent = "İşin değeri: "+Math.trunc(fonValue)+"₺";
            console.log("WERT");
        setUpFon.style.backgroundColor = "red";
        setUpFon.style.color = "#fff";
        setUpFon.textContent = "İşi sat";
        if (taxDebit == 0) {
             if (day % 30 == 0) {
                console.log("DERT");
                var income = 10000000000;
                var exchange9 = Math.floor(Math.random() * (2 - -2 + 1)) + + -2;
                money += Math.floor(parseFloat((income * (100 + exchange9))/100));
                console.log(exchange4+" "+income);
                moneyText.textContent = money+"₺";
                fonValue += income ;
                document.getElementById("fonWorth").textContent = "İşin değeri: "+Math.trunc(fonValue)+"₺";
             }
        }
        else{
            money += 10000000000 - taxDebit;
            fonValue -= taxDebit;
            taxDebit = 0;
            moneyText.textContent = money+"₺";
            document.getElementById("fonWorth").textContent = "İşin değeri: "+Math.trunc(fonValue)+"₺";
        }
    }   
    if (stocksOwn == 1) {
        document.getElementById("stocksBusWorth").textContent = "İşin değeri: "+Math.trunc(stocksValue)+"₺";
            console.log("WERT");
        setUpStocks.style.backgroundColor = "red";
        setUpStocks.style.color = "#fff";
        setUpStocks.textContent = "İşi sat";
        if (taxDebit == 0) {
             if (day % 30 == 0) {
                console.log("DERT");
                var income = 40000000000;
                var exchange10 = Math.floor(Math.random() * (2 - -2 + 1)) + + -2;
                money += Math.floor(parseFloat((income * (100 + exchange10))/100));
                console.log(exchange4+" "+income);
                moneyText.textContent = money+"₺";
                stocksValue += income ;
                document.getElementById("stocksBusWorth").textContent = "İşin değeri: "+Math.trunc(stocksValue)+"₺";
             }
        }
        else{
            money += 40000000000 - taxDebit;
            stocksValue -= taxDebit;
            taxDebit = 0;
            moneyText.textContent = money+"₺";
            document.getElementById("stocksBusWorth").textContent = "İşin değeri: "+Math.trunc(stocksValue)+"₺";
        }
    }   
    if (bankOwn == 1) {
        document.getElementById("bankBusWorth").textContent = "İşin değeri: "+Math.trunc(bankBusValue)+"₺";
            console.log("WERT");
        setUpBank.style.backgroundColor = "red";
        setUpBank.style.color = "#fff";
        setUpBank.textContent = "İşi sat";
        if (taxDebit == 0) {
             if (day % 30 == 0) {
                console.log("DERT");
                var income = 250000000000;
                var exchange11 = Math.floor(Math.random() * (2 - -2 + 1)) + + -2;
                money += Math.floor(parseFloat((income * (100 + exchange11))/100));
                console.log(exchange4+" "+income);
                moneyText.textContent = money+"₺";
                bankBusValue += income ;
                document.getElementById("bankBusWorth").textContent = "İşin değeri: "+Math.trunc(bankBusValue)+"₺";
             }
        }
        else{
            money += 250000000000 - taxDebit;
            bankBusValue -= taxDebit;
            taxDebit = 0;
            moneyText.textContent = money+"₺";
            document.getElementById("bankBusWorth").textContent = "İşin değeri: "+Math.trunc(bankBusValue)+"₺";
        }
    }   
    if (autoOwn == 1) {
        document.getElementById("autoWorth").textContent = "İşin değeri: "+Math.trunc(autoValue)+"₺";
            console.log("WERT");
        setUpAuto.style.backgroundColor = "red";
        setUpAuto.style.color = "#fff";
        setUpAuto.textContent = "İşi sat";
        if (taxDebit == 0) {
             if (day % 30 == 0) {
                console.log("DERT");
                var income = 800000000000;
                var exchange12 = Math.floor(Math.random() * (2 - -2 + 1)) + + -2;
                money += Math.floor(parseFloat((income * (100 + exchange12))/100));
                console.log(exchange4+" "+income);
                moneyText.textContent = money+"₺";
                autoValue += income ;
                document.getElementById("autoWorth").textContent = "İşin değeri: "+Math.trunc(autoValue)+"₺";
             }
        }
        else{
            money += 800000000000 - taxDebit;
            autoValue -= taxDebit;
            taxDebit = 0;
            moneyText.textContent = money+"₺";
            document.getElementById("autoWorth").textContent = "İşin değeri: "+Math.trunc(autoValue)+"₺";
        }
    }   
    return money, taxDebit, cafeValue, buildBusValue, compuBusValue, brandValue, carValue, shopValue, ecomBusValue, smartValue, fonValue, stocksValue, bankBusValue, autoValue
}

function closeNews(){
    newsParent.style.display = "none";
   };
   var exchange;
   function currenciesDaily(){
    var exchange1 = Math.floor(Math.random() * (2 - -2 + 1)) + + -2;
    var exchange2 = Math.floor(Math.random() * (2 - -2 + 1)) + + -2;
    dollarValue = (dollarValue * (100 + exchange1)) / 100;
    euroValue = (euroValue * (100 + exchange1)) / 100;
    wonValue = (wonValue * (100 + exchange2)) / 100;
    poundValue = (poundValue * (100 + exchange1)) / 100;
    rubleValue = (rubleValue * (100 + exchange2)) / 100;
    dinarValue = (dinarValue * (100 + exchange2)) / 100;

    dollarText.textContent = dollarValue+"₺";
    euroText.textContent = euroValue+"₺";
    wonText.textContent = wonValue+"₺";
    poundText.textContent = poundValue+"₺";
    rubleText.textContent = rubleValue+"₺";
    dinarText.textContent = dinarValue+"₺";

   }
   function emtiaDaily(){
    var exchange1 = Math.trunc(Math.random() * (0.5 - -0.5 + 1)) + + -0.5;
    var exchange2 = Math.trunc(Math.random() * (0.2 - -0.3 + 1)) + + -0.3;

    goldValue = Math.trunc((goldValue * (100 + exchange1)) / 100);
    silverValue = Math.trunc((silverValue * (100 + exchange1)) / 100);
    coalValue = Math.trunc((coalValue * (100 + exchange2)) / 100);

    goldText.textContent = goldValue+"₺";
    silverText.textContent = silverValue+"₺";
    coalText.textContent = coalValue+"₺";

   }
   function bigInvestsDaily(){
    var exchange1 = Math.floor(Math.random() * (0.3 - -0.2 + 1)) + + -0.2;
    var exchange2 = Math.floor(Math.random() * (1 - -1 + 1)) + + -1;
    var exchange3 = Math.floor(Math.random() * (3 - -5 + 1)) + + -5;
    var exchange4 = Math.floor(Math.random() * (2 - -1 + 1)) + + -1;

    petValue = Math.trunc((petValue * (100 + exchange1)) / 100);
    bankValue = Math.trunc((bankValue * (100 + exchange2)) / 100);
    ecomValue = Math.trunc((ecomValue * (100 + exchange3)) / 100);
    techValue = Math.trunc((techValue * (100 + exchange4)) / 100);

    

    petText.textContent = petValue+"₺";
    bankText.textContent = bankValue+"₺";
    ecomText.textContent = ecomValue+"₺";
    techText.textContent = techValue+"₺";
   }
function computerDailyValue(){
    if (todayComputer == 1) {
        exchange = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    }
    else if (todayComputer == 0) {
        exchange = Math.random() * (0 - -10) + -10;
    }
    console.log(exchange);
 computerLotText.textContent = Math.trunc(( computerValue * (100+exchange))) / 100+"₺";
 computerValue = (computerValue * (100+exchange)) / 100;
 var netComputer = computerHoldings * computerValue;
 var computerStatus = netComputer - costComputer;
 computerStatusText.textContent = computerStatus;
 if (computerStatus > 0) {
    computerStatusText.style.color = "green";
 }
 else{
    computerStatusText.style.color = "red";

 }
 return computerValue
}

function pharmaDailyValue(){
    if (todayPharma == 1) {
        exchange = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    }
    else if (todayPharma == 0) {
        exchange = Math.random() * (0 - -10) + -10;
    }
    console.log(exchange);
    pharmaLotText.textContent = Math.trunc(( pharmaValue * (100+exchange))) / 100+"₺";
    pharmaValue = (pharmaValue * (100+exchange)) / 100;
 var netPharma = pharmaHoldings * pharmaValue;
 var pharmaStatus = netPharma - costPharma;
 pharmaStatusText.textContent = pharmaStatus;
 if (pharmaStatus > 0) {
    pharmaStatusText.style.color = "green";
 }
 else{
    pharmaStatusText.style.color = "red";

 }
 return pharmaValue
}
function farmDailyValue(){
    if (todayFarm == 1) {
        exchange = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    }
    else if (todayFarm == 0) {
        exchange = Math.random() * (0 - -10) + -10;
    }
    console.log(exchange);
    farmLotText.textContent = Math.trunc(( farmValue * (100+exchange))) / 100+"₺";
    farmValue = (farmValue * (100+exchange)) / 100;
 var netFarm = farmHoldings * farmValue;
 var farmStatus = netFarm - costFarm;
 farmStatusText.textContent = farmStatus;
 if (farmStatus > 0) {
    farmStatusText.style.color = "green";
 }
 else{
    farmStatusText.style.color = "red";

 }
 return farmValue
}
function foodDailyValue(){
    if (todayFood == 1) {
        exchange = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    }
    else if (todayFood == 0) {
        exchange = Math.random() * (0 - -10) + -10;
    }
    console.log(exchange);
    foodLotText.textContent = Math.trunc(( foodValue * (100+exchange))) / 100+"₺";
    foodValue = (foodValue * (100+exchange)) / 100;
 var netFood = foodHoldings * foodValue;
 var foodStatus = netFood - costFood;
 foodStatusText.textContent = foodStatus;
 if (foodStatus > 0) {
    foodStatusText.style.color = "green";
 }
 else{
    foodStatusText.style.color = "red";

 }
 return foodValue
}
function dressDailyValue(){
    if (todayDress == 1) {
        exchange = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    }
    else if (todayDress == 0) {
        exchange = Math.random() * (0 - -10) + -10;
    }
    console.log(exchange);
    dressLotText.textContent = Math.trunc(( dressValue * (100+exchange))) / 100+"₺";
    dressValue = (dressValue * (100+exchange)) / 100;
 var netDress = dressHoldings * dressValue;
 var dressStatus = netDress - costDress;
 dressStatusText.textContent = dressStatus;
 if (dressStatus > 0) {
    dressStatusText.style.color = "green";
 }
 else{
    dressStatusText.style.color = "red";

 }
 return dressValue
}
function waterDailyValue(){
    if (todayWater == 1) {
        exchange = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    }
    else if (todayWater == 0) {
        exchange = Math.random() * (0 - -10) + -10;
    }
    console.log(exchange);
    waterLotText.textContent = Math.trunc(( waterValue * (100+exchange))) / 100+"₺";
    waterValue = (waterValue * (100+exchange)) / 100;
 var netWater = waterHoldings * waterValue;
 var waterStatus = netWater - costWater;
 waterStatusText.textContent = waterStatus;
 if (waterStatus > 0) {
    waterStatusText.style.color = "green";
 }
 else{
    waterStatusText.style.color = "red";

 }
 return waterValue
}
function shopDailyValue(){
    if (todayShop == 1) {
        exchange = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    }
    else if (todayShop == 0) {
        exchange = Math.random() * (0 - -10) + -10;
    }
    console.log(exchange);
    shopLotText.textContent = Math.trunc(( shopValue * (100+exchange))) / 100+"₺";
    shopValue = (shopValue * (100+exchange)) / 100;
 var netShop = shopHoldings * shopValue;
 var shopStatus = netShop - costShop;
 shopStatusText.textContent = shopStatus;
 if (shopStatus > 0) {
    shopStatusText.style.color = "green";
 }
 else{
    shopStatusText.style.color = "red";

 }
 return shopValue
}
function oilDailyValue(){
    if (todayOil == 1) {
        exchange = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    }
    else if (todayOil == 0) {
        exchange = Math.random() * (0 - -10) + -10;
    }
    console.log(exchange);
    oilLotText.textContent = Math.trunc(( oilValue * (100+exchange))) / 100+"₺";
    oilValue = (oilValue * (100+exchange)) / 100;
 var netOil = oilHoldings * oilValue;
 var oilStatus = netOil - costOil;
 oilStatusText.textContent = oilStatus;
 if (oilStatus > 0) {
    oilStatusText.style.color = "green";
 }
 else{
    oilStatusText.style.color = "red";

 }
 return oilValue
}
function buildDailyValue(){
    if (todayBuild == 1) {
        exchange = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    }
    else if (todayBuild == 0) {
        exchange = Math.random() * (0 - -10) + -10;
    }
    console.log(exchange);
    buildLotText.textContent = Math.trunc(( buildValue * (100+exchange))) / 100+"₺";
    buildValue = (buildValue * (100+exchange)) / 100;
 var netBuild = buildHoldings * buildValue;
 var buildStatus = netBuild - costBuild;
 buildStatusText.textContent = buildStatus;
 if (buildStatus > 0) {
    buildStatusText.style.color = "green";
 }
 else{
    buildStatusText.style.color = "red";

 }
 return buildValue
}
//BIG INVESTMENTS
buyPet.addEventListener("click", function(){
    var count = parseFloat(petInput.value);
    if (money > count*petValue && petHoldings < 100) {
        money -= count*petValue;
        petHoldings += count;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, petHoldings
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit veya %100 sahiplik");
    }
});
sellPet.addEventListener("click", function(){
    var count = parseFloat(petInput.value);
    if (petHoldings >= count) {
        money += count*petValue;
        petHoldings -= count;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, petHoldings
    }
    else{
        alertStocks("Uyarı", "Elinizde bu kadar hisse yok");
    }
});
buyBank.addEventListener("click", function(){
    var count = parseFloat(bankInput.value);
    if (money > count*bankValue && bankHoldings < 100) {
        money -= count*bankValue;
        bankHoldings += count;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, bankHoldings
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit veya %100 sahiplik");
    }
});
sellBank.addEventListener("click", function(){
    var count = parseFloat(bankInput.value);
    if (bankHoldings >= count) {
        money += count*bankValue;
        bankHoldings -= count;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, bankHoldings
    }
    else{
        alertStocks("Uyarı", "Elinizde bu kadar hisse yok");
    }
});
buyEcom.addEventListener("click", function(){
    var count = parseFloat(ecomInput.value);
    if (money > count*ecomValue && ecomHoldings < 100) {
        money -= count*ecomValue;
        ecomHoldings += count;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, ecomHoldings
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit veya %100 sahiplik");
    }
});
sellEcom.addEventListener("click", function(){
    var count = parseFloat(ecomInput.value);
    if (ecomHoldings >= count) {
        money += count*ecomValue;
        ecomHoldings -= count;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, ecomHoldings
    }
    else{
        alertStocks("Uyarı", "Elinizde bu kadar hisse yok");
    }
});
buyTech.addEventListener("click", function(){
    var count = parseFloat(techInput.value);
    if (money > count*techValue && techHoldings < 100) {
        money -= count*techValue;
        techHoldings += count;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, techHoldings
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit veya %100 sahiplik");
    }
});
sellTech.addEventListener("click", function(){
    var count = parseFloat(techInput.value);
    if (techHoldings >= count) {
        money += count*techValue;
        techHoldings -= count;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, techHoldings
    }
    else{
        alertStocks("Uyarı", "Elinizde bu kadar hisse yok");
    }
});
//COMMODITIES
buyGold.addEventListener("click", function(){
    if (money > goldValue) {
        money -= goldValue;
        goldHoldings += 1;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, goldHoldings
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
});
sellGold.addEventListener("click", function(){
    if (goldHoldings >= 1) {
        money += goldValue;
        goldHoldings -= 1;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, goldHoldings
    }
    else{
        alertStocks("Uyarı", "Elinizde bu kadar emtia yok");
    }
});
buySilver.addEventListener("click", function(){
    if (money > silverValue) {
        money -= silverValue;
        silverHoldings += 1;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, silverHoldings
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
});
sellSilver.addEventListener("click", function(){
    if (silverHoldings >= 1) {
        money += silverValue;
        silverHoldings -= 1;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, silverHoldings
    }
    else{
        alertStocks("Uyarı", "Elinizde bu kadar emtia yok");
    }
});
buyCoal.addEventListener("click", function(){
    if (money > coalValue) {
        money -= coalValue;
        coalHoldings += 1;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, coalHoldings
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
});
sellCoal.addEventListener("click", function(){
    if (coalHoldings >= 1) {
        money += coalValue;
        coalHoldings -= 1;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, coalHoldings
    }
    else{
        alertStocks("Uyarı", "Elinizde bu kadar emtia yok");
    }
});
//CURRENCIES
buyDollar.addEventListener("click", function(){
    var count = parseFloat(dollarInput.value);
    if (money > count*dollarValue) {
        money -= count*dollarValue;
        dollarHoldings += count;
        moneyText.textContent = money+"₺";
        worthCheck();
        console.log("DEĞER"+dollarHoldings);
        return money, dollarHoldings
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
});
sellDollar.addEventListener("click", function(){
    var count = parseFloat(dollarInput.value);
    if (dollarHoldings >= count) {
        money += count*dollarValue;
        dollarHoldings -= count;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, dollarHoldings
    }
    else{
        alertStocks("Uyarı", "Elinizde bu kadar döviz yok");
    }
});
buyEuro.addEventListener("click", function(){
    var count = parseFloat(euroInput.value);
    if (money > count*euroValue) {
        money -= count*euroValue;
        euroHoldings += count;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, euroHoldings
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
});
sellEuro.addEventListener("click", function(){
    var count = parseFloat(euroInput.value);
    if (euroHoldings >= count) {
        money += count*euroValue;
        euroHoldings -= count;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, euroHoldings
    }
    else{
        alertStocks("Uyarı", "Elinizde bu kadar döviz yok");
    }
});
buyWon.addEventListener("click", function(){
    var count = parseFloat(wonInput.value);
    if (money > count*wonValue) {
        money -= count*wonValue;
        wonHoldings += count;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, wonHoldings
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
});
sellWon.addEventListener("click", function(){
    var count = parseFloat(wonInput.value);
    if (wonHoldings >= count) {
        money += count*wonValue;
        wonHoldings -= count;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, wonHoldings
    }
    else{
        alertStocks("Uyarı", "Elinizde bu kadar döviz yok");
    }
});
buyPound.addEventListener("click", function(){
    var count = parseFloat(poundInput.value);
    if (money > count*poundValue) {
        money -= count*poundValue;
        poundHoldings += count;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, poundHoldings
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
});
sellPound.addEventListener("click", function(){
    var count = parseFloat(poundInput.value);
    if (poundHoldings >= count) {
        money += count*poundValue;
        poundHoldings -= count;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, poundHoldings
    }
    else{
        alertStocks("Uyarı", "Elinizde bu kadar döviz yok");
    }
});
buyRuble.addEventListener("click", function(){
    var count = parseFloat(rubleInput.value);
    if (money > count*rubleValue) {
        money -= count*rubleValue;
        rubleHoldings += count;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, rubleHoldings
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
});
sellRuble.addEventListener("click", function(){
    var count = parseFloat(rubleInput.value);
    if (rubleHoldings >= count) {
        money += count*rubleValue;
        rubleHoldings -= count;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, rubleHoldings
    }
    else{
        alertStocks("Uyarı", "Elinizde bu kadar döviz yok");
    }
});
buyDinar.addEventListener("click", function(){
    var count = parseFloat(dinarInput.value);
    if (money > count*dinarValue) {
        money -= count*dinarValue;
        dinarHoldings += count;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, dinarHoldings
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
});
sellDinar.addEventListener("click", function(){
    var count = parseFloat(dinarInput.value);
    if (dinarHoldings >= count) {
        money += count*dinarValue;
        dinarHoldings -= count;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, dinarHoldings
    }
    else{
        alertStocks("Uyarı", "Elinizde bu kadar döviz yok");
    }
});
//BIST
buyComputer.addEventListener("click", function(){
    if (money > computerValue) {
        costComputer += computerValue;
        money -= computerValue;
        computerHoldings += 1;
        computerHoldingText.textContent = "Sahip Olunan Lot: " + computerHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        
        return money, computerHoldings, costComputer
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }

});
sellComputer.addEventListener("click", function(){
    if (computerHoldings > 0) {
        money += computerValue;
        computerHoldings -= 1; 
        computerHoldingText.textContent = "Sahip Olunan Lot: " + computerHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        
        
        costComputer -= computerValue;

        return money, computerHoldings, costComputer
    }
    else{
        alertStocks("Uyarı", "Bu hisseye sahip değilsiniz");
    }
    

});

buyPharma.addEventListener("click", function(){
    if (money > pharmaValue) {
        costPharma += pharmaValue;
        money -= pharmaValue;
        pharmaHoldings += 1;
        pharmaHoldingText.textContent = "Sahip Olunan Lot: " + pharmaHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        
        
        return money, pharmaHoldings, costPharma
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
    

});
sellPharma.addEventListener("click", function(){
    if (pharmaHoldings > 0) {
        money += pharmaValue;
        pharmaHoldings -= 1; 
        pharmaHoldingText.textContent = "Sahip Olunan Lot: " + pharmaHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        
        costPharma -= pharmaValue;

        return money, pharmaHoldings, costPharma
    }
    else{
        alertStocks("Uyarı", "Bu hisseye sahip değilsiniz");
    }
    

});


buyFarm.addEventListener("click", function(){
    if (money > farmValue) {
        costFarm += farmValue;
        money -= farmValue;
        farmHoldings += 1;
        farmHoldingText.textContent = "Sahip Olunan Lot: " + farmHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        
        return money, farmHoldings, costFarm
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
    

});
sellFarm.addEventListener("click", function(){
    if (farmHoldings > 0) {
        money += farmValue;
        farmHoldings -= 1; 
        farmHoldingText.textContent = "Sahip Olunan Lot: " + farmHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        
        costFarm -= farmValue;

        return money, farmHoldings, costFarm
    }
    else{
        alertStocks("Uyarı", "Bu hisseye sahip değilsiniz");
    }
    

});
buyFood.addEventListener("click", function(){
    if (money > foodValue) {
        costFood += foodValue;
        money -= foodValue;
        foodHoldings += 1;
        foodHoldingText.textContent = "Sahip Olunan Lot: " + foodHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        
        return money, foodHoldings, costFood
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
    

});
sellFood.addEventListener("click", function(){
    if (foodHoldings > 0) {
        money += foodValue;
        foodHoldings -= 1; 
        foodHoldingText.textContent = "Sahip Olunan Lot: " + foodHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        
        costFood -= foodValue;

        return money, farmHoldings, costFood
    }
    else{
        alertStocks("Uyarı", "Bu hisseye sahip değilsiniz");
    }
    

});
buyDress.addEventListener("click", function(){
    if (money > dressValue) {
        costDress += dressValue;
        money -= dressValue;
        dressHoldings += 1;
        dressHoldingText.textContent = "Sahip Olunan Lot: " + dressHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        
        return money, dressHoldings, costDress
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
    

});
sellDress.addEventListener("click", function(){
    if (dressHoldings > 0) {
        money += dressValue;
        dressHoldings -= 1; 
        dressHoldingText.textContent = "Sahip Olunan Lot: " + dressHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        
        costDress -= dressValue;

        return money, dressHoldings, costDress
    }
    else{
        alertStocks("Uyarı", "Bu hisseye sahip değilsiniz");
    }
    

});
buyWater.addEventListener("click", function(){
    if (money > waterValue) {
        costWater += waterValue;
        money -= waterValue;
        waterHoldings += 1;
        waterHoldingText.textContent = "Sahip Olunan Lot: " + waterHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        
        return money, waterHoldings, costWater
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
    

});
sellWater.addEventListener("click", function(){
    if (waterHoldings > 0) {
        money += waterValue;
        waterHoldings -= 1; 
        waterHoldingText.textContent = "Sahip Olunan Lot: " + waterHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        
        costWater -= waterValue;

        return money, waterHoldings, costWater
    }
    else{
        alertStocks("Uyarı", "Bu hisseye sahip değilsiniz");
    }
    

});
buyShop.addEventListener("click", function(){
    if (money > shopValue) {
        costShop += shopValue;
        money -= shopValue;
        shopHoldings += 1;
        shopHoldingText.textContent = "Sahip Olunan Lot: " + shopHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        
        return money, shopHoldings, costShop
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
    

});
sellShop.addEventListener("click", function(){
    if (shopHoldings > 0) {
        money += shopValue;
        shopHoldings -= 1; 
        shopHoldingText.textContent = "Sahip Olunan Lot: " + shopHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        
        costShop -= shopValue;

        return money, shopHoldings, costShop
    }
    else{
        alertStocks("Uyarı", "Bu hisseye sahip değilsiniz");
    }
    

});
buyOil.addEventListener("click", function(){
    if (money > oilValue) {
        costOil += oilValue;
        money -= oilValue;
        oilHoldings += 1;
        oilHoldingText.textContent = "Sahip Olunan Lot: " + oilHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        
        
        return money, oilHoldings, costOil
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
    

});
sellOil.addEventListener("click", function(){
    if (oilHoldings > 0) {
        money += oilValue;
        oilHoldings -= 1; 
        oilHoldingText.textContent = "Sahip Olunan Lot: " + oilHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        
        
        costOil -= oilValue;

        return money, oilHoldings, costOil
    }
    else{
        alertStocks("Uyarı", "Bu hisseye sahip değilsiniz");
    }
    

});
buyBuild.addEventListener("click", function(){
    if (money > buildValue) {
        costBuild += buildValue;
        money -= buildValue;
        buildHoldings += 1;
        buildHoldingText.textContent = "Sahip Olunan Lot: " + buildHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        
        
        return money, buildHoldings, costBuild
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
    

});
sellBuild.addEventListener("click", function(){
    if (buildHoldings > 0) {
        money += buildValue;
        buildHoldings -= 1; 
        buildHoldingText.textContent = "Sahip Olunan Lot: " + buildHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();       
        costBuild -= buildValue; 
        return money, buildHoldings, costBuild
    }
    else{
        alertStocks("Uyarı", "Bu hisseye sahip değilsiniz");
    }
    
});
//BUY ALL
buyAllComputer.addEventListener("click", function(){
    if (money >= computerValue) {
        var count = money / computerValue;
        costComputer += computerValue * Math.trunc(count);
        var pos = count - Math.trunc(count);
        money += pos * computerValue;
        computerHoldings += Math.trunc(count);
        money -= computerValue * Math.trunc(count);
        computerHoldingText.textContent = "Sahip Olunan Lot: " + computerHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, computerHoldings, costComputer
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
});
sellAllComputer.addEventListener("click", function(){
    if (computerHoldings >= 1) {
        money += computerHoldings * computerValue;
        costComputer -= computerHoldings * computerValue;
        computerHoldings = 0;
        computerHoldingText.textContent = "Sahip Olunan Lot: " + computerHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, computerHoldings, costComputer

    }
    else{
        alertStocks("Uyarı", "Bu hisseye sahip değilsiniz");
    }
});

buyAllPharma.addEventListener("click", function(){
    if (money >= pharmaValue) {
        var count = money / pharmaValue;
        costPharma += pharmaValue * Math.trunc(count);
        var pos = count - Math.trunc(count);
        money += pos * pharmaValue;
        pharmaHoldings += Math.trunc(count);
        money -= pharmaValue * Math.trunc(count);
        pharmaHoldingText.textContent = "Sahip Olunan Lot: " + pharmaHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, pharmaHoldings, costPharma
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
});
sellAllPharma.addEventListener("click", function(){
    if (pharmaHoldings >= 1) {
        money += pharmaHoldings * pharmaValue;
        costPharma -= pharmaHoldings * pharmaValue;
        pharmaHoldings = 0;
        pharmaHoldingText.textContent = "Sahip Olunan Lot: " + pharmaHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, pharmaHoldings, costPharma

    }
    else{
        alertStocks("Uyarı", "Bu hisseye sahip değilsiniz");
    }
});

buyAllFarm.addEventListener("click", function(){
    if (money >= farmValue) {
        var count = money / farmValue;
        costFarm += farmValue * Math.trunc(count);
        var pos = count - Math.trunc(count);
        money += pos * farmValue;
        farmHoldings += Math.trunc(count);
        money -= farmValue * Math.trunc(count);
        farmHoldingText.textContent = "Sahip Olunan Lot: " + farmHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, farmHoldings, costFarm
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
});
sellAllFarm.addEventListener("click", function(){
    if (farmHoldings >= 1) {
        money += farmHoldings * farmValue;
        costFarm -= farmHoldings * farmValue;
        farmHoldings = 0;
        farmHoldingText.textContent = "Sahip Olunan Lot: " + farmHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, farmHoldings, costFarm

    }
    else{
        alertStocks("Uyarı", "Bu hisseye sahip değilsiniz");
    }
});

buyAllFood.addEventListener("click", function(){
    if (money >= foodValue) {
        var count = money / foodValue;
        var pos = count - Math.trunc(count);
        money += pos * foodValue;
        costFood += foodValue * Math.trunc(count);
        foodHoldings += Math.trunc(count);
        money -= foodValue * count;
        foodHoldingText.textContent = "Sahip Olunan Lot: " + foodHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, foodHoldings, costFood
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
});
sellAllFood.addEventListener("click", function(){
    if (foodHoldings >= 1) {
        money += foodHoldings * foodValue;
        costFood -= foodHoldings * foodValue;
        foodHoldings = 0;
        foodHoldingText.textContent = "Sahip Olunan Lot: " + foodHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, foodHoldings, costFood

    }
    else{
        alertStocks("Uyarı", "Bu hisseye sahip değilsiniz");
    }
});
buyAllDress.addEventListener("click", function(){
    if (money >= dressValue) {
        var count = money / dressValue;
        var pos = count - Math.trunc(count);
        money += pos * dressValue;
        costDress += dressValue * Math.trunc(count);
        dressHoldings += Math.trunc(count);
        money -= dressValue * count;
        dressHoldingText.textContent = "Sahip Olunan Lot: " + dressHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, dressHoldings, costDress
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
});
sellAllDress.addEventListener("click", function(){
    if (dressHoldings >= 1) {
        money += dressHoldings * dressValue;
        costDress -= dressHoldings * dressValue;
        dressHoldings = 0;
        dressHoldingText.textContent = "Sahip Olunan Lot: " + dressHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, dressHoldings, costDress

    }
    else{
        alertStocks("Uyarı", "Bu hisseye sahip değilsiniz");
    }
});
buyAllWater.addEventListener("click", function(){
    if (money >= waterValue) {
        var count = money / waterValue;
        var pos = count - Math.trunc(count);
        money += pos * waterValue;
        costWater += waterValue * Math.trunc(count);
        waterHoldings += Math.trunc(count);
        money -= waterValue * count;
        waterHoldingText.textContent = "Sahip Olunan Lot: " + waterHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, waterHoldings, costWater
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
});
sellAllWater.addEventListener("click", function(){
    if (waterHoldings >= 1) {
        money += waterHoldings * waterValue;
        costWater -= waterHoldings * waterValue;
        waterHoldings = 0;
        waterHoldingText.textContent = "Sahip Olunan Lot: " + waterHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, waterHoldings, costWater

    }
    else{
        alertStocks("Uyarı", "Bu hisseye sahip değilsiniz");
    }
});
buyAllShop.addEventListener("click", function(){
    if (money >= shopValue) {
        var count = money / shopValue;
        var pos = count - Math.trunc(count);
        money += pos * shopValue;
        costShop += shopValue * Math.trunc(count);
        shopHoldings += Math.trunc(count);
        money -= shopValue * count;
        shopHoldingText.textContent = "Sahip Olunan Lot: " + shopHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, shopHoldings, costShop
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
});
sellAllShop.addEventListener("click", function(){
    if (shopHoldings >= 1) {
        money += shopHoldings * shopValue;
        costDress -= shopHoldings * shopValue;
        shopHoldings = 0;
        shopHoldingText.textContent = "Sahip Olunan Lot: " + shopHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, shopHoldings, costShop

    }
    else{
        alertStocks("Uyarı", "Bu hisseye sahip değilsiniz");
    }
});
buyAllOil.addEventListener("click", function(){
    if (money >= oilValue) {
        var count = money / oilValue;
        var pos = count - Math.trunc(count);
        money += pos * oilValue;
        costOil += oilValue * Math.trunc(count);
        oilHoldings += Math.trunc(count);
        money -= oilValue * count;
        oilHoldingText.textContent = "Sahip Olunan Lot: " + oilHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, oilHoldings, costOil
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
});
sellAllOil.addEventListener("click", function(){
    if (oilHoldings >= 1) {
        money += oilHoldings * oilValue;
        costOil -= oilHoldings * oilValue;
        oilHoldings = 0;
        oilHoldingText.textContent = "Sahip Olunan Lot: " + oilHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, oilHoldings, costOil

    }
    else{
        alertStocks("Uyarı", "Bu hisseye sahip değilsiniz");
    }
});
buyAllBuild.addEventListener("click", function(){
    if (money >= buildValue) {
        var count = money / buildValue;
        var pos = count - Math.trunc(count);
        money += pos * buildValue;
        costBuild += buildValue * Math.trunc(count);
        buildHoldings += Math.trunc(count);
        money -= buildValue * count;
        buildHoldingText.textContent = "Sahip Olunan Lot: " + buildHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, buildHoldings, costBuild
    }
    else{
        alertStocks("Uyarı", "Yetersiz nakit");
    }
});
sellAllBuild.addEventListener("click", function(){
    if (buildHoldings >= 1) {
        money += buildHoldings * buildValue;
        costBuild -= buildHoldings * buildValue;
        buildHoldings = 0;
        buildHoldingText.textContent = "Sahip Olunan Lot: " + buildHoldings;
        moneyText.textContent = money+"₺";
        worthCheck();
        return money, buildHoldings, costBuild

    }
    else{
        alertStocks("Uyarı", "Bu hisseye sahip değilsiniz");
    }
});
    function computerDay(){
        var pOrNegNews = Math.floor(Math.random() * (1 - 0 + 1 )) - 0;
        console.log(pOrNegNews);
        if (pOrNegNews == 0) {
            var posCom = Math.floor(Math.random() * (0 - 6)) + 6;
            var newsPrint = computerNewsPos[posCom];
            console.log(newsPrint);
            var x = document.createElement("h3");
            x.textContent = day+". "+newsPrint;
            newsParent.prepend(x);
            todayComputer = 1;
            return todayComputer
    }
    else if(pOrNegNews == 1){
        var negCom = Math.floor(Math.random() * (0 - 6)) + 6;
            var newsPrint = computerNewsNeg[negCom];
            console.log(newsPrint);
            var x = document.createElement("h3");
            x.textContent = day+". "+newsPrint;
            newsParent.prepend(x);
            todayComputer = 0;
            return todayComputer
    }
    }

    function pharmaDay(){
        var pOrNegNews = Math.floor(Math.random() * (1 - 0 + 1 )) - 0;
        console.log(pOrNegNews);
        if (pOrNegNews == 0) {
            var posCom = Math.floor(Math.random() * (0 - 6)) + 6;
            var newsPrint = pharmaNewsPos[posCom];
            console.log(newsPrint);
            var x = document.createElement("h3");
            x.textContent = day+". "+newsPrint;
            newsParent.prepend(x);
            todayPharma = 1;
            return todayPharma
    }
    else if(pOrNegNews == 1){
        var negCom = Math.floor(Math.random() * (0 - 6)) + 6;
            var newsPrint = pharmaNewsNeg[negCom];
            console.log(newsPrint);
            var x = document.createElement("h3");
            x.textContent = day+". "+newsPrint;
            newsParent.prepend(x);
            todayPharma = 0;
            return todayPharma
    }
    }
    function farmDay(){
        var pOrNegNews = Math.floor(Math.random() * (1 - 0 + 1 )) - 0;
        console.log(pOrNegNews);
        if (pOrNegNews == 0) {
            var posCom = Math.floor(Math.random() * (0 - 6)) + 6;
            var newsPrint = farmNewsPos[posCom];
            console.log(newsPrint);
            var x = document.createElement("h3");
            x.textContent = day+". "+newsPrint;
            newsParent.prepend(x);
            todayFarm = 1;
            return todayFarm
    }
    else if(pOrNegNews == 1){
        var negCom = Math.floor(Math.random() * (0 - 6)) + 6;
            var newsPrint = farmNewsNeg[negCom];
            console.log(newsPrint);
            var x = document.createElement("h3");
            x.textContent = day+". "+newsPrint;
            newsParent.prepend(x);
            todayFarm = 0;
            return todayFarm
    }
    }
    function foodDay(){
        var pOrNegNews = Math.floor(Math.random() * (1 - 0 + 1 )) - 0;
        console.log(pOrNegNews);
        if (pOrNegNews == 0) {
            var posCom = Math.floor(Math.random() * (0 - 6)) + 6;
            var newsPrint = foodNewsPos[posCom];
            console.log(newsPrint);
            var x = document.createElement("h3");
            x.textContent = day+". "+newsPrint;
            newsParent.prepend(x);
            todayFood = 1;
            return todayFood
    }
    else if(pOrNegNews == 1){
        var negCom = Math.floor(Math.random() * (0 - 6)) + 6;
            var newsPrint = foodNewsNeg[negCom];
            console.log(newsPrint);
            var x = document.createElement("h3");
            x.textContent = day+". "+newsPrint;
            newsParent.prepend(x);
            todayFood = 0;
            return todayFood
    }
    }
    function dressDay(){
        var pOrNegNews = Math.floor(Math.random() * (1 - 0 + 1 )) - 0;
        console.log(pOrNegNews);
        if (pOrNegNews == 0) {
            var posCom = Math.floor(Math.random() * (0 - 6)) + 6;
            var newsPrint = dressNewsPos[posCom];
            console.log(newsPrint);
            var x = document.createElement("h3");
            x.textContent = day+". "+newsPrint;
            newsParent.prepend(x);
            todayDress = 1;
            return todayDress
    }
    else if(pOrNegNews == 1){
        var negCom = Math.floor(Math.random() * (0 - 6)) + 6;
            var newsPrint = dressNewsNeg[negCom];
            console.log(newsPrint);
            var x = document.createElement("h3");
            x.textContent = day+". "+newsPrint;
            newsParent.prepend(x);
            todayDress = 0;
            return todayDress
    }
    }
    function waterDay(){
        var pOrNegNews = Math.floor(Math.random() * (1 - 0 + 1 )) - 0;
        console.log(pOrNegNews);
        if (pOrNegNews == 0) {
            var posCom = Math.floor(Math.random() * (0 - 6)) + 6;
            var newsPrint = waterNewsPos[posCom];
            console.log(newsPrint);
            var x = document.createElement("h3");
            x.textContent = day+". "+newsPrint;
            newsParent.prepend(x);
            todayWater = 1;
            return todayWater
    }
    else if(pOrNegNews == 1){
        var negCom = Math.floor(Math.random() * (0 - 6)) + 6;
            var newsPrint = waterNewsNeg[negCom];
            console.log(newsPrint);
            var x = document.createElement("h3");
            x.textContent = day+". "+newsPrint;
            newsParent.prepend(x);
            todayWater = 0;
            return todayWater
    }
    }
    function shopDay(){
        var pOrNegNews = Math.floor(Math.random() * (1 - 0 + 1 )) - 0;
        console.log(pOrNegNews);
        if (pOrNegNews == 0) {
            var posCom = Math.floor(Math.random() * (0 - 6)) + 6;
            var newsPrint = shopNewsPos[posCom];
            console.log(newsPrint);
            var x = document.createElement("h3");
            x.textContent = day+". "+newsPrint;
            newsParent.prepend(x);
            todayShop = 1;
            return todayShop
    }
    else if(pOrNegNews == 1){
        var negCom = Math.floor(Math.random() * (0 - 6)) + 6;
            var newsPrint = shopNewsNeg[negCom];
            console.log(newsPrint);
            var x = document.createElement("h3");
            x.textContent = day+". "+newsPrint;
            newsParent.prepend(x);
            todayShop = 0;
            return todayShop
    }
    }
    function oilDay(){
        var pOrNegNews = Math.floor(Math.random() * (1 - 0 + 1 )) - 0;
        console.log(pOrNegNews);
        if (pOrNegNews == 0) {
            var posCom = Math.floor(Math.random() * (0 - 6)) + 6;
            var newsPrint = oilNewsPos[posCom];
            console.log(newsPrint);
            var x = document.createElement("h3");
            x.textContent = day+". "+newsPrint;
            newsParent.prepend(x);
            todayOil = 1;
            return todayOil
    }
    else if(pOrNegNews == 1){
        var negCom = Math.floor(Math.random() * (0 - 6)) + 6;
            var newsPrint = oilNewsNeg[negCom];
            console.log(newsPrint);
            var x = document.createElement("h3");
            x.textContent = day+". "+newsPrint;
            newsParent.prepend(x);
            todayOil = 0;
            return todayOil
    }
    }
    function buildDay(){
        var pOrNegNews = Math.floor(Math.random() * (1 - 0 + 1 )) - 0;
        console.log(pOrNegNews);
        if (pOrNegNews == 0) {
            var posCom = Math.floor(Math.random() * (0 - 6)) + 6;
            var newsPrint = buildNewsPos[posCom];
            console.log(newsPrint);
            var x = document.createElement("h3");
            x.textContent = day+". "+newsPrint;
            newsParent.prepend(x);
            todayBuild = 1;
            return todayBuild
    }
    else if(pOrNegNews == 1){
        var negCom = Math.floor(Math.random() * (0 - 6)) + 6;
            var newsPrint = buildNewsNeg[negCom];
            console.log(newsPrint);
            var x = document.createElement("h3");
            x.textContent = day+". "+newsPrint;
            newsParent.prepend(x);
            todayBuild = 0;
            return todayBuild
    }
    }
    function alertStocks(x, y){
        if (soundOn == 1) {
            const notifAudio = document.getElementById("notifSound");
            notifAudio.play();
        }
        
        alert.style.display = "block";
        alertHeader.textContent = x;
        alertDescription.textContent = y;
        setTimeout(alertClose, 5000);

    }
    function alertClose(){
        alert.style.display = "none";
    }
    function worthCheck(){
        var computerWorth = computerHoldings * computerValue;
        var pharmarWorth = pharmaHoldings * pharmaValue;
        var farmWorth = farmHoldings * farmValue;
        var foodWorth = foodHoldings * foodValue;
        var dressWorth = dressHoldings * dressValue;
        var waterWorth = waterHoldings * waterValue;
        var shopWorth = shopHoldings * shopValue;
        var oilWorth = oilHoldings * oilValue;
        var buildWorth = buildHoldings * buildValue;
        var dollarWorth = dollarHoldings * dollarValue;
        var euroWorth = euroHoldings * euroValue;
        var wonWorth = wonHoldings * wonValue;
        var poundWorth = poundHoldings * poundValue;
        var rubleWorth = rubleHoldings * rubleValue;
        var dinarWorth = dinarHoldings * dinarValue;
        var goldWorth = goldHoldings * goldValue;
        var silverWorth = silverHoldings * silverValue;
        var coalWorth = coalHoldings * coalValue;
        var petWorth = petHoldings * petValue;
        var bankWorth = bankHoldings * bankValue;
        var ecomWorth = ecomHoldings * ecomValue;
        var techWorth = techHoldings * techValue;

        
        
        var netWorth = computerWorth + pharmarWorth + farmWorth + foodWorth + dressWorth + waterWorth + shopWorth + oilWorth + buildWorth + dollarWorth + euroWorth + wonWorth + poundWorth + rubleWorth + dinarWorth + goldWorth + silverWorth + coalWorth + petWorth + bankWorth + ecomWorth + techWorth;
        var worthElement = document.getElementById("worth");
        if (netWorth >= 1000 && netWorth < 1000000) {
            worthElement.textContent = (netWorth / 1000).toFixed(1) + "Bin₺";
        }
        else if (netWorth >= 1000000 && netWorth < 1000000000) {
            worthElement.textContent = (netWorth / 1000000).toFixed(1) + "Milyon₺";
        }
        else if (netWorth >= 1000000000 && netWorth < 1000000000000) {
            worthElement.textContent = (netWorth / 1000000000).toFixed(1) + "Milyar₺";
        }
        else if (netWorth >= 1000000000000 && netWorth < 1000000000000000) {
            worthElement.textContent = (netWorth / 1000000000000).toFixed(1) + "Trilyon₺";
        }
        else{
            worthElement.textContent = netWorth.toFixed(1) +"₺";

        }
        if (localStorage.getItem("lastWorth") > netWorth) {
            document.getElementById("worth").style.color = "red";
        localStorage.setItem("lastWorth", netWorth);

        }
        else{
            document.getElementById("worth").style.color = "green";

        localStorage.setItem("lastWorth", netWorth);

        }
        moneyText.textContent = Math.trunc(money)+"₺";

    }
    function portfolio(){
        if (computerHoldings > 0) {
            var holding = document.createElement("li");
            holding.textContent = "Bytech Bilgisayar: "+computerHoldings+" Lot";
            portfolioParent.prepend(holding);
        }
        if (pharmaHoldings > 0) {
            var holding = document.createElement("li");
            holding.textContent = "Synover İlaç: "+pharmaHoldings+" Lot";
            portfolioParent.prepend(holding);
        }
        if (farmHoldings > 0) {
            var holding = document.createElement("li");
            holding.textContent = "AgroDüşünce Tarım: "+farmHoldings+" Lot";
            portfolioParent.prepend(holding);
        }
        if (foodHoldings > 0) {
            var holding = document.createElement("li");
            holding.textContent = "Quart Gıda: "+foodHoldings+" Lot";
            portfolioParent.prepend(holding);
        }
        if (dressHoldings > 0) {
            var holding = document.createElement("li");
            holding.textContent = "Türk Sert Tekstil: "+dressHoldings+" Lot";
            portfolioParent.prepend(holding);
        }
        if (waterHoldings > 0) {
            var holding = document.createElement("li");
            holding.textContent = "Duyar Su: "+waterHoldings+" Lot";
            portfolioParent.prepend(holding);
        }
        if (shopHoldings > 0) {
            var holding = document.createElement("li");
            holding.textContent = "Aras Büyük Mağazacılık: "+shopHoldings+" Lot";
            portfolioParent.prepend(holding);
        }
        if (oilHoldings > 0) {
            var holding = document.createElement("li");
            holding.textContent = "Düşünce Petrol: "+oilHoldings+" Lot";
            portfolioParent.prepend(holding);
        }
        if (buildHoldings > 0) {
            var holding = document.createElement("li");
            holding.textContent = "Zeus Yapı: "+buildHoldings+" Lot";
            portfolioParent.prepend(holding);
        }
    }
    function currencyPort(){
        if (dollarHoldings > 0) {
            var holding = document.createElement("li");
            holding.textContent = "Amerikan Doları: "+dollarHoldings+"$";
            currencyParent.prepend(holding);
        }
        if (euroHoldings > 0) {
            var holding = document.createElement("li");
            holding.textContent = "Euro: "+euroHoldings+"€";
            currencyParent.prepend(holding);
        }
        if (wonHoldings > 0) {
            var holding = document.createElement("li");
            holding.textContent = "Kore Wonu: "+wonHoldings+"₩";
            currencyParent.prepend(holding);
        }
        if (poundHoldings > 0) {
            var holding = document.createElement("li");
            holding.textContent = "İngiltere Poundu: "+poundHoldings+"£";
            currencyParent.prepend(holding);
        }
        if (rubleHoldings > 0) {
            var holding = document.createElement("li");
            holding.textContent = "Rus Rublesi: "+rubleHoldings+"₽";
            currencyParent.prepend(holding);
        }
        if (dinarHoldings > 0) {
            var holding = document.createElement("li");
            holding.textContent = "Kuveyt Dinarı: "+dinarHoldings+"KWD";
            currencyParent.prepend(holding);
        }
    }
    function emtiaPort(){
        if (goldHoldings > 0) {
            var holding = document.createElement("li");
            holding.textContent = "Altın: "+goldHoldings+" adet";
            emtiaParent.prepend(holding);
        }
        if (silverHoldings > 0) {
            var holding = document.createElement("li");
            holding.textContent = "Gümüş: "+silverHoldings+" adet";
            emtiaParent.prepend(holding);
        }
        if (coalHoldings > 0) {
            var holding = document.createElement("li");
            holding.textContent = "Kömür: "+coalHoldings+" adet";
            emtiaParent.prepend(holding);
        }
        
    }
    function bigPort(){
        if (petHoldings > 0) {
            var holding = document.createElement("li");
            holding.textContent = "PetCo.: %"+petHoldings;
            bigInvestmentsParent.prepend(holding);
        }
        if (bankHoldings > 0) {
            var holding = document.createElement("li");
            holding.textContent = "Dürtü Bank: %: "+bankHoldings;
            bigInvestmentsParent.prepend(holding);
        }
        if (ecomHoldings > 0) {
            var holding = document.createElement("li");
            holding.textContent = "Lineer E-Ticaret: %: "+ecomHoldings;
            bigInvestmentsParent.prepend(holding);
        }
        if (techHoldings > 0) {
            var holding = document.createElement("li");
            holding.textContent = "Siyer Teknoloji: %: "+techHoldings;
            bigInvestmentsParent.prepend(holding);
        }
        
    }
    function save(){
       
            alertStocks("Kaydedildi","Oyununuz kaydedildi");
            localStorage.setItem("computerHoldings", computerHoldings);
            localStorage.setItem("pharmaHoldings", pharmaHoldings);
            localStorage.setItem("farmHoldings", farmHoldings);
            localStorage.setItem("foodHoldings", foodHoldings);
            localStorage.setItem("dressHoldings", dressHoldings);
            localStorage.setItem("waterHoldings", waterHoldings);
            localStorage.setItem("shopHoldings", shopHoldings);
            localStorage.setItem("oilHoldings", oilHoldings);
            localStorage.setItem("buildHoldings", buildHoldings);

            localStorage.setItem("money", money);

            localStorage.setItem("dollarHoldings", dollarHoldings);
            localStorage.setItem("euroHoldings", euroHoldings);
            localStorage.setItem("wonHoldings", wonHoldings);
            localStorage.setItem("poundHoldings", poundHoldings);
            localStorage.setItem("rubleHoldings", rubleHoldings);
            localStorage.setItem("dinarHoldings", dinarHoldings);

            localStorage.setItem("goldHoldings", goldHoldings);
            localStorage.setItem("silverHoldings", silverHoldings);
            localStorage.setItem("coalHoldings", coalHoldings);


            localStorage.setItem("petHoldings", petHoldings);
            localStorage.setItem("bankHoldings", bankHoldings);
            localStorage.setItem("ecomHoldings", ecomHoldings);
            localStorage.setItem("techHoldings", techHoldings);


            localStorage.setItem("day", day);

            localStorage.setItem("computerValue", computerValue);
            localStorage.setItem("pharmaValue", pharmaValue);
            localStorage.setItem("farmValue", farmValue);
            localStorage.setItem("foodValue", foodValue);
            localStorage.setItem("dressValue", dressValue);
            localStorage.setItem("waterValue", waterValue);
            localStorage.setItem("shopValue", shopValue);
            localStorage.setItem("oilValue", oilValue);
            localStorage.setItem("buildValue", buildValue);

            localStorage.setItem("dollarValue", dollarValue);
            localStorage.setItem("euroValue", euroValue);
            localStorage.setItem("wonValue", wonValue);
            localStorage.setItem("poundValue", poundValue);
            localStorage.setItem("rubleValue", rubleValue);
            localStorage.setItem("dinarValue", dinarValue);

            localStorage.setItem("goldValue", goldValue);
            localStorage.setItem("silverValue", silverValue);
            localStorage.setItem("coalValue", coalValue);


            localStorage.setItem("petValue", petValue);
            localStorage.setItem("bankValue", bankValue);
            localStorage.setItem("ecomValue", ecomValue);
            localStorage.setItem("techValue", techValue);


            localStorage.setItem("cafeOwn", cafeOwn);
            localStorage.setItem("buildOwn", buildOwn);
            localStorage.setItem("compuOwn", compuOwn);
            localStorage.setItem("brandOwn", brandOwn);
            localStorage.setItem("carOwn", carOwn);
            localStorage.setItem("shopOwn", shopOwn);
            localStorage.setItem("ecomOwn", ecomOwn);
            localStorage.setItem("smartOwn", smartOwn);
            localStorage.setItem("fonOwn", fonOwn);
            localStorage.setItem("stocksOwn", stocksOwn);
            localStorage.setItem("bankOwn", bankOwn);
            localStorage.setItem("autoOwn", autoOwn);

            localStorage.setItem("cafeValue", cafeValue);
            localStorage.setItem("buildBusValue", buildBusValue);
            localStorage.setItem("compuBusValue", compuBusValue);
            localStorage.setItem("brandValue", brandValue);
            localStorage.setItem("shopBusValue", shopBusValue);
            localStorage.setItem("ecomBusValue", ecomBusValue);
            localStorage.setItem("smartValue", smartValue);
            localStorage.setItem("fonValue", fonValue);
            localStorage.setItem("stocksValue", stocksValue);
            localStorage.setItem("bankBusValue", bankBusValue);
            localStorage.setItem("autoValue", autoValue);

            localStorage.setItem("teach", teach);


            localStorage.setItem("taxDebit", taxDebit);

        }


    
    function upload(){
        if (localStorage.getItem("money") != null) {
            
                
        computerHoldings = parseFloat(localStorage.getItem("computerHoldings"));
        pharmaHoldings = parseFloat(localStorage.getItem("pharmaHoldings"));
        farmHoldings = parseFloat(localStorage.getItem("farmHoldings"));
        foodHoldings = parseFloat(localStorage.getItem("foodHoldings"));
        dressHoldings = parseFloat(localStorage.getItem("dressHoldings"));
        waterHoldings = parseFloat(localStorage.getItem("waterHoldings"));
        shopHoldings = parseFloat(localStorage.getItem("shopHoldings"));
        oilHoldings = parseFloat(localStorage.getItem("oilHoldings"));
        buildHoldings = parseFloat(localStorage.getItem("buildHoldings"));

        day = parseFloat(localStorage.getItem("day"));
        money = parseFloat(localStorage.getItem("money"));

        dollarHoldings = parseFloat(localStorage.getItem("dollarHoldings"));
        euroHoldings = parseFloat(localStorage.getItem("euroHoldings"));
        wonHoldings = parseFloat(localStorage.getItem("wonHoldings"));
        poundHoldings = parseFloat(localStorage.getItem("poundHoldings"));
        rubleHoldings = parseFloat(localStorage.getItem("rubleHoldings"));
        dinarHoldings = parseFloat(localStorage.getItem("dinarHoldings"));

        goldHoldings = parseFloat(localStorage.getItem("goldHoldings"));
        silverHoldings = parseFloat(localStorage.getItem("silverHoldings"));
        coalHoldings = parseFloat(localStorage.getItem("coalHoldings"));


        petHoldings = parseFloat(localStorage.getItem("petHoldings"));
        bankHoldings = parseFloat(localStorage.getItem("bankHoldings"));
        ecomHoldings = parseFloat(localStorage.getItem("ecomHoldings"));
        techHoldings = parseFloat(localStorage.getItem("techHoldings"));

        computerValue = parseFloat(localStorage.getItem("computerValue"));
        pharmaValue = parseFloat(localStorage.getItem("pharmaValue"));
        farmValue = parseFloat(localStorage.getItem("farmValue"));
        foodValue = parseFloat(localStorage.getItem("foodValue"));
        dressValue = parseFloat(localStorage.getItem("dressValue"));
        waterValue = parseFloat(localStorage.getItem("waterValue"));
        shopValue = parseFloat(localStorage.getItem("shopValue"));
        oilValue = parseFloat(localStorage.getItem("oilValue"));
        buildValue = parseFloat(localStorage.getItem("buildValue"));

        dollarValue = parseFloat(localStorage.getItem("dollarValue"));
        euroValue = parseFloat(localStorage.getItem("euroValue"));
        wonValue = parseFloat(localStorage.getItem("wonValue"));
        poundValue = parseFloat(localStorage.getItem("poundValue"));
        rubleValue = parseFloat(localStorage.getItem("rubleValue"));
        dinarValue = parseFloat(localStorage.getItem("dinarValue"));

        goldValue = parseFloat(localStorage.getItem("goldValue"));
        silverValue = parseFloat(localStorage.getItem("silverValue"));
        coalValue = parseFloat(localStorage.getItem("coalValue"));

        petValue = parseFloat(localStorage.getItem("petValue"));
        bankValue = parseFloat(localStorage.getItem("bankValue"));
        ecomValue = parseFloat(localStorage.getItem("ecomValue"));
        techValue = parseFloat(localStorage.getItem("techValue"));

        cafeOwn = parseFloat(localStorage.getItem("cafeOwn"));
        buildOwn = parseFloat(localStorage.getItem("buildOwn"));
        compuOwn = parseFloat(localStorage.getItem("compuOwn"));
        brandOwn = parseFloat(localStorage.getItem("brandOwn"));
        carOwn = parseFloat(localStorage.getItem("carOwn"));
        shopOwn = parseFloat(localStorage.getItem("shopOwn"));
        ecomOwn = parseFloat(localStorage.getItem("ecomOwn"));
        smartOwn = parseFloat(localStorage.getItem("smartOwn"));
        fonOwn = parseFloat(localStorage.getItem("fonOwn"));
        stocksOwn = parseFloat(localStorage.getItem("stocksOwn"));
        bankOwn = parseFloat(localStorage.getItem("bankOwn"));
        autoOwn = parseFloat(localStorage.getItem("autoOwn"));


        cafeValue = parseFloat(localStorage.getItem("cafeValue"));
        buildBusValue = parseFloat(localStorage.getItem("buildBusValue"));
        compuBusValue = parseFloat(localStorage.getItem("compuBusValue"));
        brandValue = parseFloat(localStorage.getItem("brandValue"));
        shopBusValue = parseFloat(localStorage.getItem("shopBusValue"));
        ecomBusValue = parseFloat(localStorage.getItem("ecomBusValue"));
        smartValue = parseFloat(localStorage.getItem("smartValue"));
        fonValue = parseFloat(localStorage.getItem("fonValue"));
        stocksValue = parseFloat(localStorage.getItem("stocksValue"));
        bankBusValue = parseFloat(localStorage.getItem("bankBusValue"));
        autoValue = parseFloat(localStorage.getItem("autoValue"));
      
        taxDebit = parseFloat(localStorage.getItem("taxDebit"));

        teach = parseInt(localStorage.getItem("teach"));
        worthCheck();
        moneyText
        
    }
        else{
            alertStocks("Kayıt Bulunamadı", "Lütfen önce kayıt alınız")
        }
    }
var taxRed = 0;
function taxControl(){
    document.getElementById("taxDebits").textContent = taxDebit+"₺";
    
    if (taxRed == 1 && money >= taxDebit) {
        money -= taxDebit;
        moneyText.textContent = money+"₺";
    }
    if (day % 365 == 0) {
        alertStocks("Yıllık vergi", "Yıllık vergi ödemeniz gelmiştir. Yasal işlemler bölümünden ödeyiniz");
        taxDebit += 20000;
    document.getElementById("taxDebits").textContent = taxDebit+"₺";
    }
    if (cafeOwn == 1) {
        if (day % 30 == 0) {
            if (money >= cafeTax) {
                money -= cafeTax;
            moneyText.textContent = money+"₺";
            alertStocks("vergi", "İşletmenizin gelir vergisi hesabınızdan çekilmiştir.");
            return money
            }
            else{
                var tax = cafeTax - money;
                alertStocks("Vergi alınamadı", "İşletmenizin vergisi alınamadı. Yasal işlemler bölümünden ödeyiniz.");
                taxDebit += tax;
            }
         }
    }
    if (buildOwn == 1) {
        if (day % 10 == 0) {
            money -= buildTax;
            moneyText.textContent = money+"₺";
            alertStocks("vergi", "İşletmenizin gelir vergisi hesabınızdan çekilmiştir.");
         }
    }
    if (compuOwn == 1) {
        if (day % 10 == 0) {
            money -= compuTax;
            moneyText.textContent = money+"₺";
            alertStocks("vergi", "İşletmenizin gelir vergisi hesabınızdan çekilmiştir.");
         }
    }
    if (brandOwn == 1) {
        if (day % 10 == 0) {
            money -= brandTax;
            moneyText.textContent = money+"₺";
            alertStocks("vergi", "İşletmenizin gelir vergisi hesabınızdan çekilmiştir.");
         }
    }
    if (carOwn == 1) {
        if (day % 5 == 0) {
            money -= carTax;
            moneyText.textContent = money+"₺";
            alertStocks("vergi", "İşletmenizin gelir vergisi hesabınızdan çekilmiştir.");
         }
    }
    if (shopOwn == 1) {
        if (day % 1 == 0) {
            money -= shopTax;
            moneyText.textContent = money+"₺";
            alertStocks("vergi", "İşletmenizin gelir vergisi hesabınızdan çekilmiştir.");
         }
    }

    if (day % 30 == 0) {
        var tax = (money * 20) / 100;
        if (money >= tax) {
            money -= tax;
            moneyText.textContent = money+"₺";
            alertStocks("Vergi", "Gelir verginiz hesabınızdan çekilmiştir.")
        }
       
    }
    if (money < 0) {
        taxDebit = Math.abs(money);
        money = 0;
        moneyText.textContent = money+"₺";
        document.getElementById("taxDebits").textContent = taxDebit+"₺";
        alertStocks("Uyarı", "Yetersiz nakit sebebiyle gelir verginiz çekilememiştir. Bu işlerinizi olumsuz etkileyecektir. En yakın zamanda ödeyiniz. Tutar: "+taxDebit);
    }
    if (money > 1000000 && day == 100) {
        money -= (money * 30)/ 100;
        alertStocks("vergi", "Hesabınızdan %30 yüksek gelir vergisi kesilmiştir.")
    }
    
    return money, taxDebit, taxRed, taxDebitDay

}
payTaxes.addEventListener("click", function(){
    if (money >= taxDebit) {
        money -= taxDebit;
        taxDebit = 0;
    document.getElementById("taxDebits").textContent = taxDebit+"₺";
    moneyText.textContent = money+"₺";
    }
    else{
    alertStocks("Uyarı", "Yetersiz nakit sebebiyle gelir verginiz çekilememiştir. Bu işlerinizi olumsuz etkileyecektir. En yakın zamanda ödeyiniz. Tutar: "+taxDebit);

    }
    return money, taxDebit

});
var teachPart = 1;
var teach = 0;
const teachDiv = document.getElementById("teach");
const teachNext = document.getElementById("nextTeach");
const teachEnd = document.getElementById("endTeach");
const teachHeader = document.getElementById("teachHeader");
const teachDescription = document.getElementById("teachDescription");
teach = localStorage.getItem("teach");

teachStocks();
teachNext.addEventListener("click", function(){

        if (teachPart == 1) {
            document.getElementById("controls").style.zIndex = 1000;
            teachHeader.textContent = "Nakit";
            teachDescription.textContent = "Aşağı menüde para sembolünün yanında yer alan miktar paranı belirtir.";
        }
        else if (teachPart == 2) {
            document.getElementById("ports").style.zIndex = 1000;
            teachHeader.textContent = "Yatırımlar Toplamı ve Portföy";
            teachDescription.textContent = "Aşağı menüde kağıt sembolünün yanında yer alan miktar tüm yatırımlarınızın değerini gösterir. Aynı sembolle ekranın sol tarafında yer alan butona tıkladığınızda ise portföy dağılımınıza erişebilirsiniz.";
        }
        else if (teachPart == 3) {
            document.getElementById("ports").style.zIndex = 190;
            teachHeader.textContent = "Borsa İstanbul ve Haberler";
            teachDescription.textContent = "Borsa İstanbul bölümünden haberlere göre klasik borsa yatırımları yapabilirsiniz. Haberler butonu ile haberleri görüntüleyebilirsiniz. Unutmayın, Borsa İstanbul 1 günde %10 ve -%10 arasında değer verir.";
        }
        else if (teachPart == 4) {
            document.getElementById("controls").style.zIndex = 190;
            teachHeader.textContent = "Döviz Borsası ve Emtia Borsası";
            teachDescription.textContent = "Döviz Borsası ve Emtia Borsası haberler ile bağımsız çalışan, düşük risk ve düşük gelirli bir yatırım aracıdır.";
        }
        else if (teachPart == 5) {
            teachHeader.textContent = "Büyük Yatırımlar";
            teachDescription.textContent = "Büyük Yatırımlar, yüksek yükselme ve düşme eğilimi gösterebilen yatırımlardır. Bu yatırım menüsü ile direk olarak bir şirketin yüzdelik olarak ortağı olursunuz. Şirketler, iş alanlarına göre oyunun ilerisinde %100000000 artış sergileyebilirken, iflas dahi edebilirler.";
        }
        else if (teachPart == 6) {
            teachHeader.textContent = "Yasal İşlemler";
            teachDescription.textContent = "Yasal İşlemler bölümünden işinizin güvenliği için vergi borçlarınızı ödeyebilirsiniz.";
        }
        else if (teachPart == 7) {
            teachHeader.textContent = "İşler";
            teachDescription.textContent = "Kendi işletmenize sahip olun. Vergiler ödeyin, yüksek kârlar elde edin. İşler menüsü üzerinden hemen kendi işletmenize sahip olun.";
        }
        else if (teachPart == 8) {
            teachHeader.textContent = "Ayarlar";
            teachDescription.textContent = "Ekranın en üstünde yer alan ayarlar butonu ile ayarlara erişebilirsiniz. Ayarlar menüsü ile, karanlık moda geçiş yapabilir ve oyununuz kaydedip, yükleyebilirsiniz.";
        }
        else if (teachPart == 9) {
            teachHeader.textContent = "Hazırsın!";
            teachDescription.textContent = "Haydi. Trilyoner olma vakti!";
            teach = 1;
            localStorage.setItem("teach", teach);
        document.getElementById("blocker").style.display = "none";
        }
        teachPart += 1;
    
    return teachPart, teach
});
teachEnd.addEventListener("click", function(){
            teach = 1;
            localStorage.setItem("teach", teach);
            teachDiv.style.display = "none";
        document.getElementById("blocker").style.display = "none";

            teachStocks();
});
function teachStocks(){
    if (teach != 1) {
        teachDiv.style.display = "block";
        document.getElementById("blocker").style.display = "block";
    }
    
}

function checkMoney(){

    if (money >= 1000 && money < 1000000) {
        moneyText.textContent = (money / 1000).toFixed(1) + " Bin₺";
    }
    else if (money >= 1000000 && money < 1000000000) {
        moneyText.textContent = (money / 1000000).toFixed(1) + " Milyon₺";
    }
    else if (money >= 1000000000 && money < 1000000000000) {
        moneyText.textContent = (money / 1000000000).toFixed(1) + " Milyar₺";
    }
    else if (money >= 1000000000000 && money < 1000000000000000) {
        moneyText.textContent = (money / 1000000000000).toFixed(1) + " Trilyon₺";
    }
    

}
var portOpen = 0;
document.getElementById("portBtn").addEventListener("click", function(){
    if (portOpen == 0) {
        document.getElementById("innerPorts").style.display = "block";
        portOpen = 1;
        console.log("x");
    }
    else if (portOpen == 1) {
        document.getElementById("innerPorts").style.display = "none";
        portOpen = 0;
    }
});

function credit(){
    document.getElementById("credit").classList.add("creditDisplay");
    document.getElementById("credit1").classList.add("creditInfo");
    document.getElementById("credit2").classList.add("creditInfo2");
    document.getElementById("credit3").classList.add("creditInfo3");
    document.getElementById("credit4").classList.add("creditInfo4");
    setTimeout(creditClose, 11000);
}
function creditClose(){
    document.getElementById("credit").classList.remove("creditDisplay");
    document.getElementById("credit1").classList.remove("creditInfo");
    document.getElementById("credit2").classList.remove("creditInfo2");
    document.getElementById("credit3").classList.remove("creditInfo3");
    document.getElementById("credit4").classList.remove("creditInfo4");
}
const promptDiv = document.getElementById("promptAlert");
const promptHeader = document.getElementById("promptHeader");
const promptDescription = document.getElementById("promptDescription");
const promptBtn1 = document.getElementById("prompt1");
const promptBtn2 = document.getElementById("prompt2");

promptBtn1.addEventListener("click", function(){
    isConfirming = true;
    promptDiv.style.display = "none";
    return isConfirming
});
promptBtn2.addEventListener("click", function(){
    isConfirming = false;
    promptDiv.style.display = "none";
    return isConfirming
});
function promptAlert(a, b, c, d){
    promptDiv.style.display = "block";
    promptHeader.textContent = a;
    promptDescription.textContent = b;
    promptBtn1.textContent = c;
    promptBtn2.textContent = d;


}
