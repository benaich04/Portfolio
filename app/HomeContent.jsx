'use client';

import Image from 'next/image';
import { projects } from '../data/projectsData';
import { experiences } from '../data/experienceData';
import { publications } from '../data/publicationsData';
import Carousel from '../components/Carousel';

export default function HomeContent() {
  return (
    <div style={{ backgroundColor: '#f5f7fa', minHeight: '100vh', paddingBottom: '60px' }}>
      {/* Info Section */}
      <section style={{ backgroundColor: '#ffffff', padding: '40px', borderRadius: '12px', textAlign: 'center', margin: '40px auto', maxWidth: '900px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <Image
          src="/images/headshot.jpg"
          alt="Profile Photo"
          width={150}
          height={150}
          style={{ borderRadius: '50%', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
        />
        <h1 style={{ fontSize: '36px', marginTop: '20px', color: '#023e8a' }}>Mohamed Benaich</h1>
        <p style={{ color: '#555' }}>B.Sc. in Electrical Engineering, NYUAD</p>
        <p style={{ marginTop: '10px', color: '#555' }}>GPA: 3.952 / 4.0</p>
        <p style={{ color: '#555' }}>Baccalaureat, Morocco: 19.02 / 20</p>
        <p style={{ marginTop: '20px', maxWidth: '600px', margin: '0 auto', color: '#333' }}>
          I am passionate about embedded systems, FPGA design, UAV autonomy, hardware-software integration, and applied robotics.
        </p>

        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <a href="https://dl.dropboxusercontent.com/scl/fi/ww8kv1pglbuhtxilblroq/transcript?rlkey=awqg2scnda8wn0xxs9ggydsuj&st=f3ou8pi9&dl=0" download style={{ backgroundColor: '#0077b6', color: 'white', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none' }}>
            Download Transcript
          </a>

          <a href="https://github.com/benaich04" target="_blank" style={{ display: 'inline-block', width: '40px', height: '40px' }}>
            <svg fill="#333" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 
                3.438 9.8 8.205 11.387.6.113.82-.258.82-.577
                0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61
                -4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756
                -1.09-.745.084-.729.084-.729 1.205.084 1.84 1.236
                1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.776
                .418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93
                0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
                0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.005 
                2.045.138 3 .405 2.28-1.552 3.285-1.23 
                3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
                1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 
                5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 
                3.286 0 .315.21.69.825.57C20.565 21.795 24 
                17.295 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>

          <a href="https://linkedin.com/in/mohamed-benaich-402583268/" target="_blank" style={{ display: 'inline-block', width: '40px', height: '40px' }}>
            <svg fill="#0077b6" viewBox="0 0 24 24">
              <path d="M22.23 0H1.77C.79 0 0 .774 0 1.727v20.546C0 23.226.79 
              24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.727V1.727C24 
              .774 23.21 0 22.23 0zM7.09 20.452H3.64V9h3.45v11.452zM5.364 
              7.577c-1.1 0-1.993-.897-1.993-2s.894-2 1.993-2 2 
              .897 2 2-.894 2-2 2zM20.452 
              20.452h-3.453v-5.592c0-1.33-.023-3.04-1.85-3.04-1.85 
              0-2.132 1.445-2.132 2.94v5.692H9.565V9h3.32v1.56h.046c.46-.872 
              1.586-1.788 3.267-1.788 3.492 0 4.136 2.294 4.136 
              5.275v6.405z"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Recent Projects Carousel */}
      <section style={{ maxWidth: '900px', margin: '60px auto' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#023e8a' }}>Recent Projects</h2>
        <Carousel
          items={projects}
          renderItem={(project) => (
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '24px', color: '#0077b6' }}>{project.title}</h3>
              <p style={{ margin: '20px 0', color: '#555' }}>{project.description}</p>
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  style={{ objectFit: 'cover', borderRadius: '10px' }}
                />
              )}
            </div>
          )}
        />
      </section>

      {/* Recent Experience Carousel — updated to support images */}
      <section style={{ maxWidth: '900px', margin: '60px auto' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#023e8a' }}>Recent Experience</h2>
        <Carousel
          items={experiences}
          renderItem={(exp) => (
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '24px', color: '#0077b6' }}>{exp.title}</h3>
              <p style={{ fontWeight: 'bold', marginBottom: '10px', color: '#555' }}>{exp.duration}</p>

              {exp.images && exp.images.length > 0 && (
                <Image
                  src={exp.images[0].src}
                  alt={exp.images[0].alt}
                  width={600}
                  height={300}
                  style={{ objectFit: 'cover', borderRadius: '10px', margin: '20px 0' }}
                />
              )}

              <ul style={{ paddingLeft: '20px', textAlign: 'left', display: 'inline-block' }}>
                {exp.bullets.map((bullet, index) => (
                  <li key={index} style={{ marginBottom: '8px', color: '#333' }}>{bullet}</li>
                ))}
              </ul>
            </div>
          )}
        />
      </section>

      {/* Publications Section */}
      <section style={{ maxWidth: '900px', margin: '60px auto' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#023e8a' }}>Research Publications</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {publications.map((pub) => (
            <div key={pub.id} style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>
                <a href={pub.url} style={{ color: '#0077b6' }}>{pub.title}</a>
              </h3>
              <p style={{ color: '#555' }}>{pub.venue}</p>
              <div style={{ marginTop: '10px' }}>
                <a href={pub.pdf} download style={{ backgroundColor: '#0077b6', color: 'white', padding: '8px 16px', borderRadius: '5px', textDecoration: 'none' }}>
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
