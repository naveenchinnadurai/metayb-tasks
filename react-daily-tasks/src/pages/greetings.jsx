import Greet from "../component/greet";

function Greetings() {
  return (
    <div className="h-full flex flex-col items-center p-5 bg-zinc-800">
      <Greet name="Naveen" style="text-white" />
    </div>
  );
}

export default Greetings;
