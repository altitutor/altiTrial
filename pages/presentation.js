import Head from 'next/head'
import { useState } from 'react'

export default function Presentation() {
  const [step, setStep] = useState(0);

  const content = [
    {
      title: 'Welcome to the Tutorial!',
      description: 'This presentation will guide you through our services and what we offer.',
      type: 'text'
    },
    {
      title: 'Our Sessions',
      description: 'Watch this video to learn more about our tutoring sessions.',
      type: 'video',
      url: 'https://www.youtube.com/embed/your-video-id'
    },
    {
      title: 'Example Notes',
      description: 'Here are some example notes to give you a taste of our content.',
      type: 'text'
    },
    {
      title: 'Practice Questions',
      description: 'Try out these practice questions to test your knowledge.',
      type: 'text'
    },
    {
      title: 'Billing Information',
      description: 'Here is how our billing process works.',
      type: 'text'
    },
    {
      title: 'Homework Help',
      description: 'Learn about our homework help sessions and how they can benefit you.',
      type: 'text'
    },
    {
      title: 'Conclusion',
      description: 'Thank you for learning more about us. We hope to see you soon!',
      type: 'text'
    }
  ];

  const handleNext = () => {
    if (step < content.length - 1) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Step-wise Presentation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-lg">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">{content[step].title}</h1>
        {content[step].type === 'video' ? (
          <iframe
            width="100%"
            height="315"
            src={content[step].url}
            frameBorder="0"
            allowFullScreen
            className="mb-6"
          />
        ) : (
          <p className="text-lg text-gray-700 mb-6">{content[step].description}</p>
        )}

        {step === content.length - 1 && (
          <a
            href="https://student.altitutor.com/new-student-registration/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white py-2 px-4 rounded-lg text-lg hover:bg-green-600 transition"
          >
            Sign Up
          </a>
        )}

        <div className="flex justify-between items-center w-full mt-4">
          <button
            onClick={handlePrevious}
            disabled={step === 0}
            className={`py-2 px-4 rounded-lg text-lg ${step === 0 ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white hover:bg-blue-600 transition'}`}
          >
            Previous
          </button>
          <div className="flex-grow mx-4">
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-blue-500 rounded-full" style={{ width: `${((step + 1) / content.length) * 100}%` }} />
            </div>
          </div>
          <button
            onClick={handleNext}
            disabled={step === content.length - 1}
            className={`py-2 px-4 rounded-lg text-lg ${step === content.length - 1 ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white hover:bg-blue-600 transition'}`}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  )
}
