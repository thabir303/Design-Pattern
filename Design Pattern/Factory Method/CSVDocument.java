class CsvDocument implements Document {
    @Override
    public void open() {
        System.out.println("Open CSV Document");
    }

    @Override
    public void close() {
        System.out.println("Close CSV Document");
    }

    @Override
    public void save() {
        System.out.println("Save CSV Document");
    }

    @Override
    public void revert() {
        System.out.println("Reverte CSV Document");
    }
}