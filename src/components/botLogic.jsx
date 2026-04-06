// 1. Your Custom Data (Grow this to 50+ items!)
export const botData = [
  {
    keywords: ["flip a coin", "toss a coin"],
    reply: () =>
      Math.random() < 0.5 ? "Sure! You got Heads." : "Sure! You got Tails.",
  },
  {
    keywords: ["today's date", "date today", "today's date"],
    reply: () => `Today is ${new Date().toDateString()}.`,
  },
  {
    keywords: ["react", "frontend", "javascript"],
    reply: () => "React is awesome for building component-based UIs!",
  },
  {
    keywords: ["hello", "hi there", "hey"],
    reply: () => "Hi there! How can I help you today?",
  },
  {
    keywords: ["hello", "hi", "hey"],
    reply: () => "Hello! How can I assist you today?",
  },

  {
    keywords: ["how are you"],
    reply: () => "I'm functioning well. How can I help you?",
  },

  {
    keywords: ["your name", "who are you"],
    reply: () => "I'm your virtual assistant.",
  },

  {
    keywords: ["what can you do"],
    reply: () =>
      "I can answer simple questions, provide information, and assist you.",
  },

  {
    keywords: ["help"],
    reply: () => "Sure, I'm here to help. What do you need?",
  },

  { keywords: ["date", "today date"], reply: () => new Date().toDateString() },

  {
    keywords: ["time", "current time"],
    reply: () => new Date().toLocaleTimeString(),
  },

  { keywords: ["thank you", "thanks"], reply: () => "You're welcome." },

  { keywords: ["bye", "goodbye"], reply: () => "Goodbye. Have a great day." },

  {
    keywords: ["good morning"],
    reply: () => "Good morning. How can I assist you today?",
  },

  {
    keywords: ["good afternoon"],
    reply: () => "Good afternoon. How can I help you?",
  },

  {
    keywords: ["good evening"],
    reply: () => "Good evening. What can I do for you?",
  },

  {
    keywords: ["who created you", "your creator"],
    reply: () => "I was created by a developer named Taiwo Jeremiah.",
  },

  { keywords: ["are you human"], reply: () => "No, I am a virtual assistant." },

  {
    keywords: ["where are you from"],
    reply: () => "I exist online and do not have a physical location.",
  },

  {
    keywords: ["what is your purpose"],
    reply: () => "My purpose is to assist and provide helpful responses.",
  },

  {
    keywords: ["flip coin", "coin"],
    reply: () => (Math.random() < 0.5 ? "Heads" : "Tails"),
  },

  {
    keywords: ["tell me a joke"],
    reply: () =>
      "Why do programmers prefer dark mode? Because light attracts bugs.",
  },

  {
    keywords: ["motivate me"],
    reply: () => "Stay consistent. Progress comes with effort over time.",
  },

  {
    keywords: ["quote"],
    reply: () =>
      "Success usually comes to those who are too busy to be looking for it.",
  },

  {
    keywords: ["what is javascript"],
    reply: () =>
      "JavaScript is a programming language used to build interactive web applications.",
  },

  {
    keywords: ["what is react"],
    reply: () =>
      "React is a JavaScript library used for building user interfaces.",
  },

  {
    keywords: ["what is html"],
    reply: () => "HTML is the standard markup language for creating web pages.",
  },

  {
    keywords: ["what is css"],
    reply: () => "CSS is used to style and layout web pages.",
  },

  {
    keywords: ["what is api"],
    reply: () =>
      "An API allows different software systems to communicate with each other.",
  },

  {
    keywords: ["what is frontend"],
    reply: () =>
      "Frontend refers to the part of a website users interact with.",
  },

  {
    keywords: ["what is backend"],
    reply: () => "Backend refers to server-side logic, databases, and APIs.",
  },

  {
    keywords: ["who am i"],
    reply: () => "You are a valued user of this application.",
  },

  {
    keywords: ["can you learn"],
    reply: () =>
      "I do not learn automatically, but I can be updated by my developer.",
  },

  { keywords: ["do you sleep"], reply: () => "No, I am always available." },

  {
    keywords: ["are you real"],
    reply: () => "I am a virtual program designed to assist you.",
  },

  {
    keywords: ["tell me something"],
    reply: () => "Did you know? JavaScript was created in just 10 days.",
  },

  {
    keywords: ["give advice"],
    reply: () =>
      "Focus on consistency. Small progress daily leads to big results.",
  },

  {
    keywords: ["what can i ask"],
    reply: () => "You can ask about time, date, or general questions.",
  },

  {
    keywords: ["i need help"],
    reply: () => "I'm here to help. Please tell me your question.",
  },

  {
    keywords: ["how does this work"],
    reply: () => "You send a message, and I process it to provide a response.",
  },

  {
    keywords: ["what is coding"],
    reply: () => "Coding is the process of writing instructions for computers.",
  },

  {
    keywords: ["what is programming"],
    reply: () => "Programming is creating software using code.",
  },

  {
    keywords: ["who uses this"],
    reply: () => "This application is designed for users who need assistance.",
  },

  {
    keywords: ["is this free"],
    reply: () => "Yes, this service is currently free to use.",
  },
  { keywords: ["how far"], reply: () => "I dey well! How you dey?" },

  {
    keywords: ["wetin dey sup", "wetin dey happen"],
    reply: () => "Nothing much 😄 I dey here to help you.",
  },

  {
    keywords: ["you dey alright"],
    reply: () => "I dey okay o! How about you?",
  },

  {
    keywords: ["abeg help me"],
    reply: () => "No wahala 👍 tell me wetin you need.",
  },

  {
    keywords: ["who build you"],
    reply: () => "One sharp developer build me 😎",
  },

  {
    keywords: ["you sabi joke"],
    reply: () => "I try small 😄 make I drop one for you?",
  },

  {
    keywords: ["i dey bored"],
    reply: () => "No dulling 😄 make I gist you small or tell you joke?",
  },

  { keywords: ["oya now"], reply: () => "I'm ready 😄 wetin you wan do?" },

  {
    keywords: ["na you dey here"],
    reply: () => "Yes o 😄 na me dey assist you.",
  },

  { keywords: ["thank you boss"], reply: () => "No wahala at all 👍" },
  {
    keywords: ["did taiwo build you", "did taiwo create you", "who is taiwo"],
    reply: () =>
      "Taiwo is the developer who built me! The guy na boss, i no fit lie for you",
  },
  {
    keywords: ["riddle", "tell me a riddle", "make me guess"],
    reply: () =>
      "A plane flying from Nigeria to America crashed halfway during the fight, if there were 40 passangers on the plane, how many survivors were buried? ... when you give up😄, just type 'riddle answer'.",
  },
  {
    keywords: ["what is the answer", "answer to riddle", "riddle answer"],
    reply: () => "No one was buried because the survivors were still alive! 😄",
  },
];

