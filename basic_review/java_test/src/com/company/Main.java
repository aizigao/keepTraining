package com.company;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // write your code here
        System.out.println("yyy");
        System.out.print("Hello");
        System.out.print("world\n");
        System.out.printf("pi = %.5f\n", Math.PI);


//        Scanner scanner = new Scanner(System.in);
//
//        int numInt = scanner.nextInt();
//        System.out.println(numInt);
        /**
         * variables
         */

        // short 16bit

        short fooShort = 1000;
        // 32-bit
        int bazInt = 1;
        // 64-bit
        long fooLong = 10000L;


        float fooFloat = 2323.9f;
        double fooDouble = 12323.3;
        boolean fooBoolean = true;

        char fooChar = 'A';

        final int HOURS_IN_WORK_PER_WEEK = 9001;


        StringBuilder builderConcatenated = new StringBuilder();

        builderConcatenated.append("You ");
        builderConcatenated.append("can use ");
        builderConcatenated.append("the String builder class.");

        System.out.println(builderConcatenated.toString());


        // array

        int[] intArray = new int[10];
        String[] stringsArray = new String[1];
        boolean boolArray[] = new boolean[100];

        int[] y = {9000, 100,1337};


        for (int bar : y) {
            System.out.println((bar));
        }

        Integer.parseInt("12213");
        Integer.toString(2312);

    }
}


class Bicycle {

    // Bicycle's Fields/Variables
    public int cadence; // Public: Can be accessed from anywhere
    private int speed;  // Private: Only accessible from within the class
    protected int gear; // Protected: Accessible from the class and subclasses
    String name; // default: Only accessible from within this package
    static String className; // Static class variable

    // Static block
    // Java has no implementation of static constructors, but
    // has a static block that can be used to initialize class variables
    // (static variables).
    // This block will be called when the class is loaded.
    static {
        className = "Bicycle";
    }

    // Constructors are a way of creating classes
    // This is a constructor
    public Bicycle() {
        // You can also call another constructor:
        // this(1, 50, 5, "Bontrager");
        gear = 1;
        cadence = 50;
        speed = 5;
        name = "Bontrager";
    }
    // This is a constructor that takes arguments
    public Bicycle(int startCadence, int startSpeed, int startGear,
                   String name) {
        this.gear = startGear;
        this.cadence = startCadence;
        this.speed = startSpeed;
        this.name = name;
    }

    // Method Syntax:
    // <public/private/protected> <return type> <function name>(<args>)

    // Java classes often implement getters and setters for their fields

    // Method declaration syntax:
    // <access modifier> <return type> <method name>(<args>)
    public int getCadence() {
        return cadence;
    }

    // void methods require no return statement
    public void setCadence(int newValue) {
        cadence = newValue;
    }
    public void setGear(int newValue) {
        gear = newValue;
    }
    public void speedUp(int increment) {
        speed += increment;
    }
    public void slowDown(int decrement) {
        speed -= decrement;
    }
    public void setName(String newName) {
        name = newName;
    }
    public String getName() {
        return name;
    }

    //Method to display the attribute values of this Object.
    @Override // Inherited from the Object class.
    public String toString() {
        return "gear: " + gear + " cadence: " + cadence + " speed: " + speed +
                " name: " + name;
    }
} // end class Bicycle