import { useState, useEffect } from "react";
import { Cpu, Camera, Bot, Code2, Mail, Linkedin, Facebook, Instagram, Youtube, ExternalLink, MapPin, ChevronDown, Menu, X, Zap, CircuitBoard, ScanEye } from "lucide-react";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "more", label: "More" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id) => {
    setMenuOpen(false);
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "PLC/SCADA Control System",
      tag: "Featured Project",
      icon: CircuitBoard,
      desc: "Thiết kế và triển khai hệ thống điều khiển giám sát (SCADA) kết hợp PLC cho dây chuyền tự động hóa, cho phép giám sát thời gian thực, cảnh báo lỗi và thu thập dữ liệu vận hành.",
      tech: ["PLC", "SCADA", "HMI", "Modbus/TCP"],
      highlight: true,
    },
    {
      title: "SCARA Robot Arm",
      tag: "Robotics",
      icon: Bot,
      desc: "Lập trình và điều khiển cánh tay robot SCARA cho ứng dụng gắp - đặt vật thể (pick and place), tối ưu quỹ đạo chuyển động và độ chính xác lặp lại.",
      tech: ["Kinematics", "Motion Control", "C#"],
    },
    {
      title: "Line Follower Robot",
      tag: "Robotics",
      icon: Zap,
      desc: "Xây dựng robot dò line tự hành sử dụng cảm biến hồng ngoại và thuật toán PID để bám sát đường đi với tốc độ ổn định.",
      tech: ["PID Control", "Embedded C", "Sensors"],
    },
    {
      title: "Computer Vision cho kiểm tra chất lượng",
      tag: "Deep Learning",
      icon: ScanEye,
      desc: "Ứng dụng mô hình học sâu để nhận diện và phân loại lỗi sản phẩm qua hình ảnh, hỗ trợ tự động hóa khâu kiểm tra chất lượng (QC).",
      tech: ["Python", "Deep Learning", "OpenCV"],
    },
    {
      title: "UI/UX cho phần mềm giám sát",
      tag: "Software",
      icon: Code2,
      desc: "Thiết kế giao diện điều khiển và giám sát thiết bị bằng Python và C# Winform, tập trung vào trải nghiệm vận hành rõ ràng, dễ sử dụng.",
      tech: ["Python", "C# WinForm", "UI/UX"],
    },
  ];

  const skills = [
    { name: "PLC / SCADA", level: 90 },
    { name: "Robotics (SCARA, LFR)", level: 85 },
    { name: "Computer Vision / Deep Learning", level: 75 },
    { name: "Python", level: 85 },
    { name: "C# WinForm", level: 80 },
    { name: "Automatic Machine Programming", level: 80 },
  ];

  return (
    <div style={{ backgroundColor: "#0a1628", color: "#e2e8f0", fontFamily: "'Inter', system-ui, sans-serif", minHeight: "100vh", scrollBehavior: "smooth" }}>
      <style>{`
        @keyframes pulse-glow { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .glow-orb { animation: pulse-glow 4s ease-in-out infinite; }
        .float-anim { animation: float 6s ease-in-out infinite; }
        .spin-slow { animation: spin-slow 20s linear infinite; }
        .skill-bar { transition: width 1.5s ease-out; }
        .project-card { transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }
        .project-card:hover { transform: translateY(-6px); border-color: #f97316 !important; box-shadow: 0 20px 40px -10px rgba(249, 115, 22, 0.25); }
        .nav-link { position: relative; transition: color 0.2s ease; }
        .nav-link::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: #f97316; transition: width 0.3s ease; }
        .nav-link:hover::after { width: 100%; }
        .social-icon { transition: transform 0.25s ease, background 0.25s ease; }
        .social-icon:hover { transform: translateY(-4px) scale(1.1); background: #f97316 !important; }
        .grid-bg { background-image: linear-gradient(rgba(56,189,248,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.06) 1px, transparent 1px); background-size: 40px 40px; }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: scrolled ? "rgba(10,22,40,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(56,189,248,0.15)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: 700, fontSize: "18px", letterSpacing: "0.5px" }}>
            <Cpu size={22} color="#f97316" />
            <span>Ngoc<span style={{ color: "#f97316" }}>Lam</span></span>
          </div>
          <div style={{ display: "none" }} className="md-flex">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link"
                style={{ background: "none", border: "none", color: activeSection === item.id ? "#f97316" : "#cbd5e1", fontSize: "14px", fontWeight: 500, cursor: "pointer", padding: "8px 14px" }}>
                {item.label}
              </button>
            ))}
          </div>
          <div className="desktop-nav" style={{ display: "flex", gap: "4px" }}>
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link"
                style={{ background: "none", border: "none", color: activeSection === item.id ? "#f97316" : "#cbd5e1", fontSize: "14px", fontWeight: 500, cursor: "pointer", padding: "8px 14px" }}>
                {item.label}
              </button>
            ))}
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-toggle" style={{ display: "none", background: "none", border: "none", color: "#e2e8f0", cursor: "pointer" }}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <style>{`
          .desktop-nav { display: flex; }
          .mobile-toggle { display: none; }
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .mobile-toggle { display: block !important; }
          }
        `}</style>
        {menuOpen && (
          <div style={{ backgroundColor: "#0f1f38", padding: "12px 24px", display: "flex", flexDirection: "column", gap: "4px" }}>
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                style={{ background: "none", border: "none", color: "#e2e8f0", fontSize: "15px", textAlign: "left", padding: "10px 0", cursor: "pointer", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="grid-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: "80px" }}>
        <div className="glow-orb" style={{ position: "absolute", top: "10%", right: "8%", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.25), transparent 70%)", filter: "blur(20px)" }} />
        <div className="glow-orb" style={{ position: "absolute", bottom: "10%", left: "5%", width: "280px", height: "280px", borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.2), transparent 70%)", filter: "blur(20px)" }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "40px", alignItems: "center", width: "100%" }} className="hero-grid">
          <div style={{ position: "relative", zIndex: 2 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.3)", borderRadius: "999px", padding: "6px 16px", fontSize: "13px", color: "#fb923c", marginBottom: "24px", fontWeight: 500 }}>
              <Zap size={14} /> Automation Engineer
            </div>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.1, margin: "0 0 20px 0", color: "#f8fafc" }}>
              Xin chào, mình là<br />
              <span style={{ color: "#f97316" }}>Ngọc Lâm</span>
            </h1>
            <p style={{ fontSize: "18px", color: "#94a3b8", lineHeight: 1.7, maxWidth: "520px", marginBottom: "32px" }}>
              Tôi là kỹ sư tự động hóa, tốt nghiệp ngành Công nghệ Kỹ thuật Điều khiển và Tự động hóa tại Trường Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE), năm 2021. Tôi yêu thích biến những bài toán phức tạp thành các thiết kế hệ thống đơn giản và tinh gọn.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <button onClick={() => scrollTo("projects")} style={{ backgroundColor: "#f97316", color: "#0a1628", border: "none", borderRadius: "8px", padding: "14px 28px", fontSize: "15px", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
                Xem dự án <ExternalLink size={16} />
              </button>
              <button onClick={() => scrollTo("contact")} style={{ backgroundColor: "transparent", color: "#e2e8f0", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "8px", padding: "14px 28px", fontSize: "15px", fontWeight: 600, cursor: "pointer" }}>
                Liên hệ
              </button>
            </div>
          </div>
          <div className="float-anim" style={{ position: "relative", display: "flex", justifyContent: "center", zIndex: 1 }}>
            <div style={{ position: "relative", width: "260px", height: "260px" }}>
              <div className="spin-slow" style={{ position: "absolute", inset: 0, border: "2px dashed rgba(56,189,248,0.3)", borderRadius: "50%" }} />
              <div style={{ position: "absolute", inset: "20px", borderRadius: "50%", background: "linear-gradient(135deg, #1e3a5f, #0f1f38)", border: "1px solid rgba(249,115,22,0.3)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 60px rgba(249,115,22,0.15)" }}>
                <Cpu size={90} color="#f97316" strokeWidth={1.2} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: "24px", left: "50%", transform: "translateX(-50%)", color: "#64748b" }}>
          <ChevronDown size={24} className="float-anim" />
        </div>
        <style>{`@media (max-width: 768px) { .hero-grid { grid-template-columns: 1fr !important; text-align: center; } }`}</style>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 24px", backgroundColor: "#0f1f38" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <SectionHeader eyebrow="Giới thiệu" title="Về tôi" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", marginTop: "40px" }} className="about-grid">
            <div>
              <p style={{ fontSize: "16px", color: "#cbd5e1", lineHeight: 1.8, marginBottom: "20px" }}>
                Tôi tốt nghiệp ngành Công nghệ Kỹ thuật Điều khiển và Tự động hóa, Khoa Điện - Điện tử, Trường Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE) vào năm 2021.
              </p>
              <p style={{ fontSize: "16px", color: "#cbd5e1", lineHeight: 1.8 }}>
                Ngoài công việc kỹ thuật, tôi cũng dành thời gian cho các hoạt động thể thao, đặc biệt là chơi bóng đá cùng bạn bè vào cuối tuần.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <InfoRow icon={MapPin} label="Vị trí" value="Tân Lập, Dĩ An, Bình Dương" />
              <InfoRow icon={Cpu} label="Chuyên ngành" value="Control & Automation Engineering" />
              <InfoRow icon={Mail} label="Email" value="ngoclam1999@gmail.com" />
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "100px 24px", backgroundColor: "#0a1628" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeader eyebrow="Dự án" title="Dự án nổi bật" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginTop: "48px" }}>
            {projects.map((p, i) => (
              <div key={i} className="project-card" style={{
                backgroundColor: p.highlight ? "rgba(249,115,22,0.06)" : "#0f1f38",
                border: p.highlight ? "1px solid rgba(249,115,22,0.4)" : "1px solid rgba(255,255,255,0.08)",
                borderRadius: "14px", padding: "28px", position: "relative",
                gridColumn: p.highlight ? "span 2" : "span 1",
              }} className={p.highlight ? "highlight-card" : ""}>
                {p.highlight && (
                  <div style={{ position: "absolute", top: "-12px", right: "24px", backgroundColor: "#f97316", color: "#0a1628", fontSize: "11px", fontWeight: 700, padding: "4px 12px", borderRadius: "999px", letterSpacing: "0.5px" }}>
                    NỔI BẬT
                  </div>
                )}
                <div style={{ width: "48px", height: "48px", borderRadius: "10px", backgroundColor: "rgba(56,189,248,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <p.icon size={24} color="#38bdf8" />
                </div>
                <div style={{ fontSize: "12px", color: "#fb923c", fontWeight: 600, letterSpacing: "0.5px", marginBottom: "8px", textTransform: "uppercase" }}>{p.tag}</div>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#f8fafc", marginBottom: "12px" }}>{p.title}</h3>
                <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.7, marginBottom: "20px" }}>{p.desc}</p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {p.tech.map((t, j) => (
                    <span key={j} style={{ fontSize: "12px", color: "#cbd5e1", backgroundColor: "rgba(255,255,255,0.06)", padding: "4px 10px", borderRadius: "6px" }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 768px) {
              .highlight-card { grid-column: span 1 !important; }
            }
          `}</style>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "100px 24px", backgroundColor: "#0f1f38" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <SectionHeader eyebrow="Năng lực" title="Kỹ năng chuyên môn" />
          <div style={{ marginTop: "48px", display: "flex", flexDirection: "column", gap: "24px" }}>
            {skills.map((s, i) => (
              <SkillBar key={i} name={s.name} level={s.level} />
            ))}
          </div>
        </div>
      </section>

      {/* MORE - Travel (secondary) */}
      <section id="more" style={{ padding: "70px 24px", backgroundColor: "#0a1628" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ fontSize: "13px", color: "#64748b", fontWeight: 600, letterSpacing: "0.5px", marginBottom: "8px", textTransform: "uppercase" }}>Ngoài công việc</div>
          <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#cbd5e1", marginBottom: "24px" }}>Hoạt động trải nghiệm & du lịch</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            {["Kien Giang Tourism", "Phu Yen Tourism", "Volunteer Campaign"].map((t, i) => (
              <div key={i} style={{ backgroundColor: "#0f1f38", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", padding: "18px", fontSize: "14px", color: "#94a3b8" }}>
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 24px", backgroundColor: "#0f1f38", position: "relative", overflow: "hidden" }}>
        <div className="glow-orb" style={{ position: "absolute", top: "20%", left: "10%", width: "260px", height: "260px", borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.15), transparent 70%)", filter: "blur(30px)" }} />
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <SectionHeader eyebrow="Liên hệ" title="Hãy kết nối với tôi" center />
          <p style={{ color: "#94a3b8", fontSize: "16px", margin: "20px 0 36px 0" }}>
            Luôn sẵn sàng trao đổi về các dự án automation, robotics, hoặc cơ hội hợp tác.
          </p>
          <a href="mailto:ngoclam1999@gmail.com" style={{ display: "inline-flex", alignItems: "center", gap: "10px", backgroundColor: "#f97316", color: "#0a1628", borderRadius: "8px", padding: "14px 32px", fontSize: "15px", fontWeight: 600, textDecoration: "none", marginBottom: "36px" }}>
            <Mail size={18} /> ngoclam1999@gmail.com
          </a>
          <div style={{ display: "flex", justifyContent: "center", gap: "14px" }}>
            <SocialIcon icon={Facebook} href="https://www.facebook.com/Lam.danh.9299" />
            <SocialIcon icon={Linkedin} href="https://www.linkedin.com/in/lamdanh279/" />
            <SocialIcon icon={Instagram} href="https://www.instagram.com/_lamdanh_/" />
            <SocialIcon icon={Youtube} href="https://www.youtube.com/@ngoclamize" />
          </div>
        </div>
      </section>

      <footer style={{ padding: "24px", textAlign: "center", color: "#64748b", fontSize: "13px", backgroundColor: "#0a1628", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        © 2026 Ngọc Lâm · Automation Engineer Portfolio
      </footer>
    </div>
  );
}

function SectionHeader({ eyebrow, title, center }) {
  return (
    <div style={{ textAlign: center ? "center" : "left" }}>
      <div style={{ fontSize: "13px", color: "#f97316", fontWeight: 600, letterSpacing: "1px", marginBottom: "8px", textTransform: "uppercase" }}>{eyebrow}</div>
      <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 800, color: "#f8fafc", margin: 0 }}>{title}</h2>
      <div style={{ width: "48px", height: "3px", backgroundColor: "#f97316", borderRadius: "2px", marginTop: "16px", marginLeft: center ? "auto" : 0, marginRight: center ? "auto" : 0 }} />
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "14px", backgroundColor: "#0a1628", padding: "14px 18px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.06)" }}>
      <Icon size={18} color="#f97316" />
      <div>
        <div style={{ fontSize: "12px", color: "#64748b" }}>{label}</div>
        <div style={{ fontSize: "14px", color: "#e2e8f0", fontWeight: 500 }}>{value}</div>
      </div>
    </div>
  );
}

function SkillBar({ name, level }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(level), 200);
    return () => clearTimeout(t);
  }, [level]);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <span style={{ fontSize: "14px", color: "#e2e8f0", fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: "13px", color: "#64748b" }}>{level}%</span>
      </div>
      <div style={{ height: "8px", backgroundColor: "#0a1628", borderRadius: "999px", overflow: "hidden" }}>
        <div className="skill-bar" style={{ height: "100%", width: `${width}%`, background: "linear-gradient(90deg, #38bdf8, #f97316)", borderRadius: "999px" }} />
      </div>
    </div>
  );
}

function SocialIcon({ icon: Icon, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="social-icon" style={{
      width: "46px", height: "46px", borderRadius: "50%", backgroundColor: "#0a1628",
      border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center",
      color: "#e2e8f0", textDecoration: "none",
    }}>
      <Icon size={20} />
    </a>
  );
}
