class CsvApplication extends Application {
    @Override
    public Document createDocument() {
        return new CsvDocument();
    }
}