function Vehicule(couleur, roues, marque, demarer, arreter) {
    this.color = couleur;
    this.roues = roues;
    this.marque = marque;
    this.demarrer = demarer;
    this.stop = arreter;

    this.demarrer = function () {
        console.log("je démarre");
    }
    this.stop = function () {
        console.log("je m'arrête");
    }
}

let Velo = function (couleur, roues, marque, rayonRoues,typePeinture) {
    vehicule.call(this,couleur, roues, marque);
    this.rayonRoues = rayonRoues;
    this.typePeinture = typePeinture;

    this.monter = function () {
        console.log("je monte sur mon vélo");
    }
}

Velo.prototype = Object.create(Vehicule.prototype);
Velo.prototype.constructor = Velo;

let Voiture = function (couleur, roues, marque, assurance, proprietaire) {
    Vehicule.call(this, couleur, roues, marque);
    this.assurance = assurance;
    this.proprio = proprietaire;

    this.passerAuCarWash = function () {
        console.log(" rouler toute propre c'est mieux");
    }
}

Voiture.prototype = Object.create(Vehicule.prototype);
Voiture.prototype.constructor = Voiture;