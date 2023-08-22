// import logo from './logo.svg';
import './App.css';
import './appStyles.css'
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';
// import PureComp from './components/PureComp';
// import ParentComp from './components/ParentComp';
// import RefsDemo from './components/RefsDemo';
// import FocuInput from './components/FocusInput'
// import FRParentInput from './components/FRParentInput';
// import Home from './components/Hero'
// import TicTacToe from './components/TicTacToe';
// import FragmentDemo from './components/FragmentDemo';
// import Crud from './components/Crud';
// import UseState from './components/UseState';
// import Styles from './appStyles.module.css'
// import NameList from './components/NameList';
// import StyleSheet from './components/StyleSheet';
// import Inline from './components/Inline'
// import MyComponent from './components/Greet'
// import Wellcome from './components/Wellocome';
// import Hello from './components/Hello'
// import Message from './components/Message'
// import Count from './components/Counter'
// import Funclick from './components/FunctionClick'
// import Eventbind from './components/EventBind'
// import ParentName from './components/ParentComponent'
// import UserGreating from './components/UserGreating';
// import FormComponent from './components/form'
// import LifecycleA from './components/LifecycleA';

function App() {
  return (
    <div className="App">
      {/* <h1 className='error'>Error</h1>
      <h1 className={Styles.success}>Success</h1> */}
      {/* <MyComponent name="prabhat" heroName="human"> <p>hello this is para</p></MyComponent>
      <MyComponent name="prakash" heroName="BatName"></MyComponent> */}

      {/* <Wellcome name="Rakesh"> <p>Wellcome to MyClassComponent </p></Wellcome> */}
      {/* <Wellcome name="pramod"></Wellcome> */}

      {/* <Message></Message> */}
      {/* <Count></Count> */}
      {/* <Hello></Hello> */}

      {/* <Funclick></Funclick>
      <Classclick></Classclick> */}

      {/* <ParentName></ParentName> */}
      {/* <UserGreating></UserGreating> */}

      {/* <NameList></NameList> */}
      {/* <StyleSheet primary={true}></StyleSheet>
      <Inline></Inline> */}

      {/* <FormComponent></FormComponent> */}

      {/* <LifecycleA></LifecycleA> */}

      {/* <FragmentDemo></FragmentDemo> */}
      {/* <Crud></Crud> */}

      {/* <UseState></UseState> */}
      {/* <RefsDemo></RefsDemo> */}

      {/* <FocuInput></FocuInput> */}

      {/* <FRParentInput></FRParentInput> */}
      <ErrorBoundary>
      <Hero heroNames='prabhat'></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroNames='prabhatd'></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroNames='prabhatdi'></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroNames='joker'></Hero>
      </ErrorBoundary>
      

      {/* <PureComp></PureComp> */}

      {/* <ParentComp></ParentComp> */}
      {/* <TicTacToe></TicTacToe> */}

      {/* <Eventbind></Eventbind> */}
        {/* <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h1>hello word!</h1>
        </header> */}
   </div>
  );
}

export default App;
