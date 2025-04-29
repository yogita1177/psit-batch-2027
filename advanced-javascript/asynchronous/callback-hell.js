function asyncFunction1(callback) {
  setTimeout(() => {
    console.log("Async Function 1 Done");
    callback();
  }, 1000);
}

function asyncFunction2(callback) {
  setTimeout(() => {
      console.log("Async Function 2 Done");
      callback();
  }, 1000);
}

function asyncFunction3() {
  setTimeout(() => {
      console.log("Async Function 3 Done");
  }, 1000);
}

asyncFunction1(() => {
    asyncFunction2(() => {
        asyncFunction3(() => {
            console.log("All task are done...")
        })
    })
});



function registerStudent(): Student {
    // ....
}

function registerStudentOnERP(registeredStudent): ERPStudent {

}

function assignStudentToGroup(erpstudent) {

}

function notifyStudent(erpStudent) {
    Notification.sendEmail(erpStudent.original, erpStudent.collegeEmail);
}



