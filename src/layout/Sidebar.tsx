import { DrawerProps, toastTitleClassNames } from "@fluentui/react-components";
import * as React from "react";
import {
  Hamburger,
  NavCategory,
  NavCategoryItem,
  NavDivider,
  NavDrawer,
  NavDrawerBody,
  NavDrawerHeader,
  NavDrawerProps,
  NavItem,
  NavSectionHeader,
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
  values,
} from "@fluentui/react";
initializeIcons();

const useStyles = (isOpen: boolean, isExpanded: boolean) => {
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
        // display : "none"
        display: !isOpen ? !isExpanded ? "block" : "none" : "none",
        transform: "rotate(90deg)"
      },
      // "& .fui-NavCategoryItem__expandIcon svg": {
      //   transform: isExpanded ? "rotate(180deg)" : "rotate(90deg)",
      //   transition: "transform 0.3s ease-in-out",
      // },
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
];

type DrawerType = Required<DrawerProps>["type"];

export const Sidebar = (props: Partial<NavDrawerProps>) => {
  const [expandedItem, setExpandedItem] = React.useState<string | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const styles = useStyles(isOpen, isExpanded);
  const active = activeNavItemStyle();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleExp = () => {
    setIsExpanded(!isExpanded);
  };
  const toggleItemExpansion = (itemValue: string) => {
    setExpandedItem(expandedItem === itemValue ? null : itemValue);
  };

  const getNavItemClass = (path: string) => {
    console.log("here", path);
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
                <NavCategory value={item.value} key={Math.random() * 100}>
                  {/* <Icon iconName="ChevronUp">
                    <NavCategoryItem icon={item.icon} >Hello</NavCategoryItem>
                  </Icon> */}
                  <NavCategoryItem icon={item.icon} className={styles.menuItem} onClick={toggleExp}>
                    {!isOpen && item.name}
                    <Icon iconName={isExpanded ? "ChevronUp" : "" } onClick={toggleExp} style={{position : "absolute", right : 10  }} />
                    {/* <IconButton
                      iconProps={{
                        iconName: isExpanded ? "ChevronUp" : "ChevronDown",
                      }}
                      sizes="small"
                      ariaLabel="Toggle sidebar"
                      onClick={toggleExp}
                      className={styles.iconButton}
                    /> */}
                  </NavCategoryItem>
                  {isExpanded &&
                    item.subNavItems.map((subItem) => (
                      <NavSubItemGroup>
                        <NavSubItem
                          href={subItem.path}
                          value={subItem.value}
                          className={getNavItemClass(subItem.path)}
                        >
                          {subItem.name}
                        </NavSubItem>
                      </NavSubItemGroup>
                    ))}
                </NavCategory>
              ) : (
                <NavItem
                  href={item.path || "#"}
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
