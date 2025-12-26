import { Card } from "./Card"
import { Test } from "./Test"


function App() {

  return (
    <>
      <Test titre="Mon titre" href="" age={30} admin={false} passion={["", ""]} objet={{}}/>
      <div className="flex justify-around">
        <Card text="Card" href="/" textButton="Voir plus"/>
        <Card text="Card 1" href="/" textButton="Voir plus"/>
        <Card text="Card 2" href="/" textButton="Voir plus"/>
      </div>
    </>
  )
}

export default App
