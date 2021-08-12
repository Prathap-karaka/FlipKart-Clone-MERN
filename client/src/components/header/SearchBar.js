import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  search: {
    borderRadius: 2,
    marginLeft: 10,
    width: "38%",
    backgroundColor: "#fff",
    display: "flex",
    borderRadius: 5,
  },
  searchIcon: {
    marginLeft: "auto",
    padding: 5,
    display: "flex",
    color: "blue",
  },
  inputRoot: {
    fontSize: "20",
    width: "100%",
  },
  inputInput: {
    paddingLeft: 10,
    width: "100%",
  },
}));

export default function SearchBar() {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search products, Brands and more"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
    </div>
  );
}
