const data = {
    config: {
      name: "Nomi in rubrica",
      base_url: "https://jsonplaceholder.typicode.com/users",
    },
}


async function handleData () {
  const users = await getData (data.config.base_url)
  data.users = users
}

function loadData() {
  
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET"
  })
    .then((response) => {
      return response.json();
    })
    .then((dataJson) => {
      data.users = dataJson;

    });
}

async function getData(url) {
    try {
      const response = await fetch(url);
      const result = await response.json();
  
      if (!response.ok) {
        throw result;
      }
      return result;
    } catch (errorMessage) {
      console.log(errorMessage);
    }
  }

function filteredDataNameFromAToE() {
          
    const name1 = data.users.map((user) => user.name);

};

function showNames1 (button) {
  namesList1.textContent = "";

  for (let name of list) {

    const listNames = createListName(name1);

    listNames.appendChild(listName);
  }
}

function filteredDataNameFromFToL(name) {
  
  const name2 = data.users.map((user) => user.name);

};

function showNames2 (button) {
  namesList1.textContent = "";

  for (let name of list) {

    const listNames = createListName(name2);

    listNames.appendChild(listName);
  }
}

function filteredDataNameFromMToZ(name) {
  
  const name3 = data.users.map((user) => user.name);

};

function showNames3 (button) {
  namesList1.textContent = "";

  for (let name of list) {

    const listNames = createListName(name3);

    listNames.appendChild(listName);
  }
}


function filteredDataNameAll(name) {
  
  const nameAll = data.users.map((user) => user.name);

};

function showNamesAll (button) {
  namesList1.textContent = "";

  for (let name of list) {

    const listNames = createListName(nameAll);

    listNames.appendChild(listName);
  }
}


const FilteredName1 = document.getElementById ('filteredName1');
filteredName1.addEventListener('click', filteredDataNameFromAToE)

const FilteredName2 = document.getElementById ('filteredName2');
filteredName2.addEventListener('click', filteredDataNameFromFToL)

const FilteredName3 = document.getElementById ('filteredName3');
filteredName3.addEventListener('click', filteredDataNameFromMToZ)

const FilteredNameAll = document.getElementById ('filteredNameAll');
filteredNameAll.addEventListener('click', filteredDataNameAll)