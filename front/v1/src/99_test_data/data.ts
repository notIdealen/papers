import type {Table, Column, Cell} from '../2_entities/Table';

const cellsJob: Cell[] = [
    {id: 'job-jan', value: '74700'},
    {id: 'job-feb', value: '78400'},
    {id: 'job-mar', value: '56230'},
    {id: 'job-apr', value: '69150'},
    {id: 'job-may', value: '112900'},
    {id: 'job-jun', value: '76000'},
    {id: 'job-jul', value: '75000'},
    {id: 'job-aug', value: '86300'},
    {id: 'job-sep', value: ''},
    {id: 'job-oct', value: '150000'},
    {id: 'job-nov', value: '76200'},
    {id: 'job-dec', value: '98600'},
];
//953480
const colJob: Column = {
    id: 'job',
    type: 'vsum',
    name: 'My Job',
    cells: cellsJob
};

const cellsSB: Cell[] = [
    {id: 'sber-jan', value: '500000'},
    {id: 'sber-feb', value: '510000'},
    {id: 'sber-mar', value: '505000'},
    {id: 'sber-apr', value: '530000'},
    {id: 'sber-may', value: '593000'},
    {id: 'sber-jun', value: '570000'},
    {id: 'sber-jul', value: '584000'},
    {id: 'sber-aug', value: '588000'},
    {id: 'sber-sep', value: '690000'},
    {id: 'sber-oct', value: ''},
    {id: 'sber-nov', value: ''},
    {id: 'sber-dec', value: ''},
];

const colSB: Column = {
    id: 'sber',
    type: 'lastvalue',
    name: 'Sberbank',
    cells: cellsSB
};

const cellsT: Cell[] = [
    {id: 't-jan', value: ''},
    {id: 't-feb', value: ''},
    {id: 't-mar', value: ''},
    {id: 't-apr', value: ''},
    {id: 't-may', value: ''},
    {id: 't-jun', value: '456'},
    {id: 't-jul', value: ''},
    {id: 't-aug', value: ''},
    {id: 't-sep', value: ''},
    {id: 't-oct', value: ''},
    {id: 't-nov', value: ''},
    {id: 't-dec', value: ''},
];

const colT: Column = {
    id: 'tbank',
    type: 'lastvalue',
    name: 'TBank',
    cells: cellsT
};

const t2025: Table = {
    id: 't2025',
    year: '2025',
    columns: [colJob, colSB,colT],
};

const cellsJob24: Cell[] = [
    {id: 'job-jan-2024', value: '74700'},
    {id: 'job-feb-2024', value: '78400'},
    {id: 'job-mar-2024', value: '56230'},
    {id: 'job-apr-2024', value: '69150'},
    {id: 'job-may-2024', value: '112900'},
    {id: 'job-jun-2024', value: ''},
    {id: 'job-jul-2024', value: '75000'},
    {id: 'job-aug-2024', value: '86300'},
    {id: 'job-sep-2024', value: ''},
    {id: 'job-oct-2024', value: '90000'},
    {id: 'job-nov-2024', value: '95400'},
    {id: 'job-dec-2024', value: '98600'},
];

const colJob24: Column = {
    id: 'job24',
    type: 'vsum',
    name: 'My Job',
    cells: cellsJob24
};

const cellsSB24: Cell[] = [
    {id: 'sber-jan24', value: '500000'},
    {id: 'sber-feb24', value: '510000'},
    {id: 'sber-mar24', value: '505000'},
    {id: 'sber-apr24', value: '530000'},
    {id: 'sber-may24', value: '593000'},
    {id: 'sber-jun24', value: '570000'},
    {id: 'sber-jul24', value: '584000'},
    {id: 'sber-aug24', value: '588000'},
    {id: 'sber-sep24', value: '690000'},
    {id: 'sber-oct24', value: ''},
    {id: 'sber-nov24', value: ''},
    {id: 'sber-dec24', value: ''},
];

const colSB24: Column = {
    id: 'sber24',
    type: 'lastvalue',
    name: 'Sberbank',
    cells: cellsSB24
};

const cellsT24: Cell[] = [
    {id: 't-jan24', value: ''},
    {id: 't-feb24', value: ''},
    {id: 't-mar24', value: ''},
    {id: 't-apr24', value: ''},
    {id: 't-may24', value: ''},
    {id: 't-jun24', value: '456'},
    {id: 't-jul24', value: ''},
    {id: 't-aug24', value: ''},
    {id: 't-sep24', value: '9999'},
    {id: 't-oct24', value: ''},
    {id: 't-nov24', value: ''},
    {id: 't-dec24', value: ''},
];

const colT24: Column = {
    id: 'tbank24',
    type: 'lastvalue',
    name: 'TBank',
    cells: cellsT24
};

const t2024: Table = {
    id: 't2024',
    year: '2024',
    columns: [colJob24, colSB24,colT24],
};

const annualTables: Table[] = [t2024, t2025]; 
export {annualTables}; 

