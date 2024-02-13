
public class ThreadFoo implements Runnable {
    @Override
    public void run() {
        Singleton singleton = Singleton.getInstance("FOO");
        System.out.println("ThreadFoo: " + singleton.value);
    }
}
