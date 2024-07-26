import * as React from "react";
import {
  NavCategory,
  NavCategoryItem,
  NavDivider,
  NavDrawer,
  NavDrawerBody,
  NavDrawerHeader,
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
      paddingLeft:  isOpen ?   "5px":"140px",  
      // marginLeft: "10px",
    }),
    menuItem: mergeStyles({
      "& .fui-NavCategoryItem__expandIcon": {
        display: "none",
      },
      "& button": {
        "& .fui-NavCategoryItem__expandIcon": {
          display: "none",
        },
      },
    }),
    subMenuItem: mergeStyles({
      marginLeft: "30px",
      "& svg": {
        display: "none",
      },
      "& button": {
        "& svg": {
          display: "none",
        },
      },
    }),
  };
};

const activeNavItemStyle = makeStyles({
  activeNavItem: {
    backgroundColor: "#E6E6E6",
    color: "#808080",
    borderLeft: "#00308F solid 5px",
  },
  activeSubNavItem: {
    backgroundColor: "#E6E6E6",
    color: "#808080",
    borderLeft: "#00308F solid 5px",
    marginLeft: "20px",
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
        path: "/hr/testing5",
        name: "Testing 5",
        value: "6.3",
      },
      {
        icon: <JobPostings />,
        name: "Testing 1",
        value: "6.1",
        subNavItems: [
          {
            path: "/hr/testing-1/testing-1.1",
            name: "Testing 1.1",
            value: "6.1.1",
          },
          {
            path: "/hr/testing-1/testing-1.2",
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
            path: "/hr/testing-2/testing-2.1",
            name: "Testing 2.1",
            value: "6.2.1",
          },
          {
            path: "/hr/testing-2/testing-2.2",
            name: "Testing 2.2",
            value: "6.2.2",
          },
        ],
      },
    ],
  },
];

export const SideNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [expandedItem, setExpandedItem] = React.useState<string | null>(null);
  const styles = useStyles(isOpen);
  const active = activeNavItemStyle();
  const [expandedSubItem, setExpandedSubItem] = React.useState<string | null>(
    null
  );
  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };
  const toggleSidebar = (forceOpen?: boolean) => {
    setIsOpen(forceOpen ?? !isOpen);
  };

  const handleItemClick = (itemValue: string) => {
    setExpandedItem((prev) => (prev === itemValue ? null : itemValue));
    setExpandedSubItem(null);
  };

  const onNavSubItemToggle = (subItemValue: string) => {
    setExpandedSubItem(expandedSubItem === subItemValue ? null : subItemValue);
  };

  const getNavItemClass = (path: string) => {
    return location.pathname === path ? active.activeNavItem : "";
  };

  const getSubNavItemClass = (path: string) => {
    return location.pathname === path ? active.activeSubNavItem : "";
  };

  return (
    <div className={styles.root}>
      <NavDrawer
        open={true}
        type="inline"
        style={
          isOpen ? { width: "60px", overflow: "hidden" } : { width: "200px" }
        }
        onMouseEnter={() => toggleSidebar(false)}
        // onMouseLeave={() => toggleSidebar(true)}
        multiple={false}
      >
        <NavDrawerHeader>
          <IconButton
            iconProps={{ iconName: !isOpen ? "ChevronLeft" : "ChevronRight" }}
            onClick={() => toggleSidebar()}
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
                      style={ isOpen ? {display : "none"} : { position: "absolute", right: 10 }}
                    />
                  </NavCategoryItem>
                  {expandedItem === item.value &&
                    item.subNavItems.map((subItem) => (
                      <React.Fragment key={subItem.value}>
                        {subItem.subNavItems ? (
                          <NavCategory value={subItem.value}>
                            <NavCategoryItem
                              value={subItem.value}
                              icon={subItem.icon}
                              className={styles.subMenuItem}
                              onClick={() => onNavSubItemToggle(subItem.value)}
                            >
                              {subItem.name}
                              <Icon
                                iconName={
                                  expandedSubItem === subItem.value
                                    ? "ChevronUp"
                                    : "ChevronDown"
                                }
                                style={{ position: "absolute", right: 30 }}
                              />
                            </NavCategoryItem>
                            {expandedSubItem === subItem.value &&
                              subItem.subNavItems.map((subItem) => (
                                <NavSubItemGroup key={subItem.value}>
                                  <NavSubItem
                                    href={subItem.path}
                                    className={getSubNavItemClass(subItem.path)}
                                    value={subItem.value}
                                  >
                                    {subItem.name}
                                  </NavSubItem>
                                </NavSubItemGroup>
                              ))}
                          </NavCategory>
                        ) : (
                          // <NavSubItemGroup key={subItem.value}>
                          //   <NavSubItem
                          //     href={subItem.path}
                          //     className={getNavItemClass(subItem.path)}
                          //     value={subItem.value}
                          //   >
                          //     {subItem.name}
                          //   </NavSubItem>
                          // </NavSubItemGroup>
                          <NavItem href={subItem.path} value={subItem.value} className={`${getSubNavItemClass(subItem.path)} + ${styles.subMenuItem}`}>
                            {subItem.name}
                          </NavItem>
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