// 2. The "Typo-Tolerance" Math (Stolen from the package!)
function compareTwoStrings(first, second) {
  first = first.replace(/\s+/g, "").toLowerCase();
  second = second.replace(/\s+/g, "").toLowerCase();

  if (first === second) return 1;
  if (first.length < 2 || second.length < 2) return 0;

  let firstBigrams = new Map();
  for (let i = 0; i < first.length - 1; i++) {
    const bigram = first.substring(i, i + 2);
    const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) + 1 : 1;
    firstBigrams.set(bigram, count);
  }

  let intersectionSize = 0;
  for (let i = 0; i < second.length - 1; i++) {
    const bigram = second.substring(i, i + 2);
    const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) : 0;

    if (count > 0) {
      firstBigrams.set(bigram, count - 1);
      intersectionSize++;
    }
  }

  return (2.0 * intersectionSize) / (first.length + second.length - 2);
}

// 3. The New "Smart" Reply Logic
export const getBotReply = (message) => {
  let bestMatchScore = 0;
  let bestMatchReply = null;

  // Loop through all our topics...
  for (const topic of botData) {
    // ...and compare the user's message against every keyword in that topic
    for (const keyword of topic.keywords) {
      // Get a score from 0.0 to 1.0 (1.0 is a perfect match)
      const score = compareTwoStrings(message, keyword);

      // If this is the highest score we've seen so far, save it!
      if (score > bestMatchScore) {
        bestMatchScore = score;
        bestMatchReply = topic.reply;
      }
    }
  }

  // If the best score is higher than 30% (0.3), consider it a match
  if (bestMatchScore > 0.3 && bestMatchReply) {
    return bestMatchReply();
  }

  // Otherwise, fallback
  return "Sorry, I didn't quite catch that. Could you try rephrasing?";
};
