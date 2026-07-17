const cartTotal = 1500;
const isUserMember = false;

if (cartTotal > 1000 && isUserMember) {
  const discount = 20;
  const discountAmount = (1500 / 100) * 20;
  const discountPrice = cartTotal - discountAmount;
  console.log(`Your discount price is ${discountPrice}`);
} else if (cartTotal > 1000) {
  const discount = 10;
  const discountAmount = (1500 / 100) * 10;
  const discountPrice = cartTotal - discountAmount;
  console.log(`Your discount price is ${discountPrice}`);
} else {
  console.log("No discount");
}
