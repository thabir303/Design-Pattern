import java.util.ArrayList;
import java.util.List;

abstract class Application {
    public abstract Document createDocument();

    public Document newDocument() {
        Document document = createDocument();
        document.open();
        docs.add(document);
        return document;
    }

    public void openDocument(Document document) {
        document.open();
    }

    public void closeDocument(Document document) {
        document.close();
    }

    public void saveDocument(Document document) {
        document.save();
    }

    public void revertDocument(Document document) {
        document.revert();
    }
    List<Document> docs = new ArrayList<>();

    public void performDocumentOperations() {
        Document doc = createDocument();
        docs.add(doc);
        doc.open();
    }
}
