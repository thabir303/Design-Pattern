// DemoMultiThread.java
public class DemoMultiThread {
    public static void main(String[] args) {
        System.out.println("If you see the same value, then singleton was reused (yay!)" + "\n" +
                "If you see different values, then 2 singletons were created (booo!!)" + "\n\n" +
                "RESULT:" + "\n");

        ThreadFoo threadFoo = new ThreadFoo();
        ThreadBar threadBar = new ThreadBar();

        Thread thread1 = new Thread(threadFoo);
        Thread thread2 = new Thread(threadBar);

        thread1.start();
        thread2.start();
    }
}
