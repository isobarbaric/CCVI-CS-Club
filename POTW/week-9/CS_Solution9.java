/**
 * Krish Shah
 * Determine the sandwich Josh took a bite out of last.
 */
package potw;

import java.util.Scanner;

public class CS_Solution9 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int n = scanner.nextInt() % 5;

		String ans = new String();
		switch(n) {
			case 0:
				ans = "Grilled Cheese";
				break;
			case 1:
				ans = "Ham and Cheese";
				break;
			case 2:
				ans = "PB and Jelly";
				break;
			case 3:
				ans = "BLT";
				break;
			default:
				ans = "Tuna";
		}

		System.out.println(ans);
	}

}