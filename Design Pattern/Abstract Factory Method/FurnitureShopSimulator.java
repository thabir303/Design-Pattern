// Client Code
public class FurnitureShopSimulator {
    private FurnitureFactory factory;

    public FurnitureShopSimulator(FurnitureFactory factory) {
        this.factory = factory;
    }

    public void orderFurniture() {
        Chair chair = factory.createChair();
        Sofa sofa = factory.createSofa();
        CoffeeTable coffeeTable = factory.createCoffeeTable();

        chair.sitOn();
        sofa.lieOn();
        coffeeTable.putOn();
    }

    public static void main(String[] args) {
        FurnitureShopSimulator modernShop = new FurnitureShopSimulator(new ModernFurnitureFactory());
        modernShop.orderFurniture();

        FurnitureShopSimulator victorianShop = new FurnitureShopSimulator(new VictorianFurnitureFactory());
        victorianShop.orderFurniture();

        FurnitureShopSimulator artDecoShop = new FurnitureShopSimulator(new ArtDecoFurnitureFactory());
        artDecoShop.orderFurniture();
    }
}
