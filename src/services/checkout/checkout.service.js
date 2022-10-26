import createStripe from "stripe-client";
import { host } from "../../utils/env";


const stripe = createStripe(
  "pk_test_51LwE17JdIzvMe25QM0nV62FNUVvsP6VuIlHVUDAJHrVSWZeYlRZilocmWEIEZhoz2rmYLWdDvu73NMRiBv6iiW2m00gSTp29Bi"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${ host }/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("something went wrong processing your payment");
    }
    return res.json();
  });
};