/**
 * Проверяет число/а и считает сумму.
 * Округляет до целого числа.
 * @param exp - число или выражение.
 * @returns Результат выражения, если произошла ошибка вернет -1.
 * @example пример с выражением:100+345+45+10 -> 500
 * @example пример с выражением:100+34s -> -1
 */
export default function ValidateAndCalculate(exp: string) : string {
    if (exp === '') return '';

    const nums = exp.
        split('+').
        map(str => Number(str.trim().replaceAll(',', '.') || '0'));

        
        const sum = nums.reduce((acc, next) => {
        if (Number.isNaN(next) || acc === -1) {
            return -1;
        }
        return acc + Number(next);
    }, 0);

    if (sum === -1) return '-1';

    return Math.floor(sum).toString();
    // return sum.toFixed(2);
}
