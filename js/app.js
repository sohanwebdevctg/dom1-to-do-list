// inputFunBtn
const inputFunBtn = () => {
  
  // catch input field
  const inputField = document.getElementById('inputData');
  // get input value
  const inputValue = inputField.value;

   // index number
   

  //check input value empty
  if(inputValue !== ""){
      // set input value in table
      let tableData = document.getElementById('tableData');
      let tr = document.createElement('tr');
      tr.innerHTML = `
      <th>#</th>
      <td>
        <input type="checkbox" class="checkbox" />
      </td>
      <td>${inputValue}</td>
      <td><button onclick="deleteFunBtn(this)" class="btn btn-sm bg-red-500 text-white hover:bg-red-500">Small</button></td>
      `
      // append the tr
      tableData.appendChild(tr);
      // clear input value
      inputField.value = "";
  }else{
    alert("Please enter some data")
  }
}

// delete single data
const deleteFunBtn = (btnData) => {

  // select button parentNode data
  let td = btnData.parentNode;
  let tr = td.parentNode;
  let tbody = tr.parentNode;
  tbody.removeChild(tr);

  // success message
  alert('successfully deleted data')


}