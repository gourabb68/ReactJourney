console.log("utils.js is running");
export const square =(x)=> x*x;
export const add =(a,b)=> a+b;
const substract =(a,b)=> a-b;
export default substract;
//or we can write
// export {square,add,substract as default}