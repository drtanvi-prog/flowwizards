/* Desktop grid config  (9 cols × 3 rows) */
export const GRID_POS = {
  zapier: { row: 1, col: 1, colSpan: 1 },
  hubspot: { row: 1, col: 3, colSpan: 1 },
  typeform: { row: 1, col: 5, colSpan: 1 },
  jotform: { row: 1, col: 9, colSpan: 1 },
  activecampaign: { row: 2, col: 2, colSpan: 1 },
  pipedrive: { row: 2, col: 7, colSpan: 2 },
  keap: { row: 3, col: 1, colSpan: 1 },
  airtable: { row: 3, col: 4, colSpan: 2 },
  make: { row: 3, col: 8, colSpan: 2 },
};

export function buildCells(posMap, cols, rows) {
  const spanned = new Set();
  const toolAt = {};
  Object.entries(posMap).forEach(([id, p]) => {
    toolAt[`${p.row}-${p.col}`] = id;
    for (let c = p.col + 1; c < p.col + (p.colSpan || 1); c++) {
      spanned.add(`${p.row}-${c}`);
    }
  });
  const cells = [];
  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      if (spanned.has(`${r}-${c}`)) continue;
      const id = toolAt[`${r}-${c}`];
      cells.push(id ? { type: "tool", id, colSpan: posMap[id].colSpan || 1 } : { type: "empty" });
    }
  }
  return cells;
}

export const CELLS = buildCells(GRID_POS, 9, 3);

/* Mobile grid config  (3 cols × 6 rows) */
export const MOBILE_GRID_POS = {
  zapier: { row: 1, col: 1, colSpan: 1 },
  hubspot: { row: 1, col: 3, colSpan: 1 },
  typeform: { row: 2, col: 2, colSpan: 1 },
  jotform: { row: 3, col: 1, colSpan: 1 },
  activecampaign: { row: 3, col: 3, colSpan: 1 },
  pipedrive: { row: 4, col: 1, colSpan: 2 },
  keap: { row: 5, col: 3, colSpan: 1 },
  airtable: { row: 5, col: 1, colSpan: 2 },
  make: { row: 6, col: 2, colSpan: 2 },
};

export const MOBILE_CELLS = buildCells(MOBILE_GRID_POS, 3, 6);
