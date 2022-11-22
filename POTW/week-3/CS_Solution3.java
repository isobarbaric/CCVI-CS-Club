/**
 * Krish Shah
 * Given an array of n numbers (1 ≤ n ≤ 50), determine the maximum sum of any 3 numbers taken from that array.
 */

package potw;

import java.util.Arrays;
import java.util.Scanner;

public class CS_Solution3 {

	public static int addMaximumThree(int nums[]) {
		// using an in-built method to sort the array
		Arrays.sort(nums);

		int lastElementIndex = nums.length-1;

		// adding up the final three elements in the array
		int sum = nums[lastElementIndex] + nums[lastElementIndex-1] + nums[lastElementIndex-2];

		return sum;
	}

	public static void main(String[] args) {
		// creating a Scanner object to take input from the user
		Scanner scanner = new Scanner(System.in);

		// taking input for the integer 'n' and creating an array of that size
		int n = Integer.parseInt(scanner.nextLine());
		int nums[] = new int[n];

		// looping 'n' times and adding
		for (int i = 0; i < n; i++) {
			int currNum = Integer.parseInt(scanner.nextLine());
			nums[i] = currNum;
		}

		// calling the addMaximumThree() method to find the sum of the 3 largest numbers
		int desiredSum = addMaximumThree(nums);

		System.out.println(desiredSum);
	}

}