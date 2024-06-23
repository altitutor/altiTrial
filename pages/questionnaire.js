import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'

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
  const [disableSelectOption, setDisableSelectOption] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'howDidYouHear') {
      setShowOtherInput(value === 'other');
      if (value !== '') {
        setDisableSelectOption(true);
      }
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    if (formData.name === '' ||
        formData.howDidYouHear === '' ||
        formData.yearLevel === '' ||
        formData.school === '' ||
        formData.subjects === '' ||
        formData.futurePlans === '') {
      alert('Please fill in all required fields.');
      return;
    }

    // Form submission will be handled by Netlify
    router.push('/success');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Trial Session Questionnaire</title>
      </Head>

      <main className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Trial Session Questionnaire</h1>
        <form
          onSubmit={handleSubmit}
          name="trial-session-questionnaire"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="space-y-4"
          netlify
        >
          {/* Hidden field for Netlify's honeypot anti-spam technique */}
          <input type="hidden" name="form-name" value="trial-session-questionnaire" />
          <p className="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          <div>
            <label className="block text-gray-700 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              How did you hear about us? <span className="text-red-500">*</span>
            </label>
            <select
              name="howDidYouHear"
              onChange={handleChange}
              value={formData.howDidYouHear}
              required
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="" disabled={disableSelectOption}>Select an option</option>
              <option value="friend">Recommended by a friend</option>
              <option value="google">Google search</option>
              <option value="social">Saw social media posts</option>
              <option value="other">Other</option>
            </select>
            {showOtherInput && (
              <div className="mt-2">
                <label className="block text-gray-700 mb-2">
                  Please specify <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="otherSource"
                  onChange={handleChange}
                  value={formData.otherSource}
                  required={showOtherInput}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Year Level <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="yearLevel"
              onChange={handleChange}
              value={formData.yearLevel}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              School <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="school"
              onChange={handleChange}
              value={formData.school}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Subjects <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subjects"
              onChange={handleChange}
              value={formData.subjects}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Motivation - why do you want tutoring?
            </label>
            <input
              type="text"
              name="motivation"
              onChange={handleChange}
              value={formData.motivation}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              What do you want to do after you leave school? <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="futurePlans"
              onChange={handleChange}
              value={formData.futurePlans}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Grades - what grades are you currently on for each of these subjects?
            </label>
            <input
              type="text"
              name="currentGrades"
              onChange={handleChange}
              value={formData.currentGrades}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Topics - which topic are you up to for each these subjects? Which topic(s) have you completed already?
            </label>
            <input
              type="text"
              name="topics"
              onChange={handleChange}
              value={formData.topics}
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
  )
}
