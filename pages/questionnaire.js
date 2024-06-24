import Head from 'next/head';
import { useState } from 'react';

export default function Questionnaire() {
  const [formData, setFormData] = useState({
    name: '',
    howDidYouHear: '',
    otherSource: '',
    yearLevel: '',
    school: '',
    subjects: '',
    motivation: '',
    futurePlans: '',
    currentGrades: '',
    topics: ''
  });

  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'howDidYouHear') {
      setShowOtherInput(value === 'other');
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Trial Session Questionnaire</title>
      </Head>

      <main className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Trial Session Questionnaire</h1>
        <form
          name="trial-session-questionnaire"
          method="POST"
          data-netlify="true"
          className="space-y-4"
        >
          {/* Hidden field for Netlify form handling */}
          <input type="hidden" name="form-name" value="trial-session-questionnaire" />
          
          {/* Honeypot field for basic bot prevention */}
          <p className="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
          </p>

          {/* Form fields */}
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={formData.name}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="howDidYouHear" className="block text-lg font-semibold text-gray-700">
              How did you hear about us? <span className="text-red-500">*</span>
            </label>
            <select
              name="howDidYouHear"
              id="howDidYouHear"
              onChange={handleChange}
              value={formData.howDidYouHear}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="" disabled>Select an option</option>
              <option value="friend">Recommended by a friend</option>
              <option value="google">Google search</option>
              <option value="social">Saw social media posts</option>
              <option value="other">Other</option>
            </select>
            {showOtherInput && (
              <div className="mt-2">
                <label htmlFor="otherSource" className="block text-lg font-semibold text-gray-700">
                  Please specify <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="otherSource"
                  id="otherSource"
                  onChange={handleChange}
                  value={formData.otherSource}
                  required={showOtherInput}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            )}
          </div>

          <div>
            <label htmlFor="yearLevel" className="block text-lg font-semibold text-gray-700">
              Year Level <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="yearLevel"
              id="yearLevel"
              onChange={handleChange}
              value={formData.yearLevel}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="school" className="block text-lg font-semibold text-gray-700">
              School <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="school"
              id="school"
              onChange={handleChange}
              value={formData.school}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="subjects" className="block text-lg font-semibold text-gray-700">
              Subjects <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subjects"
              id="subjects"
              onChange={handleChange}
              value={formData.subjects}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="motivation" className="block text-lg font-semibold text-gray-700">
              Motivation - why do you want tutoring?
            </label>
            <input
              type="text"
              name="motivation"
              id="motivation"
              onChange={handleChange}
              value={formData.motivation}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="futurePlans" className="block text-lg font-semibold text-gray-700">
              What do you want to do after you leave school? <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="futurePlans"
              id="futurePlans"
              onChange={handleChange}
              value={formData.futurePlans}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="currentGrades" className="block text-lg font-semibold text-gray-700">
              Grades - what grades are you currently on for each of these subjects?
            </label>
            <input
              type="text"
              name="currentGrades"
              id="currentGrades"
              onChange={handleChange}
              value={formData.currentGrades}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="topics" className="block text-lg font-semibold text-gray-700">
              Topics - which topic are you up to for each of these subjects? Which topic(s) have you completed already?
            </label>
            <input
              type="text"
              name="topics"
              id="topics"
              onChange={handleChange}
              value={formData.topics}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-center">
            <button type="submit" className="w-full sm:w-auto transition-all py-3 px-6 bg-[#8fb4dc] hover:bg-[#7999ba] focus:ring-blue-500 focus:ring-offset-2 text-white font-semibold rounded-3xl hover:px-8 shadow-lg shadow-[#8fb4dc]/50 hover:shadow-[#7999ba]/50 focus:outline-none focus:ring-2">
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
