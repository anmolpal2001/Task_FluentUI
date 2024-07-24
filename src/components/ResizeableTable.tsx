// import * as React from "react";
// import { TableBody, TableCell, TableRow, Table, TableHeader, TableHeaderCell, TableCellLayout, PresenceBadgeStatus, Avatar, makeStyles } from "@fluentui/react-components";
// import { DefaultButton, IconButton } from "@fluentui/react/lib/Button";
// // import { ResizableHeaderCell } from './ResizableHeaderCell'; // Import the ResizableHeaderCell component
// import {
//   FolderRegular,
//   EditRegular,
//   OpenRegular,
//   DocumentRegular,
//   PeopleRegular,
//   DocumentPdfRegular,
//   VideoRegular,
//   ChevronDownRegular,
//   ChevronRightRegular,
// } from "@fluentui/react-icons";
// import { ResizableBox } from 'react-resizable';
// import 'react-resizable/css/styles.css';
// import { IContextualMenuItem, IContextualMenuProps, mergeStyles } from "@fluentui/react";

// export const ResizableHeaderCell = ({ width, onResize, children }) => (
//   <ResizableBox
//     width={width}
//     height={40}
//     minConstraints={[50, 40]} // Minimum width and height constraints
//     maxConstraints={[500, 40]} // Maximum width and height constraints
//     axis="x"
//     onResize={onResize}
//     resizeHandles={['e']}
//     style={{ display: 'inline-block', position: 'relative', overflow: 'hidden' }}
//   >
//     <div style={{ width: '100%', overflow: 'hidden', whiteSpace: 'nowrap' }}>
//       {children}
//     </div>
//   </ResizableBox>
// );



// const items = [
//   {
//     file: { label: "Meeting notes", icon: <DocumentRegular /> },
//     author: { label: "Max Mustermann", status: "available" },
//     lastUpdated: { label: "7h ago", timestamp: 1 },
//     lastUpdate: {
//       label: "You edited this",
//       icon: <EditRegular />,
//     },
//     subItems: [
//       {
//         file: { label: "Subitem 1", icon: <DocumentRegular /> },
//         author: { label: "Max Mustermann", status: "available" },
//         lastUpdated: { label: "1h ago", timestamp: 1 },
//         lastUpdate: {
//           label: "You edited this",
//           icon: <EditRegular />,
//         },
//       },
//     ],
//   },
//   {
//     file: { label: "Thursday presentation", icon: <FolderRegular /> },
//     author: { label: "Erika Mustermann", status: "busy" },
//     lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
//     lastUpdate: {
//       label: "You recently opened this",
//       icon: <OpenRegular />,
//     },
//     subItems: [],
//   },
//   // Add more items here...
// ];

// const columns = [
//   { columnKey: "file", label: "File" },
//   { columnKey: "author", label: "Author" },
//   { columnKey: "lastUpdated", label: "Last updated" },
//   { columnKey: "lastUpdate", label: "Last update" },
// ];

// const useStyles = makeStyles({
//   row: {
//     height: "20px",
//   },
//   tableCell: {
//     height: "20px",
//   },
// });

// const tableStyle = () => {
//   return {
//     tableData: mergeStyles({
//       "& td": {
//         height: "100%",
//       },
//     }),
//   };
// };

// const TableListResize = () => {
//   const styles = useStyles();
//   const table = tableStyle();

//   const [visibleColumns, setVisibleColumns] = React.useState(
//     columns.reduce((acc, col) => ({ ...acc, [col.columnKey]: true }), {})
//   );
//   const [expandedRows, setExpandedRows] = React.useState({});
//   const [columnWidths, setColumnWidths] = React.useState(
//     columns.reduce((acc, col) => ({ ...acc, [col.columnKey]: 100 }), {}) // Default width
//   );

//   const onToggleSelect = React.useCallback(
//     (ev?: React.MouseEvent<HTMLButtonElement>, item?: IContextualMenuItem): void => {
//       ev && ev.preventDefault();

//       if (item) {
//         setVisibleColumns({
//           ...visibleColumns,
//           [item.key]: visibleColumns[item.key] === undefined ? true : !visibleColumns[item.key],
//         });
//       }
//     },
//     [visibleColumns]
//   );

//   const toggleRowExpansion = (itemLabel: string) => {
//     setExpandedRows((prev) => ({
//       ...prev,
//       [itemLabel]: !prev[itemLabel],
//     }));
//   };

//   const handleResize = (columnKey: string, event: any, { size }: any) => {
//     setColumnWidths((prevWidths) => ({
//       ...prevWidths,
//       [columnKey]: size.width,
//     }));
//   };

