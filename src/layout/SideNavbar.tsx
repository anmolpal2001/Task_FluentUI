// import { DrawerProps } from "@fluentui/react-components";
// import * as React from "react";
// import {
//   Hamburger,
//   NavCategory,
//   NavCategoryItem,
//   NavDivider,
//   NavDrawer,
//   NavDrawerBody,
//   NavDrawerHeader,
//   NavDrawerProps,
//   NavItem,
//   NavSubItem,
//   NavSubItemGroup,
// } from "@fluentui/react-nav-preview";
// import { makeStyles } from "@fluentui/react-components";
// import {
//   Board20Filled,
//   Board20Regular,
//   MegaphoneLoud20Filled,
//   MegaphoneLoud20Regular,
//   NotePin20Filled,
//   NotePin20Regular,
//   bundleIcon,
//   ClipboardBulletList20Filled,
//   ClipboardBulletList20Regular,
// } from "@fluentui/react-icons";
// import {
//   Icon,
//   IconButton,
//   initializeIcons,
//   mergeStyles,
// } from "@fluentui/react";
// initializeIcons();

// const useStyles = (isOpen: boolean) => {
//   return {
//     root: mergeStyles({
//       overflow: "hidden",
//       display: "flex",
//       height: "100vh",
//     }),
//     activeNavItem: mergeStyles({
//       backgroundColor: "#E6E6E6",
//       color: "#808080",
//       borderLeft: "#00308F solid 5px",
//     }),
//     iconButton: mergeStyles({
//       color: "#808080",
//       display: "flex",
//       alignItems: "center",
//     }),
//     menuItem: mergeStyles({
//       "& .fui-NavCategoryItem__expandIcon": {
//         display: "none",
//       },
//     }),
//   };
// };
// const activeNavItemStyle = makeStyles({
//   activeNavItem: {
//     backgroundColor: "#E6E6E6",
//     color: "#808080",
//     borderLeft: "#00308F solid 5px",
//   },
// });
// const Dashboard = bundleIcon(Board20Filled, Board20Regular);
// const Announcements = bundleIcon(MegaphoneLoud20Filled, MegaphoneLoud20Regular);
// const JobPostings = bundleIcon(NotePin20Filled, NotePin20Regular);
// const ListIcon = bundleIcon(
//   ClipboardBulletList20Filled,
//   ClipboardBulletList20Regular
// );

// const navItems = [
//   {
//     path: "/",
//     name: "Dashboard",
//     value: "1",
//     icon: <Dashboard />,
//   },
//   {
//     path: "/governance",
//     name: "Resize",
//     value: "2",
//     icon: <Announcements />,
//   },
//   {
//     name: "HRInfoSys",
//     value: "3",
//     icon: <JobPostings />,
//     subNavItems: [
//       {
//         path: "/hrInfo",
//         name: "Testing 1",
//         value: "3.1",
//       },
//       {
//         path: "/hrInfo/assess",
//         name: "Testing 2",
//         value: "3.2",
//       },
//     ],
//   },
//   {
//     name: "List",
//     value: "4",
//     icon: <ListIcon />,
//     path: "/list",
//   },
//   {
//     name: "Chart",
//     value: "5",
//     icon: <ListIcon />,
//     path: "/charts",
//   },
//   {
//     name: "HR",
//     value: "6",
//     icon: <JobPostings />,
//     subNavItems: [
//       {
//         path: "/hr",
//         name: "Testing 1",
//         value: "6.1",
//       },
//       {
//         path: "/hr/as",
//         name: "Testing 2",
//         value: "6.2",
//       },
//     ],
//   }
// ];

// type DrawerType = Required<DrawerProps>["type"];

// export const SideNavbar = (props: Partial<NavDrawerProps>) => {
//   const [expandedItem, setExpandedItem] = React.useState<string | null>(null);
//   const [isOpen, setIsOpen] = React.useState(false);
//   const styles = useStyles(isOpen);
//   const active = activeNavItemStyle();

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

