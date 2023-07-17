function inputForm(props){
    
    return (
        <div className="input-group">
              <input type="text" className="form-control input-task" onChange={props.handleChange} placeholder="Enter your task here" aria-label="task" value={props.inputValue} aria-describedby="basic-addon1" onKeyDown={props.handleKeyDown} autoFocus/>
              <button className="btn btn-secondary" onClick={props.addTask}><span className="fs-6"><i className="bi bi-check2">Add Task</i></span></button>
        </div> 
    );
}
export default inputForm;