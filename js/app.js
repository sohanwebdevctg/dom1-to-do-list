// inputFunBtn
const inputFunBtn = () => {
  
  // catch input field
  const inputField = document.getElementById('inputData');
  // get input value
  const inputValue = inputField.value;

  //check input value empty
  if(inputValue !== ""){
      // set input value in table
      let tableData = document.getElementById('tableData');
      let tr = document.createElement('tr');
      tr.innerHTML = `
      <th>#</th>
      <td><input type="checkbox" class="checkbox checkbox-xs sm:checkbox-sm" /></td>
      <td>${inputValue}</td>
      <td><button onclick="deleteFunBtn(this)" class="btn btn-xs sm:btn-sm bg-red-500 text-white hover:bg-red-500">Delete</button></td>
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
  alert('successfully deleted data');

}

const deleteCheckFunBtn = () => {

  // catch tbody data
  let checkLists = document.querySelectorAll("input[type='checkbox']:checked");
  
  //loop all checkLists
  checkLists.forEach(checkList => {
    let td = checkList.parentNode;
    let tr = td.parentNode;
    let tbody = tr.parentNode;
    tbody.removeChild(tr);

    // success message
  alert('successfully deleted data');

  })
}