// //   const toggleItemExpansion = (itemValue: string) => {
// //     setExpandedItem(expandedItem === itemValue ? null : itemValue);
// //   };
// const toggleItemExpansion = (itemValue: string) => {
//     setExpandedItem(prevItem => prevItem === itemValue ? null : itemValue);
//     console.log(expandedItem);
//   };

//   const getNavItemClass = (path: string) => {
//     return location.pathname === path ? active.activeNavItem : "";
//   };

//   return (
//     <div className={styles.root}>
//       <NavDrawer
//         open={true}
//         type="inline"
//         style={
//           isOpen ? { width: "60px", overflow: "hidden" } : { width: "200px" }
//         }
//       >
//         <NavDrawerHeader>
//           <IconButton
//             iconProps={{ iconName: isOpen ? "ChevronLeft" : "ChevronRight" }}
//             onClick={toggleSidebar}
//             ariaLabel="Toggle sidebar"
//             className={styles.iconButton}
//           />
//           <NavDivider style={isOpen ? { width: "35px" } : {}} />
//         </NavDrawerHeader>
//         <NavDrawerBody>
//           {navItems.map((item) => (
//             <React.Fragment key={item.value}>
//               {item.subNavItems ? (
//                 <NavCategory value={item.value}>
//                   <NavCategoryItem
//                     icon={item.icon}
//                     className={styles.menuItem}
//                     onClick={() => toggleItemExpansion(item.value)}
//                   >
//                     {!isOpen && item.name}
//                     <Icon
//                       iconName={expandedItem === item.value ? "ChevronUp" : "ChevronDown"}
//                       style={{ position: "absolute", right: 10 }}
//                     />
//                   </NavCategoryItem>
//                   {expandedItem === item.value &&
//                     item.subNavItems.map((subItem) => (
//                       <NavSubItemGroup key={subItem.value}>
//                         <NavSubItem
//                           href={subItem.path}
//                           value={subItem.value}
//                           className={getNavItemClass(subItem.path)}
//                         >
//                           {subItem.name}
//                         </NavSubItem>
//                       </NavSubItemGroup>
//                     ))}
//                 </NavCategory>
//               ) : (
//                 <NavItem
//                   href={item.path || "#"}
//                   icon={item.icon}
//                   value={item.value}
//                   className={getNavItemClass(item.path)}
//                   style={{ display: "flex", alignItems: "center" }}
//                 >
//                   {!isOpen && item.name}
//                 </NavItem>
//               )}
//             </React.Fragment>
//           ))}
//         </NavDrawerBody>
//       </NavDrawer>
//     </div>
//   );
// };

// import { DrawerProps } from "@fluentui/react-components";
// import * as React from "react";
// import {
//   Hamburger,
//   NavCategory,
//   NavCategoryItem,
//   NavDivider,
//   NavDrawer,
//   NavDrawerBody,
//   NavDrawerHeader,
//   NavDrawerProps,
//   NavItem,
//   NavSubItem,
//   NavSubItemGroup,
// } from "@fluentui/react-nav-preview";
// import { makeStyles } from "@fluentui/react-components";
// import {
//   Board20Filled,
//   Board20Regular,
//   MegaphoneLoud20Filled,
//   MegaphoneLoud20Regular,
//   NotePin20Filled,
//   NotePin20Regular,
//   bundleIcon,
//   ClipboardBulletList20Filled,
//   ClipboardBulletList20Regular,
// } from "@fluentui/react-icons";
// import {
//   Icon,
//   IconButton,
//   initializeIcons,
//   mergeStyles,
// } from "@fluentui/react";
// import { useState } from "react";
// initializeIcons();

// const useStyles = (isOpen: boolean) => {
//   return {
//     root: mergeStyles({
//       overflow: "hidden",
//       display: "flex",
//       height: "100vh",
//     }),
//     activeNavItem: mergeStyles({
//       backgroundColor: "#E6E6E6",
//       color: "#808080",
//       borderLeft: "#00308F solid 5px",
//     }),
//     iconButton: mergeStyles({
//       color: "#808080",
//       display: "flex",
//       alignItems: "center",
//     }),
//     menuItem: mergeStyles({
//       "& .fui-NavCategoryItem__expandIcon": {
//         display: "none",
//       },
//     }),
//   };
// };

