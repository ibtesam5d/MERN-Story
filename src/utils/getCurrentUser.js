const getCurentUser = () => {
  const getUser = JSON.parse(localStorage.getItem("currentUser"));
  // console.log(getUser);
  const currentUser = getUser?.userInfo;
  // console.log(currentUser);
  return currentUser;
};

export default getCurentUser;
