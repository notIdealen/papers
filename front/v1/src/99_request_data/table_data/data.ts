import { v4 } from 'uuid';
import type {Table, Column, Cell, ColumnType, Section} from '../../2_entities/tables.entities';

function CreateCellsArray(): Cell[] {
    const cells: Cell[] = [];
    for (let i = 0; i < 12; i++) {
        const cellID = v4();
        const value = String(Math.floor(Math.random() * 100) * 100);
        cells.push({id: cellID, value: value});
    }
    return cells; 
}

function CreateColumn(name: string, type: ColumnType, cells: Cell[]): Column {
    return {id: v4(), name: name, type: type, cells: cells,};
}

function CreateSection(name: string, columns: Column[], isInclude: boolean): Section {
    return {id: v4(), name: name, columns: columns, isIncludeInCalc: isInclude};
}

const cellsJob_2025 = CreateCellsArray();
const cellsJob2_2025: Cell[] = CreateCellsArray();
const colJob_2025 = CreateColumn('JOB', 'vsum', cellsJob_2025);
const colJob2_2025 = CreateColumn('JOB2', 'vsum', cellsJob2_2025);
const sectionJobs_2025 = CreateSection('JOBS', [colJob_2025, colJob2_2025], false);

const cellsSber_2025: Cell[] = CreateCellsArray();
const cellsT_2025: Cell[] = CreateCellsArray();
const colSber_2025 = CreateColumn('SBER', 'lastvalue', cellsSber_2025);
const colT_2025 = CreateColumn('TBANK', 'lastvalue', cellsT_2025);
const sectionInvests_2025 = CreateSection('INVEST', [colSber_2025, colT_2025], true);

const cellsCrypto_2025: Cell[] = CreateCellsArray();
const colCrypto_2025 = CreateColumn('BitGet', 'lastvalue', cellsCrypto_2025);
const sectionCrypto_2025 = CreateSection('CRYPTO', [colCrypto_2025], true);

const t2025: Table = {
    id: 't2025',
    name: '2025',
    sections: [sectionJobs_2025, sectionInvests_2025, sectionCrypto_2025],
};

const cellsJob_2024 = CreateCellsArray();
const cellsJob2_2024: Cell[] = CreateCellsArray();
const colJob_2024 = CreateColumn('JOB', 'vsum', cellsJob_2024);
const colJob2_2024 = CreateColumn('JOB2', 'vsum', cellsJob2_2024);
const sectionJobs_2024 = CreateSection('JOBS', [colJob_2024, colJob2_2024], false);

const cellsSber_2024: Cell[] = CreateCellsArray();
const colSber_2024 = CreateColumn('SBER', 'lastvalue', cellsSber_2024);
const sectionInvests_2024 = CreateSection('INVEST', [colSber_2024], true);

const t2024: Table = {
    id: 't2024',
    name: '2024',
    sections: [sectionJobs_2024, sectionInvests_2024],
};

const TABLES: Table[] = [t2025, t2024]; 
export {TABLES}; 

