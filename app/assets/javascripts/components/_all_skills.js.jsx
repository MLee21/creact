var AllSkills = React.createClass({
  getInitialState() {
    return { skills: [] }
  },
  componentDidMount() {
    $.getJSON('/api/v1/skills.json', (response) => { this.setState({ skills: response }) });
  },

  render() {
    var skills = this.state.skills.map((skill, index) => {
      return (
        <div key={ index }>
          <h3> { skill.name } </h3>
          <p><strong>Level:</strong> { skill.level }</p>
          <p> { skill.details }</p>
        </div>
      )
    });

    return (
      <div>
        { skills }
      </div>     
    )
  }
});