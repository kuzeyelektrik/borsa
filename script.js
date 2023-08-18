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
var carTax = 1000000;

var shopCost = 2440670500;
var shopTax = 1000000;

var cafeOwn = 0;
var buildOwn = 0;
var compuOwn = 0;
var brandOwn = 0;
var carOwn = 0;
var shopOwn = 0;


var cafeValue = 1000000;
var buildBusValue = 10000000;
var compuBusValue = 20000000;
var brandValue = 50000000;
var brandValue = 70000000;
var brandValue = 120000000;


const setUpCafe = document.getElementById("setCafe");
const setUpBuild = document.getElementById("setBuild");
const setUpCompu = document.getElementById("setComputer");
const setUpBrand = document.getElementById("setBrand");
const setUpCar = document.getElementById("setCar");
const setUpShop = document.getElementById("setShop");


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
        console.log(todayComputer);
    

    return day
});
newsOpen.addEventListener("click", function(){
 newsParent.style.display = "block";
});
setIstanbul.addEventListener("click", function(){
    setIstanbul.style.borderBottom = "2px solid #272727";
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
    setCurrency.style.borderBottom = "2px solid #272727";
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
    setEmtia.style.borderBottom = "2px solid #272727";
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
    setBigInvestments.style.borderBottom = "2px solid #272727";
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
    setBusiness.style.borderBottom = "2px solid #272727";
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
    setLegal.style.borderBottom = "2px solid #272727";
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
            money -= cafeCost;
            moneyText.textContent = "Nakit: "+Math.trunc(money)+"₺";
            cafeOwn = 1;
            setUpCafe.style.backgroundColor = "red";
            setUpCafe.style.color = "#fff";
            setUpCafe.textContent = "İşi sat";
            return money, cafeOwn 
        }
        else{
            alertStocks("Elinizde bu kadar nakit yok");
        }
    }
    else{
        money += cafeValue;
        moneyText.textContent = "Nakit: "+Math.trunc(money)+"₺";
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
            money -= buildCost;
            moneyText.textContent = "Nakit: "+Math.trunc(money)+"₺";
            buildOwn = 1;
            setUpBuild.style.backgroundColor = "red";
            setUpBuild.style.color = "#fff";
            setUpBuild.textContent = "İşi sat";
            return money, buildOwn 
        }
        else{
            alertStocks("Elinizde bu kadar nakit yok");
        }
    }
    else{
        money += buildValue;
        moneyText.textContent = "Nakit: "+Math.trunc(money)+"₺";
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
            money -= compuCost;
            moneyText.textContent = "Nakit: "+Math.trunc(money)+"₺";
            compuOwn = 1;
            setUpCompu.style.backgroundColor = "red";
            setUpCompu.style.color = "#fff";
            setUpCompu.textContent = "İşi sat";
            return money, compuOwn 
        }
        else{
            alertStocks("Elinizde bu kadar nakit yok");
        }
    }
    else{
        money += compuBusValue;
        moneyText.textContent = "Nakit: "+Math.trunc(money)+"₺";
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
            money -= brandCost;
            moneyText.textContent = "Nakit: "+Math.trunc(money)+"₺";
            brandOwn = 1;
            setUpBrand.style.backgroundColor = "red";
            setUpBrand.style.color = "#fff";
            setUpBrand.textContent = "İşi sat";
            return money, brandOwn 
        }
        else{
            alertStocks("Elinizde bu kadar nakit yok");
        }
    }
    else{
        money += brandValue;
        moneyText.textContent = "Nakit: "+Math.trunc(money)+"₺";
        setUpBrand.style.backgroundColor = "green";
        setUpBrand.style.color = "#fff";
        setUpBrand.textContent = "İşi kur";
        brandOwn = 0;
        return money, brandOwn
    }
})
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
                moneyText.textContent = "Nakit: "+money+"₺";
                cafeValue += income;
                document.getElementById("cafeWorth").textContent = "İşin değeri: "+Math.trunc(cafeValue)+"₺";
            }
        }
        else{
            money += 50000 - taxDebit;
            cafeValue -= taxDebit;
            taxDebit = 0;
            moneyText.textContent = "Nakit: "+money+"₺";
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
                moneyText.textContent = "Nakit: "+money+"₺";
                buildBusValue += income / 1.5;
                document.getElementById("buildWorth").textContent = "İşin değeri: "+Math.trunc(buildBusValue)+"₺";
             }
        }
        else{
            money += 1700000 - taxDebit;
            buildBusValue -= taxDebit;
            taxDebit = 0;
            moneyText.textContent = "Nakit: "+money+"₺";
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
                moneyText.textContent = "Nakit: "+money+"₺";
                compuBusValue += income / 1.5;
                document.getElementById("compuWorth").textContent = "İşin değeri: "+Math.trunc(compuBusValue)+"₺";
             }
        }
        else{
            money += 3700000 - taxDebit;
            compuBusValue -= taxDebit;
            taxDebit = 0;
            moneyText.textContent = "Nakit: "+money+"₺";
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
                moneyText.textContent = "Nakit: "+money+"₺";
                brandValue += income / 1.5;
                document.getElementById("brandWorth").textContent = "İşin değeri: "+Math.trunc(brandValue)+"₺";
             }
        }
        else{
            money += 3700000 - taxDebit;
            brandValue -= taxDebit;
            taxDebit = 0;
            moneyText.textContent = "Nakit: "+money+"₺";
            document.getElementById("compuWorth").textContent = "İşin değeri: "+Math.trunc(brandValue)+"₺";
        }
    }
    return money, taxDebit, cafeValue, buildBusValue, compuBusValue, brandValue
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        moneyText.textContent = "Nakit: "+money+"₺";
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
        
        if (localStorage.getItem("lastWorth") > netWorth) {
            document.getElementById("worth").style.color = "red";
        localStorage.setItem("lastWorth", netWorth);

        }
        else{
            document.getElementById("worth").style.color = "green";

        localStorage.setItem("lastWorth", netWorth);

        }
        document.getElementById("worth").textContent = "Yatırımlar Toplamı: "+Math.trunc(netWorth)+"₺";
        moneyText.textContent = "Nakit: "+Math.trunc(money)+"₺";

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
        localStorage.setItem("cafeValue", cafeValue);
        localStorage.setItem("buildBusValue", buildBusValue);
        localStorage.setItem("compuBusValue", compuBusValue);
        localStorage.setItem("brandValue", brandValue);


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
        shopOwn = parseFloat(localStorage.getItem("carOwn"));

        cafeValue = parseFloat(localStorage.getItem("cafeValue"));
        buildBusValue = parseFloat(localStorage.getItem("buildBusValue"));
        compuBusValue = parseFloat(localStorage.getItem("compuBusValue"));
        brandValue = parseFloat(localStorage.getItem("brandValue"));
      
        taxDebit = parseFloat(localStorage.getItem("taxDebit"));

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
    if (day % 365 == 0) {
        alertStocks("Yıllık vergi", "Yıllık vergi ödemeniz gelmiştir. Yasal işlemler bölümünden ödeyiniz");
        taxDebit += 20000;
    document.getElementById("taxDebits").textContent = taxDebit+"₺";
    }
    if (taxRed == 1 && money >= taxDebit) {
        money -= taxDebit;
        moneyText.textContent = "Nakit: "+money+"₺";
    }
    if (cafeOwn == 1) {
        if (day % 30 == 0) {
            if (money >= cafeTax) {
                money -= cafeTax;
            moneyText.textContent = "Nakit: "+money+"₺";
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
            moneyText.textContent = "Nakit: "+money+"₺";
            alertStocks("vergi", "İşletmenizin gelir vergisi hesabınızdan çekilmiştir.");
         }
    }
    if (compuOwn == 1) {
        if (day % 10 == 0) {
            money -= compuTax;
            moneyText.textContent = "Nakit: "+money+"₺";
            alertStocks("vergi", "İşletmenizin gelir vergisi hesabınızdan çekilmiştir.");
         }
    }
    if (brandOwn == 1) {
        if (day % 10 == 0) {
            money -= brandTax;
            moneyText.textContent = "Nakit: "+money+"₺";
            alertStocks("vergi", "İşletmenizin gelir vergisi hesabınızdan çekilmiştir.");
         }
    }
    if (carOwn == 1) {
        if (day % 5 == 0) {
            money -= brandTax;
            moneyText.textContent = "Nakit: "+money+"₺";
            alertStocks("vergi", "İşletmenizin gelir vergisi hesabınızdan çekilmiştir.");
         }
    }
    if (shopOwn == 1) {
        if (day % 1 == 0) {
            money -= shopTax;
            moneyText.textContent = "Nakit: "+money+"₺";
            alertStocks("vergi", "İşletmenizin gelir vergisi hesabınızdan çekilmiştir.");
         }
    }

    if (day % 30 == 0) {
        var tax = (money * 20) / 100;
        if (money >= tax) {
            money -= tax;
            moneyText.textContent = "Nakit: "+money+"₺";
            alertStocks("Vergi", "Gelir verginiz hesabınızdan çekilmiştir.")
        }
       
    }
    if (money < 0) {
        taxDebit = Math.abs(money);
        money = 0;
        moneyText.textContent = "Nakit: "+money+"₺";
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
    moneyText.textContent = "Nakit: "+money+"₺";
    }
    else{
    alertStocks("Uyarı", "Yetersiz nakit sebebiyle gelir verginiz çekilememiştir. Bu işlerinizi olumsuz etkileyecektir. En yakın zamanda ödeyiniz. Tutar: "+taxDebit);

    }
    return money, taxDebit

});