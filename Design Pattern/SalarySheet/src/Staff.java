public class Staff extends Person {
    private int workingHours;
    private double hourlyRate;


    public Staff(String name, int workingHours, double hourlyRate) {
        super(name);
        this.workingHours = workingHours;
        this.hourlyRate = hourlyRate;
    }

    private double calculateSalary() {
        return workingHours * hourlyRate;
    }

    @Override
    public String getDetails() {
        return "Staff: " + name + ", Working Hours: " + workingHours + ", Hourly Rate: $" + hourlyRate + ", Salary: $" + calculateSalary();
    }
}
