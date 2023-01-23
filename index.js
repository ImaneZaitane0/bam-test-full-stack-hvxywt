// Import stylesheets
import './helpers/style.css';
import * as helper from './helpers/helpers.js';

// Imane ZAITANE


function solutionExercice1(N) {
    var res = "EXERCICE 1"
    let last = N;
    while (true) {
        let isIncreasing = true;
        let numString = last.toString();
        for(let i = 0; i < numString.length - 1; i++){
            if (numString[i] > numString[i+1]){
                isIncreasing = false;
                break;
            }
        }
        if (isIncreasing){
            return last;
        }
        last--;
    }
    return res
}

function solutionExercice2(L) {
    var res = "EXERCICE 2"
    let min = 1;
    const set = new Set(L);
    while (set.has(min)){
        min++
    }
    return min;
    return res
}
function solutionExercice3(L) {
    var res = "EXERCICE 3"
    const counts = {};
    for (let i = 0; i < L.length; i++){
        counts[L[i]] = (counts[L[i]] || 0) + 1;
    }
    for (const key in counts){
        if (counts[key] === 1){
            return key;
        }
    }    
    return null;
    return res
}

helper.displayOnHtml(solutionExercice1(1000),'1')
helper.displayOnHtml(solutionExercice2([1,4,7,5,3,6,3]),'2')
helper.displayOnHtml(solutionExercice3([1,5,3,6,4,3,1,5,4]),'3')