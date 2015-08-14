#include<stdio.h>

void main() {
	int n;

	printf("Please enter a number : ");
	scanf("%d", &n);

	if( n%2 == 0 ) {
		printf("\nThis is EVEN number\n");
	} else {
		printf("\nThis is ODD number\n");
	}
	getchar();
}