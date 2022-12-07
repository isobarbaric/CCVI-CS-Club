/*
 * Krish Shah
 * Determine the number of unique integers in a given list.
 */
package potw;

import java.util.Scanner;

public class CS_Solution8b {

    public static int findNumUniqueIntegers(int[] nums) {
        int numCounts[] = new int[101];
		for (int i = 0; i < nums.length; i++) {
			numCounts[nums[i]]++;
		}
		int numUniqueInt = 0;
		for (int i = 1; i <= 100; i++) {
			if (numCounts[i] > 0) {
				numUniqueInt++;
			}
		}
		return numUniqueInt;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int numInts = Integer.parseInt(sc.nextLine());
        int[] nums = new int[numInts];
        for (int i = 0; i < numInts; i++) {
            nums[i] = Integer.parseInt(sc.nextLine());
        }
        System.out.println(findNumUniqueIntegers(nums));
    }

}
