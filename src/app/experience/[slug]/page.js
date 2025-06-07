import { experiences } from '../../../../data/experienceData';
import Image from 'next/image';

export default function ExperienceDetail({ params }) {
  const experience = experiences.find(exp => exp.slug === params.slug);

  if (!experience) {
    return <h1>Experience not found</h1>;
  }

  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '10px', color: '#023e8a' }}>{experience.title}</h1>
      <p style={{ fontWeight: 'bold', marginBottom: '20px', color: '#555' }}>{experience.duration}</p>

      <p style={{ marginBottom: '30px', color: '#333' }}>{experience.description}</p>

      <h2 style={{ fontSize: '24px', marginBottom: '10px', color: '#0077b6' }}>Contributions</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '30px' }}>
        {experience.bullets.map((bullet, index) => (
          <li key={index} style={{ marginBottom: '8px', color: '#333' }}>{bullet}</li>
        ))}
      </ul>

      {experience.publication && (
        <>
          <h2 style={{ fontSize: '24px', marginBottom: '10px', color: '#0077b6' }}>Publication</h2>
          <p><strong>{experience.publication.title}</strong></p>
          <p>{experience.publication.conference}</p>
          <a href={experience.publication.doi} target="_blank" rel="noopener noreferrer">View DOI</a> | 
          <a href={experience.publication.pdf} download style={{ marginLeft: '10px' }}>Download PDF</a>
        </>
      )}

      <h2 style={{ fontSize: '24px', marginBottom: '10px', color: '#0077b6' }}>Media</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {experience.media.map((item, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            {item.type === 'image' && (
              <Image src={item.src} alt={item.alt} width={700} height={400} style={{ borderRadius: '10px' }} />
            )}
            {item.type === 'video' && (
              <video width="700" controls style={{ borderRadius: '10px' }}>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <p style={{ marginTop: '8px', color: '#555' }}>{item.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
