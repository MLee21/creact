var NewSkill = React.createClass({
  handleClick() {
    let name = this.refs.name.value;
    let details = this.refs.details.value;

    $.ajax({
      url: '/api/v1/skills',
      type: 'POST',
      data: { skill: { name: name, details: details } },
      success: (skill) => {
        this.props.handleSubmit(skill);
      }
    });

  },
  render() {
    return (
      <div>
        <p><input ref='name' placeholder='Enter name of skill' /></p>
        <p><input ref='details' placeholder='Details' /></p>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});