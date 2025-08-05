const bikes = [
    { ID: "BIKE1", BIKENAME: "RE Classic 100 cc", SEGEMENT: "CLASSIC", CC: '100' },
    { ID: "BIKE2", BIKENAME: "RE Classic 350 cc", SEGEMENT: "CLASSIC", CC: '200' },
    { ID: "BIKE3", BIKENAME: "RE GT 650 cc", SEGEMENT: "CAFERACER", CC: '100' },
    { ID: "BIKE4", BIKENAME: "RE GT 650 cc", SEGEMENT: "CAFERACER", CC: '200' },
    { ID: "BIKE5", BIKENAME: "RE THUNDER", SEGEMENT: "THUNDER", CC: '100' },
    { ID: "BIKE6", BIKENAME: "RE GT 650 cc", SEGEMENT: "CAFERACER", CC: '100' },
    { ID: "BIKE7", BIKENAME: "RE THUNDER", SEGEMENT: "THUNDER", CC: '200' },
    { ID: "BIKE8", BIKENAME: "RE HIMALYAN", SEGEMENT: "HIMALAYAN", CC: '100' }
]


let bikeSegments = bikes.reduce((acc, curr) => {

    if (acc[curr.SEGEMENT]) {
        acc[curr.SEGEMENT] = [...acc[curr.SEGEMENT], curr]
    } else {
        acc[curr.SEGEMENT] = [curr];
    }

    return acc;
}, {});


let bikeSegmentsCC = bikes.reduce((acc, curr) => {

    if (acc[curr.SEGEMENT]) {
        if (acc[curr.SEGEMENT][curr.CC]) {
            acc[curr.SEGEMENT][curr.CC] = [...acc[curr.SEGEMENT][curr.CC], curr]
        } else {
            acc[curr.SEGEMENT][curr.CC] = [curr];
        }
    } else {
        acc[curr.SEGEMENT] = {
            [curr.CC]: [curr]
        };
    }

    return acc;
}, {});

const getBikeByCC = (cc) => {
    let bikeSegmentsByCC = bikes.reduce((acc, curr) => {

        if (acc[curr.SEGEMENT]) {
            acc[curr.SEGEMENT] = [...acc[curr.SEGEMENT], curr].filter(e => e.CC == cc);
        } else {
            if (curr.CC == cc) {
                acc[curr.SEGEMENT] = [curr];
            }
        }

        return acc;
    }, {});

    return bikeSegmentsByCC;
}

const filterBikes = (...args) => {

    let cc, segment;

    switch (args.length) {
        case 2:
            if (typeof (args[0]) == 'string') {
                segment = args[0];
                cc = args[1];
            } else {
                cc = args[0];
                segment = args[1];
            }

            return bikeSegments[segment].filter(e => e.CC == cc);
        case 1:
            if (typeof (args[0]) == 'string') segment = args[0];
            else cc = args[0]

            if (cc) {
                return bikes.filter(e => e.CC == cc);
            }

            return bikeSegments[segment];
        default:
            return 'Only two parameters allowed!';
    }
}

const filterBikesByObject = (...args) => {
    let cc, segment;

    switch (args.length) {
        case 0:
            return bikeSegments;
        case 2:
            if (typeof (args[0]) == 'string') {
                segment = args[0];
                cc = args[1];
            } else {
                cc = args[0];
                segment = args[1];
            }

            return {
                [segment]: bikeSegments[segment].filter(e => e.CC == cc)
            };
        case 1:
            if (typeof (args[0]) == 'string') segment = args[0];
            else cc = args[0]

            if (cc) {
                return getBikeByCC(cc);
            }

            return { [segment]: bikeSegments[segment] };
        default:
            return 'Only two parameters allowed!';
    }
}

const filterBikesByObjectGrouped = (...args) => {
    let cc, segment;

    switch (args.length) {
        case 0:
            return bikeSegments;
        case 2:
            if (typeof (args[0]) == 'string') {
                segment = args[0];
                cc = args[1];
            } else {
                cc = args[0];
                segment = args[1];
            }

            return {
                [segment]: {
                    [cc]: bikeSegmentsCC[segment][cc]
                }
            }
        case 1:
            if (typeof (args[0]) == 'string') segment = args[0];
            else cc = args[0]

            if (cc) {
                const bikesByCC = {}
                for (const [key, value] of Object.entries(bikeSegmentsCC)) {
                    bikesByCC[key] = {
                        [cc]: value[cc]
                    };
                }
                return bikesByCC;
            }

            return {
                [segment]: bikeSegmentsCC[segment]
            }
        default:
            return 'Only two parameters allowed!';
    }
}


// console.dir(filterBikesByObjectGrouped('CLASSIC', 200), { depth: null })
// console.dir(filterBikesByObjectGrouped(100, 'CLASSIC'), { depth: null })
// console.dir(filterBikesByObjectGrouped(200), { depth: null })
console.dir(filterBikesByObjectGrouped('CAFERACER'), { depth: null })
// console.dir(filterBikesByObject(200), { depth: null })

// console.log(bikeSegments);
// console.log(bikeSegmentsCC);
// let num = 200;
// console.log(bikeSegmentsCC.CAFERACER[num]);

// const obj = {

// };

// const val = 'data'
// const va = 'sum'

// // obj[val][va] = "correct";
// obj[val] = { [va]: "correct" };


// console.log(obj.id ? 'true' : 'false')
// console.log(obj[val][va])