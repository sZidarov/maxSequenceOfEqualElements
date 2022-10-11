function maxSequenceOfEqualElements (inputArray){
    let inputArrayLength = inputArray.length;
    let maxSequence = 0;
    let lastElementOfMaxSequenceIndex=0;
    
    for (let i = 0; i < inputArrayLength; i++){
        let currentSequence = 1;
        for ( let j = i+1; j<inputArrayLength;j++){
            if (inputArray[i]==inputArray[j]){
                currentSequence++;
            }else {
                break;
            }
            if (maxSequence<currentSequence){
                maxSequence=currentSequence;
                lastElementOfMaxSequenceIndex = j;
            }
        }
    }
    //console.log(maxSequence);
    //console.log(lastElementOfMaxSequenceIndex);
    let result = '';
    for (let k = lastElementOfMaxSequenceIndex; k > lastElementOfMaxSequenceIndex - maxSequence;k--){
        result+=inputArray[k]+' ';
    }
    console.log(result);
}
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);