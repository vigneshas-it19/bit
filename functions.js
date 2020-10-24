const fname = document.getElementById('fname');
const mark = document.getElementById('mark');
const degree = document.getElementById('degree');
const dob= document.getElementById('dob');
const address= document.getElementById('address');
const PN = document.getElementById('PN'); 
var gender ;
const addBtn = document.getElementById('addBtn');
const viewBtn = document.getElementById('viewBtn');



const database = firebase.database();
const usersRef = database.ref('/users');
addBtn.addEventListener('click', e => {
  e.preventDefault();
  if (document.getElementById('gender1').checked) {
    gender = document.getElementById('gender1');
  }
  if (document.getElementById('gender2').checked) {
    gender = document.getElementById('gender2');
  }
  usersRef.child(fname.value).set({
    fname : fname.value,
    gender: gender.value,
    date_of_birth: dob.value,
    mark: mark.value,
    degree: degree.value,
    address: address.value,
    PN: PN.value
  });

  document.getElementById("PN").value = null;
  document.getElementById("dob").value = null;
  document.getElementById("mark").value = null;
  document.getElementById("degree").value = null;
  document.getElementById("address").value = null;	
  document.getElementById("fname").value = null;


});





viewBtn.addEventListener('click', e => {
  e.preventDefault();
  usersRef.orderByChild("fname").equalTo(fname.value).on('value', snapshot => {
    document.getElementById("PN").value = snapshot.child(fname.value+"/PN").val();
    document.getElementById("dob").value = snapshot.child(fname.value+"/date_of_birth").val();
    document.getElementById("mark").value = snapshot.child(fname.value+"/mark").val();
    document.getElementById("degree").value = snapshot.child(fname.value+"/degree").val();
    document.getElementById("address").value = snapshot.child(fname.value+"/address").val();
    var g = snapshot.child(fname.value+"/gender").val();
    if(g=="male")
	{document.getElementById("gender1").checked = true;}
    else
	{document.getElementById("gender2").checked = true;}
});
});







