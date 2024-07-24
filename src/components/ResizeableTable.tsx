import * as React from "react";
import { TableBody, TableCell, TableRow, Table, TableHeader, TableHeaderCell, TableCellLayout, PresenceBadgeStatus, Avatar, makeStyles } from "@fluentui/react-components";
import { DefaultButton, IconButton } from "@fluentui/react/lib/Button";
// import { ResizableHeaderCell } from './ResizableHeaderCell'; // Import the ResizableHeaderCell component
import {
  FolderRegular,
  EditRegular,
  OpenRegular,
  DocumentRegular,
  PeopleRegular,
  DocumentPdfRegular,
  VideoRegular,
  ChevronDownRegular,
  ChevronRightRegular,
} from "@fluentui/react-icons";
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import { IContextualMenuItem, IContextualMenuProps, mergeStyles } from "@fluentui/react";

export const ResizableHeaderCell = ({ width, onResize, children }) => (
  <ResizableBox
    width={width}
    height={40}
    minConstraints={[50, 40]} // Minimum width and height constraints
    maxConstraints={[500, 40]} // Maximum width and height constraints
    axis="x"
    onResize={onResize}
    resizeHandles={['e']}
    style={{ display: 'inline-block', position: 'relative', overflow: 'hidden' }}
  >
    <div style={{ width: '100%', overflow: 'hidden', whiteSpace: 'nowrap' }}>
      {children}
    </div>
  </ResizableBox>
);



