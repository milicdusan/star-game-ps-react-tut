class Util {
    static sum = (arrayToSum) => arrayToSum.reduce((acc, curr) => acc + curr, 0);

    static range = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i);

    static random = (min, max) => min + Math.floor(max * Math.random());

    static randomSumIn = (arr, max) => {
        const sets = [[]];
        const sums = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0, len = sets.length; j < len; j++) {
                const candidateSet = sets[j].concat(arr[i]);
                const candidateSum = this.sum(candidateSet);
                if (candidateSum <= max) {
                    sets.push(candidateSet);
                    sums.push(candidateSum);
                }
            }
        }
        return sums[this.random(0, sums.length)];
    };
}

export default Util;