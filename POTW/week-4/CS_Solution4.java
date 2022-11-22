/**
 * Jason Yu
 * Given a number n (1 ≤ n ≤ 100) and a number k (1 ≤ k ≤ 100), print the results of the multiplication of the first k multiples of n.
 */

package potw;

import javax.swing.JOptionPane;

public class CS_Solution4 {

    public static void main(String[] args) {
        // Ask the user for the values of n and k
        int n = Integer.parseInt(JOptionPane.showInputDialog ("What is the value of n?"));
        int k = Integer.parseInt(JOptionPane.showInputDialog ("What is the value of k?"));

        // use a for loop to multiply n by every number up until k
        for (int i = 1; i <= k; i++) {
            System.out.println(n+ "+" + i + "=" +n*i);
        }
    }

}
