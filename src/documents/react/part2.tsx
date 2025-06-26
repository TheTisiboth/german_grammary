
const Part2 = () => {
    const caseColors = {
        nominativ: { color: "#3498db", backgroundColor: "#ebf5fb" },
        akkusativ: { color: "#e74c3c", backgroundColor: "#fdedec" },
        dativ: { color: "#27ae60", backgroundColor: "#e9f7ef" },
        genitiv: { color: "#9b59b6", backgroundColor: "#f4ecf7" }
    };

    const sectionStyle = {
        marginBottom: "30px"
    };

    return (
        <div style={{
            fontFamily: "Arial, sans-serif",
            maxWidth: "900px",
            margin: "0 auto",
            backgroundColor: "#ffffff"
        }}>
            {/* Prepositions Section */}
            <div style={sectionStyle}>
                <h2 style={{color: "#2c3e50"}}>4. Prepositions by Case</h2>
                <div style={{display: "flex", flexDirection: "column", gap: "15px"}}>
                    <div style={{...caseColors.dativ, padding: "15px", borderRadius: "5px"}}>
                        <h4 style={{marginTop: 0}}>Dativ Prepositions</h4>
                        <p><b>aus - bei - mit - nach - seit - von - zu - gegenüber - ab - außer</b></p>
                        <p><i>Example: Das Kind spielt <b>mit dem</b> Ball.</i></p>
                    </div>

                    <div style={{...caseColors.akkusativ, padding: "15px", borderRadius: "5px"}}>
                        <h4 style={{marginTop: 0}}>Akkusativ Prepositions</h4>
                        <p><b>durch - für - gegen - ohne - um - entlang - bis</b></p>
                        <p><i>Example: Das Kind läuft <b>durch den</b> Wald.</i></p>
                    </div>

                    <div style={{...caseColors.genitiv, padding: "15px", borderRadius: "5px"}}>
                        <h4 style={{marginTop: 0}}>Genitiv Prepositions</h4>
                        <p><b>anhand - anstatt - außerhalb - innerhalb - mithilfe - trotz - während - wegen</b></p>
                        <p><i>Example: <b>wegen des</b> Regens</i></p>
                    </div>

                    <div style={{backgroundColor: "#fff3cd", padding: "15px", borderRadius: "5px"}}>
                        <h4 style={{marginTop: 0}}>Two-way Prepositions (Wechselpräpositionen)</h4>
                        <p><b>an - auf - hinter - in - neben - über - unter - vor - zwischen</b></p>
                        <div style={{display: "flex", gap: "20px", marginTop: "10px"}}>
                            <div style={caseColors.dativ}>
                                <p><b>Wo?</b> → Dativ (static location)</p>
                                <p>Das Buch steht <b>in dem</b> Regal.</p>
                            </div>
                            <div style={caseColors.akkusativ}>
                                <p><b>Wohin?</b> → Akkusativ (motion)</p>
                                <p>Ich stelle das Buch <b>in das</b> Regal.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dative Verbs Section */}
            <div style={sectionStyle}>
                <h2 style={{color: "#2c3e50"}}>5. Dative Verbs by Level</h2>
                <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px"}}>
                    <div style={{backgroundColor: caseColors.dativ.backgroundColor, padding: "15px", borderRadius: "5px"}}>
                        <h4 style={{marginTop: 0}}>A1 Level</h4>
                        <ul style={{margin: 0}}>
                            <li>antworten (to answer)</li>
                            <li>folgen (to follow)</li>
                            <li>gefallen (to please)</li>
                            <li>gehören (to belong)</li>
                            <li>glauben (to believe)</li>
                            <li>helfen (to help)</li>
                            <li>schmecken (to taste)</li>
                            <li>wehtun (to hurt)</li>
                            <li>zuhören (to listen)</li>
                        </ul>
                    </div>

                    <div style={{backgroundColor: caseColors.dativ.backgroundColor, padding: "15px", borderRadius: "5px"}}>
                        <h4 style={{marginTop: 0}}>A2 Level</h4>
                        <ul style={{margin: 0}}>
                            <li>befehlen (to command)</li>
                            <li>danken (to thank)</li>
                            <li>fehlen (to miss)</li>
                            <li>vergeben (to forgive)</li>
                            <li>verzeihen (to pardon)</li>
                            <li>widersprechen (to contradict)</li>
                            <li>zustimmen (to agree)</li>
                            <li>vertrauen (to trust)</li>
                        </ul>
                    </div>

                    <div style={{backgroundColor: caseColors.dativ.backgroundColor, padding: "15px", borderRadius: "5px"}}>
                        <h4 style={{marginTop: 0}}>B1-B2 Level</h4>
                        <ul style={{margin: 0}}>
                            <li>ähneln (to resemble)</li>
                            <li>begegnen (to meet)</li>
                            <li>beistehen (to support)</li>
                            <li>drohen (to threaten)</li>
                            <li>gehorchen (to obey)</li>
                            <li>genügen (to suffice)</li>
                            <li>schaden (to harm)</li>
                            <li>ausweichen (to avoid)</li>
                        </ul>
                    </div>

                    <div style={{backgroundColor: caseColors.dativ.backgroundColor, padding: "15px", borderRadius: "5px"}}>
                        <h4 style={{marginTop: 0}}>C1 Level</h4>
                        <ul style={{margin: 0}}>
                            <li>dienen (to serve)</li>
                            <li>gelingen (to succeed)</li>
                            <li>misslingen (to fail)</li>
                            <li>beipflichten (to agree with)</li>
                            <li>beiwohnen (to attend)</li>
                            <li>standhalten (to withstand)</li>
                            <li>zusagen (to appeal to)</li>
                            <li>obliegen (to be responsible)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part2;
