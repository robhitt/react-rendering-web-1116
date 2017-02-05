const app = "I don't do much.";

componentWillReceiveProps(nextProps){
  this.setState({
    audienceIncreasing: nextProps.numAudienceMembers > this.props.numAudienceMembers,
    audienceDecreasing: nextProps.numAudienceMembers < this.props.numAudienceMembers
  })
}
