import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user/userSelector";
import Redirect from "components/Redirect";

const ExistUser = (Component) => () => {
  const user = useSelector(selectCurrentUser);
  if (user) {
    return <Redirect to="/profiles" />;
  } else {
    return <Component />;
  }
};

export default ExistUser;