const items = [
  {
    file: { label: "Meeting notes", icon: <DocumentRegular /> },
    author: { label: "Max Mustermann", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
    lastUpdate: {
      label: "You edited this",
      icon: <EditRegular />,
    },
    subItems: [
      {
        file: { label: "Subitem 1", icon: <DocumentRegular /> },
        author: { label: "Max Mustermann", status: "available" },
        lastUpdated: { label: "1h ago", timestamp: 1 },
        lastUpdate: {
          label: "You edited this",
          icon: <EditRegular />,
        },
      },
    ],
  },
  {
    file: { label: "Thursday presentation", icon: <FolderRegular /> },
    author: { label: "Erika Mustermann", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <OpenRegular />,
    },
    subItems: [],
  },
  // Add more items here...
];

const columns = [
  { columnKey: "file", label: "File" },
  { columnKey: "author", label: "Author" },
  { columnKey: "lastUpdated", label: "Last updated" },
  { columnKey: "lastUpdate", label: "Last update" },
];

const useStyles = makeStyles({
  row: {
    height: "20px",
  },
  tableCell: {
    height: "20px",
  },
});

const tableStyle = () => {
  return {
    tableData: mergeStyles({
      "& td": {
        height: "100%",
      },
    }),
  };
};

const TableListResize = () => {
  const styles = useStyles();
  const table = tableStyle();

  const [visibleColumns, setVisibleColumns] = React.useState(
    columns.reduce((acc, col) => ({ ...acc, [col.columnKey]: true }), {})
  );
  const [expandedRows, setExpandedRows] = React.useState({});
  const [columnWidths, setColumnWidths] = React.useState(
    columns.reduce((acc, col) => ({ ...acc, [col.columnKey]: 100 }), {}) // Default width
  );

  const onToggleSelect = React.useCallback(
    (ev?: React.MouseEvent<HTMLButtonElement>, item?: IContextualMenuItem): void => {
      ev && ev.preventDefault();

      if (item) {
        setVisibleColumns({
          ...visibleColumns,
          [item.key]: visibleColumns[item.key] === undefined ? true : !visibleColumns[item.key],
        });
      }
    },
    [visibleColumns]
  );

  const toggleRowExpansion = (itemLabel: string) => {
    setExpandedRows((prev) => ({
      ...prev,
      [itemLabel]: !prev[itemLabel],
    }));
  };

  const handleResize = (columnKey: string, event: any, { size }: any) => {
    setColumnWidths((prevWidths) => ({
      ...prevWidths,
      [columnKey]: size.width,
    }));
  };

  const menuProps: IContextualMenuProps = React.useMemo(
    () => ({
      shouldFocusOnMount: true,
      items: columns.map((column) => ({
        key: column.columnKey,
        text: column.label,
        canCheck: true,
        isChecked: visibleColumns[column.columnKey],
        onClick: onToggleSelect,
      })),
    }),
    [visibleColumns, onToggleSelect]
  );

  return (
    <div>
      <DefaultButton text="Select Columns" menuProps={menuProps} />

      <Table aria-label="Default table" style={{ minWidth: "510px" }}>
        <TableHeader style={{ height: 10 }}>
          <TableRow className={styles.row}>
            {visibleColumns.iconButton && (
              <TableHeaderCell style={{ width: 40 }}>
                <span> </span> {/* Empty header cell for icon button */}
              </TableHeaderCell>
            )}
            {columns.map(
              (column) =>
                visibleColumns[column.columnKey] && (
                  <ResizableHeaderCell
                    key={column.columnKey}
                    width={columnWidths[column.columnKey]}
                    onResize={(e, data) => handleResize(column.columnKey, e, data)}
                  >
                    {column.label}
                  </ResizableHeaderCell>
                )
            )}
          </TableRow>
        </TableHeader>
        <TableBody className={table.tableData}>
          {items.map((item) => (
            <React.Fragment key={item.file.label}>
              <TableRow className={styles.row}>
                {visibleColumns.iconButton && (
                  <TableCell className={styles.tableCell} style={{ width: 40 }}>
                    {item.subItems.length > 0 && (
                      <IconButton
                        iconProps={{
                          iconName: expandedRows[item.file.label] ? "ChevronDown" : "ChevronRight",
                        }}
                        onClick={() => toggleRowExpansion(item.file.label)}
                        ariaLabel="Toggle subitems"
                        style={{ minWidth: "auto", padding: 0, marginRight: 0 }}
                      />
                    )}
                  </TableCell>
                )}
                {visibleColumns.file && (
                  <TableCell className={styles.tableCell} style={{ width: columnWidths.file }}>
                    <TableCellLayout media={item.file.icon}>
                      {item.file.label}
                    </TableCellLayout>
                  </TableCell>
                )}
                {visibleColumns.author && (
                  <TableCell className={styles.tableCell} style={{ width: columnWidths.author }}>
                    <TableCellLayout
                      media={
                        <Avatar
                          aria-label={item.author.label}
                          name={item.author.label}
                          badge={{ status: item.author.status as PresenceBadgeStatus }}
                        />
                      }
                    >
                      {item.author.label}
                    </TableCellLayout>
                  </TableCell>
                )}
                {visibleColumns.lastUpdated && (
                  <TableCell className={styles.tableCell} style={{ width: columnWidths.lastUpdated }}>
                    {item.lastUpdated.label}
                  </TableCell>
                )}
                {visibleColumns.lastUpdate && (
                  <TableCell className={styles.tableCell} style={{ width: columnWidths.lastUpdate }}>
                    <TableCellLayout media={item.lastUpdate.icon}>
                      {item.lastUpdate.label}
                    </TableCellLayout>
                  </TableCell>
                )}
              </TableRow>
              {expandedRows[item.file.label] &&
                item.subItems.map((subItem) => (
                  <TableRow key={subItem.file.label} className={styles.row}>
                    {visibleColumns.iconButton && (
                      <TableCell className={styles.tableCell} style={{ width: 40 }} />
                    )}
                    {visibleColumns.file && (
                      <TableCell className={styles.tableCell} style={{ paddingLeft: 20, width: columnWidths.file }}>
                        <TableCellLayout media={subItem.file.icon}>
                          {subItem.file.label}
                        </TableCellLayout>
                      </TableCell>
                    )}
                    {visibleColumns.author && (
                      <TableCell className={styles.tableCell} style={{ width: columnWidths.author }}>
                        <TableCellLayout
                          media={
                            <Avatar
                              aria-label={subItem.author.label}
                              name={subItem.author.label}
                              badge={{ status: subItem.author.status as PresenceBadgeStatus }}
                            />
                          }
                        >
                          {subItem.author.label}
                        </TableCellLayout>
                      </TableCell>
                    )}
                    {visibleColumns.lastUpdated && (
                      <TableCell className={styles.tableCell} style={{ width: columnWidths.lastUpdated }}>
                        {subItem.lastUpdated.label}
                      </TableCell>
                    )}
                    {visibleColumns.lastUpdate && (
                      <TableCell className={styles.tableCell} style={{ width: columnWidths.lastUpdate }}>
                        <TableCellLayout media={subItem.lastUpdate.icon}>
                          {subItem.lastUpdate.label}
                        </TableCellLayout>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableListResize;


