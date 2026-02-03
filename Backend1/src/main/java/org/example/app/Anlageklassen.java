package org.example.app;

import java.lang.reflect.Array;

class Anlageklassen {
    String name;
    float startkapital;
    int laufzeit;
    float rendite;
    float endkapital;
    float volatilitaet;
    float schwankung;

    public String getName(){
        return name;
    }

    public  float getEndkapital() {
        return endkapital;
    }

    public  float getStartkapital(){
        return startkapital;
    }

    public  int getLaufzeit() {
        return laufzeit;
    }

    public  float getRendite() {
        return rendite;
    }

    public  float getVolatilitaet() {
        return volatilitaet;
    }

    public  float getSchwankung() {
        return schwankung;
    }
}
