import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Success() {
  const [confirmationStep, setConfirmationStep] = useState(false);

  const handleContinueClick = () => {
    setConfirmationStep(true);
  };

  const handleConfirmClick = () => {
    // Redirect to the step-wise presentation page
    window.location.href = '/presentation';
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Form Submission Successful</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white p-10 rounded-lg shadow-lg text-center max-w-md">
        <h1 className="text-3xl font-bold text-green-500 mb-4">Success!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Your form has been submitted successfully. Please show this page to the front desk.
        </p>
        <button
          onClick={handleContinueClick}
          className={`bg-green-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-green-600 transition mb-4 w-full ${confirmationStep ? 'hidden' : 'block'}`}
        >
          Continue
        </button>
        {confirmationStep && (
          <div class="">
            <p className="text-lg text-gray-700 mb-4">
              Are you sure you want to proceed? Make sure you have shown this to the front desk.
            </p>
            <div className="flex gap-4 mt-4 justify-center">
              <button
                onClick={handleConfirmClick}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg text-lg hover:bg-blue-600 transition"
              >
                Yes, Proceed
              </button>
              <button
                onClick={() => setConfirmationStep(false)}
                className="bg-red-500 text-white py-2 px-4 rounded-lg text-lg hover:bg-red-600 transition"
              >
                No, Go Back
              </button>
            </div>

          </div>
        )}
        {/* <Link href="/">
          <div className="bg-gray-500 text-white py-2 px-4 rounded-lg text-lg hover:bg-gray-600 transition">
            Go to Home Page
          </div>
        </Link> */}
      </main>
    </div>
  )
}
