let leCheckBox = document.querySelector("#cc-nav-principale ");

            let leBody = document.querySelector("body");
            let  leMain= document.querySelector("main")
            leCheckBox.addEventListener("click", gererLeDefilement);

            function gererLeDefilement() {
                if (leCheckBox.checked == true) {
                    leBody.style.overflow = "hidden";
                    leMain.style.filter = "blur(0.2em)";
                    
                } else {
                    leBody.style.overflow = "scroll";
                    leMain.style.filter = "blur(0em)";
                }
            }


let lesBoutons = document.querySelectorAll(".nav-principale");

            /*Mettre un gestionnaire d'événement sur chaque bouton avec un boucle for of*/
            for (let unBouton of lesBoutons) {
                unBouton.addEventListener("click", controlerBoutonBurger);
            }

            function controlerBoutonBurger() {
                //Géstin de l'état de la case à cocher
                leCheckBox.checked = false;

                //Remettre la barre de défilement sur le body
                leBody.style.overflow = "scroll";
            }


            function faireApparaitre() {
                let laSection = document.querySelector(".apparition");
                //On attribue les classes quand la hauteur de la section atteint 40% de celle de la fenêtre
                let hauteurVisible = window.innerHeight *0.40;
                let hauteurSection = laSection.getBoundingClientRect().top;
                if (hauteurSection < hauteurVisible) {
                    laSection.style.transform= "translateX(0%)"
                    laSection.style.opacity= "1";
                } else {
                    laSection.style.transform= "translateX(-100%)"
                    laSection.style.opacity= "0";
                }
            }
            /*Gestionnaire d'événement scroll sur la fenêtre*/
            window.addEventListener("scroll", faireApparaitre);


let produitACliquer = document.querySelector("#produit1");

produitACliquer.addEventListener("click", AmeneALaPage);

function AmeneALaPage() {
    window.location.href = '../tp_youssra/indexYoussra.html';
}
