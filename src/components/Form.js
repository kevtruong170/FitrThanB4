import React from 'react'

export const Form = () => {

    // this.state = {exercise: ''};

    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
      }
    
    function handleChange(event) {
        this.setState({exercise: event.value})
    }

    return (
<div>
        <table border="2">
          <tr>
            <td>Row 1 Col 1</td>
            <td>Row 1 Col 2</td>
          </tr>
          <tr>
            <td>Row 2 Col 1</td>
            <td>Row 2 Col 2</td>
          </tr>
          <tr>
            <td>Row 3 Col 1</td>
            <td>Row 3 Col 2</td>
          </tr>
        </table>
      </div>
        // <form onSubmit={handleSubmit}>
        // //     <div>
        // //         <label>Exercise:
        // //             <input type="text" placeholder = "Enter Exercise" onChange={this.handleChange}>
        // //             </input>
        // //         </label>
        // //     <button onclick={console.log("SUbmitted")}>
        // //         Submit
        // //     </button>
        // // </div>
        // </form>

        
    )
}

export default Form