//   const menuProps: IContextualMenuProps = React.useMemo(
//     () => ({
//       shouldFocusOnMount: true,
//       items: columns.map((column) => ({
//         key: column.columnKey,
//         text: column.label,
//         canCheck: true,
//         isChecked: visibleColumns[column.columnKey],
//         onClick: onToggleSelect,
//       })),
//     }),
//     [visibleColumns, onToggleSelect]
//   );

//   return (
//     <div>
//       <DefaultButton text="Select Columns" menuProps={menuProps} />

//       <Table aria-label="Default table" style={{ minWidth: "510px" }}>
//         <TableHeader style={{ height: 10 }}>
//           <TableRow className={styles.row}>
//             {visibleColumns.iconButton && (
//               <TableHeaderCell style={{ width: 40 }}>
//                 <span> </span> {/* Empty header cell for icon button */}
//               </TableHeaderCell>
//             )}
//             {columns.map(
//               (column) =>
//                 visibleColumns[column.columnKey] && (
//                   <ResizableHeaderCell
//                     key={column.columnKey}
//                     width={columnWidths[column.columnKey]}
//                     onResize={(e, data) => handleResize(column.columnKey, e, data)}
//                   >
//                     {column.label}
//                   </ResizableHeaderCell>
//                 )
//             )}
//           </TableRow>
//         </TableHeader>
//         <TableBody className={table.tableData}>
//           {items.map((item) => (
//             <React.Fragment key={item.file.label}>
//               <TableRow className={styles.row}>
//                 {visibleColumns.iconButton && (
//                   <TableCell className={styles.tableCell} style={{ width: 40 }}>
//                     {item.subItems.length > 0 && (
//                       <IconButton
//                         iconProps={{
//                           iconName: expandedRows[item.file.label] ? "ChevronDown" : "ChevronRight",
//                         }}
//                         onClick={() => toggleRowExpansion(item.file.label)}
//                         ariaLabel="Toggle subitems"
//                         style={{ minWidth: "auto", padding: 0, marginRight: 0 }}
//                       />
//                     )}
//                   </TableCell>
//                 )}
//                 {visibleColumns.file && (
//                   <TableCell className={styles.tableCell} style={{ width: columnWidths.file }}>
//                     <TableCellLayout media={item.file.icon}>
//                       {item.file.label}
//                     </TableCellLayout>
//                   </TableCell>
//                 )}
//                 {visibleColumns.author && (
//                   <TableCell className={styles.tableCell} style={{ width: columnWidths.author }}>
//                     <TableCellLayout
//                       media={
//                         <Avatar
//                           aria-label={item.author.label}
//                           name={item.author.label}
//                           badge={{ status: item.author.status as PresenceBadgeStatus }}
//                         />
//                       }
//                     >
//                       {item.author.label}
//                     </TableCellLayout>
//                   </TableCell>
//                 )}
//                 {visibleColumns.lastUpdated && (
//                   <TableCell className={styles.tableCell} style={{ width: columnWidths.lastUpdated }}>
//                     {item.lastUpdated.label}
//                   </TableCell>
//                 )}
//                 {visibleColumns.lastUpdate && (
//                   <TableCell className={styles.tableCell} style={{ width: columnWidths.lastUpdate }}>
//                     <TableCellLayout media={item.lastUpdate.icon}>
//                       {item.lastUpdate.label}
//                     </TableCellLayout>
//                   </TableCell>
//                 )}
//               </TableRow>
//               {expandedRows[item.file.label] &&
//                 item.subItems.map((subItem) => (
//                   <TableRow key={subItem.file.label} className={styles.row}>
//                     {visibleColumns.iconButton && (
//                       <TableCell className={styles.tableCell} style={{ width: 40 }} />
//                     )}
//                     {visibleColumns.file && (
//                       <TableCell className={styles.tableCell} style={{ paddingLeft: 20, width: columnWidths.file }}>
//                         <TableCellLayout media={subItem.file.icon}>
//                           {subItem.file.label}
//                         </TableCellLayout>
//                       </TableCell>
//                     )}
//                     {visibleColumns.author && (
//                       <TableCell className={styles.tableCell} style={{ width: columnWidths.author }}>
//                         <TableCellLayout
//                           media={
//                             <Avatar
//                               aria-label={subItem.author.label}
//                               name={subItem.author.label}
//                               badge={{ status: subItem.author.status as PresenceBadgeStatus }}
//                             />
//                           }
//                         >
//                           {subItem.author.label}
//                         </TableCellLayout>
//                       </TableCell>
//                     )}
//                     {visibleColumns.lastUpdated && (
//                       <TableCell className={styles.tableCell} style={{ width: columnWidths.lastUpdated }}>
//                         {subItem.lastUpdated.label}
//                       </TableCell>
//                     )}
//                     {visibleColumns.lastUpdate && (
//                       <TableCell className={styles.tableCell} style={{ width: columnWidths.lastUpdate }}>
//                         <TableCellLayout media={subItem.lastUpdate.icon}>
//                           {subItem.lastUpdate.label}
//                         </TableCellLayout>
//                       </TableCell>
//                     )}
//                   </TableRow>
//                 ))}
//             </React.Fragment>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default TableListResize;



