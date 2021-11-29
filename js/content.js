const animals = [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Kouprey",
    "Kudu",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Locust",
    "Loris",
    "Louse",
    "Lyrebird",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Red panda",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sand Dollar",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stinkbug",
    "Stork",
    "Swallow",
    "Swan",
    "Tapir",
    "Tarsier",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Wren",
    "Yak",
    "Zebra",
];

const roomName = "Chrome"; // animals[Math.floor(Math.random() * (animals.length - 0 + 1))];

const backendURL = "http://10.10.130.111:3100"; // "http://192.168.0.100:3100"

const code = `
import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
const socket = io("${backendURL}");

const getPlayer = () => document.querySelector("#movie_player")

const params = {}

// socket.on("connect", () => {
//     const player = document.querySelector("#container")
//     console.log(player);
// });

socket.on("setPause", (value) => {
    const player = getPlayer()
    params.isPause = value;
    value ? player.pauseVideo() : player.playVideo();
})
socket.on("setMute", (value) => {
    const player = getPlayer()
    params.isMuted = value;
    value ? player.mute() : player.unMute();
})
socket.on("setVolume", (value) => {
    params.volume = value;
    getPlayer().setVolume(value);
})
socket.on("setHref", (href) => {
    params.activeUrl = href;
    // window.location.assign("https://www.youtube.com/watch?v=" + href)
    const player = getPlayer();
    player.cueVideoById(href)
    player.playVideo()
})
socket.on("setFullScreen", (value) => {
    params.fullScreen = value;
    getPlayer().toggleFullscreen();
})
socket.on("setSubtitles", (value) => {
    params.subtitles = value;
    getPlayer().toggleSubtitles();
})
socket.on("roomWasDeleted", () => {
    this.$router.push("/");
})
socket.on("setNextMoment", () => {
    const seconds = getPlayer().getMediaReferenceTime() + 16;
    setYTTime(seconds);
})
socket.on("setPreviousMoment", () => {
    const seconds = getPlayer().getMediaReferenceTime() - 16;
    setYTTime(seconds);
})
socket.on("setNextVideo", () => {
    getPlayer().nextVideo();
})
socket.on("setPreviousVideo", () => {
    history.back()
})

const setYTTime = seconds => getPlayer().seekTo(seconds, true);

socket.emit("createRoom", "${roomName}");
`;

chrome.runtime.sendMessage({
    from: "content",
    subject: "setRoomName",
    roomName,
});

chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if (msg.from === "popup" && msg.subject === "DOMInfo") {
        response(roomName);
    }
});

const script = document.createElement("script");
script.type = "module";
script.textContent = code;
(document.head || document.documentElement).appendChild(script);
script.remove();
