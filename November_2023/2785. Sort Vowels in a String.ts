function sortVowels(s: string): string {
    let positionArr: number[] = []
    let vowelArr: string[] = []

    for (let i = 0; i < s.length; i++) {
        if ("AEIOUaeiou".includes(s[i])) {
            vowelArr.push(s[i])
            positionArr.push(i)
        }
    }
    vowelArr.sort()

    vowelArr.forEach((vowel, n)=>{
        s = s.substring(0,positionArr[n]) + vowel +  s.substring(positionArr[n]+1, s.length)
    })

    return s
};