import * as React from "react";
import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  SelectionMode,
  IColumn,
  ScrollablePane,
  ScrollbarVisibility,
  Sticky,
  StickyPositionType,
  IRenderFunction,
  IDetailsHeaderProps,
  IDetailsColumnRenderTooltipProps,
  ConstrainMode,
  mergeStyleSets,
  TooltipHost,
} from "@fluentui/react";

const classNames = mergeStyleSets({
  fileIconHeaderIcon: {
    padding: 0,
    fontSize: "16px",
  },
  fileIconCell: {
    textAlign: "center",
    selectors: {
      "&:before": {
        content: ".",
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0px",
        visibility: "hidden",
      },
    },
  },
  fileIconImg: {
    verticalAlign: "middle",
    maxHeight: "16px",
    maxWidth: "16px",
  },
  controlWrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
  exampleToggle: {
    display: "inline-block",
    marginBottom: "10px",
    marginRight: "30px",
  },
  selectionDetails: {
    marginBottom: "20px",
  },
  wrapper: {
    height: "80vh",
    position: "relative",
    backgroundColor: "white",
  },
});

export interface IDetailsListDocumentsExampleState {
  columns: IColumn[];
  items: IDocument[];
  selectionDetails: string;
  isModalSelection: boolean | undefined;
  isCompactMode: boolean | undefined;
  announcedMessage?: string;
}

export interface IDocument {
  key: string;
  name: string;
  value: string;
  iconName: string;
  fileType: string;
  modifiedBy: string;
  dateModified: string;
  dateCreatedValue: number;
  shared: string;
  modified: string;
  fileSize: string;
  fileSizeRaw: number;
}

const onRenderDetailsHeader: IRenderFunction<IDetailsHeaderProps> = (
  props,
  defaultRender
) => {
  if (!props) {
    return null;
  }
  const onRenderColumnHeaderTooltip: IRenderFunction<IDetailsColumnRenderTooltipProps> = (
    tooltipHostProps
  ) => <TooltipHost {...tooltipHostProps} />;
  return (
    <Sticky stickyPosition={StickyPositionType.Header} isScrollSynced>
      {defaultRender!({
        ...props,
        onRenderColumnHeaderTooltip,
      })}
    </Sticky>
  );
};

export default class TableListResize extends React.Component<
  {},
  IDetailsListDocumentsExampleState
