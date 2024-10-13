export default function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email } = req.body;
  
      return res.status(200).json({ success: true });
    }
  
    // Handle other request methods
    
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  