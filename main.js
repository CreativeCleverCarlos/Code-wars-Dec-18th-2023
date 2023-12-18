/**
 John has some amount of money of which he wants to deposit a part f0 to the bank at the beginning of year 1. He wants to withdraw each year for his living an amount c0.

Here is his banker plan:

deposit f0 at beginning of year 1
his bank account has an interest rate of p percent per year, constant over the years
John can withdraw each year c0, taking it whenever he wants in the year; he must take account of an inflation of i percent per year in order to keep his quality of living. i is supposed to stay constant over the years.
all amounts f0..fn-1, c0..cn-1 are truncated by the bank to their integral part
Given f0, p, c0, i the banker guarantees that John will be able to go on that way until the nth year.
**/

//P.R.E.P

//Parameter - only numbers will be given as arguments

//Return - return to the console, a boolean. 

//Example - (100000, 1, 2000, 15, 1), true)

//f0 = yearly deposit or total

//p = the interest over the years

//c0 = the amount he is with drawing over the course of a year

//i = inflation

//n = number of years


//example 

//beginning of year 2 - f1 = 100000 + 0.1*100000 - 2000 = 99000, c1 = c0 + c0*inflation(0.1)


function fortune(f0, p, c0, n, i) {
    for (let x = 0; x <= n; x++){
        f0 = Math.floor(f0*(1+p/100))-c0;
        c0=Math.floor(c0*(1+i/100));
    }

    return f0>0
}

console.log(fortune(100000,1,2000,10,1))

//couldn't quite follow along with the math with this one....