// const activeNavItemStyle = makeStyles({
//   activeNavItem: {
//     backgroundColor: "#E6E6E6",
//     color: "#808080",
//     borderLeft: "#00308F solid 5px",
//   },
// });

// const Dashboard = bundleIcon(Board20Filled, Board20Regular);
// const Announcements = bundleIcon(MegaphoneLoud20Filled, MegaphoneLoud20Regular);
// const JobPostings = bundleIcon(NotePin20Filled, NotePin20Regular);
// const ListIcon = bundleIcon(
//   ClipboardBulletList20Filled,
//   ClipboardBulletList20Regular
// );

// const navItems = [
//   {
//     path: "/",
//     name: "Dashboard",
//     value: "1",
//     icon: <Dashboard />,
//   },
//   {
//     path: "/governance",
//     name: "Resize",
//     value: "2",
//     icon: <Announcements />,
//   },
//   {
//     name: "HRInfoSys",
//     value: "3",
//     icon: <JobPostings />,
//     subNavItems: [
//       {
//         path: "/hrInfo",
//         name: "Testing 1",
//         value: "3.1",
//       },
//       {
//         path: "/hrInfo/assess",
//         name: "Testing 2",
//         value: "3.2",
//       },
//     ],
//   },
//   {
//     name: "List",
//     value: "4",
//     icon: <ListIcon />,
//     path: "/list",
//   },
//   {
//     name: "Chart",
//     value: "5",
//     icon: <ListIcon />,
//     path: "/charts",
//   },
//   {
//     name: "HR",
//     value: "6",
//     icon: <JobPostings />,
//     subNavItems: [
//       {
//         path: "/hr",
//         name: "Testing 1",
//         value: "6.1",
//       },
//       {
//         path: "/hr/as",
//         name: "Testing 2",
//         value: "6.2",
//       },
//     ],
//   }
// ];

