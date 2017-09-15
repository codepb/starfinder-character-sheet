const bulk = [];
bulk[0] = { label: 'L', value: 0.1 };
for(let i = 1; i <= 10; i++) {
    bulk[i] = { label: `${i}`, value: i };
}
export default bulk;