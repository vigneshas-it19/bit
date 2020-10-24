const fname = document.getElementsByName('fname');
const dob = document.getElementsByName('dob');
const mark = document.getElementsByName('mark');
const degree = document.getElementsByName('degree');
const gender = document.getElementsByName('gender');
const address = document.getElementsByName('address');
const PN = document.getElementsByName('PN'); 
const addBtn = document.getElementsByName('addBtn'); 




const database = firebase.database();
const usersRef = database.ref('/users');
addBtn.addEventListener('click', e => {
  e.preventDefault();
  usersRef.child(fname.value).set({
    first_name: fname.value,
    date_of_birth: dob.value,
    mark: mark.value,
    degree: degree.value,
    gender: gender.value,
    address: address.value,
    PN: PN.value
  });
});