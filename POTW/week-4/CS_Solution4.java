/*
Jason Yu
Nov, 7, 2022
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
