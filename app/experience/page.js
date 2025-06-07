import { experiences } from '../../../data/experienceData';
import Image from 'next/image';
import Link from 'next/link';

export default function ExperiencePage() {
  return (
    <section style={{ minHeight: '100vh', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '40px', textAlign: 'center' }}>Experience</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {experiences.map((exp) => (
          <Link key={exp.id} href={`/experience/${exp.slug}`} style={{ textDecoration: 'none' }}>
            <div style={{
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '20px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              backgroundColor: '#fff',
            }}>
              {/* ✅ Render image if available */}
              {exp.images && exp.images.length > 0 && (
                <Image 
                  src={exp.images[0].src}
                  alt={exp.images[0].alt}
                  width={600}
                  height={300}
                  style={{ objectFit: 'cover', width: '100%', borderRadius: '8px', marginBottom: '20px' }}
                />
              )}

              <h2 style={{ fontSize: '24px', marginBottom: '10px', color: '#023e8a' }}>{exp.title}</h2>
              <p style={{ fontWeight: 'bold', marginBottom: '10px', color: '#555' }}>{exp.duration}</p>
              <ul style={{ paddingLeft: '20px' }}>
                {exp.bullets.map((bullet, index) => (
                  <li key={index} style={{ marginBottom: '8px', color: '#333' }}>{bullet}</li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
