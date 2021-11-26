import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded"
import Select, { SelectChangeEvent } from "@mui/material/Select"

const useStyles = makeStyles(() => ({
  formControl: {
    "& .MuiInputBase-root": {
      backgroundColor: "#f0f0f0",
      borderRadius: "4px",
      width: "100%",
      height: "35px",
      fontSize: "12px",
      color: "#8d8d8d",
      justifyContent: "center",
    },
    "& .MuiOutlinedInput-notchedOutline ": {
      border: "none",
    },
    "& .MuiSelect-select": {
      padding: "15px 10px",
    },
  },
  select: {
    width: "auto",
    fontSize: "12px",
    "&:focus": {
      backgroundColor: "transparent",
    },
  },
  selectIcon: {
    position: "relative",

    fontSize: "12px",
  },
  paper: {
    borderRadius: 12,
  },
  list: {
    backgroundColor: "#f0f0f0",
    "& li": {
      fontWeight: 200,
      paddingTop: 8,
      paddingBottom: 8,
      fontSize: "12px",
      color: "#8d8d8d",
    },
    "& li.Mui-selected": {
      background: "#fff",
    },
  },
}))

interface ItemList {
  key: string
  value: string
}

interface Props {
  value: string
  handleChange: (e: SelectChangeEvent) => void
  itemList: ItemList[]
}

const DropDown = ({ value, handleChange, itemList }: Props) => {
  const classes = useStyles()

  const MenuProps: any = {
    classes: {
      list: classes.list,
      paper: classes.paper,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center",
    },
  }

  return (
    <FormControl className={classes.formControl}>
      <Select
        value={value}
        displayEmpty
        onChange={handleChange}
        IconComponent={ExpandMoreRoundedIcon}
        MenuProps={MenuProps}
        renderValue={(selected) => {
          if (selected === "") {
            return <span style={{ color: "#8d8d8d" }}>학년을 입력해주세요</span>
          }

          return `${selected}학년`
        }}
        classes={{
          select: classes.select,
          icon: classes.selectIcon,
        }}
      >
        {itemList.map((item) => (
          <MenuItem key={item.key} value={item.value}>
            {item.key}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default DropDown
