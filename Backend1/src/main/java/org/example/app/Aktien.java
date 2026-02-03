package org.example.app;

public class Aktien extends Anlageklassen {
    public Aktien(float rendite, float volatilitaet, float schwankung) {
        this.name = "Aktien";
        this.rendite = rendite;
        this.volatilitaet = volatilitaet;
        this.schwankung = schwankung;
    }
}
