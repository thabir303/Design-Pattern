public class Teacher extends Person {
    private String designation;
    private double salary;

  
    public Teacher(String name, String designation) {
        super(name);
        this.designation = designation;
        this.salary = calculateSalary();
    }

    private double calculateSalary() {
        switch (designation.toLowerCase()) {
            case "lecturer":
                return 50000.0;
            case "associate professor":
                return 70000.0;
            case "professor":
                return 90000.0;
            default:
                throw new IllegalArgumentException("Invalid designation");
        }
    }


    @Override
    public String getDetails() {
        return "Teacher: " + name + ", Designation: " + designation + ", Salary: $" + salary;
    }
}
