#include<iostream>
using namespace std;

 int factorial(int n){
    int ans = 1;
    for(int i = 1; i<=n; i++)
    {
        ans *= i;
    }
    return ans;
 }

//     Function Rules
// Number of Parameters Must Match

// Return Type Must Match

// Return Ends the Function call

// A Function May or May Not Return
// → int, double, bool → returns value
// → void → prints only


int main(){
    //Factorial
    // int n;

    // cin>>n;

    // int ans=1;
    // for(int i = 1;  i<=n; i++){
    //     ans *= i;
    // }
    // cout<< ans;


    //Binomial Coefficient
    // nCr = n!/r!(n-r)!
    // int N,R;
    // cin>>N>>R;
    // //n!
    // int Nfact = 1;
    // for(int i = 1;  i<=N; i++){
    //     Nfact *= i;
    // }
    // // r!
    // int Rfact = 1;
    // for(int i = 1;  i<=R; i++){
    //     Rfact *= i;
    // }
    // // n-r!
    //  int NRfact = 1;
    // for(int i = 1;  i<=N-R; i++){
    //     NRfact *= i;
    // }
    // cout<< Nfact/(Rfact*NRfact) <<endl; 


    // DRY : Do not repeat yourself
    // Here Function came:

    // declare the function 

    int n, r;
    cin>> n>>r;
    // n!
    int nFact = factorial(n);

    //r!
    int rFact = factorial(r);

    //(n-r)!
    int nrFact = factorial(n-r);

    cout<< nFact / (rFact *nrFact)<<endl;



    

   

    






    return 0;
}