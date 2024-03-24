import crypto from "crypto";
import { ReactNode } from "react";

const secret = process.env.NEXT_PUBLIC_MERCHANT_SECRET_KEY;

const getDateNext = (today: Date) => {
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const day = String(tomorrow.getDate()).padStart(2, "0");
  const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
  const year = tomorrow.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;
  return formattedDate;
};

export const DonateAction = ({
  children,
  amount,
  title,
  regular = false,
}: {
  children: ReactNode;
  amount: string;
  title: string;
  regular?: boolean;
}) => {
  const randomNumber = Math.random() * 1000;

  const date = new Date();

  const inputData = `plai_repo_vercel_app;plai_repo_vercel_app;${randomNumber};${date.valueOf()};${amount};UAH;${title};1;${amount}`;
  const merchantSignature = secret
    ? crypto.createHmac("md5", secret).update(inputData).digest("hex")
    : "";

  return (
    <form
      method="post"
      action="https://secure.wayforpay.com/pay"
      acceptCharset="utf-8"
    >
      <input
        type="hidden"
        name="merchantAccount"
        value="plai_repo_vercel_app"
      />
      <input type="hidden" name="merchantAuthType" value="SimpleSignature" />
      <input
        type="hidden"
        name="merchantDomainName"
        value="plai_repo_vercel_app"
      />
      <input type="hidden" name="orderReference" value={`${randomNumber}`} />
      <input type="hidden" name="orderDate" value={`${date.valueOf()}`} />
      <input type="hidden" name="amount" value={amount} />
      <input type="hidden" name="currency" value="UAH" />
      <input type="hidden" name="productName[]" value={[title]} />
      <input type="hidden" name="productPrice[]" value={[amount]} />
      <input type="hidden" name="productCount[]" value={["1"]} />
      {regular && (
        <>
          <input type="hidden" name="regularMode" value="monthly" />
          <input type="hidden" name="regularAmount" value={amount} />
          <input type="hidden" name="dateNext" value={getDateNext(date)} />
          <input type="hidden" name="regularCount" value={12} />
        </>
      )}
      <input type="hidden" name="defaultPaymentSystem" value="card" />
      <input type="hidden" name="merchantSignature" value={merchantSignature} />
      {children}
    </form>
  );
};
