let map = new Map();

map.set('name', 'Vahe');
map.set('lastName', 'Martoyan');
map.set('birthYear', 1991);

for (let [key, value] of map) {
    console.log(`Ключ - ${key}, значение - ${value}`)
}