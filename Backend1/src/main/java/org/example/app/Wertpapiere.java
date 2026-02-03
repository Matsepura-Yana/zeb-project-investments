package org.example.app;

public class Wertpapiere extends Anlageklassen {
    public Wertpapiere(float rendite, float volatilitaet, float schwankung) {
        this.name = "Wertpapiere";
        this.rendite = rendite;
        this.volatilitaet = volatilitaet;
        this.schwankung = schwankung;
    }
}