// export const SideNavbar = (props: Partial<NavDrawerProps>) => {
//   const [expandedItem, setExpandedItem] = React.useState<string | null>(null);
//   const [isOpen, setIsOpen] = React.useState(false);
//   const [expandeItemArr,setExpandeItemArr] = useState<string[]>();
//   const styles = useStyles(isOpen);
//   const active = activeNavItemStyle();

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleItemExpansion = (itemValue: string) => {
//     setExpandedItem((prev) => (prev === itemValue ? null : itemValue ));
//     console.log(itemValue);
//         // setExpandeItemArr([...expandeItemArr, itemValue]);
//         // expandeItemArr?.forEach(element => {
//         //     console.log(element);

//         // });

//   };
// // const handleItemClick = (itemValue: string) => {
// //     // If the item is already expanded, collapse it
// //     if (expandedItem === itemValue) {
// //         console.log(itemValue);
// //         setExpandedItem(null);
// //     } else {
// //         // Otherwise, expand the clicked item and collapse the previously opened one
// //         setExpandedItem(itemValue);
// //         console.log(itemValue);

// //     }
// //   };

//   const getNavItemClass = (path: string) => {
//     return location.pathname === path ? active.activeNavItem : "";
//   };

//   return (
//     <div className={styles.root}>
//       <NavDrawer
//         open={true}
//         type="inline"
//         style={
//           isOpen ? { width: "60px", overflow: "hidden" } : { width: "200px" }
//         }
//       >
//         <NavDrawerHeader>
//           <IconButton
//             iconProps={{ iconName: isOpen ? "ChevronLeft" : "ChevronRight" }}
//             onClick={toggleSidebar}
//             ariaLabel="Toggle sidebar"
//             className={styles.iconButton}
//           />
//           <NavDivider style={isOpen ? { width: "35px" } : {}} />
//         </NavDrawerHeader>
//         <NavDrawerBody>
//           {navItems.map((item) => (
//             <React.Fragment key={item.value}>
//               {item.subNavItems ? (
//                 <NavCategory value={item.value}>
//                   <NavCategoryItem
//                     icon={item.icon}
//                     className={styles.menuItem}
//                     onClick={() => toggleItemExpansion(item.value)}
//                   >
//                     {!isOpen && item.name}
//                     <Icon
//                       iconName={expandedItem === item.value ? "ChevronUp" : "ChevronDown"}
//                       style={{ position: "absolute", right: 10 }}
//                     />
//                   </NavCategoryItem>
//                   {expandedItem === item.value &&
//                     item.subNavItems.map((subItem) => (
//                       <NavSubItemGroup key={subItem.value}>
//                         <NavSubItem
//                           href={subItem.path}
//                           value={subItem.value}
//                           className={getNavItemClass(subItem.path)}
//                         >
//                           {subItem.name}
//                         </NavSubItem>
//                       </NavSubItemGroup>
//                     ))}
//                 </NavCategory>
//               ) : (
//                 <NavItem
//                   href={item.path || "#"}
//                   icon={item.icon}
//                   value={item.value}
//                   className={getNavItemClass(item.path)}
//                   style={{ display: "flex", alignItems: "center" }}
//                 >
//                   {!isOpen && item.name}
//                 </NavItem>
//               )}
//             </React.Fragment>
//           ))}
//         </NavDrawerBody>
//       </NavDrawer>
//     </div>
//   );
// };

// import * as React from "react";
// import {
//   NavCategory,
//   NavCategoryItem,
//   NavDivider,
//   NavDrawer,
//   NavDrawerBody,
//   NavDrawerHeader,
//   NavDrawerProps,
//   NavItem,
//   NavSubItem,
//   NavSubItemGroup,
// } from "@fluentui/react-nav-preview";
// import { makeStyles } from "@fluentui/react-components";
// import {
//   Board20Filled,
//   Board20Regular,
//   MegaphoneLoud20Filled,
//   MegaphoneLoud20Regular,
//   NotePin20Filled,
//   NotePin20Regular,
//   bundleIcon,
//   ClipboardBulletList20Filled,
//   ClipboardBulletList20Regular,
// } from "@fluentui/react-icons";
// import {
//   Icon,
//   IconButton,
//   initializeIcons,
//   mergeStyles,
// } from "@fluentui/react";
// initializeIcons();

// const useStyles = (isOpen: boolean) => {
//   return {
//     root: mergeStyles({
//       overflow: "hidden",
//       display: "flex",
//       height: "100vh",
//     }),
//     activeNavItem: mergeStyles({
//       backgroundColor: "#E6E6E6",
//       color: "#808080",
//       borderLeft: "#00308F solid 5px",
//     }),
//     iconButton: mergeStyles({
//       color: "#808080",
//       display: "flex",
//       alignItems: "center",
//     }),
//     menuItem: mergeStyles({
//       "& .fui-NavCategoryItem__expandIcon": {
//         display: "none",
//       },
//     }),
//   };
// };

// const activeNavItemStyle = makeStyles({
//   activeNavItem: {
//     backgroundColor: "#E6E6E6",
//     color: "#808080",
//     borderLeft: "#00308F solid 5px",
//   },
// });

// const Dashboard = bundleIcon(Board20Filled, Board20Regular);
// const Announcements = bundleIcon(MegaphoneLoud20Filled, MegaphoneLoud20Regular);
// const JobPostings = bundleIcon(NotePin20Filled, NotePin20Regular);
// const ListIcon = bundleIcon(
//   ClipboardBulletList20Filled,
//   ClipboardBulletList20Regular
// );

// const navItems = [
//   {
//     path: "/",
//     name: "Dashboard",
//     value: "1",
//     icon: <Dashboard />,
//   },
//   {
//     path: "/governance",
//     name: "Resize",
//     value: "2",
//     icon: <Announcements />,
//   },
//   {
//     name: "HRInfoSys",
//     value: "3",
//     icon: <JobPostings />,
//     subNavItems: [
//       {
//         path: "/hrInfo",
//         name: "Testing 1",
//         value: "3.1",
//       },
//       {
//         path: "/hrInfo/assess",
//         name: "Testing 2",
//         value: "3.2",
//       },
//     ],
//   },
//   {
//     name: "List",
//     value: "4",
//     icon: <ListIcon />,
//     path: "/list",
//   },
//   {
//     name: "Chart",
//     value: "5",
//     icon: <ListIcon />,
//     path: "/charts",
//   },
//   {
//     name: "HR",
//     value: "6",
//     icon: <JobPostings />,
//     subNavItems: [
//       {
//         path: "/hr",
//         name: "Testing 1",
//         value: "6.1",
//       },
//       {
//         path: "/hr/as",
//         name: "Testing 2",
//         value: "6.2",
//       },
//     ],
//   }
// ];

// export const SideNavbar = (props: Partial<NavDrawerProps>) => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const [expandedItems, setExpandedItems] = React.useState<Set<string>>(new Set());
//   const styles = useStyles(isOpen);
//   const active = activeNavItemStyle();

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleItemClick = (itemValue: string) => {
//     setExpandedItems(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(itemValue)) {
//         newSet.delete(itemValue);
//       } else {
//         newSet.clear(); // Optional: Clear other expanded items if you want only one item to be expanded at a time
//         newSet.add(itemValue);
//       }
//       return newSet;
//     });
//   };

//   const getNavItemClass = (path: string) => {
//     return location.pathname === path ? active.activeNavItem : "";
//   };

//   return (
//     <div className={styles.root}>
//       <NavDrawer
//         open={true}
//         type="inline"
//         style={
//           isOpen ? { width: "60px", overflow: "hidden" } : { width: "200px" }
//         }
//       >
//         <NavDrawerHeader>
//           <IconButton
//             iconProps={{ iconName: isOpen ? "ChevronLeft" : "ChevronRight" }}
//             onClick={toggleSidebar}
//             ariaLabel="Toggle sidebar"
//             className={styles.iconButton}
//           />
//           <NavDivider style={isOpen ? { width: "35px" } : {}} />
//         </NavDrawerHeader>
//         <NavDrawerBody>
//           {navItems.map((item) => (
//             <React.Fragment key={item.value}>
//               {item.subNavItems ? (
//                 <NavCategory value={item.value}>
//                   <NavCategoryItem
//                     icon={item.icon}
//                     className={styles.menuItem}
//                     onClick={() => handleItemClick(item.value)}
//                   >
//                     {!isOpen && item.name}
//                     <Icon
//                       iconName={expandedItems.has(item.value) ? "ChevronUp" : "ChevronDown"}
//                       style={{ position: "absolute", right: 10 }}
//                     />
//                   </NavCategoryItem>
//                   {expandedItems.has(item.value) &&
//                     item.subNavItems.map((subItem) => (
//                       <NavSubItemGroup key={subItem.value}>
//                         <NavSubItem
//                           href={subItem.path}
//                           value={subItem.value}
//                           className={getNavItemClass(subItem.path)}
//                         >
//                           {subItem.name}
//                         </NavSubItem>
//                       </NavSubItemGroup>
//                     ))}
//                 </NavCategory>
//               ) : (
//                 <NavItem
//                   href={item.path || "#"}
//                   icon={item.icon}
//                   value={item.value}
//                   className={getNavItemClass(item.path)}
//                   style={{ display: "flex", alignItems: "center" }}
//                 >
//                   {!isOpen && item.name}
//                 </NavItem>
//               )}
//             </React.Fragment>
//           ))}
//         </NavDrawerBody>
//       </NavDrawer>
//     </div>
//   );
// };

import * as React from "react";
import {
  NavCategory,
  NavCategoryItem,
  NavDivider,
  NavDrawer,
  NavDrawerBody,
  NavDrawerHeader,
  NavDrawerProps,
  NavItem,
  NavSubItem,
  NavSubItemGroup,
} from "@fluentui/react-nav-preview";
import { makeStyles } from "@fluentui/react-components";
import {
  Board20Filled,
  Board20Regular,
  MegaphoneLoud20Filled,
  MegaphoneLoud20Regular,
  NotePin20Filled,
  NotePin20Regular,
  bundleIcon,
  ClipboardBulletList20Filled,
  ClipboardBulletList20Regular,
} from "@fluentui/react-icons";
import {
  Icon,
  IconButton,
  initializeIcons,
  mergeStyles,
} from "@fluentui/react";
initializeIcons();

const useStyles = (isOpen: boolean) => {
  return {
    root: mergeStyles({
      overflow: "hidden",
      display: "flex",
      height: "100vh",
    }),
    activeNavItem: mergeStyles({
      backgroundColor: "#E6E6E6",
      color: "#808080",
      borderLeft: "#00308F solid 5px",
    }),
    iconButton: mergeStyles({
      color: "#808080",
      display: "flex",
      alignItems: "center",
    }),
    menuItem: mergeStyles({
      "& .fui-NavCategoryItem__expandIcon": {
        display: "none",
      },
      "& button" : {
        "& .fui-NavCategoryItem__expandIcon" : {
            display : "none"
        }
      }
    }),
  };
};

const activeNavItemStyle = makeStyles({
  activeNavItem: {
    backgroundColor: "#E6E6E6",
    color: "#808080",
    borderLeft: "#00308F solid 5px",
  },
});

const Dashboard = bundleIcon(Board20Filled, Board20Regular);
const Announcements = bundleIcon(MegaphoneLoud20Filled, MegaphoneLoud20Regular);
const JobPostings = bundleIcon(NotePin20Filled, NotePin20Regular);
const ListIcon = bundleIcon(
  ClipboardBulletList20Filled,
  ClipboardBulletList20Regular
);

const navItems = [
  {
    path: "/",
    name: "Dashboard",
    value: "1",
    icon: <Dashboard />,
  },
  {
    path: "/governance",
    name: "Resize",
    value: "2",
    icon: <Announcements />,
  },
  {
    name: "HRInfoSys",
    value: "3",
    icon: <JobPostings />,
    subNavItems: [
      {
        path: "/hrInfo",
        name: "Testing 1",
        value: "3.1",
      },
      {
        path: "/hrInfo/assess",
        name: "Testing 2",
        value: "3.2",
      },
    ],
  },
  {
    name: "List",
    value: "4",
    icon: <ListIcon />,
    path: "/list",
  },
  {
    name: "Chart",
    value: "5",
    icon: <ListIcon />,
    path: "/charts",
  },
  {
    name: "HR",
    value: "6",
    icon: <JobPostings />,
    subNavItems: [
      {
        icon: <JobPostings />,
        name: "Testing 1",
        value: "6.1",
        subNavItems: [
          {
            path: "/hr",
            name: "Testing 1.1",
            value: "6.1.1",
          },
          {
            path: "/hr",
            name: "Testing 1.2",
            value: "6.1.2",
          },
        ],
      },
      {
        icon: <JobPostings />,
        name: "Testing 2",
        value: "6.2",
        subNavItems: [
          {
            path: "/hr",
            name: "Testing 2.1",
            value: "6.2.1",
          },
          {
            path: "/hr",
            name: "Testing 2.2",
            value: "6.2.2",
          },
        ],
      },
      {
        path: "/hr",
        name: "Testing 5",
        value: "6.3",
      },
    ],
  },
];

export const SideNavbar = (props: Partial<NavDrawerProps>) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [expandedItem, setExpandedItem] = React.useState<string | null>(null);
  const [visibleItems, setVisibleItems] = React.useState<Set<string>>(
    new Set()
  );
  const styles = useStyles(isOpen);
  const active = activeNavItemStyle();
  const [expandedSubItem, setExpandedSubItem] = React.useState<string | null>(
    null
  );
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (itemValue: string) => {
    setExpandedItem((prev) => (prev === itemValue ? null : itemValue));
    setExpandedSubItem(null)
  };

  const onNavSubItemToggle = (subItemValue: string) => {
    setExpandedSubItem(expandedSubItem === subItemValue ? null : subItemValue);
  };

  const getNavItemClass = (path: string) => {
    return location.pathname === path ? active.activeNavItem : "";
  };

  return (
    <div className={styles.root}>
      <NavDrawer
        open={true}
        type="inline"
        style={
          isOpen ? { width: "60px", overflow: "hidden" } : { width: "200px" }
        }
        multiple={false}
      >
        <NavDrawerHeader>
          <IconButton
            iconProps={{ iconName: isOpen ? "ChevronLeft" : "ChevronRight" }}
            onClick={toggleSidebar}
            ariaLabel="Toggle sidebar"
            className={styles.iconButton}
          />
          <NavDivider style={isOpen ? { width: "35px" } : {}} />
        </NavDrawerHeader>
        <NavDrawerBody>
          {navItems.map((item) => (
            <React.Fragment key={item.value}>
              {item.subNavItems ? (
                <NavCategory value={item.value}>
                  <NavCategoryItem
                    icon={item.icon}
                    className={styles.menuItem}
                    // aria-expanded = {expandedItem === item.value ? "true" : "false"}
                    onClick={() => handleItemClick(item.value)}
                  >
                    {!isOpen && item.name}
                    <Icon
                      iconName={
                        expandedItem === item.value
                          ? "ChevronUp"
                          : "ChevronDown"
                      }
                      style={{ position: "absolute", right: 10 }}
                    />
                  </NavCategoryItem>
                  {/* {expandedItem === item.value &&
                    item.subNavItems.map((subItem) => (
                      <NavSubItemGroup key={subItem.value}>
                        <NavSubItem
                          href={subItem.path}
                          value={subItem.value}
                          className={ subItem.subNavItems ? "" : getNavItemClass(subItem.path)}
                          onClick={() => onNavSubItemToggle(subItem.value)}
                        >
                          {subItem.name}
                        </NavSubItem>
                        {subItem.subNavItems &&
                          subItem.subNavItems.map((subSubItem) => (
                            <NavSubItem
                              key={subSubItem.value}
                              href={subSubItem.path}
                              value={subSubItem.value}
                              className={getNavItemClass(subSubItem.path)}
                              style={{ paddingLeft: '20px' }}
                            >
                              {subSubItem.name}
                            </NavSubItem>
                          ))}
                      </NavSubItemGroup>
                    ))} */}
                  {expandedItem === item.value &&
                    item.subNavItems.map((subItem) => (
                      <React.Fragment key={subItem.value}>
                        {subItem.subNavItems ? (
                        //   <NavCategory value={subItem.value}>
                        //     <NavCategoryItem value={subItem.value} onClick={() => onNavSubItemToggle(subItem.value)}>
                        //       {subItem.name}
                        //     </NavCategoryItem>
                        //     {expandedSubItem === subItem.value && subItem.subNavItems.map((subSubItem) => (
                        //         <NavSubItemGroup key={subSubItem.value}>
                        //             <NavSubItem href={subSubItem.path} value={subSubItem.value}>
                        //                 {subSubItem.name}
                        //             </NavSubItem>
                        //         </NavSubItemGroup>
                        //     ))}
                        //   </NavCategory>
                        <NavSubItemGroup key={subItem.value}>
                        <NavSubItem value={subItem.value} onClick={() => onNavSubItemToggle(subItem.value)}>
                          {subItem.name}
                        </NavSubItem>
                        {expandedSubItem === subItem.value && subItem.subNavItems.map((subSubItem) => (
                            <NavSubItemGroup key={subSubItem.value}>
                                <NavSubItem href={subSubItem.path} value={subSubItem.value} className={getNavItemClass(item.path)}>
                                    {subSubItem.name}
                                </NavSubItem>
                            </NavSubItemGroup>
                        ))}
                      </NavSubItemGroup>
                        ) : (
                          <NavSubItemGroup key={subItem.value}>
                            <NavSubItem
                              href={subItem.path}
                              className={getNavItemClass(subItem.path)}
                              value={subItem.value}
                            >
                              {subItem.name}
                            </NavSubItem>
                          </NavSubItemGroup>
                        )}
                      </React.Fragment>
                    ))}
                </NavCategory>
              ) : (
                <NavItem
                  id={`nav-item-${item.value}`}
                  href={item.path}
                  icon={item.icon}
                  value={item.value}
                  className={getNavItemClass(item.path)}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {!isOpen && item.name}
                </NavItem>
              )}
            </React.Fragment>
          ))}
        </NavDrawerBody>
      </NavDrawer>
    </div>
  );
};
