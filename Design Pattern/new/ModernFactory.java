public class ModernFactory implements ProductFactory{
    public Chair createChair(){
        return new ModernChair();
    }
    public Sofa createSofa(){
        return new ModernSofa();
    }
    public CoffeTable createCoffeTable(){
        return new ModernCoffeTable();
    }
}
