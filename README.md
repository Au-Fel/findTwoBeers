# Back-end Challenge: Find two beers

## Description

This challenge's theme was about beer and their bitterness.
To recommend our customers the best combination of beers for them, 
I had to make a function that, based on the exact level of bitterness they were looking for, had to suggest two different beers that together add up to that number.
I had to, also, use AWS Lambda and API Gateway to create a REST endpoint that enables calling the function to make a POST request.

## How it works

This function (called findTwoBeers) receives two parameters: the first one being an array of numbers (the IBUs, or International Bitterness Units), and the second one being a number (the target number of bitterness the customer is looking for); and it should return not the values but the index of those values in the array.
For example, if the customer's IBU is `30` and our beers IBUs are `[10, 15, 20]`, the return value should be `[0, 2]`, as `10` (at index 0) plus `20` (position 2) equals to `30`.
On the other hand, if there was not a valid sum found, the function should return an empty array (`[]`).

I used one for loop that traversed the array only once, making the time complexity `O(n)`, and stored keys with values in a dictionary, making the space complexity `O(n)` as well.

## What the files are

In the folder `src` there are three files:
- `findTwoBeers.js` is the main function.
- `findTwoBeersAPI.js` is a copy of the AWS Lambda function used to send the POST request.
- `testFunction.js` is what makes it easy to test the function locally with any arguments you like.

In the folder `test` there's only one file, which is where the unit tests are. 

## Testing it locally

To manually test the function with your arguments of choice, follow this instructions:

- Assuming you've already cloned the repository and have it open in your code editor of choice, open the console and type `npm install`. This will install everything necessary to test this function.
- Then, type: `node src/testFunction.js` with an array with the beer IBUs and then the target number, after that.
Example: `node src/testFunction.js [10,20,10,30] 30`
That should return an array with the positions of the IBUs that when added up result in the target number. In this case, it should return `[0, 1]`.
- To run the unit tests, open the console and type: `npm test`.

## Using AWS Lambda and API Gateway to send a POST request

Using a program like Postman, you can send a POST request to the url `https://vhzq5uqwmk.execute-api.sa-east-1.amazonaws.com/findTwoBeers/` with a body of `{
  "beer": [0, 10, 20, 30, 40, 50],
  "target": 50
}` (you can replace the numbers with any others you want), or simply import the file `findTwoBeers.postman_collection.json` with Postman.
