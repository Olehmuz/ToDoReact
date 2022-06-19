import "./list.scss";
import axios from "axios";
import classNames from "classnames";
import Badge from "../Badge/Badge";
import ExitSvg from "../../assets/img/remove.svg";
const List = ({items, isRemovable, onClick, removeItem, onActiveList, activeList}) => {
    
    return (
        <ul onClick={onClick} className="sidebar__list">
            
            {items.map((el, ind) =>{
                return (
                    
                    <li key={el+ind} onClick={onActiveList ? () => onActiveList(el) : null} className={classNames(el.className, {sidebar__active:activeList && el.id === activeList.id})}>
                        <i className="icon__wrap">{el.icon ? el.icon : <Badge color={el.color.name} />}</i>
                       
                        <span>{el.name}{el.tasks ? ` (${el.tasks.length})` : null}</span>
                        {isRemovable && (
                            <img src={ExitSvg} alt="Close" onClick={(e) =>{
                                if(window.confirm("Do you want delete this task?")){
                                    axios.delete("http://localhost:3001/lists/" + el.id).then(({data}) => {
                                        removeItem(el.id);
                                    });
                                    e.stopPropagation();
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