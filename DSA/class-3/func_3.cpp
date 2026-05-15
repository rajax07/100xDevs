#include <iostream>
using namespace std;

// int main()
// {
//     int n;
//     cin >> n;

    // // Gives factor of n
    // for(int i = 1; i <=n; i++)
    // {
    //     //i is a factor of n
    //     if(n% i == 0){
    //         cout<< i << " ";
    //     }
    // }

    // Gives the number of factor in count
    // int count = 0;
    // for(int i = 1; i <=n; i++)
    // {
    //     //i is a factor of n
    //     if(n% i == 0){
    //         count++;
    //     }
    // }
    // cout<< count <<endl;

    // isPrime or Not
    // int count = 0;
    // for(int i = 1; i <=n; i++)
    // {
    //     //i is a factor of n
    //     if(n % i == 0){
    //         count++;
    //     }
    // }
    // cout<< count <<endl;

    // // to be a prime a prime it should be two factor
    // if(count == 2){
    //     cout<<"Prime";
    // }else{
    //     cout<<"Not Prime";
    // }

    // Print all prime numbers from 1 to N

    bool isPrime(int n)
    {
        int cnt = 0;
        for (int i = 1; i <= n; i++)
        {
            if (n % i == 0)
            {
                cnt++;
            }
        }
        return cnt == 2;
    }

    int main()
    {
        int n;
        cin >> n;
        for (int i = 1; i <= n; i++)
        {
            if (isPrime(i))
            {
                cout << i << " ";
            }
        }
        return 0;
    }