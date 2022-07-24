const List = (props)=>{
    return (
        <div>
            {props.name}
            <input type="checkbox" checked={props.isCompleted} />
        </div>
    );
}

export default List;