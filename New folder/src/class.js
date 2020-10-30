class student{
    constructor(id, name , address, gender) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.gender = gender;
    }

    display(){
        return `${this.id} with name as ${this.name} from ${this.address}  of gender ${this.gender}`;
    }
}

class studentGrp{
    constructor(){
        this.studentarray = [];

    }
    addStudent(student1){
        if(student1 == null)
          throw " Student not created"
        this.studentarray.push(student1);
    }

    removeStudent(id){
        for(let index =0; index <this.studentarray.length; index++){
           const element = this.studentarray[index];
        if(element.id == id){
            this.studentarray.splice(index,1);
            return;
        }
         
        
    }
throw "student not found to delete"
}

updateStudent(student1){
    let selected=this.studentarray.find((e)=>e.id==student1.id);
    if(selected==undefined)
        throw "Student not found to update";
        selected.name=student1.name;
        selected.address=student1.address;
}

getAllStudents(){
    return this.studentarray;
}
getStudent(id){
    return this.studentarray.find((e)=>e.id==id);
}
}