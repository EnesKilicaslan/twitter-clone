function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function handler(req, res) {
  await sleep(3000);

  const data = [
    {
      id: 1,
      created_at: "2021,4,10",
      reply_count: 2,
      retweet_count: 3,
      favorite_count: 5,
      favorited: false,
      text: `This is a text for random

Lorem ipsum dolor sit amet consectetur adipisicing elit.
Similique animi sed itaque eveniet omnis expedita sit repellendus obcaecati, quis, facilis provident ullam dicta, odio saepe?
`,
      user: {
        name: "Enes Kilicaslan",
        profile_image_url_https:
          "https://pbs.twimg.com/profile_images/1312920774072770560/G_NfS1Mo_400x400.jpg",
        screen_name: "kugulbiri",
      },
    },
    {
      id: 2,
      created_at: "",
      reply_count: 9,
      retweet_count: 36,
      favorite_count: 1,
      favorited: false,
      text: `This is a text for random
  
Lorem ipsum dolor sit amet consectetur adipisicing elit.
  `,
      user: {
        name: "Enes Kilicaslan",
        profile_image_url_https:
          "https://pbs.twimg.com/profile_images/1312920774072770560/G_NfS1Mo_400x400.jpg",
        screen_name: "kugulbiri",
      },
    },
    {
      id: 3,
      created_at: "2021,4,11",
      reply_count: 8,
      retweet_count: 1,
      favorited: false,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aperiam deleniti qui architecto at dolorum necessitatibus ea, doloribus unde non mollitia doloremque. Minima ut incidunt libero voluptatum, totam aut necessitatibus dicta nihil fuga consectetur veniam modi consequatur esse nostrum cupiditate sequi expedita omnis cum! Molestiae dolorem natus, tenetur accusantium facilis doloribus assumenda magni neque labore.`,
      user: {
        name: "Devian Art",
        profile_image_url_https:
          "https://pbs.twimg.com/profile_images/1445014452072370177/I82xQUmm_400x400.jpg",
        screen_name: "@devianart",
      },
    },
    {
      id: 4,
      created_at: "2020,4,10",
      retweet_count: 36,
      favorite_count: 1,
      favorited: false,
      text: `This is a text for random
    
Lorem ipsum dolor sit amet consectetur adipisicing elit.


asdsdasdasd
    `,
      user: {
        name: "Enes Kilicaslan",
        profile_image_url_https:
          "https://pbs.twimg.com/profile_images/1312920774072770560/G_NfS1Mo_400x400.jpg",
        screen_name: "kugulbiri",
      },
    },
    {
      id: 5,
      created_at: "2020,10,10",
      retweet_count: 6,
      favorite_count: 10,
      favorited: false,
      text: `This is a text f
Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
      user: {
        name: "Enes Kilicaslan",
        profile_image_url_https:
          "https://pbs.twimg.com/profile_images/1312920774072770560/G_NfS1Mo_400x400.jpg",
        screen_name: "kugulbiri",
      },
    },
    {
      id: 6,
      created_at: "2021,1,10",
      retweet_count: 36,
      favorite_count: 1,
      favorited: false,
      text: `This is a text for random
    `,
      user: {
        name: "Enes Kilicaslan",
        profile_image_url_https:
          "https://pbs.twimg.com/profile_images/1312920774072770560/G_NfS1Mo_400x400.jpg",
        screen_name: "kugulbiri",
      },
    },
    {
      id: 7,
      created_at: "2020,4,10",
      retweet_count: 36,
      favorite_count: 1,
      favorited: false,
      text: `This is a text for randomThis is a text for randomThis is a text for randomThis is a text for randomThis is a text for randomThis is a text for randomThis is a text for random`,
      user: {
        name: "Enes Kilicaslan",
        profile_image_url_https:
          "https://pbs.twimg.com/profile_images/1312920774072770560/G_NfS1Mo_400x400.jpg",
        screen_name: "kugulbiri",
      },
    },
    {
      id: 8,
      created_at: "2020,4,10",
      retweet_count: 36,
      favorite_count: 1,
      favorited: false,
      text: `This is a text for random
    
Lorem ipsum dolor sit amet consectetur adipisicing elit.


asdsdasdasd
    `,
      user: {
        name: "Enes Kilicaslan",
        profile_image_url_https:
          "https://pbs.twimg.com/profile_images/1312920774072770560/G_NfS1Mo_400x400.jpg",
        screen_name: "kugulbiri",
      },
    },
  ];

  res.status(200).json(data);
}
