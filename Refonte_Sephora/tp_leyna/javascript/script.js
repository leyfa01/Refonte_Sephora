
let menuBurger = document.getElementById("menuBurger");
let menuMobile = document.querySelector(".menuMobile");
let leBody = document.querySelector("body");
let leMain = document.querySelector("main");
let catBouton = document.querySelector(".catBouton");
let categorieMobile = document.querySelector(".catMobile");

menuBurger.addEventListener("click", gererLeMenu);
catBouton.addEventListener("click", gererLesCat);

function gererLeMenu() {
    menuBurger.classList.toggle('menuOuvert');
    if(menuBurger.classList.contains("menuOuvert")) {
        menuBurger.classList.remove("menuFermer");
        menuMobile.classList.add("menuBaisser");
        leBody.style.overflowY = "hidden";
        leMain.style.filter = "blur(0.2em)";
    } else {
        menuBurger.classList.add("menuFermer");
        menuMobile.classList.remove("menuBaisser");
        leBody.style.overflowY = "scroll";
        leMain.style.filter = "blur(0em)";
    }
}

function gererLesCat() {
    catBouton.classList.toggle('categorieOuvert');
    if(catBouton.classList.contains("categorieOuvert")) {
        categorieMobile.classList.add("categorieTirer");
    } else {
        categorieMobile.classList.remove("categorieTirer");
    }
}

let premierConteneur = document.querySelector(".premierConteneur");
let deuxiemeConteneur = document.querySelector(".deuxiemeConteneur");

let premierConteneurBoite1 = premierConteneur.querySelector(".Partie1");
let premierConteneurBoite2 = premierConteneur.querySelector(".Partie2");
let premierConteneurFlecheDroite = premierConteneur.querySelector(".flecheDroite");
let premierConteneurFlecheGauche = premierConteneur.querySelector(".flecheGauche");

let deuxiemeConteneurBoite1 = deuxiemeConteneur.querySelector(".Partie1");
let deuxiemeConteneurBoite2 = deuxiemeConteneur.querySelector(".Partie2");
let deuxiemeConteneurFlecheDroite = deuxiemeConteneur.querySelector(".flecheDroite");
let deuxiemeConteneurFlecheGauche = deuxiemeConteneur.querySelector(".flecheGauche");

premierConteneurFlecheDroite.addEventListener('click', function() {
    premierConteneurBoite1.style.transform = 'translateX(-100%)';
    premierConteneurBoite2.style.transform = 'translateX(0)';
    premierConteneurFlecheGauche.style.display = "initial";
    premierConteneurFlecheDroite.style.display = "none";
  });
  
premierConteneurFlecheGauche.addEventListener('click', function() {
    premierConteneurBoite1.style.transform = 'translateX(0)';
    premierConteneurBoite2.style.transform = 'translateX(100%)';
    premierConteneurFlecheGauche.style.display = "none";
    premierConteneurFlecheDroite.style.display = "initial";
  });
  
deuxiemeConteneurFlecheDroite.addEventListener('click', function() {
    deuxiemeConteneurBoite1.style.transform = 'translateX(-100%)';
    deuxiemeConteneurBoite2.style.transform = 'translateX(0)';
    deuxiemeConteneurFlecheGauche.style.display = "initial";
    deuxiemeConteneurFlecheDroite.style.display = "none";
  });
  
deuxiemeConteneurFlecheGauche.addEventListener('click', function() {
    deuxiemeConteneurBoite1.style.transform = 'translateX(0)';
    deuxiemeConteneurBoite2.style.transform = 'translateX(100%)';
    deuxiemeConteneurFlecheGauche.style.display = "none";
    deuxiemeConteneurFlecheDroite.style.display = "initial";
  });

let produitACliquer = document.querySelector("#produitClique");

produitACliquer.addEventListener("click", vaVersPageProduit);

function vaVersPageProduit() {
    window.location.href = 'produitOral/indexYoussra.html';
}