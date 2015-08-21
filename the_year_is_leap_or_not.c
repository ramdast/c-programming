#include<stdio.h>
void  main()
{
	int year;
		printf("please enter the year");
		scanf("%d",&year);
			
			if(year%4==0){
				printf("The year is leap year");

	}	

			else{
				printf("The year is not a leap year ");
			}
			getchar();
}
