// Implement tabs component
// By clicking on one of the buttons you should render corresponding Component. Other components should be hidden.

const Apples = () => <div>Apples</div>;
const Bananas = () => <div>Bananas</div>;
const Grapes = () => <div>Grapes</div>;
const FruitTabs = () => {
return (

<div>
<button>Apples</button>
<button>Bananas</button>
<button>Grapes</button>
<Apples />
<Bananas />
<Grapes />
</div>
);
};
// Transform array of arrays into array of objects
// [{ currency: [sell, buy] }] -> [{ usd: [100, 1500] }]
// If sell/buy of currency is repeating you should add them to the result of
corresponding value
// For example:
// Input: [
// ["usd", "sell", 1000],
// ["usd", "sell", 1500],
// ]
// Output: [{ usd: [2500, 0] }]
//
const array = [
["usd", "sell", 1500],
["uah", "buy", 1000],
["usd", "sell", 500],
["aed", "buy", 300],
["usd", "buy", 500],
["uah", "buy", 3500],
["aed", "sell", 51],
];
