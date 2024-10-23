import { Chiste } from "./components/Chiste";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="space-y-4 p-2 bg-gray-200 bg-clip-border rounded-xl">
        <h1 className="text-green-700 font-bold text-3xl text-center">
          Generador de Chistes
        </h1>
        <Chiste />
      </div>
    </div>
  );
}

export default App;
