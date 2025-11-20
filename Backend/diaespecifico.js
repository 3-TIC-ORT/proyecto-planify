import fs from "fs";

export function diaespecifico(req, res) {
  try {
    const { dia, mes, año, usuario } = req.body;

    if (!dia || !mes || !año || !usuario) {
      return res.json({ notas: [], eventos: [] });
    }

    // leer eventos
    const eventosRaw = fs.readFileSync("./eventos.json", "utf8");
    const eventos = JSON.parse(eventosRaw);

    // leer notas
    const notasRaw = fs.readFileSync("./notas.json", "utf8");
    const notas = JSON.parse(notasRaw);

    // filtrar exacto como tu json
    const eventosDelDia = eventos.filter(
      e => e.dia == dia && e.mes.toLowerCase() == mes.toLowerCase()
    );

    const notasDelDia = notas.filter(
      n => n.dia == dia && n.mes.toLowerCase() == mes.toLowerCase()
    );

    return res.json({
      notas: notasDelDia,
      eventos: eventosDelDia
    });

  } catch (error) {
    console.log("error", e);
    return res.json({ notas: [], eventos: [] });
  }
}
