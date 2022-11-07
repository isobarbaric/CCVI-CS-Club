/*
Jason Yu
Nov, 7, 2022
 */
package potw.pkg4;

import javax.swing.JOptionPane;

public class POTW4 {
    public static void main(String[] args) {
        // Ask the user for the values of n and k
        int n= Integer.parseInt(JOptionPane.showInputDialog ("what is the value of n"));
        int k = Integer.parseInt(JOptionPane.showInputDialog ("what is the value of k"));
        // use a for loop to multiplu n by every number up untill k
        for (int i = 1; i <= k; i++) {
            System.out.println(n+ "+" + i + "=" +n*i);
        }
    }
    
}
