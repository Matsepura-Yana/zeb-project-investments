package org.example.app;
import java.util.Scanner;

class Rechner {
    float anlageBetrag;
    float startkapital;
    float endkapital;
    int laufzeit;
    int anlageklasseWahl;
    Anlageklassen Investment;

    public static float randomWert(float min, float max) {
        return (float) (min + Math.random() * (max - min));
    }

    public Anlageklassen Rechner(){
        Scanner input = new Scanner(System.in);

        System.out.print("Willkommen zum Investitionsrechner!\n");

        System.out.print("Bitte geben Sie den Anlagebetrag ein:");
        anlageBetrag = input.nextFloat();
        startkapital = anlageBetrag;


        System.out.print("Bitte geben Sie den Laufzeit in Jahren ein:");
        laufzeit = input.nextInt();

        System.out.print("""
                Wählen Sie die Anlageklasse aus:
                1. Aktien
                2. Anleihen
                3. Immobilien
                4. Wertpapiere
                """);
        anlageklasseWahl = input.nextInt();
        System.out.printf("%-1s %-1s %-1s %-1s%n", "Jahr |", "Startkapilal |", "Rendite (%) |", "Endkapital");

        for (int jahr = 0; jahr < laufzeit; jahr++) {
            Investment = switch (anlageklasseWahl){
                case 1 -> new Aktien(
                        randomWert(-0.20f, 0.25f),
                        randomWert(0.10f, 0.30f),
                        randomWert(0.0f, 0.10f)
                );
                case 2 -> new Anleihen(
                        randomWert(-0.02f, 0.05f),
                        randomWert(0.01f, 0.06f),
                        randomWert(0.0f, 0.10f)
                );
                case 3 -> new Immobilien(
                        randomWert(-0.05f, 0.10f),
                        randomWert(0.05f, 0.15f),
                        randomWert(0.0f, 0.10f)
                );
                case 4 -> new Wertpapiere(
                        randomWert(-0.10f, 0.15f),
                        randomWert(0.08f, 0.20f),
                        randomWert(0.0f, 0.10f)
                );

                default -> throw new IllegalStateException("Unexpected value: " + anlageklasseWahl);
            };

            endkapital = (startkapital * (1 + (Investment.rendite + (Investment.volatilitaet * Investment.schwankung))));

            System.out.printf("%-4s %-14s %-13s %-5s%n", jahr+1, "|" + Math.round(startkapital*100)/100f, "|" + Math.round(Investment.rendite*100)/100f*100+"%", "|" + Math.round(endkapital*100)/100f);
            startkapital = endkapital;
        }

        System.out.println("----------------------------------");
        System.out.print("Gesamtrendite nach "+ laufzeit +" Jahren: ");
        System.out.printf("%.2f",(endkapital-anlageBetrag));
        System.out.println("€");
        System.out.print("Endkapital: ");
        System.out.printf("%.2f",endkapital);
        System.out.println("€");
        return Investment;
    }
}
