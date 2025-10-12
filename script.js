// --- Fiktive Wechselkurse (nur Beispiel) ---
const rates = {
  USD: { EUR: 0.93, SAR: 3.75 },
  EUR: { USD: 1.08, SAR: 4.05 },
  SAR: { USD: 0.27, EUR: 0.25 }
};

// --- Funktion zur Umrechnung ---
function convert() {
  // Werte aus den Eingabefeldern lesen
  const amount = document.getElementById('amount').value;
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;

  // Überprüfung: Sind beide Währungen gleich?
  if (from === to) {
    document.getElementById('result').textContent = "❗Bitte zwei verschiedene Währungen auswählen.";
    return;
  }

  // Den passenden Wechselkurs finden
  const rate = rates[from][to];
  const result = (amount * rate).toFixed(2);

  // Ergebnis anzeigen
  document.getElementById('result').textContent = `${amount} ${from} = ${result} ${to}`;
}