> {
  private _selection: Selection;
  private _allItems: IDocument[];

  constructor(props: {}) {
    super(props);

    this._allItems = _generateDocuments();

    const columns: IColumn[] = [
      {
        key: "column1",
        name: "File Type",
        className: classNames.fileIconCell,
        iconClassName: classNames.fileIconHeaderIcon,
        ariaLabel:
          "Column operations for File type, Press to sort on File type",
        iconName: "Page",
        isIconOnly: true,
        fieldName: "name",
        minWidth: 16,
        maxWidth: 16,
        onColumnClick: this._onColumnClick,
        onRender: (item: IDocument) => (
          <TooltipHost content={`${item.fileType} file`}>
            <img
              src={item.iconName}
              className={classNames.fileIconImg}
              alt={`${item.fileType} file icon`}
            />
          </TooltipHost>
        ),
      },
      {
        key: "column2",
        name: "Name",
        fieldName: "name",
        minWidth: 300,
        maxWidth: 500,
        isRowHeader: true,
        isResizable: true,
        isSorted: true,
        isSortedDescending: false,
        sortAscendingAriaLabel: "Sorted A to Z",
        sortDescendingAriaLabel: "Sorted Z to A",
        onColumnClick: this._onColumnClick,
        data: "string",
        isPadded: true,
      },
      {
        key: "column3",
        name: "Date Created",
        fieldName: "dateCreatedValue",
        minWidth: 70,
        maxWidth: 90,
        isResizable: true,
        onColumnClick: this._onColumnClick,
        data: "number",
        onRender: (item: IDocument) => {
          return <span>{item.dateModified}</span>;
        },
        isPadded: true,
      },
      {
        key: "column4",
        name: "Modified By",
        fieldName: "modifiedBy",
        minWidth: 70,
        maxWidth: 90,
        isResizable: true,
        isCollapsible: false,
        data: "string",
        onColumnClick: this._onColumnClick,
        onRender: (item: IDocument) => {
          return <span>{item.modifiedBy}</span>;
        },
        isPadded: true,
      },
      {
        key: "column5",
        name: "Shared",
        fieldName: "sharedValue",
        minWidth: 70,
        maxWidth: 90,
        isResizable: true,
        onColumnClick: this._onColumnClick,
        data: "string",
        onRender: (item: IDocument) => {
          return <span>{item.shared}</span>;
        },
        isPadded: true,
      },
      {
        key: "column6",
        name: "Modified",
        fieldName: "modifiedValue",
        minWidth: 80,
        maxWidth: 240,
        isResizable: true,
        onColumnClick: this._onColumnClick,
        data: "string",
        onRender: (item: IDocument) => {
          return <span>{item.modified}</span>;
        },
        isPadded: true,
      },
      {
        key: "column7",
        name: "File Size",
        fieldName: "fileSizeRaw",
        minWidth: 70,
        maxWidth: 90,
        isResizable: true,
        isCollapsible: false,
        data: "number",
        onColumnClick: this._onColumnClick,
        onRender: (item: IDocument) => {
          return <span>{item.fileSize}</span>;
        },
      },
      {
        key: "column8",
        name: "Owner",
        fieldName: "owner",
        minWidth: 70,
        maxWidth: 90,
        isResizable: true,
        isCollapsible: false,
        data: "string",
        onColumnClick: this._onColumnClick,
        onRender: (item: IDocument) => {
          return <span>{"Tim Deboar"}</span>;
        },
        isPadded: true,
      },
    ];

    this._selection = new Selection({
      onSelectionChanged: () => {
        this.setState({
          selectionDetails: this._getSelectionDetails(),
        });
      },
    });

    this.state = {
      items: this._allItems, //[], //
      columns: columns,
      selectionDetails: this._getSelectionDetails(),
      isModalSelection: false,
      isCompactMode: false,
      announcedMessage: undefined,
    };
  }

  public render() {
    const { columns, isCompactMode, items } = this.state;

    return (
        <DetailsList
          items={items}
          compact={isCompactMode}
          columns={columns}
          selectionMode={SelectionMode.none}
          getKey={this._getKey}
          setKey="none"
          layoutMode={DetailsListLayoutMode.justified}
          isHeaderVisible={true}
          onItemInvoked={this._onItemInvoked}
          constrainMode={ConstrainMode.unconstrained}
          onRenderDetailsHeader={onRenderDetailsHeader}
        />
    );
  }

  public componentDidUpdate(
    previousProps: any,
    previousState: IDetailsListDocumentsExampleState
  ) {
    if (
      previousState.isModalSelection !== this.state.isModalSelection &&
      !this.state.isModalSelection
    ) {
      this._selection.setAllSelected(false);
    }
  }

  private _getKey(item: any, index?: number): string {
    return item.key;
  }

  private _onChangeModalSelection = (
    ev: React.MouseEvent<HTMLElement>,
    checked: boolean | undefined
  ): void => {
    this.setState({ isModalSelection: checked });
  };

  private _onChangeText = (
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    text: string | undefined
  ): void => {
    this.setState({
      items: text
        ? this._allItems.filter((i) => i.name.toLowerCase().indexOf(text) > -1)
        : this._allItems,
    });
  };

  private _onItemInvoked(item: any): void {
    alert(`Item invoked: ${item.name}`);
  }

  private _getSelectionDetails(): string {
    const selectionCount = this._selection.getSelectedCount();

    switch (selectionCount) {
      case 0:
        return "No items selected";
      case 1:
        return (
          "1 item selected: " +
          (this._selection.getSelection()[0] as IDocument).name
        );
      default:
        return `${selectionCount} items selected`;
    }
  }

  private _onColumnClick = (
    ev: React.MouseEvent<HTMLElement>,
    column: IColumn
  ): void => {
    const { columns, items } = this.state;
    const newColumns: IColumn[] = columns.slice();
    const currColumn: IColumn = newColumns.filter(
      (currCol) => column.key === currCol.key
    )[0];
    newColumns.forEach((newCol: IColumn) => {
      if (newCol === currColumn) {
        currColumn.isSortedDescending = !currColumn.isSortedDescending;
        currColumn.isSorted = true;
        this.setState({
          announcedMessage: `${currColumn.name} is sorted ${
            currColumn.isSortedDescending ? "descending" : "ascending"
          }`,
        });
      } else {
        newCol.isSorted = false;
        newCol.isSortedDescending = true;
      }
    });
    const newItems = _copyAndSort(
      items,
      currColumn.fieldName!,
      currColumn.isSortedDescending
    );
    this.setState({
      columns: newColumns,
      items: newItems,
    });
  };
}

