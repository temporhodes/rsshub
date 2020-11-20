import pinyin from 'pinyin';

const isASCII = (str) => /^[\x00-\x7F]*$/.test(str);

export function objectToArray(obj) {
    const keys = Object.keys(obj).sort((a, b) => {
        const ia = isASCII(a[0]);
        const ib = isASCII(b[0]);
        if (ia && ib) {
            return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
        } else if (ia || ib) {
            return ia > ib ? -1 : 1;
        } else {
            return pinyin.compare(a, b);
        }
    });
    const result = [];
    for (let i = 0; i < keys.length; i++) {
        result.push({
            key: keys[i],
            value: obj[keys[i]],
        });
    }
    return result;
}
