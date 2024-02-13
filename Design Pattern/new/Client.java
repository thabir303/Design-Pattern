public class Client {
    public static void main(String[] args) {
        ProductFactory ArtDeco = new ArtDecoFactory();
        ProductFactory Victorian = new VictorianFactory();
        ProductFactory Modern = new ModernFactory();

        ArtDeco.createChair().printChair();
        Victorian.createCoffeTable().printCoffeTable();
        Modern.createSofa().printSofa();
    }
}
