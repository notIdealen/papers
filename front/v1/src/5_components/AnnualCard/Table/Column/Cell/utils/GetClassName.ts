export default function GetClassName(cellType: string, isInput: boolean): string {
    let className: string;
    className = isInput ? 'input ' : '';

    switch (cellType) {
        case 'header':
            className += 'header';
            break;
        case 'data':
            className += 'cell';
            break;
        case 'footer':
                className += 'footer';
                break;
        default:
            className = 'unknown';
    }
    return className;
}
