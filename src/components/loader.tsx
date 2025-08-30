const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      <p className="mt-4 text-lg text-gray-600">Extracting details...</p>
    </div>
  );
};

export default Loader;
