import HeaderComponent from "../components/HeaderComponent"

function HomePage() {
  const saySomeThing = ()=>{
    console.log("Di algo");
    alert("GAAAAA");
  }
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div>HomePage</div>
      <hr/>
      <button onClick={saySomeThing}>Pulsa Click</button>
    </>
    
  )
}

export default HomePage