export default async (req, res) => {
    if (req.method === 'POST') {
      // Handle the form submission here
      // You can access the form data via req.body
      const formData = req.body;
  
      // Optionally, you can log the form data or process it further
      console.log(formData);
  
      // Redirect to the success page
      res.writeHead(302, { Location: '/success' });
      res.end();
    } else {
      // Handle any other HTTP method
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  };
  