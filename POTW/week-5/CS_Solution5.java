/*
 * Avinash Anand
 * Given a positive integer n (1 ≤ n ≤ 99999999), print out the largest prime factor of n.
 */

package potw;

import java.util.Scanner;

public class CS_Solution5 {

    public static int findMaximumPrimeFactor(int num) {
        for (int i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            while (num % i == 0) {
                if (num == i) {
                    break;
                }
                num /= i;
            }
        }
        return num;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();
        System.out.println(findMaximumPrimeFactor(num));
    }

}