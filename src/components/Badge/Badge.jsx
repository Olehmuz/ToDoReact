
import "./badge.scss";
import classNames from "classnames";
const Badge = ({color,onclick, active}) => <i onClick={onclick} className={classNames(`badge`, {[`badge--${color}`]:color}, active)}></i>;

export default Badge;