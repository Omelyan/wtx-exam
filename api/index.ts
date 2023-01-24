import { miscellaneous } from "~/constants";
import { CreditCard } from "~/types";
import { wait } from "~/utils";

async function getBalance() {
  await wait(miscellaneous.stupidness * 3); // simulating response delay

  return `\u20ac\u2009${(Math.random() * 10000 + 1000).toFixed(2)}`;
}

async function getCreditCards(filter: string | undefined) {
  await wait(miscellaneous.stupidness);

  if (!filter) return creditCardsList;

  const searchString = filter.trim().toLowerCase();
  return creditCardsList.filter(item =>
    `${item.number} ${item.holder_name} ${item.nickname} ${item.status} ${item.type}`
      .toLowerCase()
      .includes(searchString)
  );
}

async function removeCreditCard({ id }: { id: number }) {
  await wait(miscellaneous.stupidness);

  creditCardsList = creditCardsList.filter(item => item.id !== id);
  return true;
}

export default {
  getBalance,
  getCreditCards,
  removeCreditCard,
};

let creditCardsList: CreditCard[] = [
  {
    id: 1,
    number: "1234",
    nickname: "Corporate Expenses",
    balance: 5789.04,
    currency_code: "eur",
    status: "ACTIVE",
    type: "virtual",
    holder_name: "John Smith",
  },
  {
    id: 2,
    number: "1122",
    nickname: null,
    balance: 0.0,
    currency_code: "eur",
    status: "PENDING",
    type: "physical",
    holder_name: "John Smith",
  },
  {
    id: 3,
    number: "4878",
    nickname: null,
    balance: 200.55,
    currency_code: "eur",
    status: "ACTIVE",
    type: "physical",
    holder_name: "John Smith",
  },
  {
    id: 4,
    number: "3365",
    nickname: null,
    balance: 3619.9,
    currency_code: "eur",
    status: "CANCELED",
    type: "virtual",
    holder_name: "John Smith",
  },
  {
    id: 5,
    number: "8719",
    nickname: null,
    balance: 0.98,
    currency_code: "eur",
    status: "CANCELED",
    type: "physical",
    holder_name: "John Smith",
  },
];
