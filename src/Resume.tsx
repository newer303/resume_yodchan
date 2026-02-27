export default function Resume() {
  const projects = [
    {
      title: 'Math game app for learning',
      desc: 'The task is to design a fun, portable learning app for children that works offline. It is developed using Python, stores questions and answers in a database, includes multiple difficulty levels, and allows users to check their latest scores.',
    },
    {
      title: 'Project website shop',
      desc: "Project: E-Commerce Website Development,Role: Full Stack Developer (Team of 3)\nDesigned and developed both frontend and backend systems, built a user-friendly interface, implemented product and cart management features, and integrated the SQL database.\nTechnologies: React, HTML, CSS, PHP, SQL",
    },
    {
      title: 'Project Program Calculator',
      desc: "A basic Java console program that performs addition, subtraction, multiplication, and division. It accepts user input via the keyboard, validates the data, prevents errors such as division by zero, and displays the result clearly on the console.",
    },
    {
      title: 'Calculate Taxi',
      desc: [
        'Language: C / C++',
        'Console Application',
        'Calculates taxi fare from base fare, distance, and traffic delay',
        'Uses functions, input validation, and control flow for logic',
        'Shows result clearly to user'
      ],
    },
    {
      title: 'Bot Backup Line',
      desc: [
        'Project Title: Automated File Backup System',
        'A cloud automation system that uses Google Apps Script to receive files via webhook and automatically upload them to Google Drive. It processes JSON data, organizes files, and handles errors and permissions.'
      ],
    },
  ];

  return (
    <>
      <header className="site-header">
        <div className="container header-grid" style={{maxWidth: '1600px', margin: '0 auto', paddingLeft: '40px', paddingRight: '40px'}}>
          <div className="hero">
            <h1 id="res-name" className="name" style={{color: '#111'}}>
              Yodchan Suphaphan
            </h1>
          </div>
        </div>
      </header>

      <main className="container main-grid">
        <aside className="sidebar">
          <section className="profile profile-card">
            <div id="res-avatar" className="avatar">
              <img src="public/img-profile/Profile_Yodchan.jpg" loading="lazy" width="180" height="180" />
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 id="profile-name" className="profile-name">Yodchan Suphaphan</h3>
              <p className="small" id="profile-title">Full Stack Developer</p>
            </div>
            <h3 style={{ marginTop: '2.5rem' }}>Contact</h3>
            <ul id="res-contact" className="contact-list">
              <li><strong>Email:</strong> <a id="res-email" href="mailto:nkegamer1@gmail.com">nkegamer1@gmail.com</a></li>
              <li><strong>Phone:</strong> <a id="res-phone" href="tel:0967301189">0967301189</a></li>
              <li><strong>GitHub:</strong> <a id="res-github" href="https://github.com/newer303" target="_blank" rel="noreferrer">github.com/newer303</a></li>
            </ul>
          </section>

          <section className="skills">
            <h3>Skills</h3>
            <div className="skills-grid">
              <div className="skill-group">
                <h4>Front-end</h4>
                <ul className="skill-list">
                  <li>PHP</li>
                  <li>HTML / CSS / JavaScript</li>
                  <li>React / Vue</li>
                  <li>UX/UI / Figma</li>
                </ul>
              </div>

              <div className="skill-group">
                <h4>Back-end</h4>
                <ul className="skill-list">
                  <li>Node.js</li>
                  <li>C/C++</li>
                  <li>C#</li>
                  <li>Python</li>
                  <li>JAVA</li>
                </ul>
              </div>

              <div className="skill-group">
                <h4>Database</h4>
                <ul className="skill-list">
                  <li>MySQL</li>
                </ul>
              </div>

              <div className="skill-group">
                <h4>Tools & Others</h4>
                <ul className="skill-list">
                  <li>Visual Studio Code</li>
                  <li>Git</li>
                  <li>xzam</li>
                  <li>C / C++</li>
                  <li>LUA</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="education">
            <h3>การศึกษา</h3>
            <div id="res-education">
              <article className="job">
                <h3>Bachelor of Computer Science</h3>
                <h3>Ramkhamhaeng University</h3>
                <p className="meta">2016 - 2020 • Bangkok</p>
                <ul>
                  <li>GPA (Currently studying) </li>
                </ul>
              </article>
            </div>
            <div id="res-education">
              <article className="job">
                <h3>Civil Engineering Branch</h3>
                <h3>Chonburi Technical College</h3>
                <p className="meta">2016 - 2020 • Chonburi</p>
                <ul>
                  <li>GPA 3.24</li>
                </ul>
              </article>
            </div>
          </section>
        </aside>

        <section className="content prose">
          <section className="experience">
            <h2>Work experience</h2>
            <div id="res-experience">
              <article className="job">
                <h3>GDD Codeing School</h3>
                <p className="meta">July 2025 • Bangkok</p>
                <ul>
                  <li>IT Support: Responsible for maintaining the school’s computer systems and network infrastructure.</li>
                  <li>TA: Assisted in teaching students in the classroom, including Python programming and Roblox development.</li>
                </ul>
              </article>
              <article className="job">
                <h3>Pizza Company</h3>
                <p className="meta">February 2025 - July 2025 • Bangkok</p>
                <ul>
                  <li>Customer Service Representative</li>
                </ul>
              </article>
              <article className="job">
                <h3>Kutsuya</h3>
                <p className="meta">June 2024 - February 2025 • Bangkok</p>
                <ul>
                  <li>Customer Service Representative</li>
                  <li>Chef</li>
                </ul>
              </article>
              <article className="job">
                <h3>7-Eleven</h3>
                <p className="meta">February 2024 - June 2024 • Bangkok</p>
                <ul>
                  <li>Customer Service Representative</li>
                  <li>Stock Management</li>
                </ul>
              </article>
            </div>
          </section>

          <section className="projects">
            <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', letterSpacing: '1px', color: 'var(--accent-dark)' }}>Performance</h2>
            <ul id="res-projects" className="project-list" style={{
              maxWidth: 650,
              margin: '0 auto',
              padding: 0,
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.7rem',
            }}>
              {projects.map((project, idx) => (
                <li
                  key={idx}
                  style={{
                    margin: 0,
                    padding: '1.5rem 1.6rem',
                    background: '#fff',
                    borderRadius: 14,
                    boxShadow: '0 2px 10px rgba(33,150,243,0.10)',
                    border: '1.5px solid #e3f2fd',
                    transition: 'box-shadow 0.2s, transform 0.2s',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.boxShadow = '0 4px 18px rgba(33,150,243,0.16)';
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.01)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(33,150,243,0.10)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <h4 style={{fontSize: '1.13rem', fontWeight: 700, color: '#1976d2', margin: 0, marginBottom: 8}}>{project.title}</h4>
                  <p style={{fontSize: '1.01rem', color: '#24303a', margin: 0, opacity: 0.97, whiteSpace: 'pre-line'}}>{Array.isArray(project.desc) ? project.desc.join('\n') : project.desc}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="summary">
            <h2>Summary</h2>
            <p id="res-summary">I enjoy writing code and developing websites. I have experience working as a Full Stack Developer and Game Developer. I have skills in using HTML, CSS, JavaScript, React, Node.js and Unity. I also have the ability to design UX/UI and work well with teams.</p>
          </section>

          <section id="contact" className="contact">
            <h2>Contact</h2>
            <p id="res-contact-text">If you'd like to discuss work opportunities or collaboration</p>
            <p>Send me an email at <a href="mailto:nkegamer1@gmail.com">nkegamer1@gmail.com</a> and Phone <a href="tel:0967301189">0967301189</a></p>
          </section>
        </section>
      </main>

      <footer className="site-footer" style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', transform: 'translateX(-50%)', background: '#fff', boxShadow: '0 -2px 8px rgba(33,150,243,0.07)', marginTop: '2rem', padding: 0 }}>
        <div className="container" style={{ maxWidth: 'none', margin: 0, padding: '1.5rem 0', textAlign: 'center' }}>
          <p>© 2026 Yodchan Suphaphan — Create HTML &amp; CSS</p>
          <p>Contact</p>
          <p>
            <a href="mailto:nkegamer1@gmail.com">nkegamer1@gmail.com</a> | 
            <a href="https://www.facebook.com/">Facebook</a> | 
            <a href="https://github.com/nell111-dev">GitHub</a>
          </p>
        </div>
      </footer>
    </>
  )
}
