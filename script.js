const ramos = [
  { id: 'qui1', nombre: 'Química general I', req: [] },
  { id: 'bio1', nombre: 'Biología celular I', req: [] },
  { id: 'mat1', nombre: 'Matemáticas I', req: [] },
  { id: 'ing1', nombre: 'Inglés I', req: [] },
  { id: 'introfarma', nombre: 'Introducción a la farmacia', req: [] },

  { id: 'qui2', nombre: 'Química general II', req: ['qui1'] },
  { id: 'morfo', nombre: 'Morfología', req: ['bio1'] },
  { id: 'mat2', nombre: 'Matemáticas II', req: ['mat1'] },
  { id: 'ing2', nombre: 'Inglés II', req: ['ing1'] },
  { id: 'sello1', nombre: 'Asignatura sello I', req: [] },
  { id: 'fisica', nombre: 'Física', req: ['mat1'] },

  { id: 'org1', nombre: 'Química orgánica I', req: ['qui2'] },
  { id: 'fisiq1', nombre: 'Fisicoquímica I', req: ['qui2', 'mat2'] },
  { id: 'ing3', nombre: 'Inglés III', req: ['ing2'] },
  { id: 'bioest', nombre: 'Bioestadística', req: ['mat2'] },
  { id: 'fisio', nombre: 'Fisiología', req: ['morfo'] },
  { id: 'sello2', nombre: 'Asignatura sello II', req: ['sello1'] },

  { id: 'org2', nombre: 'Química orgánica II', req: ['org1'] },
  { id: 'ing4', nombre: 'Inglés IV', req: ['ing3'] },
  { id: 'fisiq2', nombre: 'Fisicoquímica II', req: ['fisiq1'] },
  { id: 'qanalitica', nombre: 'Química analítica', req: ['qui2'] },
  { id: 'fispat', nombre: 'Fisiopatología', req: ['fisio'] },

  { id: 'bioq', nombre: 'Bioquímica', req: ['org2', 'fisiq2'] },
  { id: 'botanica', nombre: 'Botánica y fitoterapia', req: ['org2'] },
  { id: 'eco', nombre: 'Economía', req: ['bioest'] },
  { id: 'farmacod', nombre: 'Farmacodinamia', req: ['fispat'] },
  { id: 'analisis', nombre: 'Análisis instrumental', req: ['qanalitica'] },
  { id: 'sello3', nombre: 'Asignatura sello III', req: ['sello2'] },

  { id: 'farmq1', nombre: 'Farmacoquímica I', req: ['farmacod'] },
  { id: 'micro', nombre: 'Microbiología e inmunología', req: ['bioq'] },
  { id: 'farm1', nombre: 'Farmacología I', req: ['farmacod'] },
  { id: 'bioqclin', nombre: 'Bioquímica clínica', req: ['bioq'] },
  { id: 'legis', nombre: 'Legislación Farmacéutica', req: [] },
  { id: 'gestion', nombre: 'Gestión farmacéutica', req: ['eco'] },

  { id: 'tox', nombre: 'Toxicología', req: ['farmacod'] },
  { id: 'salud', nombre: 'Salud pública', req: ['micro'] },
  { id: 'farmq2', nombre: 'Farmacoquímica II', req: ['farmq1'] },
  { id: 'farm2', nombre: 'Farmacología II', req: ['farm1'] },
  { id: 'biofarm', nombre: 'Biofarmacia y farmacocinética', req: ['farm1'] },
  { id: 'etica', nombre: 'Ética', req: [] },

  { id: 'electivo1', nombre: 'Electivo I', req: [] },
  { id: 'tec1', nombre: 'Tecnología farmacéutica I', req: ['biofarm'] },
  { id: 'electivo2', nombre: 'Electivo II', req: ['etica'] },
  { id: 'farmaasis', nombre: 'Farmacia asistencial', req: ['salud'] },
  { id: 'nutri', nombre: 'Nutrición', req: ['biofarm'] },
  { id: 'alim', nombre: 'Química de alimentos', req: ['farm2'] },

  { id: 'tec2', nombre: 'Tecnología farmacéutica II', req: ['tec1'] },
  { id: 'cosmetica', nombre: 'Tecnología cosmética', req: ['tec1'] },
  { id: 'inv', nombre: 'Unidad de investigación', req: [] },
  { id: 'clinic', nombre: 'Farmacia clínica', req: ['farmaasis'] },
  { id: 'electivo3', nombre: 'Electivo III', req: ['electivo1'] },

  { id: 'internado', nombre: 'Internado en farmacia clínica', req: ['tec2', 'cosmetica', 'inv', 'clinic'] },
  { id: 'practica', nombre: 'Práctica prolongada', req: ['tec2', 'cosmetica', 'inv', 'clinic'] },
  { id: 'practica_com', nombre: 'Práctica obligatoria en farmacia comunitaria', req: [] },
  { id: 'seminario', nombre: 'Seminario de título', req: ['tec2', 'cosmetica', 'inv', 'clinic'] }
];

function renderRamos() {
  const container = document.getElementById("malla");
  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.classList.add("ramo");
    if (ramo.req.length > 0) div.classList.add("bloqueado");
    div.id = ramo.id;
    div.textContent = ramo.nombre;
    div.addEventListener("click", () => aprobarRamo(ramo.id));
    container.appendChild(div);
  });
}

function aprobarRamo(id) {
  const el = document.getElementById(id);
  if (el.classList.contains("bloqueado") || el.classList.contains("aprobado")) return;

  el.classList.add("aprobado");

  ramos.forEach(ramo => {
    const requisitos = ramo.req;
    if (requisitos.length === 0) return;
    const todosCumplidos = requisitos.every(rid =>
      document.getElementById(rid)?.classList.contains("aprobado")
    );
    if (todosCumplidos) {
      document.getElementById(ramo.id).classList.remove("bloqueado");
    }
  });
}

document.addEventListener("DOMContentLoaded", renderRamos);
