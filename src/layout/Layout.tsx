import React from 'react';
import { Sidebar } from './Sidebar';
import { makeStyles } from '@fluentui/react-components';
import { Outlet } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
  },
  content: {
    flex: "1",
    padding: "40px",
    display: "grid",
    maxHeight: "100vh",
    overflow: "scroll"
    // width : "100%"
  },
});

const Layout = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Sidebar />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
