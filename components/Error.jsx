
const ErrorMessage = ({ error }) => {
  return (
    <div className="w-full flex-1 flex flex-col justify-center items-center text-red-800 p-6">
      <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="mb-4">{error}</p>
    </div>
  );
};

export default ErrorMessage;
