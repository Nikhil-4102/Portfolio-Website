import { Component } from '@angular/core';

interface Project {
  img: string;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  // Three groups with 3 projects each
  projectGroups: Project[][] = [
    [
      {
        img: 'assets/project1.jpg',
        title: 'Project One',
        description: 'Short description of project one.',
        techStack: ['Angular', 'TypeScript', 'Tailwind'],
        githubLink: 'https://github.com/username/project-one',
      },
      {
        img: 'assets/project2.jpg',
        title: 'Project Two',
        description: 'Short description of project two.',
        techStack: ['React', 'JavaScript', 'CSS'],
        githubLink: 'https://github.com/username/project-two',
      },
      {
        img: 'assets/project3.jpg',
        title: 'Project Three',
        description: 'Short description of project three.',
        techStack: ['Node.js', 'Express', 'MongoDB'],
        githubLink: 'https://github.com/username/project-three',
      },
    ],
    [
      {
        img: 'assets/project4.jpg',
        title: 'Project Four',
        description: 'Short description of project four.',
        techStack: ['Python', 'Flask', 'SQL'],
        githubLink: 'https://github.com/username/project-four',
      },
      {
        img: 'assets/project5.jpg',
        title: 'Project Five',
        description: 'Short description of project five.',
        techStack: ['Java', 'Spring Boot', 'MySQL'],
        githubLink: 'https://github.com/username/project-five',
      },
      {
        img: 'assets/project6.jpg',
        title: 'Project Six',
        description: 'Short description of project six.',
        techStack: ['Vue', 'JavaScript', 'Bootstrap'],
        githubLink: 'https://github.com/username/project-six',
      },
    ],
    [
      {
        img: 'assets/project7.jpg',
        title: 'Project Seven',
        description: 'Short description of project seven.',
        techStack: ['Django', 'Python', 'PostgreSQL'],
        githubLink: 'https://github.com/username/project-seven',
      },
      {
        img: 'assets/project8.jpg',
        title: 'Project Eight',
        description: 'Short description of project eight.',
        techStack: ['React Native', 'JavaScript'],
        githubLink: 'https://github.com/username/project-eight',
      },
      {
        img: 'assets/project9.jpg',
        title: 'Project Nine',
        description: 'Short description of project nine.',
        techStack: ['C#', '.NET', 'Azure'],
        githubLink: 'https://github.com/username/project-nine',
      },
    ],
  ];

}
