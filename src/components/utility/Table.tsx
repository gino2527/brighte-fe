import { FC, ReactNode } from 'react';

export interface TableHeader {
  key: string;
  label: string;
  render?: (v: TableRow) => ReactNode;
};

export interface TableRow {
  [key: string]: any;
};

interface TableProps {
  headers: TableHeader[];
  values: TableRow[];
};

const Table: FC<TableProps> = ({
  headers,
  values,
}) => (
  <table className="table">
    {headers.length > 0 && (
      <thead className="table__header">
        <tr>
          {headers.map(({ key, label }) => (
            <th key={key}>
              {label}
            </th>
          ))}
        </tr>
      </thead>
    )}
    <tbody className="table__body">
      {values.length > 0 && (
        values.map((v, vIndex) => (
          <tr key={`v-${vIndex + 1}`}>
            {headers.map(({ key, render }) => (
              <td key={`v-${vIndex + 1}-${key}`}>
                {render?.(v) ?? v[key]}
              </td>
            ))}
          </tr>
        ))
      )}
    </tbody>
  </table>
);

export default Table;
