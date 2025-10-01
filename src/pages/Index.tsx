import { MadeWithApplaa } from "@/components/made-with-applaa";
import ChessGame from "@/components/ChessGame";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-tr from-gray-800 via-slate-900 to-black p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Glassmorphism Chess
        </h1>
        <p className="text-lg text-gray-400">
          A beautiful chess game with a glassy and colorful UI.
        </p>
      </div>
      
      <ChessGame />

      <div className="absolute bottom-0 w-full">
        <MadeWithApplaa />
      </div>
    </div>
  );
};

export default Index;