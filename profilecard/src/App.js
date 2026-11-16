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
      <Skill skill="React" level="Beginner" />
      <Skill skill="Javascript" level="Intermediate" />
      <Skill skill="HTML" level="Expert" />
      <Skill skill="CSS" level="Intermediate" />
      <Skill skill="GITHUB" level="Intermediate" />
    </div>
  );
}

function Skill(props) {
  return (
    <div>
      <span>{props.skill}</span>
      <span>{props.level}</span>
    </div>
  );
}

export default App;
