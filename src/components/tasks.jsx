function tasks(props){
    return (
          <div className="tasks-container mt-3">
            {props.lists.map((task,index)=>(
                <div className="task" key={index}>
                  {/* <input 
                      className="form-check-input mt-1 me-2" 
                      type="checkbox" 
                      value="" 
                      checked="true"
                      aria-label="Checkbox for following text input"
                  /> */}
                  {index+1}.
                  {task}
                  <div className="delete">
                    <span 
                      className="delete-btn" 
                      onClick={()=>props.deleteTask(task)}>
                      <i className="bi bi-x-lg"></i>
                    </span>
                  </div>
                </div>
            ))}
          </div> 
    )  
}
export default tasks;