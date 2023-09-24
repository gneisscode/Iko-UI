import { Button } from '.'
import './index.css'


function App() {

  return (
    <>
      <div>Hello World</div>
      <div className=" w-[200px]">
        <Button
          label="test"
          size={"medium"}
          roundness={"pill"}
          intent={"primary"}
          variant={"filled"}
          className=""
        />
      </div>
    </>
  );
}
export default App
