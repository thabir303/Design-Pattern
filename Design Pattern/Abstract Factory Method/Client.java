public class Client {
    public static void main(String[] args) {
        ProductFactory ArtDeco = new ArtDecoFactory();
        // ProductFactory Victorian = new VictorianFactory();
        // ProductFactory Modern = new ModernFactory();
        // ProductFactory coffeetable=new ArtDecoFactory();
        // ArtDecoFactory coffetable = ProductFactory.createCoffeTable();
        
        ProductFactory myfactory = ArtDeco;
        myfactory.createSofa().printSofa();
        myfactory.createCoffeTable().printCoffeTable();

        // coffeetable.printCoffeTable();
        // ArtDeco.createSofa();
        // ArtDeco.createChair().printChair();
        // Victorian.createCoffeTable().printCoffeTable();
        // Modern.createSofa().printSofa();
    }
}
