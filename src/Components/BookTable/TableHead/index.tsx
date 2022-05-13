import React, {  } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import { IBookResponse } from '../../../Models/authorModels';
import useStyles from './_style';

interface HeadCell {
  disablePadding: boolean;
  id: keyof IBookResponse;
  label: string;
  numeric: boolean;
}

interface EnhancedTableProps {
  classes: ReturnType<typeof useStyles>;
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount: number;
}

const headCells: HeadCell[] = [
  { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
  { id: 'title', numeric: true, disablePadding: false, label: 'Book Title' },
  {
    id: 'description',
    numeric: true,
    disablePadding: false,
    label: 'Description',
  },
];

export default function EnhancedTableHead(props: EnhancedTableProps):JSX.Element {
  const { classes, onSelectAllClick, numSelected, rowCount } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
