import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import BirthdayPicker from "./BirthdayPicker";
import DialogTitle from "@material-ui/core/DialogTitle";
import CakeIcon from "@material-ui/icons/Cake";

export class BirthdateView extends Component {
  months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
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
    const years = [...Array(105).keys()].map((num) => {
      return <option value={Year - num}>{Year - num}</option>;
    });
    return years;
  };
  days = this.makeDays(31);
  years = this.makeYears();

  selectDate = (e) => {
    e.persist();

    if (e.target.name === "Month") {
      const updateDays = this.calculateDays(e.target.value, false);
      const updateYears = this.calculateYears("Dummy");
      this.setState((state) => {
        return {
          ...state,
          selectedMonth: e.target.value,
          days: updateDays,
          years: updateYears, //Can change into function
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
      let updateDays;
      this.state.selectedMonth === "2"
        ? (updateDays = this.calculateDays(2, e.target.value))
        : (updateDays = this.state.days);
      this.setState((state) => {
        return {
          ...state,
          selectedYear: e.target.value,
          days: updateDays,
        };
      });
    }
  };

  calculateDays(n, year) {
    let limit;
    this.state.selectedYear > 0
      ? (limit = new Date(this.state.selectedYear, n, 0).getDate())
      : (limit = new Date(2020, n, 0).getDate());

    year > 0 ? (limit = new Date(year, n, 0).getDate()) : console.log("No");

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
  constructor(props) {
    super(props);

    this.state = {
      months: this.months,
      selectedMonth: "",
      days: this.days,
      selectedDay: "",
      years: this.years,
      selectedYear: "",
    };
  }
  render() {
    return (
      <div>
        <DialogTitle id="form-dialog-title">
          {" "}
          <CakeIcon /> Birthday{" "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Please</DialogContentText>

          <Grid container alignContent="center" justify="center">
            <Grid item style={{ margin: "10px" }}>
              <BirthdayPicker
                title={"Month"}
                val={this.state.selectedMonth}
                choices={this.state.months}
                changeSelected={this.selectDate}
              />
            </Grid>

            <Grid item style={{ margin: "10px" }}>
              <BirthdayPicker
                title={"Day"}
                choices={this.state.days}
                val={this.state.selectedDay}
                changeSelected={this.selectDate}
              />
            </Grid>

            <Grid item style={{ margin: "10px" }}>
              <BirthdayPicker
                title={"Year"}
                choices={this.state.years}
                val={this.state.selectedYear}
                changeSelected={this.selectDate}
              />
            </Grid>
          </Grid>

          <Grid container justify="center" alignContent="center">
            <Grid item>
              <Typography>
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />{" "}
                By signing up you agree to our Terms of Service and Privacy
                Policy.
              </Typography>
            </Grid>

            <Grid item style={{ margin: "10px" }}>
              <Button color="primary" onClick={this.props.handleSegue}>Sign Up</Button>
            </Grid>
          </Grid>
        </DialogContent>{" "}
       
      </div>
    );
  }
}

export default BirthdateView;
