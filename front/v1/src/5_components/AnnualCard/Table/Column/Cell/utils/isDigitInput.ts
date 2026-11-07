export default function IsDigitInput(d: string): boolean {
    if (d === '') {
        return true;
    }
    return '., +0123456789'.includes(d);
}
