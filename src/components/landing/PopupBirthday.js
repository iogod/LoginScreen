import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CakeIcon from "@material-ui/icons/Cake";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NumberPicker from "./Numpicker";
import BirthdayPicker from "./BirthdayPicker";
import Box from "@material-ui/core/Box";

export class PopupBirthday extends Component {
  handleClick = () => {
    this.setState((state) => {
      return {
        ...state,
        open: !state.open,
      };
    });
  };

  months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ].map((mez, index) => {
    return <option value={index + 1}>{mez}</option>;
  });

  makeDays = (n) => {
    const lo = [...Array(n).keys()].map((num, index) => {
      return <option value={index + 1}>{num + 1}</option>;
    });
    return lo;
  };

  makeYears = () => {
    const Year = new Date().getFullYear();

    const lo = [...Array(105).keys()].map((num) => {
      return <option value={Year - num}>{Year - num}</option>;
    });

    return lo;
  };
  days = this.makeDays(31);
  years = this.makeYears();

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      months: this.months,
      selectedMonth: "",
      days: this.days,
      selectedDay: "",
      years: this.years,
      selectedYear: "",
    };
  }

  selectDate = (e) => {
    e.persist();

    if (e.target.name === "Month") {
      const updateDays = this.calculateDays(e.target.value,false);
      this.setState((state) => {
        return {
          ...state,
          selectedMonth: e.target.value,
          days: updateDays,
        };
      });
    } else if (e.target.name === "Day") {
      const updateYears = this.calculateYears(e.target.value);
      this.setState((state) => {
        return {
          ...state,
          selectedDay: e.target.value,
          years: updateYears,
        };
      });
    } else if (e.target.name === "Year") {
        let updateDays
        this.state.selectedMonth === "2" && ( updateDays= this.calculateDays(2,e.target.value)  )
      this.setState((state) => {
        return {
          ...state,
          selectedYear: e.target.value,
          days:updateDays
        };
      });
    }
  };

  calculateDays(n,year) {
    let limit;
    this.state.selectedYear > 0
      ? (limit = new Date(this.state.selectedYear, n, 0).getDate())
      : (limit = new Date(2020, n, 0).getDate());

      year > 0 ?  (limit = new Date(year,n,0).getDate()) : console.log("No")
     

    if (this.state.selectedDay > 0 && this.state.selectedDay > limit) {
      this.setState({ selectDate: "" });
    }
    return this.makeDays(limit);
  }

  calculateYears(n) {
    let years = this.makeYears();
    if (this.state.selectedMonth === "2" && n === "29") {
      const filteredYears = years.filter((year) => {
        return this.checkLeapYear(year.props.value);
      });
      return filteredYears;
    }
    return years;
  }

  checkLeapYear(year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  }

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClick}>
          {this.props.userState}
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClick}
          aria-labelledby="form-dialog-title"
        >
          <AppBar position="static" style={{ flexGrow: 1 }}>
            <Toolbar>
              <DialogTitle id="form-dialog-title">
                {" "}
                <CakeIcon /> Birthday{" "}
              </DialogTitle>
              <Button color="inherit">Next</Button>
            </Toolbar>
          </AppBar>

          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>

            <Box
              display="flex"
              flexDirection="row"
              justifySelf="center"
              p={1}
              m={1}
            >
              <Box p={1}>
                <BirthdayPicker
                  title={"Month"}
                  val={this.state.selectedMonth}
                  choices={this.state.months}
                  changeSelected={this.selectDate}
                />
              </Box>
              <Box p={1}>
                <BirthdayPicker
                  title={"Day"}
                  choices={this.state.days}
                  val={this.state.selectedDay}
                  changeSelected={this.selectDate}
                />
              </Box>
              <Box p={1}>
                <BirthdayPicker
                  title={"Year"}
                  choices={this.state.years}
                  val={this.state.selectedYear}
                  changeSelected={this.selectDate}
                />
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClick} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClick} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default PopupBirthday;
