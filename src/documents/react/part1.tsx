import {FC, Ref} from "react";

const GermanCases: FC<{ ref?: Ref<HTMLDivElement> | null }> = ({ref}) => {
    const caseColors = {
        nominativ: {color: "#3498db", backgroundColor: "#ebf5fb"},
        akkusativ: {color: "#e74c3c", backgroundColor: "#fdedec"},
        dativ: {color: "#27ae60", backgroundColor: "#e9f7ef"},
        genitiv: {color: "#9b59b6", backgroundColor: "#f4ecf7"}
    };

    const tableHeaderStyle = {
        backgroundColor: "#3498db",
        color: "white",
        padding: "8px",
        textAlign: "left"
    };

    const tableCellStyle = {
        padding: "8px",
        border: "1px solid #ddd"
    };

    const sectionStyle = {
        marginBottom: "30px"
    };

    const renderHTML = (html) => ({__html: html});

    return (
        <div ref={ref} style={{
            fontFamily: "Arial, sans-serif",
            maxWidth: "900px",
            margin: "0 auto",
            padding: "20px",
            backgroundColor: "#ffffff"
        }}>
            <h1 style={{
                color: "#2c3e50",
                borderBottom: "2px solid #3498db",
                paddingBottom: "10px",
                marginBottom: "30px"
            }}>
                German Cases: Complete Reference Guide - Part 1
            </h1>

            {/* Basic Functions */}
            <div style={sectionStyle}>
                <h2 style={{color: "#2c3e50"}}>1. Basic Case Functions</h2>
                {Object.entries(caseColors).map(([caseName, style]) => (
                    <div key={caseName} style={{...style, padding: "15px", margin: "10px 0", borderRadius: "5px"}}>
                        <h3>{caseName.charAt(0).toUpperCase() + caseName.slice(1)} ({
                            caseName === "nominativ" ? "Wer? Was?" :
                                caseName === "akkusativ" ? "Wen? Was?" :
                                    caseName === "dativ" ? "Wem?" : "Wessen?"
                        })</h3>
                        <ul>
                            {caseName === "nominativ" && (
                                <>
                                    <li>Subject of the sentence: <b>Der Mann</b> liest.</li>
                                    <li>Predicate nouns: Er ist <b>ein Lehrer</b>.</li>
                                    <li>After sein/werden/bleiben: Sie wird <b>eine Ärztin</b>.</li>
                                </>
                            )}
                            {caseName === "akkusativ" && (
                                <>
                                    <li>Direct objects: Ich sehe <b>den Mann</b>.</li>
                                    <li>Time expressions: <b>jeden Tag</b></li>
                                    <li>Movement/direction: Ich gehe in <b>die Stadt</b>.</li>
                                </>
                            )}
                            {caseName === "dativ" && (
                                <>
                                    <li>Indirect objects: Ich gebe <b>dem Kind</b> das Buch.</li>
                                    <li>Static location: Das Buch liegt auf <b>dem Tisch</b>.</li>
                                    <li>After specific prepositions: mit, nach, aus, bei, von, zu</li>
                                </>
                            )}
                            {caseName === "genitiv" && (
                                <>
                                    <li>Possession: <b>des Vaters</b> Auto</li>
                                    <li>After specific prepositions: während, wegen, trotz</li>
                                    <li>Formal expressions: aufgrund <b>des Wetters</b></li>
                                </>
                            )}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Complete Declension Table */}
            <div style={sectionStyle}>
                <h2 style={{color: "#2c3e50"}}>2. Complete Declension Table</h2>
                <table style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    marginBottom: "20px",
                    backgroundColor: "#ffffff"
                }}>
                    <thead>
                    <tr>
                        <th style={tableHeaderStyle}>Case</th>
                        <th style={tableHeaderStyle}>Maskulin</th>
                        <th style={tableHeaderStyle}>Feminin</th>
                        <th style={tableHeaderStyle}>Neutrum</th>
                        <th style={tableHeaderStyle}>Plural</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.entries(caseColors).map(([caseName, style]) => (
                        <tr key={caseName} style={style}>
                            <td style={tableCellStyle}>
                                <b>{caseName.charAt(0).toUpperCase() + caseName.slice(1)}</b>
                            </td>
                            <td style={tableCellStyle} dangerouslySetInnerHTML={renderHTML(
                                caseName === "nominativ" ? "d<b>er</b> gut<b>e</b> Mann<br/>ein gut<b>er</b> Mann<br/>gut<b>er</b> Mann" :
                                    caseName === "akkusativ" ? "d<b>en</b> gut<b>en</b> Mann<br/>ein<b>en</b> gut<b>en</b> Mann<br/>gut<b>en</b> Mann" :
                                        caseName === "dativ" ? "d<b>em</b> gut<b>en</b> Mann<br/>ein<b>em</b> gut<b>en</b> Mann<br/>gut<b>em</b> Mann" :
                                            "d<b>es</b> gut<b>en</b> Mann<b>es</b><br/>ein<b>es</b> gut<b>en</b> Mann<b>es</b><br/>gut<b>en</b> Mann<b>es</b>"
                            )}/>
                            <td style={tableCellStyle} dangerouslySetInnerHTML={renderHTML(
                                caseName === "nominativ" ? "d<b>ie</b> gut<b>e</b> Frau<br/>ein<b>e</b> gut<b>e</b> Frau<br/>gut<b>e</b> Frau" :
                                    caseName === "akkusativ" ? "d<b>ie</b> gut<b>e</b> Frau<br/>ein<b>e</b> gut<b>e</b> Frau<br/>gut<b>e</b> Frau" :
                                        caseName === "dativ" ? "d<b>er</b> gut<b>en</b> Frau<br/>ein<b>er</b> gut<b>en</b> Frau<br/>gut<b>er</b> Frau" :
                                            "d<b>er</b> gut<b>en</b> Frau<br/>ein<b>er</b> gut<b>en</b> Frau<br/>gut<b>er</b> Frau"
                            )}/>
                            <td style={tableCellStyle} dangerouslySetInnerHTML={renderHTML(
                                caseName === "nominativ" ? "d<b>as</b> gut<b>e</b> Kind<br/>ein gut<b>es</b> Kind<br/>gut<b>es</b> Kind" :
                                    caseName === "akkusativ" ? "d<b>as</b> gut<b>e</b> Kind<br/>ein gut<b>es</b> Kind<br/>gut<b>es</b> Kind" :
                                        caseName === "dativ" ? "d<b>em</b> gut<b>en</b> Kind<br/>ein<b>em</b> gut<b>en</b> Kind<br/>gut<b>em</b> Kind" :
                                            "d<b>es</b> gut<b>en</b> Kind<b>es</b><br/>ein<b>es</b> gut<b>en</b> Kind<b>es</b><br/>gut<b>en</b> Kind<b>es</b>"
                            )}/>
                            <td style={tableCellStyle} dangerouslySetInnerHTML={renderHTML(
                                caseName === "nominativ" ? "d<b>ie</b> gut<b>en</b> Leute<br/>gut<b>e</b> Leute" :
                                    caseName === "akkusativ" ? "d<b>ie</b> gut<b>en</b> Leute<br/>gut<b>e</b> Leute" :
                                        caseName === "dativ" ? "d<b>en</b> gut<b>en</b> Leut<b>en</b><br/>gut<b>en</b> Leut<b>en</b>" :
                                            "d<b>er</b> gut<b>en</b> Leute<br/>gut<b>er</b> Leute"
                            )}/>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Personal Pronouns */}
            <div style={sectionStyle}>
                <h2 style={{color: "#2c3e50"}}>3. Personal Pronouns</h2>
                <table style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    marginBottom: "20px"
                }}>
                    <thead>
                    <tr>
                        <th style={tableHeaderStyle}>Case</th>
                        <th style={tableHeaderStyle}>1st Person</th>
                        <th style={tableHeaderStyle}>2nd Person</th>
                        <th style={tableHeaderStyle}>3rd Person (m/f/n)</th>
                        <th style={tableHeaderStyle}>Plural (wir/ihr/sie)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.entries(caseColors).map(([caseName, style]) => (
                        <tr key={caseName} style={style}>
                            <td style={tableCellStyle}>
                                <b>{caseName.charAt(0).toUpperCase() + caseName.slice(1)}</b>
                            </td>
                            <td style={tableCellStyle} dangerouslySetInnerHTML={renderHTML(
                                caseName === "nominativ" ? "ich" :
                                    caseName === "akkusativ" ? "m<b>ich</b>" :
                                        caseName === "dativ" ? "m<b>ir</b>" :
                                            "mein<b>er</b>"
                            )}/>
                            <td style={tableCellStyle} dangerouslySetInnerHTML={renderHTML(
                                caseName === "nominativ" ? "du" :
                                    caseName === "akkusativ" ? "d<b>ich</b>" :
                                        caseName === "dativ" ? "d<b>ir</b>" :
                                            "dein<b>er</b>"
                            )}/>
                            <td style={tableCellStyle}>
                                {caseName === "nominativ" ? "er/sie/es" :
                                    caseName === "akkusativ" ? "ihn/sie/es" :
                                        caseName === "dativ" ? "ihm/ihr/ihm" :
                                            "seiner/ihrer/seiner"}
                            </td>
                            <td style={tableCellStyle}>
                                {caseName === "nominativ" ? "wir/ihr/sie" :
                                    caseName === "akkusativ" ? "uns/euch/sie" :
                                        caseName === "dativ" ? "uns/euch/ihnen" :
                                            "unser/euer/ihrer"}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GermanCases;
