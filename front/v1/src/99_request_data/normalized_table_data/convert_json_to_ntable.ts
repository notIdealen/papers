import type { NTablesState, NCellMap, NColumnMap, NSectionMap, NColumnResult, NSectionResult, NTableResult, NTableMap } from '../../3_pages/AnnualIncomePage/AnnualCard/Table/entities/annual_table.entities';
import type { Table } from '../../2_entities/tables.entities';
import {TABLES} from '../table_data/data';

const json = JSON.stringify(TABLES);

function ConvertJSONToNData(json: string): NTablesState {
    const tables = JSON.parse(json) as Table[];

    
    const nTables: NTableMap = {};
    const tablesOrder: string[] = [];
    
    const sections: NSectionMap = {};
    const sectionIDsOrder: Record<string, string[]> = {};
    
    const columns: NColumnMap = {};
    const columnIDsOrder: Record<string, string[]> = {};
    
    const cells: NCellMap = {};
    const cellIDsOrder: Record<string, string[]> = {};
    
    const columnResult: NColumnResult = {};
    const sectionResults: NSectionResult = {};
    const tableResult: NTableResult = {};

    tables.forEach(table => {
        tablesOrder.push(table.id);
        nTables[table.id] = {name: table.name};

        table.sections.forEach(section => {
            sections[section.id] = {name: section.name, tableID: table.id, isIncludeInCalc: section.isIncludeInCalc};
            sectionIDsOrder[table.id] ??= [];
            sectionIDsOrder[table.id].push(section.id);
            
            section.columns.forEach(column => {
                columns[column.id] = {name: column.name, type: column.type, sectionID: section.id};
                columnIDsOrder[section.id] ??= [];
                columnIDsOrder[section.id].push(column.id);
                columnResult[column.id] = '';

                switch (column.type) {
                    case 'vsum': {
                        let sum: number = 0;
        
                        column.cells.forEach(cell => {
                            cells[cell.id] = {value: cell.value, columnID: column.id};
                            cellIDsOrder[column.id] ??= [];
                            cellIDsOrder[column.id].push(cell.id);
                            sum += Number(cell.value);
                        });
                        
                        columnResult[column.id] = String(sum);
                        break;
                    }
                    case 'lastvalue': {
                        column.cells.forEach(cell => {
                            cells[cell.id] = {value: cell.value, columnID: column.id};
                            cellIDsOrder[column.id] ??= [];
                            cellIDsOrder[column.id].push(cell.id);
                            columnResult[column.id] = cell.value !== '' ? cell.value : columnResult[column.id];
                        });
                        break;
                    }
                }
            });

            for (let i = 0; i < 12; i++) {
                const sectionSum = columnIDsOrder[section.id].reduce((acc, columnID) => {
                   const cellIDs = cellIDsOrder[columnID];
                   const cellID = cellIDs[i];
                   return acc + Number(cells[cellID].value);
                }, 0);
                
                sectionResults[section.id] ??= [];
                sectionResults[section.id].push(String(sectionSum));
            }
            
            const sectionSum = columnIDsOrder[section.id].reduce((acc, columnID) => {
                return acc + Number(columnResult[columnID]);
            }, 0);
            sectionResults[section.id].push(String(sectionSum));
        });

        for (let i = 0; i < 13; i++) {
            const total = sectionIDsOrder[table.id].reduce((acc, sectionID) => {
                if (!sections[sectionID].isIncludeInCalc) return acc;
                const value = sectionResults[sectionID][i];
                return acc + Number(value);
            }, 0);
            tableResult[table.id] ??= [];
            tableResult[table.id].push(String(total));
        }
        
        // const totalSum = sectionIDsOrder[table.id].reduce((acc, sectionID) => {
        //     return acc + Number(sectionResults[sectionID]);
        // }, 0);
        // tableResult[table.id].push(String(totalSum));
    });
    return {
        tables: nTables,
        tablesOrder: tablesOrder,
        tableResult: tableResult,
        sections: sections,
        sectionIDsOrder: sectionIDsOrder,
        sectionResults: sectionResults,
        columns: columns,
        columnIDsOrder: columnIDsOrder,
        columnResult: columnResult,
        cells: cells,
        cellIDsOrder: cellIDsOrder,
    };
}

export const NTABLESTATE = ConvertJSONToNData(json);
