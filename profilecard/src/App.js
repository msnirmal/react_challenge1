import "./App.css";

function App() {
  return (
    <div>
      <Avatar />
      <div>
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="profile_card.png" alt="" />;
}

function Intro() {
  return (
    <div>
      <h2>Nirmal Subramani</h2>
      <p>React Developer</p>
    </div>
  );
}

function SkillList() {
  return (
    <div>
      <Skill skill="React" level="Beginner" color="orangered" />
      <Skill skill="Javascript" level="Intermediate" color="yellow" />
      <Skill skill="HTML" level="Expert" color="green" />
      <Skill skill="CSS" level="Intermediate" color="lightblue" />
      <Skill skill="GITHUB" level="Intermediate" color="grey" />
    </div>
  );
}

function Skill(props) {
  return (
    <div style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.level}</span>
    </div>
  );
}

export default App;
