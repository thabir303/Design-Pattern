class TextDocument implements Document {
    @Override
    public void open() {
        System.out.println("Open Text Document");
    }

    @Override
    public void close() {
        System.out.println("Close Text Document");
    }

    @Override
    public void save() {
        System.out.println("SaveText Document");
    }

    @Override
    public void revert() {
        System.out.println("ReverteText Document");
    }
}