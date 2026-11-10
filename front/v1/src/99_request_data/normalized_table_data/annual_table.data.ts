import type {
    NCellMap,
    NColumnMap,
    NSectionMap,
    NTable,
    NTableState,
} from '../../3_pages/AnnualIncomePage/AnnualCard/Table/entities/annual_table.entities';

const columnID25_1 = '2025job';
// const columnID25_2 = '2025job2';
// const columnID25_3 = '2025sber';
const columnID24_1 = '2024job';
// const columnID24_2 = '2024job1';

const cells: NCellMap = {
    'job24-jan': {id: 'job24-jan', value: '74700', columnId: columnID24_1},
    'job24-feb': {id: 'job24-feb', value: '78400', columnId: columnID24_1},
    'job24-mar': {id: 'job24-mar', value: '56230', columnId: columnID24_1},
    'job24-apr': {id: 'job24-apr', value: '69150', columnId: columnID24_1},
    'job24-may': {id: 'job24-may', value: '12900', columnId: columnID24_1},
    'job24-jun': {id: 'job24-jun', value: '76000', columnId: columnID24_1},
    'job24-jul': {id: 'job24-jul', value: '75000', columnId: columnID24_1},
    'job24-aug': {id: 'job24-aug', value: '86300', columnId: columnID24_1},
    'job24-sep': {id: 'job24-sep', value: '',      columnId: columnID24_1},
    'job24-oct': {id: 'job24-oct', value: '15000', columnId: columnID24_1},
    'job24-nov': {id: 'job24-nov', value: '76200', columnId: columnID24_1},
    'job24-dec': {id: 'job24-dec', value: '98600', columnId: columnID24_1},

    'job-jan': {id: 'job-jan', value: '74700', columnId: columnID25_1},
    'job-feb': {id: 'job-feb', value: '78400', columnId: columnID25_1},
    'job-mar': {id: 'job-mar', value: '56230', columnId: columnID25_1},
    'job-apr': {id: 'job-apr', value: '69150', columnId: columnID25_1},
    'job-may': {id: 'job-may', value: '12900', columnId: columnID25_1},
    'job-jun': {id: 'job-jun', value: '76000', columnId: columnID25_1},
    'job-jul': {id: 'job-jul', value: '75000', columnId: columnID25_1},
    'job-aug': {id: 'job-aug', value: '86300', columnId: columnID25_1},
    'job-sep': {id: 'job-sep', value: '',      columnId: columnID25_1},
    'job-oct': {id: 'job-oct', value: '15000', columnId: columnID25_1},
    'job-nov': {id: 'job-nov', value: '76200', columnId: columnID25_1},
    'job-dec': {id: 'job-dec', value: '98600', columnId: columnID25_1},

    'job2-jan': {id: 'job2-jan', value: '100', columnId: '2025job2'},
    'job2-feb': {id: 'job2-feb', value: '',    columnId: '2025job2'},
    'job2-mar': {id: 'job2-mar', value: '',    columnId: '2025job2'},
    'job2-apr': {id: 'job2-apr', value: '210', columnId: '2025job2'},
    'job2-may': {id: 'job2-may', value: '350', columnId: '2025job2'},
    'job2-jun': {id: 'job2-jun', value: '',    columnId: '2025job2'},
    'job2-jul': {id: 'job2-jul', value: '750', columnId: '2025job2'},
    'job2-aug': {id: 'job2-aug', value: '540', columnId: '2025job2'},
    'job2-sep': {id: 'job2-sep', value: '',    columnId: '2025job2'},
    'job2-oct': {id: 'job2-oct', value: '370', columnId: '2025job2'},
    'job2-nov': {id: 'job2-nov', value: '80',  columnId: '2025job2'},
    'job2-dec': {id: 'job2-dec', value: '960', columnId: '2025job2'},

    'sber-jan': {id: 'sber-jan', value: '500000', columnId: '2025sber'},
    'sber-feb': {id: 'sber-feb', value: '510000', columnId: '2025sber'},
    'sber-mar': {id: 'sber-mar', value: '505000', columnId: '2025sber'},
    'sber-apr': {id: 'sber-apr', value: '530000', columnId: '2025sber'},
    'sber-may': {id: 'sber-may', value: '593000', columnId: '2025sber'},
    'sber-jun': {id: 'sber-jun', value: '570000', columnId: '2025sber'},
    'sber-jul': {id: 'sber-jul', value: '584000', columnId: '2025sber'},
    'sber-aug': {id: 'sber-aug', value: '588000', columnId: '2025sber'},
    'sber-sep': {id: 'sber-sep', value: '690000', columnId: '2025sber'},
    'sber-oct': {id: 'sber-oct', value: '',       columnId: '2025sber'},
    'sber-nov': {id: 'sber-nov', value: '',       columnId: '2025sber'},
    'sber-dec': {id: 'sber-dec', value: '',       columnId: '2025sber'},
};

const columns: NColumnMap = {
    '2025job':  {id: '2025job', name: 'My job', type: 'vsum', sectionID: '2025jobs'},
    // '2025job1': {id: '2025job1', name: 'My job2', type: 'vsum', sectionID: '2025jobs'},
    // '2025job11': {id: '2025job11', name: '3job 3', type: 'vsum', sectionID: '2025jobs'},
    '2025job2': {id: '2025job2', name: 'IP', type: 'vsum', sectionID: '2025jobs'},
    '2025sber': {id: '2025sber', name: 'sberbank', type: 'lastvalue', sectionID: '2025invests'},
    '2024job':  {id: '2024job', name: 'My job', type: 'vsum', sectionID: '2024jobs'},
    // '2024job1': {id: '2024job1', name: 'My job2', type: 'vsum', sectionID: '2024jobs'},
};

const sections: NSectionMap = {
    '2025jobs': {id: '2025jobs', name: 'jobs in 2025', tableID: 'nt2025'},
    '2025invests': {id: '2025invests', name: 'invest in 2025', tableID: 'nt2025'},
    '2024jobs': {id: '2024jobs', name: 'jobs in 2024', tableID: 'nt2024'},
};

const tables: NTable[] =[{id: 'nt2025', name: '2025'}, {id: 'nt2024', name: '2024'},]; 

const cellIDsOrder: Record<string, string[]> = {};
for (const key of Object.keys(cells)) {
    const columnID = cells[key].columnId;
    if (!cellIDsOrder[columnID]) {
        cellIDsOrder[columnID] = [];
    }
    cellIDsOrder[columnID].push(cells[key].id);
}

const columnIDsOrder: Record<string, string[]> = {};
for (const key of Object.keys(columns)) {
    const sectionID = columns[key].sectionID;
    if (!columnIDsOrder[sectionID]) {
        columnIDsOrder[sectionID] = [];
    }
    columnIDsOrder[sectionID].push(columns[key].id);
}

const sectionIDsOrder: Record<string, string[]> = {};
for (const key of Object.keys(sections)) {
    const tableID = sections[key].tableID;
    if (!sectionIDsOrder[tableID]) {
        sectionIDsOrder[tableID] = [];
    }
    sectionIDsOrder[tableID].push(sections[key].id);
}

export const tableData: NTableState = {
    cells: cells,
    columns: columns,
    sections: sections,
    tables: tables,

    sectionIDsOrder: sectionIDsOrder,
    columnIDsOrder: columnIDsOrder,
    cellIDsOrder: cellIDsOrder,
};
