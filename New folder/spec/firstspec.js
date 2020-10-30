describe('Suite to test classes',()=>{

    let student1=null;
    beforeAll(()=>{
        console.log("this executed before any op begin");
        student1=new student(123,"Neema","Mysore", "Female");
    })
    
   
      

    it('should set id',()=>{
        //const student1=new student(123,"Neema","Mysore", "Female")
        expect(student1.id).toBe(123);
    });
    it('should set name',()=>{
        //const student1=new student(123,"Neema","Mysore" , "Female")
        expect(student1.name).toBe("Neema")
    });
    it('should set address',()=>{
        //const student1=new student(123,"Neema","Mysore", "Female")
        expect(student1.address).toBe("Mysore")
    });

    it('should set gender',()=>{
        //const student1=new student(123,"Neema","Mysore", "Female")
        expect(student1.gender).toBe("Female")
    });
});






   describe('Testing for studentgroup',()=>{
        let std  =null;
        beforeAll(()=>{
            std =new studentGrp();
            std.addStudent(new student(123,"Neema","Mysore","Female"));
            std.addStudent(new student(234,"Riya","kerala","Female"));
            std.addStudent(new student(555,"Shahana","Wayanad","Female"));

        })

        const func=()=>{
            std.addStudent(null);
            
        }
    
    it('should throw exception if invalid student is added',()=>{
        let student1 = null;
    
        expect(func).toThrow();
    })
    it('shound add the student',()=>{
    
        std.addStudent(new student(888,"Neema","India","Female"));
        expect(std.studentarray.length).toBe(4);

    })
    it('shound update the student',()=>{
        const student1=new student(123,"Neema","Bathery","Female");
        std.updateStudent(student1);
        expect(std.studentarray[0]).toEqual(student1);
    })

   it("delete element",()=>{
        std.removeStudent(123);
        expect(std.studentarray).not.toContain(new student(123,"Neema","M","Female"));
    });


});













describe('Check fo Arrays',()=>{
    it('should check for Arrays',()=>{
        let arr=[2,3,4];
        expect(arr).toEqual([2,3,4]);
    });
    it('should check for same sequence',()=>{
        let arr=[2,3,4];
        expect(arr).not.toEqual([3,2,4]);
    });
    it('same content',()=>{
        let arr=[4,5,6];
        expect(arr.sort()).toEqual([5,6,4].sort());
    });

})