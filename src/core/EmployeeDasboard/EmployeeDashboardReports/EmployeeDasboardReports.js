import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "app/redux/actions/employeeDashboardActions";
import EmployeeDashboardReportsHeader from "./EmployeeDashboardReportsHeader";
import EmployeeDashboardReportsBody from "./EmployeeDashboardReportsBody";
import * as styled from "./EmployeeDasboardReports.styled";

const EmployeeDasboardReports = (props) => {
  const [state, setState] = useState({ selectedUser: null });

  const mapChangesToState = (value) => setState({ ...state, ...value });

  // const setUser = (selectedUser) => {
  //   const requestParams = {
  //     email: selectedUser.value,
  //     startDate: "2021-06-20",
  //     endDate: "",
  //   };
  //   props.dispatch(actionCreators.resetEmployeeTicketStatusCount());
  //   props.dispatch(actionCreators.startEmployeeTicketStatusCountLoader());
  //   props.dispatch(actionCreators.getEmployeeTicketStatusCount(requestParams));
  //   props.dispatch(actionCreators.resetEmployeeSlaInfo());
  //   props.dispatch(actionCreators.startEmployeeSlaInfoLoader());
  //   props.dispatch(actionCreators.getEmployeeSlaInfo(requestParams));
  //   mapChangesToState({ selectedUser });
  // };
  return (
    <styled.container>
      {/* <EmployeeDashboardReportsHeader /> */}
      <EmployeeDashboardReportsBody
        allAdminUsers={props.allAdminData.allAdminUsers}
        ticketStatusCountData={
          props.employeeDashboard.employeeTicketStatusCount
        }
        employeeSlaInfo={props.employeeDashboard.employeeSlaMissedVsAchived}
      />
    </styled.container>
  );
};

const mapStatetoProps = (state) => {
  return {
    allAdminData: state.common.allAdminData,
    employeeDashboard: state.employeeDashboard,
  };
};
export default connect(mapStatetoProps)(EmployeeDasboardReports);
