import './App.css';

// import Home from './Home';

function App() {

  const display = () => {
    console.log("hey XHR");
    let xhr = new XMLHttpRequest();
    xhr.open("Get", "https://reqres.in/api/users?page=1");

    // xhr.onprogress =()=>{
    //   <div class="loader"></div>

    // }
    xhr.onload = () => {
      let obj;
      obj = JSON.parse(xhr.responseText);
      //  console.log(JSON.parse( xhr.responseText));
      console.log(obj);
      let addData = new add();
      addData.displayData(obj);
    }
    xhr.send()

  }

  class add {
    displayData = (obj) => {
        let i;
      for( i; i<obj.data.lenght; i++){
        console.log(i)
      }
      let obj2 =obj.data[1];
      console.log(obj2)
      let tbody = document.getElementById('tbody')
      let uiString = `
                    <tr>
                    <td>${obj.data[0].id}</td>
                    <td>${obj.data[0].first_name}</td>
                    <td>${obj.data[0].last_name}</td>
                    <td>${obj.data[0].email}</td>
                    <td>${obj.data[0].avatar}</td>
                  </tr>

                  <tr>
                    <td>${obj.data[1].id}</td>
                    <td>${obj.data[1].first_name}</td>
                    <td>${obj.data[1].last_name}</td>
                    <td>${obj.data[1].email}</td>
                    <td>${obj.data[1].avatar}</td>
                  </tr>

                  <tr>
                    <td>${obj.data[2].id}</td>
                    <td>${obj.data[2].first_name}</td>
                    <td>${obj.data[2].last_name}</td>
                    <td>${obj.data[2].email}</td>
                    <td>${obj.data[2].avatar}</td>
                  </tr>

                  <tr>
                    <td>${obj.data[3].id}</td>
                    <td>${obj.data[3].first_name}</td>
                    <td>${obj.data[3].last_name}</td>
                    <td>${obj.data[3].email}</td>
                    <td>${obj.data[3].avatar}</td>
                  </tr>

                  <tr>
                    <td>${obj.data[4].id}</td>
                    <td>${obj.data[4].first_name}</td>
                    <td>${obj.data[4].last_name}</td>
                    <td>${obj.data[4].email}</td>
                    <td>${obj.data[4].avatar}</td>
                  </tr>

                  <tr>
                    <td>${obj.data[5].id}</td>
                    <td>${obj.data[5].first_name}</td>
                    <td>${obj.data[5].last_name}</td>
                    <td>${obj.data[5].email}</td>
                    <td>${obj.data[5].avatar}</td>
                  </tr>

    ` ;
      
      tbody.innerHTML += uiString;
      



    }
  }

 

  

  return (
    <>
      <div className="Navbar">
        <h1>Navbar</h1>
        <div className="getData">
          <button className="btn" onClick={display} >Get Users</button>
        </div>

      </div>
      {/* <Home/> */}
      <div id="table">
            <table>
                <thead id="tbody">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                   
                </tbody>
            </table>

        </div>
    </>
  );
}

export default App;