function _copyAndSort<T>(
  items: T[],
  columnKey: string,
  isSortedDescending?: boolean
): T[] {
  const key = columnKey as keyof T;
  return items
    .slice(0)
    .sort((a: T, b: T) =>
      (isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1
    );
}

function _generateDocuments() {
  if (!Math.trunc) {
    Math.trunc = function (v) {
      return v < 0 ? Math.ceil(v) : Math.floor(v);
    };
  }

  const items: IDocument[] = [];
  var now = new Date();

  for (let i = 0; i < 500; i++) {
    const randomDate = _randomDate(new Date(2012, 0, 1), new Date());
    var differenceInTime = now.getTime() - randomDate.date.getTime();
    const differenceInDays = Math.trunc(differenceInTime / (1000 * 3600 * 24));
    const randomFileSize = _randomFileSize();
    const randomFileType = _randomFileIcon();
    const randomSharedStatus = _randomSharedStatus();
    let fileName = _lorem(2);
    fileName =
      fileName.charAt(0).toUpperCase() +
      fileName.slice(1).concat(`.${randomFileType.docType}`);
    let userName = _lorem(2);
    userName = userName
      .split(" ")
      .map((name: string) => name.charAt(0).toUpperCase() + name.slice(1))
      .join(" ");
    items.push({
      key: i.toString(),
      name: fileName,
      value: fileName,
      iconName: randomFileType.url,
      fileType: randomFileType.docType,
      modifiedBy: userName,
      shared: randomSharedStatus,
      dateModified: randomDate.dateFormatted,
      dateCreatedValue: randomDate.value,
      fileSize: randomFileSize.value,
      fileSizeRaw: randomFileSize.rawSize,
      modified: `${differenceInDays} days ago`,
    });
  }
  return items;
}

function _randomDate(
  start: Date,
  end: Date
): { value: number; dateFormatted: string; date: Date } {
  const date: Date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return {
    value: date.valueOf(),
    dateFormatted: date.toLocaleDateString(),
    date: date,
  };
}

const FILE_ICONS: { name: string }[] = [
  { name: "accdb" },
  { name: "audio" },
  { name: "code" },
  { name: "csv" },
  { name: "docx" },
  { name: "dotx" },
  { name: "mpp" },
  { name: "mpt" },
  { name: "model" },
  { name: "one" },
  { name: "onetoc" },
  { name: "potx" },
  { name: "ppsx" },
  { name: "pdf" },
  { name: "photo" },
  { name: "pptx" },
  { name: "presentation" },
  { name: "potx" },
  { name: "pub" },
  { name: "rtf" },
  { name: "spreadsheet" },
  { name: "txt" },
  { name: "vector" },
  { name: "vsdx" },
  { name: "vssx" },
  { name: "vstx" },
  { name: "xlsx" },
  { name: "xltx" },
  { name: "xsn" },
];

const SHARED_STATUS: { name: string }[] = [
  { name: "Private" },
  { name: "Shared" },
  { name: "Public" },
];

function _randomFileIcon(): { docType: string; url: string } {
  const docType: string =
    FILE_ICONS[Math.floor(Math.random() * FILE_ICONS.length)].name;
  return {
    docType,
    url: `https://static2.sharepointonline.com/files/fabric/assets/item-types/16/${docType}.svg`,
  };
}

function _randomFileSize(): { value: string; rawSize: number } {
  const fileSize: number = Math.floor(Math.random() * 100) + 30;
  return {
    value: `${fileSize} KB`,
    rawSize: fileSize,
  };
}

function _randomSharedStatus(): string {
  const status: string =
    SHARED_STATUS[Math.floor(Math.random() * SHARED_STATUS.length)].name;
  return status;
}

const LOREM_IPSUM = (
  "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut " +
  "labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut " +
  "aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore " +
  "eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt "
).split(" ");
let loremIndex = 0;
function _lorem(wordCount: number): string {
  const startIndex =
    loremIndex + wordCount > LOREM_IPSUM.length ? 0 : loremIndex;
  loremIndex = startIndex + wordCount;
  return LOREM_IPSUM.slice(startIndex, loremIndex).join(" ");
}
