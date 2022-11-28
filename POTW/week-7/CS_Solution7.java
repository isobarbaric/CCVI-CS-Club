/**
 * Krish Shah
 * Determine if a given year is a leap year.
 */

package potw;

import java.util.Scanner;

public class CS_Solution6 {

	public static boolean isLeapYear(int year) {
		boolean isLeapYear = false;
		if (year % 4 == 0 && year % 100 != 0) {
			isLeapYear = true;
		}
		if (year % 400 == 0) {
			isLeapYear = true;
		}
		return isLeapYear;
	}

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int year = scanner.nextInt();
		System.out.println(isLeapYear(year));
	}

}