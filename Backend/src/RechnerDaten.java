public class RechnerDaten {
    String name; float rendite; float volatilitaet; float schwankungsbreite;

    @Override
    public String toString() {
        return "RechnerDaten{" +
                "name='" + name + '\'' +
                ", rendite=" + rendite +
                ", volatilitaet=" + volatilitaet +
                ", schwankungsbreite=" + schwankungsbreite +
                '}';
    }
}
