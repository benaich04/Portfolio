import { projects } from '../../../data/projectsData';
import Image from 'next/image';

export default function ProjectsPage() {
  return (
    <section style={{ minHeight: '100vh', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '40px', textAlign: 'center' }}>Projects</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px'
      }}>
        {projects.map((project) => (
          <div key={project.id} style={{
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}>
            {project.image && (
              <Image 
                src={project.image}
                alt={project.title}
                width={600}
                height={300}
                style={{ objectFit: 'cover', width: '100%', height: '200px' }}
              />
            )}
            <div style={{ padding: '20px' }}>
              <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>{project.title}</h2>
              <p style={{ marginBottom: '10px' }}>{project.description}</p>
              <p style={{ fontSize: '14px', color: '#666' }}>
                {project.techStack.join(', ')}
              </p>

              {project.link && (
                <div style={{ marginTop: '10px' }}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              )}

              {/* ✅ PCB schematics download link */}
              {project.id === 4 && (
                <div style={{ marginTop: '10px' }}>
                  <a href="/pcb/pcb_schematics.pdf" download style={{ color: '#0077b6', textDecoration: 'none' }}>
                    Download PCB Schematics
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
