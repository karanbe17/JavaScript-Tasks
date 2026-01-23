const ip = "JavaScript for Beginners";

const lower = ip.toLowerCase();

const spl = lower.split(" ");
const slug = spl.join("-");

console.log(slug);