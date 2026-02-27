import './App.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'เว็บขายของออนไลน์',
      desc: 'ออกแบบ UI/UX และพัฒนา frontend ออกแบบหน้าต่างๆ ให้ใช้งานง่ายและสวยงาม',
      image: 'public/img-project/wed_shop2.avif',
      tags: ['HTML', 'CSS', 'JavaScript', 'SQL']
    },
    {
      id: 2,
      title: 'เว็บร้าน Carcare',
      desc: 'ออกแบบและพัฒนาเว็บไซต์สำหรับร้านบริการดูแลรักษารถยนต์ มีระบบจองคิว และการแสดงผลบริการต่างๆ',
      image: 'public/img-project/wed_shop.avif',
      tags: ['HTML', 'CSS', 'JavaScript', 'UI']
    },
    {
      id: 3,
      title: 'เกมเขาวงกต',
      desc: 'พัฒนาเกมเขาวงกต 3 มิติด้วย Unity และ C# โดยเน้นการออกแบบด่านที่ท้าทาย',
      image: 'public/img-project/game unity 2d.webp',
      tags: ['Unity', 'C#', '3D']
    },
    {
      id: 4,
      title: 'เกมแอกชัน RPG',
      desc: 'พัฒนาเกมแอกชัน RPG สามมิติด้วย Unity และ C# มีระบบต่อสู้และ quest ที่น่าสนใจ',
      image: 'public/img-project/game unity 3d.jpg',
      tags: ['Unity', 'C#', '3D']
    },
    {
      id: 5,
      title: 'Roblox เกมเกี่ยวกับ AI',
      desc: 'พัฒนาเกมการศึกษาบน Roblox ที่ใช้เทคโนโลยี AI เกี่ยวกับการค้นหาตามแมพต่างๆ',
      image: 'public/img-project/roblox.png',
      tags: ['LUA', 'AI']
    },
    {
      id: 6,
      title: 'GameMath',
      desc: 'พัฒนาแอพเกมเพื่อช่วยเพิ่มทักษะการคำนวณทางคณิตศาสตร์ของเด็กให้เร็วยิ่งขึ้น มีหลากหลายประเภทโจทย์ ระบบคะแนน และความยากที่ก้าวหน้า',
      image: 'public/img-project/roblox.png',
      tags: ['APK']
    }
  ]

  return (
    <>
      <header className="site-header">
        <div className="container header-grid">
          <div className="hero">
            <h1 className="name">ผลงาน</h1>
          </div>
        </div>
      </header>

      <main className="portfolio-main" style={{background: '#f8fbff', minHeight: '100vh', padding: '2rem 0'}}>
        <section className="portfolio-projects" style={{maxWidth: 600, margin: '0 auto'}}>
          <div
            id="res-projects"
            className="portfolio-project-list"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1.2rem',
            }}
          >
            {projects.map((project) => (
              <article
                key={project.id}
                style={{
                  background: '#fff',
                  borderRadius: 12,
                  boxShadow: '0 2px 8px rgba(33,150,243,0.07)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'stretch',
                  overflow: 'hidden',
                  border: '1px solid #e3f2fd',
                  minHeight: 0,
                  padding: '0 0 1.2rem 0',
                }}
              >
                <img
                  style={{
                    width: '100%',
                    height: 180,
                    objectFit: 'cover',
                    borderRadius: '12px 12px 0 0',
                    borderBottom: '1px solid #e3f2fd',
                  }}
                  className="portfolio-project-thumb"
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
                <div
                  style={{
                    padding: '1.1rem 1.3rem 0 1.3rem',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  className="portfolio-project-body"
                >
                  <h4
                    style={{
                      fontSize: '1.08rem',
                      fontWeight: 700,
                      color: '#1976d2',
                      margin: 0,
                      marginBottom: 6,
                    }}
                  >
                    {project.title}
                  </h4>
                  <p
                    className="portfolio-project-desc"
                    style={{
                      fontSize: '0.98rem',
                      color: '#24303a',
                      margin: 0,
                      marginBottom: 12,
                      opacity: 0.95,
                    }}
                  >
                    {project.desc}
                  </p>
                  <div
                    className="portfolio-project-tags"
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem',
                      marginTop: 'auto',
                    }}
                  >
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          display: 'inline-block',
                          background: '#e3f2fd',
                          color: '#1976d2',
                          padding: '0.22rem 0.9rem',
                          borderRadius: 10,
                          fontSize: '0.89rem',
                          fontWeight: 500,
                          border: '1px solid #bbdefb',
                          letterSpacing: '0.1px',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer" style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', transform: 'translateX(-50%)', background: '#fff', boxShadow: '0 -2px 8px rgba(33,150,243,0.07)', marginTop: '2rem', padding: 0 }}>
        <div className="container" style={{ maxWidth: 'none', margin: 0, padding: '1.5rem 0', textAlign: 'center' }}>
          <p>© 2025 Yodchan Suphaphan — สร้างด้วย React &amp; Vite</p>
          <p>ติดต่องานได้ที่</p>
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