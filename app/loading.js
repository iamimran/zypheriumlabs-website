"use client";

function Loading() {
  return (
    <>
      <div className="preloader loaded-success fixed inset-0 z-50 bg-gray-50">
        <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2">
          <div className="relative mx-auto my-12">
            <div className="inline-block">
              <svg
                className="animate-spin h-8 w-8 text-blue-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Loading;
