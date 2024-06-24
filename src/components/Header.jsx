import reactImg from "../assets/react-core-concepts.png"

const reactDescription = ["Fundamentals","Core","Crucial"]

function getRandInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const description = reactDescription[getRandInt(2)]
    return(
        <header>
        <img src={reactImg} alt="Stylized atom" />   {/* used dynamic value here */}
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are  {/* used dynamic value here too  */}
          going to build!
        </p>
      </header>
    )
}