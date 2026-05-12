// Custom grid config for customTools (9 cols × 3 rows)
export const CUSTOM_GRID_POS = {
  custom1: { row: 1, col: 1, colSpan: 1 },
  custom2: { row: 1, col: 3, colSpan: 1 },
  custom3: { row: 1, col: 5, colSpan: 1 },
  custom4: { row: 1, col: 7, colSpan: 1 },
  custom5: { row: 1, col: 9, colSpan: 1 },
  custom6: { row: 2, col: 2, colSpan: 1 },
  custom7: { row: 2, col: 4, colSpan: 1 },
  custom8: { row: 2, col: 6, colSpan: 1 },
  custom9: { row: 2, col: 8, colSpan: 1 },
  custom10: { row: 3, col: 1, colSpan: 2 },
  custom11: { row: 3, col: 3, colSpan: 2 },
  custom12: { row: 3, col: 5, colSpan: 2 },
  custom13: { row: 3, col: 7, colSpan: 2 },
};

import { buildCells } from "./gridConfig";
export const CUSTOM_CELLS = buildCells(CUSTOM_GRID_POS, 9, 3);

// Mobile grid config (3 cols × 5 rows)
export const CUSTOM_MOBILE_GRID_POS = {
  custom1: { row: 1, col: 1, colSpan: 1 },
  custom2: { row: 1, col: 2, colSpan: 1 },
  custom3: { row: 1, col: 3, colSpan: 1 },
  custom4: { row: 2, col: 1, colSpan: 1 },
  custom5: { row: 2, col: 2, colSpan: 1 },
  custom6: { row: 2, col: 3, colSpan: 1 },
  custom7: { row: 3, col: 1, colSpan: 1 },
  custom8: { row: 3, col: 2, colSpan: 1 },
  custom9: { row: 3, col: 3, colSpan: 1 },
  custom10: { row: 4, col: 1, colSpan: 1 },
  custom11: { row: 4, col: 2, colSpan: 1 },
  custom12: { row: 4, col: 3, colSpan: 1 },
  custom13: { row: 5, col: 2, colSpan: 1 },
};
export const CUSTOM_MOBILE_CELLS = buildCells(CUSTOM_MOBILE_GRID_POS, 3, 5);
