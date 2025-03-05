import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "./assets/logo.jpg";
import ai from "./assets/ai.jpg";
import energyStorage from "./assets/energyStorage.jpg";
import globalmarket from "./assets/globalmarket.jpg";
import medical from "./assets/medical.jpg";
import selfdriving from "./assets/selfdriving.jpg";
import spaceX from "./assets/spaceX.jpg";
import quantum from "./assets/quantum.jpg";
import virtual from "./assets/virtual.jpg";
import climatechange from "./assets/climatechange.jpg";
import g5 from "./assets/5g.jpg";
import somali from "./assets/somali.jpg";

const newsData = [
  {
    id: 1,
    title: "AI is Transforming the Future of Work",
    image: ai,
    excerpt:
      "Artificial intelligence is reshaping industries across the globe...",
    content:
      "Artificial Intelligence (AI) is fundamentally changing the way we work, automating repetitive tasks, enhancing decision-making, and optimizing processes across various industries. Companies are leveraging AI-driven analytics, machine learning models, and robotic process automation to improve efficiency and productivity. As AI continues to advance, ethical considerations, workforce displacement, and regulatory measures will play crucial roles in shaping its impact on employment and business growth.",
    date: "March 3, 2025",
  },
  {
    id: 2,
    title: "SpaceX Successfully Tests New Rocket Prototype",
    image: spaceX,
    excerpt:
      "Elon Musk's company has once again pushed the boundaries of space exploration...",
    content:
      "SpaceX has successfully tested its latest rocket prototype, marking a significant milestone in the company's efforts to develop reusable space vehicles. The prototype, which features advanced propulsion systems and aerodynamic designs, is expected to pave the way for future missions to Mars and beyond. Engineers and scientists continue to refine its capabilities, addressing challenges related to space travel sustainability and cost-effectiveness.",
    date: "March 2, 2025",
  },
  {
    id: 3,
    title: "Breakthrough in Renewable Energy Storage",
    image: energyStorage,
    excerpt:
      "A new battery technology could revolutionize clean energy usage...",
    content:
      "Scientists have developed an advanced battery storage system capable of storing renewable energy more efficiently and for longer durations. This breakthrough addresses one of the primary challenges in the adoption of clean energy sources like solar and wind power. By improving energy retention and reducing dependency on fossil fuels, this innovation has the potential to accelerate the transition towards a more sustainable energy future.",
    date: "March 1, 2025",
  },
  {
    id: 4,
    title: "Global Markets See Record Growth",
    image: globalmarket,
    excerpt: "Stock markets across the world hit new all-time highs...",
    content:
      "Global financial markets are experiencing unprecedented growth, driven by increased investor confidence, technological advancements, and economic recovery post-pandemic. Analysts predict that sectors such as technology, healthcare, and renewable energy will continue to drive market performance. However, experts also caution against potential risks, including inflation concerns and geopolitical tensions that may affect long-term stability.",
    date: "February 28, 2025",
  },
  {
    id: 5,
    title: "Medical Breakthrough: Cancer Treatment Shows Promise",
    image: medical,
    excerpt: "A revolutionary new drug offers hope for cancer patients...",
    content:
      "A recent clinical trial has shown promising results for a new cancer treatment that targets cancer cells with greater precision while minimizing side effects. Researchers believe this innovation could significantly improve survival rates and enhance the quality of life for patients undergoing treatment. Further studies and regulatory approvals are needed before the drug becomes widely available.",
    date: "February 27, 2025",
  },
  {
    id: 6,
    title: "Self-Driving Cars Take Major Leap Forward",
    image: selfdriving,
    excerpt: "Autonomous vehicles are becoming more advanced and widespread...",
    content:
      "The automotive industry is making significant progress in the development of self-driving technology. Companies are testing advanced AI-driven navigation systems that improve road safety and reduce human error. Experts believe that within the next decade, fully autonomous vehicles could be a common sight on city roads, reshaping urban transportation and logistics.",
    date: "February 26, 2025",
  },
  {
    id: 7,
    title: "Advancements in Quantum Computing",
    image: quantum,
    excerpt:
      "Quantum computers are getting closer to real-world applications...",
    content:
      "Quantum computing is pushing the boundaries of what traditional computers can achieve. Researchers have recently developed quantum processors that perform calculations exponentially faster than classical computers. These advancements could revolutionize industries like cryptography, drug discovery, and complex simulations.",
    date: "February 25, 2025",
  },
  {
    id: 8,
    title: "Climate Change: Urgent Action Needed",
    image: climatechange,
    excerpt:
      "Scientists warn that immediate action is required to combat climate change...",
    content:
      "Climate experts have released new data highlighting the accelerating effects of global warming. Rising temperatures, melting ice caps, and extreme weather events are becoming more frequent. Governments and organizations are being urged to take bold actions in reducing carbon emissions and promoting sustainability.",
    date: "February 24, 2025",
  },
  {
    id: 9,
    title: "Virtual Reality is Changing Entertainment",
    image: virtual,
    excerpt:
      "VR technology is revolutionizing gaming, movies, and social interactions...",
    content:
      "Virtual Reality (VR) is transforming the entertainment industry with immersive experiences that go beyond traditional screens. Gaming companies are developing hyper-realistic VR games, while filmmakers explore new storytelling methods using interactive VR experiences. The future of entertainment is becoming more engaging and interactive.",
    date: "February 23, 2025",
  },
  {
    id: 10,
    title: "5G Networks Expanding Globally",
    image: g5,
    excerpt:
      "High-speed 5G connectivity is reaching more countries and cities...",
    content:
      "Telecommunication companies are rapidly deploying 5G networks worldwide, enabling faster internet speeds and reduced latency. This expansion is expected to enhance remote work, smart cities, and the Internet of Things (IoT), paving the way for a more connected world.",
    date: "February 22, 2025",
  },
  {
    id: 11,
    title: "Somali Authorities Investigate Alleged Assault of 16-Year-Old Girl",
    image: somali, // Replace with actual image reference
    excerpt:
      "Authorities in Somalia are investigating an alleged sexual assault involving a 16-year-old girl, sparking calls for justice and stronger legal protections.",
    content:
      "Local police in Somalia have launched an investigation into an alleged sexual assault involving a 16-year-old girl. According to initial reports, the incident occurred in a residential area, prompting widespread concern among residents and human rights activists. Authorities have confirmed that they are gathering evidence and speaking with witnesses to ensure a thorough investigation. \n\n" +
      "Community leaders and advocacy groups have condemned the incident, emphasizing the urgent need for stronger protections for young girls and harsher penalties for offenders. Human rights organizations are calling for more education on gender-based violence and urging the government to take concrete steps toward legal reform. \n\n" +
      "also you can visit his profile facebook https://www.facebook.com/cali.a.cali.7 Meanwhile, local law enforcement officials have reassured the public that they are treating the case with urgency. 'We are committed to ensuring justice is served, and we encourage anyone with information to come forward and cooperate with the investigation,' a police spokesperson stated. \n\n" +
      "The incident has reignited discussions on the need for stronger policies to combat sexual violence in Somalia. Advocates are urging lawmakers to implement better support systems for survivors, including counseling services, legal assistance, and safe spaces. The investigation remains ongoing, and authorities are expected to provide updates as more details emerge.",
    date: "March 5, 2025",
  },
];

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <img src={logo} alt="logo" className="h-8 w-auto" />
        </Link>
        <div>
          <Link to="/" className="px-4 py-2 hover:bg-blue-700 rounded-md">
            Home
          </Link>
          <Link to="/about" className="px-4 py-2 hover:bg-blue-700 rounded-md">
            About
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 hover:bg-blue-700 rounded-md"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-6">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((post) => (
          <Link
            to={`/news/${post.id}`}
            key={post.id}
            className="bg-white shadow-lg p-4 rounded-lg hover:shadow-xl transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 rounded-md"
            />
            <h2 className="text-lg font-semibold mt-3">{post.title}</h2>
            <p className="text-sm text-gray-600">{post.excerpt}</p>
            <span className="text-xs text-gray-500">Posted on {post.date}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function NewsDetail() {
  const { id } = useParams();
  const post = newsData.find((item) => item.id === parseInt(id));
  const relatedNews = newsData
    .filter((item) => item.id !== parseInt(id))
    .slice(0, 3);

  if (!post) {
    return (
      <h2 className="text-center text-2xl mt-10">News article not found</h2>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-70  rounded-md"
      />
      <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
      <p className="text-sm text-gray-500">Posted on {post.date}</p>
      <p className="mt-4 text-lg text-gray-700">{post.content}</p>
      <h3 className="text-xl font-semibold mt-6">Similar News</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {relatedNews.map((item) => (
          <Link
            to={`/news/${item.id}`}
            key={item.id}
            className="bg-gray-200 p-3 rounded-md hover:bg-gray-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-20 object-cover rounded-md"
            />
            <h4 className="font-semibold mt-2">{item.title}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="mt-4 text-lg">
        We are dedicated to bringing you the latest news from around the world.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form className="mt-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 rounded-md w-full mb-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-2 rounded-md w-full mb-2"
        />
        <textarea
          placeholder="Your Message"
          className="border p-2 rounded-md w-full mb-2"
        ></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Send Message
        </button>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-10">
      <p>&copy; 2025 News Website. All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
