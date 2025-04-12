
const Part3 = () => {
  const caseColors = {
    nominativ: { color: "#3498db", backgroundColor: "#ebf5fb" },
    akkusativ: { color: "#e74c3c", backgroundColor: "#fdedec" },
    dativ: { color: "#27ae60", backgroundColor: "#e9f7ef" },
    genitiv: { color: "#9b59b6", backgroundColor: "#f4ecf7" }
  };

  const ColoredText = ({ color, children }) => (
    <span style={{ color }}>{children}</span>
  );

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "900px",
      margin: "0 auto",
      backgroundColor: "#ffffff"
    }}>
      {/* Complex Examples */}
      <div style={{marginBottom: "20px"}}>
        <h2 style={{color: "#2c3e50"}}>6. Complex Examples</h2>
        <div style={{backgroundColor: "#f8f9fa", padding: "15px", borderRadius: "5px"}}>
          <h4 style={{marginTop: 0}}>Multiple Cases in One Sentence</h4>
          <ol style={{lineHeight: "1.8"}}>
            <li>
              Während <ColoredText color={caseColors.genitiv.color}>des Unterrichts</ColoredText> erklärt{" "}
              <ColoredText color={caseColors.nominativ.color}>die Lehrerin</ColoredText>{" "}
              <ColoredText color={caseColors.dativ.color}>den Schülern</ColoredText>{" "}
              <ColoredText color={caseColors.akkusativ.color}>die neue Grammatik</ColoredText>.
            </li>
            <li>
              <ColoredText color={caseColors.nominativ.color}>Der Professor</ColoredText> gibt{" "}
              <ColoredText color={caseColors.dativ.color}>seinen Studenten</ColoredText>{" "}
              <ColoredText color={caseColors.akkusativ.color}>die Hausaufgaben</ColoredText>{" "}
              <ColoredText color={caseColors.genitiv.color}>des neuen Kurses</ColoredText>.
            </li>
            <li>
              Trotz <ColoredText color={caseColors.genitiv.color}>des schlechten Wetters</ColoredText> bringt{" "}
              <ColoredText color={caseColors.nominativ.color}>der Postbote</ColoredText>{" "}
              <ColoredText color={caseColors.dativ.color}>der kranken Frau</ColoredText>{" "}
              <ColoredText color={caseColors.akkusativ.color}>ihre Briefe</ColoredText>.
            </li>
          </ol>

          <h4 style={{marginTop: "20px"}}>Relative Clauses</h4>
          <ul style={{lineHeight: "1.6"}}>
            <li>Der Mann, <ColoredText color={caseColors.nominativ.color}>der</ColoredText> dort steht... (who)</li>
            <li>Der Mann, <ColoredText color={caseColors.akkusativ.color}>den</ColoredText> ich sehe... (whom)</li>
            <li>Der Mann, <ColoredText color={caseColors.dativ.color}>dem</ColoredText> ich helfe... (to whom)</li>
            <li>Der Mann, <ColoredText color={caseColors.genitiv.color}>dessen</ColoredText> Auto ich fahre... (whose)</li>
          </ul>
        </div>
      </div>

      {/* Memory Aids */}
      <div style={{marginBottom: "20px"}}>
        <h2 style={{color: "#2c3e50"}}>7. Memory Aids</h2>
        <div style={{backgroundColor: "#e8f4f8", padding: "15px", borderRadius: "5px"}}>
          <h4 style={{marginTop: 0}}>Question Words - WNWS Rule</h4>
          <ul>
            <li><b>W</b>er/Was? → <ColoredText color={caseColors.nominativ.color}>Nominativ</ColoredText></li>
            <li><b>W</b>en/Was? → <ColoredText color={caseColors.akkusativ.color}>Akkusativ</ColoredText></li>
            <li><b>W</b>em? → <ColoredText color={caseColors.dativ.color}>Dativ</ColoredText></li>
            <li><b>W</b>essen? → <ColoredText color={caseColors.genitiv.color}>Genitiv</ColoredText></li>
          </ul>
        </div>

        <div style={{backgroundColor: "#fff3cd", padding: "15px", borderRadius: "5px", marginTop: "15px"}}>
          <h4 style={{marginTop: 0}}>Key Patterns</h4>
          <ul>
            <li>Dative plural always adds -<b>en</b></li>
            <li>Masculine changes most in accusative (der → den)</li>
            <li>Genitive masculine/neuter adds -<b>es</b>/-<b>s</b></li>
            <li>After prepositions, use contractions:
              <ul>
                <li>in + dem = im</li>
                <li>an + dem = am</li>
                <li>zu + dem = zum</li>
                <li>bei + dem = beim</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Time and Place Expressions */}
      <div style={{marginBottom: "20px"}}>
        <h2 style={{color: "#2c3e50"}}>8. Time and Place Expressions</h2>
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px"}}>
          <div style={caseColors.akkusativ}>
            <h4 style={{marginTop: 0}}>Akkusativ Time</h4>
            <ul>
              <li>jeden Tag (every day)</li>
              <li>diesen Monat (this month)</li>
              <li>nächste Woche (next week)</li>
              <li>den ganzen Tag (the whole day)</li>
            </ul>
          </div>
          <div style={caseColors.dativ}>
            <h4 style={{marginTop: 0}}>Dativ Time</h4>
            <ul>
              <li>am Montag (on Monday)</li>
              <li>im Januar (in January)</li>
              <li>in der Nacht (at night)</li>
              <li>nach dem Essen (after eating)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fixed Expressions */}
      <div style={{marginBottom: "10px"}}>
        <h2 style={{color: "#2c3e50"}}>9. Fixed Expressions</h2>
        <div style={{backgroundColor: "#f8f9fa", padding: "5px", borderRadius: "5px"}}>
          <ul style={{lineHeight: "1.6"}}>
            <li><ColoredText color={caseColors.dativ.color}>Meiner Meinung nach</ColoredText> (In my opinion)</li>
            <li><ColoredText color={caseColors.akkusativ.color}>Keine Ahnung</ColoredText> haben (to have no idea)</li>
            <li><ColoredText color={caseColors.genitiv.color}>Eines Tages</ColoredText> (One day)</li>
            <li>Jemandem <ColoredText color={caseColors.akkusativ.color}>einen Gefallen</ColoredText> tun (to do someone a favor)</li>
            <li><ColoredText color={caseColors.dativ.color}>Mir ist kalt</ColoredText> (I am cold)</li>
            <li><ColoredText color={caseColors.akkusativ.color}>Recht haben</ColoredText> (to be right)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Part3;
