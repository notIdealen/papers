import type { Cell, Column } from '../../../../2_entities/Table';

const annualTableIdPrefix: string = 'annualTableStub';

const cells: Cell[] = [
    {id: annualTableIdPrefix+'Jan', value: 'January'},
    {id: annualTableIdPrefix+'Feb', value: 'Febrary'},
    {id: annualTableIdPrefix+'Mar', value: 'March'},
    {id: annualTableIdPrefix+'Apr', value: 'April'},
    {id: annualTableIdPrefix+'May', value: 'May'},
    {id: annualTableIdPrefix+'Jun', value: 'June'},
    {id: annualTableIdPrefix+'Jul', value: 'July'},
    {id: annualTableIdPrefix+'Aug', value: 'August'},
    {id: annualTableIdPrefix+'Sep', value: 'September'},
    {id: annualTableIdPrefix+'Oct', value: 'October'},
    {id: annualTableIdPrefix+'Nov', value: 'November'},
    {id: annualTableIdPrefix+'Dec', value: 'Decemder'},
];

const ANNUAL_STUBCOLUMN: Column = {
    id: 'annualColumnStub',
    name: 'Month',
    type: 'static',
    cells: cells,
};

export {
    ANNUAL_STUBCOLUMN
};
