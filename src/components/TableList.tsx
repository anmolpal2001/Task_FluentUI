// import * as React from "react";
// import {
//   FolderRegular,
//   EditRegular,
//   OpenRegular,
//   DocumentRegular,
//   PeopleRegular,
//   DocumentPdfRegular,
//   VideoRegular,
// } from "@fluentui/react-icons";
// import {
//   TableBody,
//   TableCell,
//   TableRow,
//   Table,
//   TableHeader,
//   TableHeaderCell,
//   TableCellLayout,
//   PresenceBadgeStatus,
//   Avatar,
//   makeStyles,
// } from "@fluentui/react-components";
// import { mergeStyles } from "@fluentui/react";

// const items = [
//   {
//     file: { label: "Meeting notes", icon: <DocumentRegular /> },
//     author: { label: "Max Mustermann", status: "available" },
//     lastUpdated: { label: "7h ago", timestamp: 1 },
//     lastUpdate: {
//       label: "You edited this",
//       icon: <EditRegular />,
//     },
//   },
//   {
//     file: { label: "Thursday presentation", icon: <FolderRegular /> },
//     author: { label: "Erika Mustermann", status: "busy" },
//     lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
//     lastUpdate: {
//       label: "You recently opened this",
//       icon: <OpenRegular />,
//     },
//   },
//   {
//     file: { label: "Training recording", icon: <VideoRegular /> },
//     author: { label: "John Doe", status: "away" },
//     lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
//     lastUpdate: {
//       label: "You recently opened this",
//       icon: <OpenRegular />,
//     },
//   },
//   {
//     file: { label: "Purchase order", icon: <DocumentPdfRegular /> },
//     author: { label: "Jane Doe", status: "offline" },
//     lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
//     lastUpdate: {
//       label: "You shared this in a Teams chat",
//       icon: <PeopleRegular />,
//     },
//   },
// ];

// const columns = [
//   { columnKey: "file", label: "File" },
//   { columnKey: "author", label: "Author" },
//   { columnKey: "lastUpdated", label: "Last updated" },
//   { columnKey: "lastUpdate", label: "Last update" },
// ];

// const useStyles = makeStyles({
//   row : {
//     height : "20px"
//   },
//   tableCell : {
//     height : "20px"
//   },
// })

// const tableStyle = () => {
//   return {
//     tableData : mergeStyles({
//       // '& tr' : {
//         '& td' : {
//           height : "100%"
//         }
//       // }
//     })
//   }
// }

// const TableList = () => {
//   const styles = useStyles();
//   const table = tableStyle();
//   return (
//     <Table arial-label="Default table" style={{ minWidth: "510px" }}>
//       <TableHeader style={{height : 10}}>
//         <TableRow className={styles.row}>
//           {columns.map((column) => (
//             <TableHeaderCell key={column.columnKey}>
//               {column.label}
//             </TableHeaderCell>
//           ))}
//         </TableRow>
//       </TableHeader>
//       <TableBody className={table.tableData}>
//         {items.map((item) => (
//           <TableRow key={item.file.label}>
//             <TableCell className={styles.tableCell}>
//               <TableCellLayout media={item.file.icon}>
//                 {item.file.label}
//               </TableCellLayout>
//             </TableCell>
//             <TableCell className={styles.tableCell}>
//               <TableCellLayout
//                 media={
//                   <Avatar
//                     aria-label={item.author.label}
//                     name={item.author.label}
//                     badge={{
//                       status: item.author.status as PresenceBadgeStatus,
//                     }}
//                   />
//                 }
//               >
//                 {item.author.label}
//               </TableCellLayout>
//             </TableCell>
//             <TableCell>{item.lastUpdated.label}</TableCell>
//             <TableCell>
//               <TableCellLayout media={item.lastUpdate.icon}>
//                 {item.lastUpdate.label}
//               </TableCellLayout>
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   );
// };

// export default TableList;
import * as React from "react";
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
import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  TableCellLayout,
  PresenceBadgeStatus,
  Avatar,
  makeStyles,
} from "@fluentui/react-components";
import {
  ContextualMenuItemType,
  IContextualMenuItem,
  IContextualMenuProps,
} from "@fluentui/react/lib/ContextualMenu";
import { mergeStyles } from "@fluentui/react";
import { DefaultButton, IconButton } from "@fluentui/react/lib/Button";

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
  { columnKey: "iconButton", label: "" },
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

const TableList = () => {
  const styles = useStyles();
  const table = tableStyle();

  const [visibleColumns, setVisibleColumns] = React.useState(
    columns.reduce((acc, col) => ({ ...acc, [col.columnKey]: true }), {})
  );
  const [expandedRows, setExpandedRows] = React.useState({});

  const onToggleSelect = React.useCallback(
    (
      ev?: React.MouseEvent<HTMLButtonElement>,
      item?: IContextualMenuItem
    ): void => {
      ev && ev.preventDefault();

      if (item) {
        setVisibleColumns({
          ...visibleColumns,
          [item.key]:
            visibleColumns[item.key] === undefined
              ? true
              : !visibleColumns[item.key],
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
            {columns.map(
              (column) =>
                visibleColumns[column.columnKey] && (
                  <TableHeaderCell
                    key={column.columnKey}
                    style={{
                      width: column.columnKey === "iconButton" ? 40 : "auto",
                    }}
                  >
                    {column.label}
                  </TableHeaderCell>
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
                          iconName: expandedRows[item.file.label]
                            ? "ChevronDown"
                            : "ChevronRight",
                        }}
                        onClick={() => toggleRowExpansion(item.file.label)}
                        ariaLabel="Toggle subitems"
                        style={{ minWidth: "auto", padding: 0, marginRight: 0 }}
                      />
                    )}
                  </TableCell>
                )}
                {visibleColumns.file && (
                  <TableCell className={styles.tableCell}>
                    <TableCellLayout media={item.file.icon}>
                      {item.file.label}
                    </TableCellLayout>
                  </TableCell>
                )}
                {visibleColumns.author && (
                  <TableCell className={styles.tableCell}>
                    <TableCellLayout
                      media={
                        <Avatar
                          aria-label={item.author.label}
                          name={item.author.label}
                          badge={{
                            status: item.author.status as PresenceBadgeStatus,
                          }}
                        />
                      }
                    >
                      {item.author.label}
                    </TableCellLayout>
                  </TableCell>
                )}
                {visibleColumns.lastUpdated && (
                  <TableCell className={styles.tableCell}>
                    {item.lastUpdated.label}
                  </TableCell>
                )}
                {visibleColumns.lastUpdate && (
                  <TableCell className={styles.tableCell}>
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
              <TableCell className={styles.tableCell} style={{ paddingLeft: 20 }}>
                <TableCellLayout media={subItem.file.icon}>
                  {subItem.file.label}
                </TableCellLayout>
              </TableCell>
            )}
            {visibleColumns.author && (
              <TableCell className={styles.tableCell}>
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
              <TableCell className={styles.tableCell}>
                {subItem.lastUpdated.label}
              </TableCell>
            )}
            {visibleColumns.lastUpdate && (
              <TableCell className={styles.tableCell}>
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

export default TableList;
