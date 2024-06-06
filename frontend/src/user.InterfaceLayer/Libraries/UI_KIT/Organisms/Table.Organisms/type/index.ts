export interface TableBlockProps {
  title?: string;
  lengthItems?: string;
  subtitle?: string;
  thead?: string[];
  tbody?: string[][];
  tbodyStyle?: (cell: string, cellIndex: number) => string;
}
