import java.util.Scanner;

class Rechner {
    float anlageBetrag;
    float betragNachJedemJahr;
    float kapital;
    int laufzeit;
    int anlageklasseWahl;
    String anlageklasse;
    String name;
    float rendite;
    float volatilitaet;
    float schwankungsbreite;
    Anlageklassen Investment;

    public Anlageklassen anlageklasseAbfrage(){
        Scanner input = new Scanner(System.in);

        System.out.print("Willkommen zum Investitionsrechner!\n");

        System.out.print("Bitte geben Sie den Anlagebetrag ein:");
        anlageBetrag = input.nextFloat();
        kapital = anlageBetrag;


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
        if (anlageklasseWahl==1) {
            Investment = new Aktien();
        } else if (anlageklasseWahl==2){
            Investment = new Anleihen();
        } else if (anlageklasseWahl==3){
            Investment = new Immobilien();
        } else if (anlageklasseWahl==4){
            Investment = new Wertpapiere();
        }

        name = Investment.getName();
        rendite = Investment.getRendite();
        volatilitaet = Investment.getVolatilitaet();
        schwankungsbreite = Investment.getSchwankungsbreite();

        for (int i = 0; i < laufzeit; i++) {
            System.out.print(" | ");
            System.out.print(i+1);
            System.out.print(" | ");
            System.out.print("Startkapital: "+kapital);
            if (kapital==anlageBetrag){
                kapital=(anlageBetrag*(1+(Investment.rendite + Investment.volatilitaet * Investment.schwankungsbreite)));
            } else {kapital=(kapital*(1+(Investment.rendite + Investment.volatilitaet * Investment.schwankungsbreite)));}
            System.out.println("\nEndekapital:");
            System.out.printf("%.2f", kapital);
            System.out.println("€");
        }

        System.out.println("----------------------------------");
        System.out.print("Gesamtrendite nach "+ laufzeit +" Jahren: ");
        System.out.printf("%.2f",(kapital-anlageBetrag));
        System.out.println("€");
        System.out.print("Endkapital: ");
        System.out.printf("%.2f",kapital);
        System.out.println("€");
        return Investment;
    }
}
