import "./list.scss";
import classNames from "classnames";
import Badge from "../Badge/Badge";
const List = ({items, isRemovable, onClick}) => {

    return (
        <ul onClick={onClick} className="sidebar__list">
            {items.map((el, ind) =>{
                return (
                    <li key={el+ind} className={classNames(el.className, {sidebar__active:el.active})}>
                        <i className="icon__wrap">{el.icon ? el.icon : <Badge color={el.color} />}</i>
                        <span>{el.name}</span>
                    </li>
                )
            })}
        </ul>
    );
}
export default List;