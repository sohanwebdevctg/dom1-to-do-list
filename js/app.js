// inputFunBtn
const inputFunBtn = () => {
  
  // catch input field
  const inputField = document.getElementById('inputData');
  // get input value
  const inputValue = inputField.value;

   // index number
   let num = 0;

  //check input value empty
  if(inputValue !== ""){
      // set input value in table
  let tableData = document.getElementById('tableData');
  let tr = document.createElement('tr');
  tr.innerHTML = `
  <th>${++num}</th>
  <td>
    <input type="checkbox" class="checkbox" />
  </td>
  <td>${inputValue}</td>
  <td><button class="btn btn-sm bg-red-500 text-white hover:bg-red-500">Small</button></td>
  `
  tableData.appendChild(tr);

  inputField.value = "";
  }else{
    alert("Please enter some data")
  }
}

