import { connect } from "react-redux";
import { createSelector } from "reselect";
import AdminPage from "./adminPage";
const mapStateToProps = (state, ownProps) => {
  const listAccount = state.user.listAccount;
  const messageStatus = state.user.currentMessage;
  const messageDMStatus = state.danhMuc.currentDanhMucMessage;
  const messageTLStatus = state.theLoai.currentTheLoaiMessage;
  const listDM = state.danhMuc.listDanhMuc;
  // const currentDate = new Date();
  // const closest = listDM.reduce((closest, user) => {
  //   const userDateOfBirth = new Date(user.dateOfBirth);
  //   const timeDiff = Math.abs(
  //     currentDate.getTime() - userDateOfBirth.getTime()
  //   );

  //   if (closest === null || timeDiff < closest.timeDiff) {
  //     return { user, timeDiff };
  //   }

  //   return closest;
  // }, null);
  return {
    listAccount,
    messageStatus,
    messageDMStatus,
    messageTLStatus,
    listDM,
  };
};

const mapDispatchToProps = (dispatch) => ({});

const AdminPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);

export default AdminPageContainer;
