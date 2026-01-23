 const inventory = [
    { name: "Laptop", price: 1000, stock: 5 },
    { name: "Phone", price: 500, stock: 0 },
    { name: "Mouse", price: 50, stock: 10 }
];

const stockout = inventory.filter((inventory)  => inventory.stock > 0);

const mapp = stockout.map((inventory) => inventory.price * inventory.stock);

const red = mapp.reduce((acc,value) =>
    acc+=value
)
console.log(red);
console.log(mapp);
console.log(stockout);