import type { NextApiRequest, NextApiResponse } from 'next';

const MAILERLITE_API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZmY3MjFmZWNiMWQ0MDZlZjE3ZWJlYjZiMjAwMDMyZWQwOGZkYjIzNDVlZWE2YjgxYzE0ZTZlZWY5MmYxMTVkZWVjZjVjY2ViOTY5NjdmZjMiLCJpYXQiOjE3NDI3NDQ5OTQuNzEyNTgsIm5iZiI6MTc0Mjc0NDk5NC43MTI1ODIsImV4cCI6NDg5ODQxODU5NC43MDc1MTksInN1YiI6IjE0MTY1NjAiLCJzY29wZXMiOltdfQ.DTPB_uUzaL-Nvnb0o1m42UNP9YD7OOgRsacGbBV0SYMlZ1dtYhPvqurLP1At4B-DpsegEAdVZInkKeINtYJMsHKMn-cB6Q29OH8-54Xar6d4TXreSqaFv6winslm4kb6lb_aEFv4sfzg9lO6g1Uj4pde6D4vwHeJNdMhOl1vlfxgQDZ5D5oqZ1WkI61P_OgsPg5L1JU7ZS4qrFwGKGG6e18drHBSDh4E6N7Of_YdOJ8zD2tAsVJFcQJvpvYXyzQK9cmZKQsvNkQ5Sf2coTqHicj2OgHWjCwedlRZOYtsX5ffHweC48H04d_vkdumUh001b0-VhpnU-Fs28opWDrgqgRpKbk3psWvdpDiAavZ_xklENjZo8jqHlDfn_mMtpfRQa1xsJMM4TkT1Rjmr8_m-ulohKUwN95SppMXNVoTP6yl2Pmvxw1iAP8tRJGJ-B7WeUFDpXHXHb_bWXzdfBn6gJKec473y4LATRtdyWIKlFOBzU50j34jMF0ld3-klM6VEGXMzgrQu1BBx8xeXoC2oJ-xsTbmP4XeCgR8QT6VVRtnpDYAaXmm443h-CJ3Hvp8psm1BowOTOLdyj0_8QllIVdU4Yam5drhKAu_7NudbtvKTUx2oV2g7AsAHVn8yoPHJbC3VXzPSu1M9oel0hB6xE7J_jw_WDnhpKcBCUi8rBE';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, artworkName, country, comment } = req.body;

    // Создаем подписчика с данными и сразу добавляем в группу
    const response = await fetch('https://api.mailerlite.com/api/v2/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-MailerLite-ApiKey': MAILERLITE_API_KEY,
      },
      body: JSON.stringify({
        email: email,
        fields: {
          artwork_name: artworkName || 'Not specified',
          country: country,
          comment: comment || 'No comment'
        },
        groups: ['149773788214461719']
      }),
    });

    const data = await response.json();
    console.log('MailerLite response:', data);

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send');
    }

    res.status(200).json({ message: 'Request sent successfully' });
  } catch (error) {
    console.error('Error sending to MailerLite:', error);
    res.status(500).json({ 
      message: 'Failed to send request',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 