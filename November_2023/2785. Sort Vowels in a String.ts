function sortVowels(s: string): string {
    const vowelMap: { [key: string]: number } = {
        A: 65,
        E: 69,
        I: 73,
        O: 79,
        U: 85,
        a: 97,
        e: 101,
        i: 105,
        o: 110,
        u: 117
    }
    let positionArr: number[] = []
    let vowelArr: string[] = []

    for (let i = 0; i < s.length; i++) {
        if (vowelMap.hasOwnProperty(s[i])) {
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