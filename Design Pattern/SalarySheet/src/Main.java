import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayList<Student> students = new ArrayList<>();
        ArrayList<Teacher> teachers = new ArrayList<>();
        ArrayList<Staff> staffList = new ArrayList<>();

        System.out.println("Enter student information (name and student ID) or type 'done' to finish:");
        while (true) {
            System.out.print("Name: ");
            String name = scanner.nextLine();
            if (name.equalsIgnoreCase("done")) {
                break;
            }

            System.out.print("Student ID: ");
            int studentId = scanner.nextInt();
            scanner.nextLine(); 


            Student student = new Student(name, studentId);
            students.add(student);
        }

      
        System.out.println("\nEnter teacher information (name and designation) or type 'done' to finish:");
        while (true) {
            System.out.print("Name: ");
            String name = scanner.nextLine();
            if (name.equalsIgnoreCase("done")) {
                break;
            }

            System.out.print("Designation: ");
            String designation = scanner.nextLine();

      
            Teacher teacher = new Teacher(name, designation);
            teachers.add(teacher);
        }


        System.out.println("\nEnter staff information (name, working hours, and hourly rate) or type 'done' to finish:");
        while (true) {
            System.out.print("Name: ");
            String name = scanner.nextLine();
            if (name.equalsIgnoreCase("done")) {
                break;
            }

            System.out.print("Working Hours: ");
            int workingHours = scanner.nextInt();
            scanner.nextLine(); 
            System.out.print("Hourly Rate: ");
            double hourlyRate = scanner.nextDouble();
            scanner.nextLine(); 

      
            Staff staff = new Staff(name, workingHours, hourlyRate);
            staffList.add(staff);
        }

    
        System.out.println("\nStudent Information:");
        for (Student student : students) {
            System.out.println(student.getDetails());
        }

        System.out.println("\nTeacher Information:");
        for (Teacher teacher : teachers) {
            System.out.println(teacher.getDetails());
        }

        System.out.println("\nStaff Information:");
        for (Staff staff : staffList) {
            System.out.println(staff.getDetails());
        }
    }
}
