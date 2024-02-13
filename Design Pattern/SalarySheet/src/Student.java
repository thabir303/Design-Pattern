public class Student extends Person {
    private int studentId;


    public Student(String name, int studentId) {
        super(name);
        this.studentId = studentId;
    }

   
    @Override
    public String getDetails() {
        return "Student: " + name + ", Student ID: " + studentId;
    }
}
