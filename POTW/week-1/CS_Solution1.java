/**
 * Avinash Anand
 * Print out a times table from 1 to 12.
 */

package potw;

public class CS_Solution1 {
    public static void main(String[] args) {
        int num = 0;
        for(int i = 1; i <= 12; i++){
            for(int j = 1; j <= 12; j++){
                num = i * j;
                if(num < 10){
                    System.out.print(num + "   ");
                } else if(num >= 10 && num < 100){
                    System.out.print(num + "  ");
                } else if(num >= 100){
                    System.out.print(num + " ");
                }
            }
            System.out.println();
        }
    }
}