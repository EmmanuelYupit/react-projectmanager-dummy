import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }
  render() {
    const projectItems = this.props.projects
      ? this.props.projects.map(project => (
          <ProjectItem
            onDelete={this.deleteProject.bind(this)}
            key={project.title}
            project={project}
          />
        ))
      : '';
    return (
      <div className="Projects">
        <h3>Lastest Projects</h3>
        {projectItems}
      </div>
    );
  }
}

export default Projects;
