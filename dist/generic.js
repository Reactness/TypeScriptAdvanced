"use strict";
// // const cars: string[] = ['Ford', 'Audi']
// // const cars2: Array<string> = ['Ford', 'Audi']
//
// const promise: Promise<string> = new Promise(resolve => {
//     setTimeout(() => {
//        resolve('Promise resolved')
//     }, 2000)
// })
//
// promise.then(data => {
//     console.log(data.trim().toLowerCase())
// })
//
var get = Reflect.get;
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Denis' }, { age: 26 });
const merged2 = mergeObjects({ model: 'Ford' }, { year: 2010 });
function withCount(value) {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    };
}
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
///
const cars = ['Ford', 'Audi'];
//cars.shift()
const ford = {
    model: 'Ford',
    year: 2020
};
// ford.model = 'Ferrari'
