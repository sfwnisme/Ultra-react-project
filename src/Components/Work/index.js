import React, { Component } from 'react';
import axios from 'axios'
import { WorkSection, WorkTitle, Span, WorkPart, Icon, PartTitle, Line, PartDesc } from './style'

class Work extends Component {
  state = {
    works: [],
  }
  componentDidMount() {
    // rendering axios out of this function will repeat
    // the request infinitly till the application break down
    axios.get('js/data.json').then((res) => { this.setState({ works: res.data.works }) })
  }
  render() {
    const { works } = this.state
    const workList = works.map(workItem => {
      return (
        <WorkPart key={workItem.id} first={workItem.id}>
          <Icon className={workItem.icon_name}></Icon>
          <PartTitle>{workItem.title}</PartTitle>
          <Line />
          <PartDesc>
            {workItem.body}
          </PartDesc>
        </WorkPart>
      )
    })

    return (
      <WorkSection>
        <div className="container">
          <WorkTitle><Span>My</Span> Work</WorkTitle>
          {workList}
        </div>
      </WorkSection>
    );
  }
}

export default Work;
