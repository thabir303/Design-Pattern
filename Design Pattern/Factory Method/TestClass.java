public class TestClass {

    public static void main(String[] args) {

        CsvApplication csvApp = new CsvApplication();
        Document csvDoc = csvApp.newDocument();
        csvApp.openDocument(csvDoc);
        csvApp.closeDocument(csvDoc);
        csvApp.saveDocument(csvDoc);
        csvApp.revertDocument(csvDoc);

        TextApplication textApp = new TextApplication();
        Document textDoc = textApp.newDocument();
        textApp.openDocument(textDoc);
        textApp.closeDocument(textDoc);
        textApp.saveDocument(textDoc);
        textApp.revertDocument(textDoc);

        csvApp.performDocumentOperations();
    }
}
