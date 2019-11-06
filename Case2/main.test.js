const main = require('./main')
var helperFunction = main.helper
var sortFunction = main.sortFunction


const orderArray = [{
    "volume": 3.9,

    "price": 52.10,

    "order_id": 10357535456

}, {

    "volume": 10,

    "price": 52.00,

    "order_id": 10357525840,

}, {

    "volume": 1,

    "price": 51.90,

    "order_id": 10357536350,

}, {

    "volume": 4.9,

    "price": 51.90,

    "order_id": 10357536210,

}, {

    "volume": 5,

    "price": 50.70,

    "order_id": 79609202,

}]

test('Test of 2 MW volume order', () => {
    expect(helperFunction(orderArray,2)).toBe(50.7);
})

test('Test of 10 MW volume order', () => {
    expect(helperFunction(orderArray,10)).toBe(51.3);
})

test('Test of 13 MW volume order', () => {
    expect(helperFunction(orderArray,13)).toBeCloseTo(51.4546153846);
})

test('Test of 1000 MW volume order', () => {
    expect(helperFunction(orderArray,1000)).toEqual(expect.stringContaining('Could not'));
})

test('is sorted', () => {
    expect(sortFunction(orderArray)[0].order_id).toBe(79609202);
})