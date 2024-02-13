// import FactoryInterface.ProductFactory;

public class ArtDecoFactory implements ProductFactory{
    public Chair createChair(){
        return new ArtDecoChair();
    }
    public Sofa createSofa(){
        return new ArtDecoSofa();
    }
    public CoffeTable createCoffeTable(){
        return new ArtDecoCoffeTable();
    }
}

