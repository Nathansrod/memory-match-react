import brainImg from "../assets/brain.jpg";

export default function Header() {
  return (
    <header className="flex justify-center">
      <div className="flex items-center px-8 py-2 bg-orange-300 border-orange-800 border-2 shadow-md rounded-xl gap-4">
        <h1 className="text-2xl md:text-4xl font-bold text-orange-800">Memory Match!</h1>
        <img src={brainImg} className="w-16 md:w-20 rounded-full border-2 border-orange-800"/>
      </div>
    </header>
  );
}
