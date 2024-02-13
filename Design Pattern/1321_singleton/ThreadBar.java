
public class ThreadBar implements Runnable {
    @Override
    public void run() {
        Singleton singleton = Singleton.getInstance("BAR");
        System.out.println("ThreadBar: " + singleton.value);
    }
}
