import { tableData as INIT_DATA} from '../../../../../99_request_data/normalized_table_data/annual_table.data';
import { 
    AddColumn,
    AddSection,
    DeleteColumn,
    DeleteSection,
    DragColumn,
    DragSection,
    // DeleteColumn, 
    // MoveColumn, 
    // SetCellValue,
    // SetColumnName,
 } from './annual_table.reducers';

console.log('ADD_COLUMN:');
AddColumn(INIT_DATA, {posID: '2025job1', type: 'vsum', name: '@@@@@@', sectionID: '2025jobs'});
// console.log('colorder:', INIT_DATA.columnIDsOrder);
// console.log('cellorder:', INIT_DATA.cellIDsOrder);
// console.log('columns:', INIT_DATA.columns);
// console.log('cells:', INIT_DATA.cells);

console.log('DRAG_COLUMN:');
DragColumn(INIT_DATA, {columnID: '2025job11', posID: '2025job'});
console.log('colorder:', INIT_DATA.columnIDsOrder);

console.log('DELETE_COLUMN:');
DeleteColumn(INIT_DATA, {columnID: '@'});
// console.log('colorder:', INIT_DATA.columnIDsOrder);
// console.log('cellorder:', INIT_DATA.cellIDsOrder);
// console.log('columns:', INIT_DATA.columns);
// console.log('cells:', INIT_DATA.cells);

console.log('DELETE_SECTION:');
DeleteSection(INIT_DATA, {sectionID: '@'});
// console.log('secOrder:', INIT_DATA.sectionIDsOrder);
// console.log('sections:', INIT_DATA.sections);
// console.log('colorder:', INIT_DATA.columnIDsOrder);
// console.log('columns:', INIT_DATA.columns);
// console.log('cellorder:', INIT_DATA.cellIDsOrder);
// console.log('cells:', INIT_DATA.cells);

console.log('DRAG_SECTION:');
DragSection(INIT_DATA, {sectionID: '2025invests', posID: '2025jobs'});
console.log('colorder:', INIT_DATA.sectionIDsOrder);

console.log('ADD_SECTION:');
AddSection(INIT_DATA, {posID: '2025jobs', columnName: 'binance', columnType: 'vsum', sectionName: 'crypto', tableID: 'nt2025'});
console.log('DATA:', INIT_DATA);


/*
// console.log(INIT_DATA.cells['job2-mar']);
SetCellValue(INIT_DATA, {id: 'job2-mar', value: '100000'});
console.log('>>>', INIT_DATA.cells['job2-mar']);
console.log();

console.log('>>>', INIT_DATA.columns['2025job2']);
SetColumnName(INIT_DATA, '2025job2', '@@@@@@');
console.log('>>>', INIT_DATA.columns['2025job2']);
console.log();

console.log(INIT_DATA.columns);
DeleteColumn(INIT_DATA, '2025job2');
console.log('>>>', INIT_DATA);
console.log();
*/
//npx tsx path
// npx tsx ./src/5_components/AnnualCard/Table/redusers/test-ntable.reducers.ts
