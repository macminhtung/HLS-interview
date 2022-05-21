export const miniMaxSum = (strInput: string) => {
  // Convert string to array of int
  const arrayInt = strInput.trim().split(' ').map((val: string) => parseInt(val));

  let total = 0;
  let min = arrayInt[0];
  let max = arrayInt[0];

  arrayInt.forEach((val: number) => {
    total = total + val;
    if (val < min) min = val;
    if (val > max) max = val;
  });

  console.log(`${total - max} ${total - min}`);
  return ({ minTotal: total - max, maxTotal: total - min});
};