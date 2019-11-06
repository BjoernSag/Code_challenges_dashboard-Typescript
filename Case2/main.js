
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

/* Sort the array based on the lowest price. toString to compare the two values */
const sortFunction = (input) => {
    input.sort(function(a,b){
        return a.price.toString().localeCompare(b.price.toString())
    })
    return input
}
/*Sort the array -> run through the array until remaingVolume is less or equal to the elements volume, then
return the price/volume to get the average price per MW */
const helper = (input, volume) => {
    var newArray = sortFunction(input)
    var price = 0
    var remainingVolume = volume
    for(let i = 0; i<newArray.length; i++){
        if(newArray[i].volume>=remainingVolume){
            price += (remainingVolume*newArray[i].price)
            remainingVolume=0
            break
        }else{
            price += (newArray[i].volume*newArray[i].price)
            remainingVolume = remainingVolume-newArray[i].volume
        }
    }
    if(remainingVolume!==0) return `Could not fullfill the order, but ${volume-remainingVolume} is available
    at the price of ${price/(volume-remainingVolume)} per MW`
    return (price/volume)
}

const main = () => {
    const result = helper(orderArray, 1000)
    console.log(result)
};

/* Exports mainly for testing */
module.exports = {
    helper,
    orderArray,
    sortFunction
}

main()