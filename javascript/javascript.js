// 1.find the different between two array

let ar1=[1,3,5,6,7];
let ar2=[1,3,5,6,7];
let i,j,f=0;
for(i=0;i<ar1.length;i++)
{
    for(j=0;j<ar2.length;j++)
    {
        if(ar1[i]==ar2[j])
        {
            f=1;
        }
        else
        {
            f=0;
        }
    }
}
if(f=1)
{
    console.log("1.The given array are equel");
}
else{
    console.log("1.The given array is not equel");
}

// 2.find longest string in setence

let str1="hi every budddy how are you";
let s=str1.split(" ");
let max=0;
let m;
for(let k=0;k<s.length;k++)
{
    let size=(s[k].length);
    if(size>max)
    {
        max=size;
        m=s[k];
    }
}
console.log("The longest string in the sentence is "+m);

// 3.Rotating an array

let arr1=[1,2,3,4,7,4,9,1];
let temp1=[];
let size=arr1.length;
for(i=size-1;i>=0;i--)
{
    temp1.push(arr1[i]);
}
console.log("3.rotating an array");
console.log(temp1);

// 4.array equality

let arr2=[9,2,8,3,7,4,6,5];
let arr3=[2,3,9,8,7,4,5,6,9];
let sarr2=arr2.sort();
let sarr3=arr3.sort();
let f1=0;
if(arr2.length==arr3.length)
{
    for(i=0;i<arr2.length;i++)
        {
            for(j=0;j<arr3.length;j++)
            {
                if(sarr2[i]==sarr3[j])
                {
                    f1=1;
                }
                else
                {
                    f1=0;
                }
            }
        }
}
else{
    f1=0;
}
console.log("4.array equality");
if(f1==1)
{
    console.log("The given array are equel");
}
else
{
    console.log("The given array are not equel");
}

// 5.array spreading

let arr4=[1,2,3,4,5];
let arr5=[6,7,8,9,10];
console.log("5.array spreading")
console.log([...arr4,...arr5]);

// 6.find the index of first occurance

let arr6=[1,2,3,9,4,4,5,6,7,8];
console.log("6.find the index of first occurance");
let search=9;
for(i=0;i<arr6.length;i++)
{
    if(search===arr6[i])
    {
        console.log("The index of the element is "+i);
        break;
    }
}

