import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Article from "./pages/article";
import Add from "./pages/add";
import "./index.css";

export default function App() {
  const data = {
    data: [
      {
        title: "Hawk Tuah",
        content:
          "Hawk Tuah was not an ordinary bird. He was a magnificent hawk with wings that spread wide like the sails of a mighty ship, his feathers gleaming in hues of bronze and gold under the sun. But what truly set Hawk Tuah apart was his heart—a heart that beat with courage and wisdom, inherited from the legendary Malay warrior he was named after, Hang Tuah. Hawk Tuah lived on the summit of Mount Kinabalu, the tallest peak in Southeast Asia, where the winds carried tales of distant lands and the whispers of the ancient spirits. From a young age, Hawk Tuah had a calling—to protect the forest and its creatures from any threat. But it was not until the day the forest’s harmony was shattered that his true journey began. One fateful morning, the elders of the forest gathered—Tuan Rimau, the tiger; Seri Gajah, the elephant; and Cik Kancil, the mouse-deer. Their faces were grave as they explained that a group of humans had begun clearing the sacred forest to build roads and settlements. Trees fell like soldiers struck down in battle, and rivers ran murky with silt. The balance of nature was at risk. “Hawk Tuah,” said Tuan Rimau, his deep voice resonating like thunder, “you are the swiftest and the wisest among us. Fly to the humans. Show them the beauty of our forest and convince them to halt their destruction.” Hawk Tuah bowed his head. “I will do my best, Tuan Rimau. The forest is my home, and I will fight for it.” With the blessings of the forest spirits, Hawk Tuah soared into the sky, his wings slicing through the clouds. He flew over vast landscapes, from dense jungles to sparkling rivers, until he reached the bustling city where the humans lived. It was a stark contrast to the serene forest—a maze of towering buildings, roaring machines, and endless activity. Hawk Tuah perched on the rooftop of a skyscraper, observing the humans below. He noticed a young girl planting flowers in a small garden surrounded by concrete walls. Intrigued, he flew closer and landed gently on a branch near her. The girl looked up, her eyes wide with wonder. “A hawk! What are you doing here?” “I come from the forest,” Hawk Tuah said, his voice calm and steady. The girl didn’t seem surprised that he could talk, perhaps because children have a way of believing in the extraordinary. “Your people are harming my home. I need your help to stop them.” The girl, whose name was Aisyah, listened intently as Hawk Tuah explained the plight of the forest. Moved by his words, she promised to help. She had always loved nature and felt that she could make the adults understand its value. Together, Hawk Tuah and Aisyah devised a plan. Aisyah organized a gathering, inviting the city’s leaders, scientists, and activists. Hawk Tuah would perform a breathtaking aerial display, showcasing the grace and beauty of nature, while Aisyah shared the story of the forest and its importance to the world. On the day of the gathering, Hawk Tuah soared high into the sky, diving and weaving with unmatched precision. He painted pictures in the air with his movements, mimicking the flowing rivers and rustling trees. The audience watched in awe, their hearts stirred by the sight of the majestic hawk. Aisyah spoke with passion, showing pictures of the forest and its creatures. She explained how every tree, river, and animal played a role in maintaining the balance of the world. Her words and Hawk Tuah’s display opened their eyes to the destruction they had caused. The city’s leaders pledged to protect the forest. They agreed to stop the clearing and work towards sustainable development that would preserve the natural world. Aisyah was appointed as the ambassador for the environment, and Hawk Tuah became a symbol of hope and resilience. Hawk Tuah returned to the forest as a hero. The creatures greeted him with cheers, and the trees swayed in gratitude. But he knew his work was not done. The forest would always need a guardian, and Hawk Tuah vowed to watch over it for as long as he lived. From that day on, the legend of Hawk Tuah spread far and wide, reminding everyone that courage, wisdom, and a love for nature could overcome even the greatest challenges.",
      },
      {
        title: "Skibidi Fortnite",
        content:
          'The Skibidi Toilets had invaded the Fortnite Island, their porcelain bodies glinting in the sunlight as they danced erratically across the battle royale map. Nobody knew where they came from or why they chose Fortnite as their battleground, but their bizarre, rhythmic movements made them an unstoppable force. Players armed with shotguns, sniper rifles, and rocket launchers tried to hold their ground, but the Skibidi Toilets just bobbed and weaved to the beat, dodging every bullet with unnerving grace. Soon, the players discovered that the toilets weren’t just dancing; they were recruiting. Anyone hit by their bizarre Skibidi Blast would drop their weapons, start humming the catchy tune, and join the ranks of the dancing menace. Tilted Towers became a dance floor, and Loot Lake turned into a shimmering stage for their choreography. Meanwhile, a team of renegade players, led by a legendary Jonesy, hatched a plan. They constructed a massive boombox at the center of the map and programmed it to play a rival beat, one so powerful it could disrupt the Skibidi rhythm. As the music war began, the island was transformed into a chaotic symphony of clashing beats and breakdance battles. The final showdown happened in the storms shrinking circle, where the boombox blasted its ultimate drop. The Skibidi Toilets froze mid-dance, their porcelain cracked, and their tune distorted into silence. For now, Fortnite was safe, but whispers of a rematch lingered in the air, as a faint, distant "Skibidi bop" echoed in the wind.',
      },
    ],
  };
  if (!localStorage.getItem("articles")) {
    localStorage.setItem("articles", JSON.stringify(data));
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="article/:id" element={<Article />} />
          <Route path="add" element={<Add />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") || document.createElement("div")
);
root.render(<App />);
