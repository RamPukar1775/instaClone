/*const person={
    name: "John Doe",
    age: 30,
    occupation: "Software Developer",
   
    }
    console.log(person.name); // Output: John Doe*/
/*let person=new Object();
person.name="John Doe";
person.age=30;
person.occupation="Software Developer";
   // console.log(person);
     // Output: John Doe
     person.great=function(){
        console.log('Hello ${this.name}');
        };
        console.log(person.great()); 
        */
      /* function demo(name){
        return 'hello '+name;
       }
       console.log(demo('John')); // Output: hello John
       */
/*
      function hello(name){
        console.log('hello '+name);
       }    
       function process(callback){
        const name='John';
        callback(name);
       }
       process(hello); 
*/

       const arr=['apple','peach','banana', 'orange'];


       const [red,blue,...green]=arr;    //rest operator
         console.log(green); // Output: apple