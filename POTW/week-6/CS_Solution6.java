/**
 * Krish Shah
 * Determine the number of people with COVID after x amount of days.
 */

package potw;

import java.util.Scanner;

public class CS_Solution6 {

	public static int findNumInfected(int initialInfected, int infectionRate, int numDays) {
		int numInfected = initialInfected;
		int dailyInfectionRate = infectionRate;
		for (int i = 1; i <= numDays; i++) {
			numInfected += dailyInfectionRate;
			dailyInfectionRate *= infectionRate;
		}
		return numInfected;
	}

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int initialInfected = scanner.nextInt();
		int infectionRate = scanner.nextInt();
		int numDays = scanner.nextInt();

		System.out.println(findNumInfected(initialInfected, infectionRate, numDays));
	}

}