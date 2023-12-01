const getnumber = (s) => {
    const result = [...s.matchAll(/\d/ig)];
    const len = result.length;
    const n1 = result[0][0];
    if(len > 1) {
        const n2 = result[len - 1][0];
        return Number(`${n1}${n2}`)
    } else if(len === 1) {
        return Number(`${n1}`)
    } else {
        return 0;
    }
}

const strMapnumber = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
}

const transform = (s) => {
    // todo: match logic has some issue.
    // todo: in here we need to consider the order of replace logic.
    const newStr = s.toLowerCase().replace(/(one|two|three|four|five|six|seven|eight|nine)/ig, (matchStr) => {
        return strMapnumber[matchStr]
    })
    
    return newStr;
};

const run  = (s) => s.split("\n").map(i => transform(i)).map((i) => getnumber(i)).reduce((a, b) => (a + b), 0);

