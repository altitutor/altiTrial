import Head from 'next/head';

export default function TestForm() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Netlify Form Test</title>
      </Head>
      <main className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Netlify Form Detection Test</h1>
        <form
          name="test-form"
          method="POST"
          action="/success"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="test-form" />
          <p className="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
          </p>

          <div>
            <label className="block text-gray-700 mb-2">
              Test Field <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="testField"
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="w-full flex justify-center">
            <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
