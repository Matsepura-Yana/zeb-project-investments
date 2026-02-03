package org.example.app;

public class Immobilien extends Anlageklassen {
    public Immobilien(float rendite, float volatilitaet, float schwankung) {
        this.name = "Immobilien";
        this.rendite = rendite;
        this.volatilitaet = volatilitaet;
        this.schwankung = schwankung;
    }
}
