const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

let jobs = [
  {
    title: 'Software Engineer',
    company: 'Some Place',
    description: 'This is a cool job.',
    timeAgo: '5 days ago'
  },
  {
    title: 'Senior Software Engineer',
    company: 'Some Place',
    description: 'This is a cool senior job.',
    timeAgo: '2 days ago'
  },
  {
    title: 'Product Manager',
    company: 'Some Place',
    description: 'Manage some product.',
    timeAgo: '1 day ago'
  },
  {
    title: 'UI/UX Designer',
    company: 'Some Place',
    description: 'Make it look and work well.',
    timeAgo: '5 minutes ago'
  }
];

app.get('/jobs', (req, res) => {
  res.send({ jobs });
});

app.post('/job/:id/apply', (req, res) => {
  cosole.log(req.application);
  res.send();
});

app.listen(port, () => console.log(`Listening on port ${port}`));

