let nums = [ 4, 10, 2, 4, 9, 3, 5, 1, 0 ];
console.log(nums);
nums = {
	...nums
};
console.log(nums);

function sum(x, y, z) {
	console.log(arguments[0]);
	return x + y + z;
}
console.log(sum(4, 20, 0));
