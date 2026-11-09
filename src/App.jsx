import { useRef, useState } from 'react'
import './App.css'

const mockups = [
  { id: 'sima', title: 'SIMA', category: 'Vista general', file: 'sima.png', description: 'Inventario de equipos, estados y acciones rápidas en una misma vista.' },
  { id: 'recrear', title: 'Recrear Portales', category: 'Gestión de portales', file: 'recrear-portales.png', description: 'Selección de portales y seguimiento visual de los resultados.' },
  { id: 'botones', title: 'SIMA · Nuevos botones', category: 'Variante de diseño', file: 'sima-botones.png', description: 'Una alternativa con botones de contorno e iconos para las acciones rápidas.' },
]

function App() {
  const [selected, setSelected] = useState(0)
  const dialog = useRef(null)
  const current = mockups[selected]

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Portales, inicio"><span className="brand-symbol">P<span /></span>portales<span className="brand-dot">.</span></a>
        <span className="header-label">Proyecto de interfaz <span className="status-dot" /></span>
      </header>
      <main id="inicio">
        <section className="intro" aria-labelledby="page-title">
          <div><p className="eyebrow">EXPLORACIÓN VISUAL / 01</p><h1 id="page-title">Proyecto Portales<span>.</span></h1><p className="intro-copy">Una mirada al diseño de la aplicación.<br />Explora las propuestas de SIMA y Recrear Portales.</p></div>
          <div className="project-note"><span className="note-number">03</span><div>Mockups originales<br /><span>Material Design · Desktop</span></div></div>
        </section>
        <section className="gallery" aria-label="Mockups de Portales">
          <div className="gallery-bar"><div className="tabs" role="group" aria-label="Seleccionar mockup">{mockups.map((mockup, index) => <button key={mockup.id} type="button" aria-pressed={selected === index} className={selected === index ? 'tab active' : 'tab'} onClick={() => setSelected(index)}><span>0{index + 1}</span>{mockup.title}</button>)}</div><span className="gallery-count">0{selected + 1} / 03</span></div>
          <div className="preview-stage"><button className="image-button" onClick={() => dialog.current.showModal()} aria-label={`Ampliar mockup de ${current.title}`}><img src={`/mockups/${current.file}`} alt={`Mockup original de ${current.title}: ${current.description}`} /><span className="zoom-hint">⤢ Ampliar mockup</span></button></div>
          <div className="caption"><div><p className="eyebrow">{current.category}</p><h2>{current.title}</h2><p>{current.description}</p></div><a className="download" href={`/mockups/${current.file}`} download>Descargar imagen <span aria-hidden="true">↗</span></a></div>
        </section>
        <div className="gallery-footnote"><span className="small-marker" />Propuestas visuales con datos ilustrativos.<span className="footnote-right">PORTALES / DISEÑO DE INTERFAZ</span></div>
      </main>
      <footer><span>Portales<span className="brand-dot">.</span></span><span>Colección de mockups · 2026</span></footer>
      <dialog ref={dialog} aria-label={`Vista ampliada de ${current.title}`} onClick={(event) => { if (event.target === event.currentTarget) dialog.current.close() }}><div className="dialog-bar"><strong>{current.title}</strong><button type="button" onClick={() => dialog.current.close()} autoFocus>Cerrar <span aria-hidden="true">×</span></button></div><div className="dialog-image"><img src={`/mockups/${current.file}`} alt={`Vista ampliada del mockup de ${current.title}`} /></div></dialog>
    </>
  )
}

export default App
