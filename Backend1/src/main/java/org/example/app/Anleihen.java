package org.example.app;
public class Anleihen extends Anlageklassen {
    public Anleihen (float rendite, float volatilitaet, float schwankung) {
        this.name = "Anleihen";
        this.rendite = rendite;
        this.volatilitaet = volatilitaet;
        this.schwankung = schwankung;
    }
}
