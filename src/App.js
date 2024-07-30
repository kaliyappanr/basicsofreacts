import logo from './logo.svg';
import './App.css';
import John from './shan';

function App() {
  {/* var name = 'Shanmugha';
  const traine = 'Prasath';
  let company = 'Bks Pvt Ltd';
  let course = 'Front_End_Developer';
  */}
  // Default Parameter Values//

  {/*function sum(num1,num2=5){
    console.log(num1*num2); 
  }
  sum(10); // passinng one value
  sum(10,10); // passing two values
  */}

  // Rest Operator
  {
  function calc(a,b,c,d,...args){
    console.log('a : ',a);
    console.log('b : ',b);
    console.log('c : ',c);
    console.log('d : ',d);
    console.log('args : ',args);
  }
  calc(1,2,3,4,5,6,78,9);
  }
  // Spread Operator
  var syllabus = ['Tamil','English','Maths'];

  // Without Spread operator
  console.log([syllabus,'Science',"Social"]);

  //with Spread Operator
  console.log([...syllabus,"Science","Social"]);

  {/*var result;

  let product = function(a,b){
    return a+b;
  }
  result = product(1,2);
  console.log(result);
  */}
  {/*
  // Arrow Function
    var total;

  let arrowformat =(a,b) =>(a*b);
  total = arrowformat(2,4);
  console.log(total);
  */}

  {/*
    //  Normal object get format
    let student ={
      mark1 : 97,
      mark2 : 98,
      mark3 : 99
    };
    console.log(student.mark2);
  */}

  {/*
    // Javascript Destructure format

    const subject = {
      Teacher :'Joes',
      Student :'Stanley',
      course :'ReactJs'

    };

    let teacher=subject.Teacher;
    let student=subject.Student;
    let course=subject.course;
    console.log(teacher); 
    */}
return (
    <div className="App">{/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
    {
      <>
      {/*<h1>{name}</h1>
      <h2>{traine}</h2>
      <h3>{course}</h3>*/}
      {/*
        <h1>
          {`${name} is learning ${course} course from ${traine} at ${company}`}
        </h1>
      */}
    
      
     <John />
      </>
    
    } 

    </div>
  );
}

export default App;
