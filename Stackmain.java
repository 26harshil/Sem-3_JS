import java.util.Scanner;

class Node {
    int data;
    Node link;

    public Node(int data) {
        this.data = data;
        this.link = null;
    }
}

class Stack {
    private static Node top;

    public static boolean isEmpty() {
        return top == null;
    }

    public static void push(int data) {
        Node newNode = new Node(data);
        if (isEmpty()) {
            top = newNode;
            return;
        }
        newNode.link = top;
        top = newNode;
    }

    public static int pop() {
        if (isEmpty()) {
            return -1;
        }
        int head = top.data;
        top = top.link;
        return head;
    }

    public static int peep() {
        if (isEmpty()) {
            return -1;
        }
        return top.data;
    }

    public static void display() {
        if (isEmpty()) {
            System.out.println("Stack is empty");
            return;
        }
        Node temp = top;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.link;
        }
        System.out.println();
    }

    public static boolean change(int position, int newValue) {
        if (isEmpty()) {
            return false; // Stack is empty, nothing to change
        }
        Node temp = top;
        for (int i = 0; i < position; i++) {
            if (temp == null) {
                return false; // Position out of bounds
            }
            temp = temp.link;
        }
        if (temp != null) {
            temp.data = newValue;
            return true; // Change successful
        } else {
            return false; // Position out of bounds
        }
    }
}

public class Stackmain {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Stack stack = new Stack();
        boolean exit = false;

        while (!exit) {
            System.out.println("Choose an option:");
            System.out.println("1 for push");
            System.out.println("2 for pop");
            System.out.println("3 for peep");
            System.out.println("4 for change");
            System.out.println("5 for exit");

            int choice = scanner.nextInt();
            switch (choice) {
                case 1:
                    System.out.print("Enter value to push: ");
                    int value = scanner.nextInt();
                    stack.push(value);
                    System.out.println("Value pushed onto stack.");
                    stack.display();
                    break;
                case 2:
                    int poppedValue = stack.pop();
                    if (poppedValue == -1) {
                        System.out.println("Stack is empty, nothing to pop.");
                    } else {
                        System.out.println("Popped value: " + poppedValue);
                    }
                    stack.display();
                    break;
                case 3:
                    int peepValue = stack.peep();
                    if (peepValue == -1) {
                        System.out.println("Stack is empty.");
                    } else {
                        System.out.println("Top value: " + peepValue);
                    }
                    break;
                case 4:
                    System.out.print("Enter position to change: ");
                    int position = scanner.nextInt();
                    System.out.print("Enter new value: ");
                    int newValue = scanner.nextInt();
                    boolean isChanged = stack.change(position, newValue);
                    if (isChanged) {
                        System.out.println("Value changed successfully.");
                    } else {
                        System.out.println("Change unsuccessful. Position out of bounds.");
                    }
                    stack.display();
                    break;
                case 5:
                    exit = true;
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
        scanner.close();
    }
}
