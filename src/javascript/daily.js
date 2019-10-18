const functions = {

    // --- Daily 5 - 16 OCT 2019 ---

    // More Arrays!
    //slice

    sliceFunction: (array) => {
        return array.slice(2);
    },

    //splice

    spliceFunction: (array) => {
        array.splice(2);
        return array;
    },

    //forEach

    forEachFunction: (array) => {
        let myNewArray = [];
        array.forEach(item => {
            let obj = item + "!";
            myNewArray.push(obj);
        }); return myNewArray;
    },

    //map

    mapFunction: () => {
        const simpsons = [
            { name: 'Homer Simpson', age: 20 },
            { name: 'Joey JoeJoe', age: 30 },
            { name: 'Larleen Lumpkin', age: 40 },
            { name: 'BleedingGums Murphy', age: 50 }
        ];
        const simpsonsAge = simpsons.map(simpsons => simpsons.age);
        return simpsonsAge;
    },

    //reduce

    reduceFunction: (array) => {
        const arraySum = array.reduce((total, amount) => 
            total + amount);
            return arraySum;
    },

    //filter

    filterFunction: (array) => {
        const arrayFiltered = array.filter(array => array > 10);
            return arrayFiltered;
    },

    //sort

    sortFunction: (array) => {
        const arraySorted = array.sort();
            return arraySorted;
    },

    // --- Daily 4 - 16 OCT 2019 ---
    // Loops
    // for

    forLoop: (array) => {
        let myNewArray = [];
        for (var i = 0; i < array.length; i++) {
            myNewArray += array[i] * 2;
        } return myNewArray;
    },

    // while

    whileLoop: (array) => {
        let textOutput = "";
        let i = 0;
        while (i < array.length) {
            textOutput += "Array item is " + array[i];
            i++;
        } return textOutput;
    },

    // do while

    doWhileLoop: (array) => {
        let myEvenNewerArray = [];
        let i = 0;
        do {
            myEvenNewerArray += "Array item x 2 is " + array[i] * 2;
            i++;
        }
        while (i < array.length);
        return myEvenNewerArray;
    },

    // //for in

    forInLoop: (txt) => {
        const myProps = {

            prop1: "this is my prop",
            prop2: "there are many like it",
            prop3: "but this one is mine"

        }
        let propVar = "";
        let i;
        for (i in myProps) {
            propVar += myProps[i] + txt + " ";
        } return propVar;
    },

    //for of

    forOfLoop: (array) => {
        for (const x of array) {
            console.log(x);
        }
    },

    // --- Daily 3 ---
    // Write a function to format an email based on an object / map

    makeEmailObj: (name) => {
        return String(name.fname.toLowerCase() + "." + name.lname.toLowerCase() + "@evolveu.ca");
    },

    // --- Daily 2 ---
    //Write a function to format an email based on an array.

    makeEmailArr: (name) => {
        return String(name[0].toLowerCase() + "." + name[1].toLowerCase() + "@evolveu.ca");
    },

    // --- Daily 1 ---

    /*	
	Write the function that will create this output:

        *** the two values are not the same:
            p1--> a
            p2--> b
        *** the two values are not the same:
            p1--> 1
            p2--> 2
        *** the two values are not the same:
            p1--> 2
            p2--> 2
    */

    // Write the function after this comment ---

    assertEquals: (p1, p2) => {
        if (p1 === p2)
            return true;
        else console.log("***the two values are not the same:\n   p1--> " + p1 + "\n   p2--> " + p2);
        return false;
    }

    // and before this comment ---
};

export default functions;





