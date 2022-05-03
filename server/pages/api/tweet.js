"use strict";
(() => {
var exports = {};
exports.id = 334;
exports.ids = [334];
exports.modules = {

/***/ 2017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function handler(req, res) {
  const data = [{
    id: 1,
    created_at: "2021,4,10",
    reply_count: 2,
    retweet_count: 3,
    favorite_count: 5,
    favorited: false,
    text: `Over 1 million deployments per week with 30+ frontend frameworks.
  
Learn how tools like 
@Turborepo
improve collaboration, make it easier to develop locally, and make builds faster for your entire team.`,
    user: {
      name: "Vercel",
      profile_image_url: "https://pbs.twimg.com/profile_images/1252531684353998848/6R0-p1Vf_400x400.jpg",
      screen_name: "vercel"
    }
  }, {
    id: 2,
    created_at: "",
    reply_count: 9,
    retweet_count: 36,
    favorite_count: 1,
    favorited: false,
    text: `a: it’s all of the above. combined, Shopify merchants would form the world’s 2nd largest company in revenue. 
they also helped support 5 million jobs, which collectively,
would make up the largest workforce in the world.`,
    user: {
      name: "Shopify",
      profile_image_url: "https://pbs.twimg.com/profile_images/1506629865985949699/vHbnimko_400x400.jpg",
      screen_name: "shopify"
    }
  }, {
    id: 3,
    created_at: "2020,4,10",
    retweet_count: 36,
    favorite_count: 1,
    favorited: false,
    text: `Asking "is something technical debt" is usually uninteresting. The metaphor's value is comparing paying interest vs principal. We judge debt of $1K differently if we are paying $1/month to service it vs $100/month`,
    user: {
      name: "Martin Fowler",
      profile_image_url: "https://pbs.twimg.com/profile_images/79787739/mf-tg-sq_400x400.jpg",
      screen_name: "martinfowler"
    }
  }, {
    id: 4,
    created_at: "2021,4,11",
    reply_count: 8,
    retweet_count: 1,
    favorited: false,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aperiam deleniti qui architecto at dolorum necessitatibus ea, doloribus unde non mollitia doloremque. Minima ut incidunt libero voluptatum, totam aut necessitatibus dicta nihil fuga consectetur veniam modi consequatur esse nostrum cupiditate sequi expedita omnis cum! Molestiae dolorem natus, tenetur accusantium facilis doloribus assumenda magni neque labore.`,
    user: {
      name: "Devian Art",
      profile_image_url: "https://pbs.twimg.com/profile_images/1456007680951144452/Q9DOnO3Q_400x400.jpg",
      screen_name: "devianart"
    }
  }, {
    id: 5,
    created_at: "2021,1,10",
    retweet_count: 36,
    favorite_count: 1,
    favorited: false,
    text: `🚀 Last week we released Headless UI v1.5, which includes a brand new Combobox component.
Comboboxes are a great alternative to select inputs when you’re working with large datasets and want to quickly filter to find the right option 🔎`,
    user: {
      name: "Tailwind CSS",
      profile_image_url: "https://pbs.twimg.com/profile_images/1468993891584073729/a_op8KnL_400x400.jpg",
      screen_name: "tailwindcss"
    }
  }, {
    id: 6,
    created_at: "2020,4,10",
    retweet_count: 36,
    favorite_count: 1,
    favorited: false,
    text: `Through Frontier, Stripe Climate contributors form an even larger collective to scale carbon removal to our planet’s needs.
We hope more buyers and suppliers will join Frontier in the months and years ahead.
We're just getting started: http://frontierclimate.com.`,
    user: {
      name: "Stripe",
      profile_image_url: "https://pbs.twimg.com/profile_images/1503494829094756357/ihaECs5p_400x400.jpg",
      screen_name: "stripe"
    }
  }, {
    id: 7,
    created_at: "2020,10,10",
    retweet_count: 6,
    favorite_count: 10,
    favorited: false,
    text: `While any breaking changes to types are unfortunate, the point of using TypeScript is to catch more errors before they get to production. The changes in the React 18 typings go a long way towards catching issues that were previously silently ignored and caused crashes.`,
    user: {
      name: "React",
      profile_image_url: "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png",
      screen_name: "reactjs"
    }
  }, {
    id: 8,
    created_at: "2020,4,10",
    retweet_count: 36,
    favorite_count: 1,
    favorited: false,
    text: `This is a text for random
Lorem ipsum dolor sit amet consectetur adipisicing elit.
    `,
    user: {
      name: "Wesbos",
      profile_image_url: "https://pbs.twimg.com/profile_images/877525007185858562/7G9vGTca_400x400.jpg",
      screen_name: "wesbos"
    }
  }, {
    id: 9,
    created_at: "2020,4,10",
    retweet_count: 36,
    favorite_count: 1,
    favorited: false,
    text: `Let your keyboard finish this sentence and share your answer. ⤵️

My next project will be _________.
    `,
    user: {
      name: "Upwork",
      profile_image_url: "https://pbs.twimg.com/profile_images/1389671445953921029/8D3jABqV_400x400.jpg",
      screen_name: "upwork"
    }
  }, {
    id: 10,
    created_at: "2020,4,10",
    retweet_count: 36,
    favorite_count: 1,
    favorited: false,
    text: `Since I’ve been asked a lot:
Buy stock in several companies that make products & services that *you* believe in.
Only sell if you think their products & services are trending worse. Don’t panic when the market does.      
This will serve you well in the long-term`,
    user: {
      name: "Elon Musk",
      profile_image_url: "https://pbs.twimg.com/profile_images/1521368437032996866/3rPfzxCi_400x400.jpg",
      screen_name: "elonmusk"
    }
  }, {
    id: 11,
    created_at: "2020,4,10",
    retweet_count: 36,
    favorite_count: 1,
    favorited: false,
    text: `Come fly with us! Farther than any human rated spacecraft. Longest duration without docking to a space station. Faster reentry. Send your name on this trip…👇🏾
    `,
    user: {
      name: "Victor Glover",
      profile_image_url: "https://pbs.twimg.com/profile_images/1458295410884231168/FnYQnwTi_400x400.jpg",
      screen_name: "victorglover"
    }
  }, {
    id: 11,
    created_at: "2020,4,10",
    retweet_count: 36,
    favorite_count: 1,
    favorited: false,
    text: `The ocular engine.`,
    user: {
      name: "Archillect",
      profile_image_url: "https://pbs.twimg.com/profile_images/1045579977067024384/S0luKMwQ_400x400.jpg",
      screen_name: "archillect"
    }
  }];
  res.status(200).json(data);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2017));
module.exports = __webpack_exports__;

})();