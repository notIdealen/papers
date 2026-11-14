export default function IsDigitInput(num: string): boolean {
    if (num === '') {
        return true;
    }
    const d = num.at(-1);
    return ' +0123456789'.includes(d!);
}
