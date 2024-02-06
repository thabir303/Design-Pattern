class TextApplication extends Application {
    @Override
    public Document createDocument() {
        return new TextDocument();
    }
}