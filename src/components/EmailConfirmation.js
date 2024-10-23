export default function EmailConfirmation({ advance }) {
  return (
    <div className="flex items-center justify-center w-full h-full gap-8 relative">
      <div className="flex flex-col">
        <h2 className="text-2xl">We sent you an email confirmation.</h2>
        <div
          className="opacity-50 hover:opacity-100 py-2 transition-opacity duration-300 ease-in-out flex items-center justify-center"
          onClick={advance}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="black"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
