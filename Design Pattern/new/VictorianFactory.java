public class VictorianFactory implements ProductFactory{
    public Chair createChair(){
        return new VictorianChair();
    }
    public Sofa createSofa(){
        return new VictorianSofa();
    }
    public CoffeTable createCoffeTable(){
        return new VictorianCoffeTable();
    }
}
