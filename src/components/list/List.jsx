import "./list.scss";
import classNames from "classnames";
const List = ({items, isRemovable}) => {

    return (
        <ul className="sidebar__list">
            {items.map((el, ind) =>{
                return (
                    <li key={el+ind} className={classNames(el.className, {sidebar__active:el.active})}>
                        <i>{el.icon ? el.icon : <i className={`sidebar__icon sidebar__icon--${el.color}`}></i>}</i>
                        <span>{el.name}</span>
                    </li>
                )
            })}
        </ul>
    );
}
export default List;