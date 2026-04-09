#include<iostream>
using namespace std;

int main(){

int n, m;
cin>>n>>m;

// Taking user input of 2D arr 
int arr[n][m];

for(int i = 0; i<n; i++)
{
    for(int j = 0; j<m; j++)
    {
        cin>>arr[i][j];
    }
}
// Display the output row wise
for(int i = 0; i<n; i++)
{
    for(int j = 0; j<m; j++)
    {
        cout<<arr[i][j]<< " ";
    }
    cout<<endl;
}

//    column wise
// for(int j = 0; j<m; j++){
//     for(int i = 0; i<n; i++){
//         cout<< arr [i][j]<< " ";
//     }

//    Wave print(row wise)
for(int i = 0; i<n; i++){
    if(i%2 == 0){
        //left to right
        for(int j = 0; j<m; j++){
            cout<<arr[i][j]<< " ";
        }
    }else{
        //right to left
        for(int j =m-1; j>=0; j--){
            cout<<arr[i][j]<<" ";
        }
    }

}

// Boundary Lane
// First row
for(int j = 0; j<m; j++){
    cout<< arr[0][j]<< " ";
}

// last column 

for(int i = 1; i<n; i++){
    cout<<arr[i][m-1]<< " ";
}
// last row
for(int j = m-1; j>= 0; j--){
    cout<<arr[n-1][j]<<" ";
}
// first column
for(int i = n-2; i>=1; i--){
    cout<<arr[i][0]<<" ";
}


// Find Maximum
int ans = arr[0][0];

for(int i = 0; i<n; i++){
    for(int j = 0; j<n; j++){
        if(arr[i][j] > ans){
            ans = arr[i][j];
        }
    }
}

cout << ans << endl;


// Search in 2D matrix
int n, m;
cin>>n>>m;
 
int target;
cin>>target;
 
// Taking user input 
int arr[n][m];
 
for(int i = 0; i<n; i++)
{
    for(int j = 0; j<m; j++)
    {
        cin>>arr[i][j];
    }
}
bool search = false;
 
// Search in a 2D matrix
 
for(int i = 0; i<n; i++)
{
    for(int j = 0; j<m; j++)
    {
        if(arr[i][j] == target)
        {
            search = true;
        }
    }
}
 
if(search){
    cout<<"true"<<endl;
}
else{
    cout<<"false"<<endl;
}


















    return 0;
}