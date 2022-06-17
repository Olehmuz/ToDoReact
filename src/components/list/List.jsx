import "./list.scss";
import axios from "axios";
import classNames from "classnames";
import Badge from "../Badge/Badge";
import ExitSvg from "../../assets/img/remove.svg";
const List = ({items, isRemovable, onClick, removeItem}) => {
    
    return (
        <ul onClick={onClick} className="sidebar__list">
            {items.map((el, ind) =>{
                return (
                    <li key={el+ind} className={classNames(el.className, {sidebar__active:el.active})}>
                        <i className="icon__wrap">{el.icon ? el.icon : <Badge color={el.color.name} />}</i>
                        <span>{el.name}</span>
                        {isRemovable && (
                            <img src={ExitSvg} alt="Close" onClick={() =>{
                                if(window.confirm("Do you want delete this task?")){
                                    axios.delete("http://localhost:3001/lists/" + el.id).then(({data}) => {
                                        removeItem(el.id);
                                    });
                                }
                            }}/>
                        )}
                    </li>
                )
            })}
        </ul>
    );
}
export default List;