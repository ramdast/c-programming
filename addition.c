#include<stdio.h>
void main(){
	int a[8]={7,5,8,8,2,6,15,15};
	int i,
		sum=0,
		sum1=0;
	for( i = 0; i<= 4; i++)
	{
		sum=sum+a[i];
		//printf("\nsum=%d\n",sum);
	}
	printf("\nsum=%d\n",sum);
	for(i =6; i<8 ;i++)
	{
	sum1=sum1+a[i];
	//printf("sum1=%d\n",sum1);
	}
	printf("sum1=%d\n",sum1);

	if(sum==sum1){
		printf("\ntrue\n");

	}
	else{
		printf("false\n");
	}
	getchar();
}
