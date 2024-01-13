function minSteps(s: string, t: string): number {
    // anagram = same number n type of characters
    // goal is up ensure both strings use the same 

    let letterGoal: { [key:string]: number} = {}
    for(let i = 0; i < t.length; i++ ){
        if(t[i] in letterGoal){
            letterGoal[t[i]] += 1
        } else {
            letterGoal[t[i]] = 1
        }
    }

    for(let n = 0; n < t.length; n++ ){
        if(s[n] in letterGoal){
            letterGoal[s[n]] -= 1
        } else {
            letterGoal[s[n]] = -1
        }
    }

    let result = Object.values(letterGoal).reduce((acc, val) =>  {return(acc +  Math.abs(val))}, 0)/2

    return result
};