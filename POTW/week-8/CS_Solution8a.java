/*
 * Avinash Anand
 * Determine the number of unique integers in a given list.
 */
package potw;

import java.util.Arrays;
import java.util.Scanner;

public class CS_Solution8a {

    public static int findNumUniqueIntegers(int[] nums) {
        Arrays.sort(nums);
        int uniqueIntNum = 1;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i-1] != nums[i]) {
                uniqueIntNum++;
            }
        }
        return uniqueIntNum;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int numInts = Integer.parseInt(sc.nextLine());
        int[] nums = new int[numInts];
        for (int i = 0; i < numInts; i++){
            nums[i] = Integer.parseInt(sc.nextLine());
        }
        System.out.println(findNumUniqueIntegers(nums));
    }

}
