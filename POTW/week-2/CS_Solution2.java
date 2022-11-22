/**
 * Avinash Anand
 * Determine if a given string is a palindrome and print out true/false accordingly.
 */

package potw;

public class CS_Solution2 {

    public static boolean isPalindrome(String word) {
        String reverseWord = "";
        int wordLength = word.length();
        for (int i = wordLength - 1; i >= 0; i--) {
            reverseWord += word.charAt(i);
        }
        return word.equals(reverseWord);
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        String a = "racecar";
        System.out.println(isPalindrome((a)));
    }

}