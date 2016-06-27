/**
 * Created by user on 6/23/2016.
 */
var employeesList = [
    {
        firstName: 'John',         lastName: 'King',         phone: '0123456789',  	 salary: 4500
    },     {
        firstName: 'Steven',         lastName: 'Gerard',         phone: '0123456789',
        salary: 4500

    },
    {
        firstName: 'Diana',         lastName: 'Ross',         phone: '0123456789',
        salary: 4500

    },     {
        firstName: 'Mike',         lastName: 'Bob',         phone: '0123456789',
        salary: 4500

    },     {
        firstName: 'Emily',         lastName: 'Hudson',         phone: '0123456789',
        salary: 4500

    },
    {
        firstName: 'Diana',         lastName: 'Maria Micu',         phone: '0123456789',
        salary: 4500
    }
];


function showList() {

    /* comentariu test */
    var names = [];
    var name_counts = [];
    var numbers = new Array(10).fill(0);
    var topNumbers = '';

    var myTable = '<table id = "mytable" class="table table-striped" border="3"><tr><th><p>First Name</p></th><th><p>Last Name</p></th><th><p>Phone</p></th><th><p>Salary</p></th><th><p">Delete</p></th><th><p>View</p></th></tr>';

    for(var i in employeesList) {
        myTable += 
            '<tr id = "normalrows"><td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName + '</td><td>' +
            employeesList[i].phone + '</td><td>' + employeesList[i].salary +
            '<td>' + '<button class =\'delrowbutton\' onclick = "deleteRow('+i+'); showList()"> Delete Row </button>'+'</td>'+
            '<td>' + '<button class = \'viewbutton\' style="vertical-align:middle" onclick = "viewRow('+i+')"> <span> View Details </span></button>'+'</td>'+
            '</td></tr>';


        for(var j in employeesList[i].phone){
                numbers[employeesList[i].phone[j]] ++;
        }

        var nameIndex = names.indexOf(employeesList[i].lastName);

        if (nameIndex != -1)
            name_counts[nameIndex] += 1;
        else {
            names.push(employeesList[i].lastName);
            name_counts.push(1);
        }

    }

    var max_name_counts = Math.max.apply(0, name_counts);
    var max_name_counts_index = name_counts.indexOf(max_name_counts);
    var max_name = names[max_name_counts_index];

    var unique_name_counts = Math.min.apply(0, name_counts);
    var number_unique = 0;
    for( var i in name_counts) {
        if( unique_name_counts == name_counts[i])
            number_unique++;
    }

    for(var j = 0; j < 5 ; j++ ) {
        var max = Math.max.apply(0, numbers);
        var indexMax = numbers.indexOf(max);
        topNumbers += indexMax + ',';
        numbers[indexMax] = 0;
    }

    console.log(totalList());
    var average = totalList()/employeesList.length;
    myTable += '<tr> <td>' + max_name +  '</td><td>' + number_unique + '</td><td>'+ topNumbers.substr(0, topNumbers.length - 1) +'</td><td>' + average + '</td></tr></table>';

    var container = document.getElementById('listcontainer');
    container.innerHTML= myTable;
}

function vizualizare(row) {
    window.alert(employeesList[row].firstName);
}

function viewRow(row) {
    window.alert(employeesList[row].firstName + ' ' +employeesList[row].lastName+ ' '+ employeesList[row].phone + ' ' + employeesList[row].salary);
}
function deleteRow(row) {
    delete employeesList[row];

}

function totalList() {
    var sum = 0;
    for(var i in employeesList) {
        sum += employeesList[i].salary;

    }
    var showSum = '<p>' + sum + '</p>';
    var container = document.getElementById('sumId');
    container.innerHTML= showSum;
    return sum;
}

function deleteLast() {

        employeesList.pop();
}
var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}
function addEmployee() {

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary =   Number(document.getElementById("salary").value);
    employeesList.push(new Employee(firstName, lastName, phone, salary));
}

function chooseOp() {
    var op = document.getElementById("op").value;
    if (op == 1) {
        employeesList.sort(sortFunction1);

    }
    else if(op == 2) {
        employeesList.sort(sortFunction2);
    } else if(op == 3) {
        employeesList.sort(sortFunction3);
    }
    else if(op == 4) {
        employeesList.sort(sortFunction4);
    }
    else {
        alert("Not a valide sort");
    }
};

function sortFunction1(a, b) {
   return a.firstName.localeCompare(b.firstName);
}

function sortFunction2(a, b) {
    return a.lastName.localeCompare(b.lastName);
}

function sortFunction3(a, b) {
    return a.phone.localeCompare(b.phone);
}
function sortFunction4(a, b) {
    return  b.salary - a.salary ;
}

function findWord() {
    var word = document.getElementById("wordtofind").value;
    var newTable = '<table id = "mynewtable" class="table table-striped" border="3"><tr><th><p>First Name</p></th><th><p>Last Name</p></th><th><p>Phone</p></th><th><p>Salary</p></th><th><p">Delete</p></th><th><p>View</p></th></tr>';


    for(var i in employeesList) {
        if((employeesList[i].firstName.localeCompare(word) == 0) ||
            (employeesList[i].lastName.localeCompare(word) == 0) ||
            (employeesList[i].phone.localeCompare(word) == 0) ||
            (employeesList[i].salary == parseInt(word))) {
            newTable +=  '<tr id = "normalrows"><td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName + '</td><td>' +
                employeesList[i].phone + '</td><td>' + employeesList[i].salary +
                '<td>' + '<button class =\'delrowbutton\' onclick = "deleteRow('+i+'); showList()"> Delete Row </button>'+'</td>'+
                '<td>' + '<button class = \'viewbutton\' style="vertical-align:middle" onclick = "viewRow('+i+')"> <span> View Details </span></button>'+'</td>'+
                '</td></tr>';
        }
    }
    newTable += '</table>';
    var container = document.getElementById('tableupdate');
    container.innerHTML= newTable;
}