(function() { 

/*****************************************/
/*     globale Variablen fuer die App     */
/*****************************************/

var words = ["Adler","Fisch","Sonnenblume","Pferdestall","Wasserhahn","Bücherwurm","Schnecke","Zaun","Ohrring","Rakete","Kartenspiel","Rapunzel","Handschuh","Bommelmütze","Schneemann","Höhle","Computer","Fahrrad","Elefant","Ameisenhaufen",
"Eiszapfen","Schreibtisch","Nase","Schaf","Zwerg","Riese","Hochhaus","Kirchturm","Armbanduhr","Gespenst","Nixe","Seestern","Mauseloch","Teekanne","Mantel","Garage","Fußballfeld","Hundehütte","Pirat","Schatzkiste","Knochen",
"Brille","Toilette","Strand","Muschel","Haustür","Fensterbank","Blumentopf","Löffel","Schlitten","Bett","Schrank","Kamel","Salzstange","Friseur","Turnschuh","Schubkarre","Balkon","Kaffeetasse","Sternenhimmel","Regenwolke",
"Engel","Bratwurst","Schiff","Vogelnest","Achselschweiß","Armdrücken","Auto fahren","Arzt","Baby Bär","Blinklicht","Boxer","Brustschwimmen","Bürgermeister","Detektiv","Dickkopf","Dirigent","Dompteur","Einbrecher","einen Fisch angeln",
"Eisbär","Elvis","Eskimo","Fahrradkette","Fee","Federball spielen","Fernseher","Flaschenhals","Floh","Friseuse","Frosch","Fußball spielen","Gabelstapler","Geld wechseln","Herzensbrecher","Haarföhn",
"Handschuh","Indianer","joggen","Känguru","Karten spielen","Käsefüße","Kellnerin","Klobrille","Knopf","Kopfschmerzen","Kuchen backen","Kuhglocke","Lehrerin","Matrose","Maus","Nasenbohrer","Papst","Pferd","Politiker",
"Putzfrau","Reiterin","Reißverschluss","Rennfahrer","Riese","Scheibenwischer","Schornsteinfeger","schwimmen","sich schminken","sich duschen","sich sonnen","Sonnenblume","Spion","Sumoringer","Surfer","Tänzerin",
"Taube","telefonieren","Zähne putzen","Zahnarzt","Zwerg","Lampe","Giraffe","Eisverkäufer","Frisur","Sonnenblume","Fahrrad","Zahnarzt","Knopf","Telefon","Maus","Flaschendeckel","Baby","Buch","Arzt","Bär","Blaulicht","Sportler","Teich","Besen","Dirigent","Telefon","Pirat",
"Federball spielen","Fußball spielen","Spielplatz","Polizist","Räuber","Frosch","Bagger","Geld","Verliebt sein","Föhn","Handschuh","Indianer","Känguru","Käsefüße","Zähneputzen","Achterbahn fahren","Apfel essen","Schlüsselloch",
"Auto fahren","Schminken","Schlittschuh- laufen","Statue","Reiter","Klo","Armdrücken","Zahnarzt","Dirigent","Gespenst","Engel","Katze","Boxer","Ballerina","Kuh melken","Feuerwehrmann","Friseur","Skispringer","Schlafmütze",
"Osterhase","Fensterputzer","Kochen","Holzfäller","Hund","Schneemann","Tennisspieler","Taucher","Fotograf","Vampir","Schlagzeuger","Babysitter","Maler","Giraffe","Affe","Tiger","Pinguin","Löwe","Vogel","Katze","Hund","Maus","Fisch","Hai","Hirsch","Schlange","Bär","Hase","Eule","Pferd","Seehund","Ziege","Schaf","Schildkröte","Käfer","Delfin","Kuh","Schwein","Elefant","Kamel",
"Igel","Wolf","Känguru","Fernbedienung","Rasierschaum","Laderampe","Lichterkette","Rauhfasertapete","Tannenbaumständer","Siebträgermaschine","Lampenfassung","Schneeketten","Konfettiregen","Geschenkpapier","Wollschal","Schleifenbank","Rundumleuchte","Kugelbahn","Schaukelpferd","Verhaltensmuster","Handcreme","Räuchermännchen","Querschläger","Adventskalender","Brillenputztuch","Hauptgewinn","Wäscheklammer","Spiegelreflexkamera","Pralinenschachtel","Drehbuch","Kinderstuhl","Sonnenblumenöl","Christbaumkugel","Zungenkuss","Ladegerät","Schreihals","Glühwein","Osterhase","Teppichklopfer","Schokokringel","Vollpfosten","Sprudelwasser","Kichstarter","Eierlikör","Neujahresgruß","Glatteis","Weihnachtsgans","Lebkuchenherz","Trostpreis","Versuchskaninchen","Regalboden","Mistelzweig","Hebamme","Manschettenknopf","Schneegestöber","Renntier","Winterstiefel","Flussufer","Pfauenfeder","Ohrensessel","Verlobungsring","Nassrasur","Garagentür","Weihnachtspost","Glasreiniger","Intimpiercing","Gießkanne","Hackebeil","Tiefkühlfach","Treppenhaus","Fahrradschlauch","Kreißsaal","Mitesser","Orgie",
"Armdrücken","Armleuchter","Auto","Aalglatt","Aasgeier","Altklug","Aschenbecher","A-loch","Autotür","Autoschlüssel","Arschbombe","Angelrute","Butterdose","Buchrücken","Buntstift","Bademeister","Barhocker","Besenkammer","Bienenstich","Blattlaus","Brecheisen","Bankverbindung","Christkind","Chinapfanne","Chemielabor","Druckerpatrone","Dachterasse","Dosenöffner","Darmspülung","Dübel","Dönerbude","Erbsenzähler","Eselsbrücke","Eisverkäufer","Eisenbahn","Elefantenhaut","Elfenbeinküste","Feuerwasser","Feuchttücher","Freudenhaus","Fundgrube","Fallobst","Freiheitsstatue","Federkissen","Frauenarzt","Gürteltasche","Glatteis","Gemüsebeet","Gorilla","Gummiboot","Giraffe","Gartenschlauch","Himmelbett","Hirtenstab","Hängematte","Haubentaucher","Hufeisen","Hirschgeweih","Hippie","Hundeleine","Irrenhaus","Imker","Igel","Internet","Indianer","Judo","Jongleur","Jagdhorn","Joghurtbecher","Kuh","Kettenkarussell","Kautabak","Kerzendocht","Klaviertaste","Käseglocke","Kuchengabel","Lochfrass","Lichterkette","Lesezeichen","Luftmatratze","Luftballon","Motorroller","Matrosenmütze","Münzautomat","Menschenaffe","Mondschein","Magnet","Müllbeutel","Nasebär","Navigationssystem","Nussschale","Naschkatze","Nähmaschine","Osterhaase","Ofenrohr","Obstmesser","Orgelpfeife","Obstkorb","Patronengürtel","Pfandflasche","Polizeiauto","Portemonnaie","Plattenspieler","Quadratzentimeter","Qualle","Querflöte","Raubüberfall","Rollator","Rübe","Rosengarten","Rundumleuchte","Reisewecker","Schlüsselloch","Statue","Schachbrett","Schnürsenkel","Seifenspender","Schreibtischlampe","Stehaufmännchen","Suppenkasper","Skilift","Sandkasten","Türklinke","Tattoonadel","Teebeutel","Triathlon","Tortenheber","U-Boot","Umhang","Überwachungskamera","USB-Kabel","Vogelnest","Vorhang","Verkehrspolizist","Waffeleisen","Wandregal","Waschbecken","Wasserball","Wasserwaage","Yoga","Zahnfee","Zigaretten","Zahnarzt","Zitronenbaum","Zimmerpflanze","Zungenkuss","Zielscheibe"];


/************************************************/
/*                  Start                       */
/************************************************/

document.getElementById("wort-button").addEventListener('click',function(){
    let ownWord = decodeURI(window.location.hash).split('/')[0];
    let playerCount = document.getElementById("spieler-anzahl").value;
    let playerIdx = document.getElementById("spieler-nr").value;
    let word = "";
    let playerGenIdx = 0;
  
    if (ownWord == "" || ownWord == "#"){
	    let idx = document.getElementById("wort-nr").value - 1;
        word = words[idx];
    }else{
		//document.getElementById("wort-link").innerHTML = "#"+ownWord;
		playerGenIdx = parseInt(ownWord.split('b')[1]);
		let ownWordChars = ownWord.split('#')[1].split('b')[0].split('a');
		for (let i=0; i<ownWordChars.length-1;i++){
			word = word + String.fromCharCode(ownWordChars[i]);
		}
	}
  
    //are you the fake artist?
    let wordChars = word.split('');
    let wordIdx = 0;
    for (let i=0; i<wordChars.length;i++){
	  wordIdx = wordIdx + wordChars[i].charCodeAt(0);
    }
    wordIdx = wordIdx % playerCount;
    wordIdx = wordIdx + 1;
	
	if (wordIdx == playerGenIdx){
		wordIdx = wordIdx + 1;
		wordIdx = wordIdx % playerCount;
	}
    // you are fake artist if wordIdx === playerIdx
    if (wordIdx == playerIdx) {
	  word = "Fake Artist";
    }
    // update the text in the button  
    if (document.getElementById("wort-button").innerHTML === word){
	  document.getElementById("wort-button").innerHTML = "Spieler "+document.getElementById("spieler-nr").value;
    }else{
      document.getElementById("wort-button").innerHTML = word;    
    }
  
});

document.getElementById("eingabe-button").addEventListener('click',function(){
    let playerIdx = document.getElementById("spieler-nr").value;
    let ownWord = document.getElementById("wort-eingabe").value;
	if (ownWord === ""){
		document.getElementById("wort-link").innerHTML = "kein Wort eingeben";
	}else{
		//document.getElementById("wort-link").innerHTML = "#"+ownWord;
		let ownWordChars = ownWord.split('');
		let word = "";
		for (let i=0; i<ownWordChars.length;i++){
	        word = word + ownWordChars[i].charCodeAt(0) + "a";
        }
		document.getElementById("wort-link").innerHTML = "https://medientheke.github.io/#"+word+"b"+playerIdx;		
	}
    
    
});


/************************************************/
/*                  Ende                        */
/************************************************/

}) ();
