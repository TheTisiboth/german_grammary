import {useRef, FC, Ref} from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Part1 from "./documents/react/part1";

const App: FC = () => {
    const componentRef = useRef<HTMLDivElement>(null);

    const handleDownloadPdf = async () => {
        if (!componentRef.current) return;

        const element = componentRef.current;
        const canvas = await html2canvas(element, {scale: 2}); // Higher scale for better quality
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF('portrait', 'pt', 'a4');
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('download.pdf');
    };

    return (
        <div>
            <Part1 ref={componentRef} />
            <button
                onClick={handleDownloadPdf}
                style={{display: 'block', margin: '20px auto', padding: '10px 20px'}}
            >
                Download PDF
            </button>
        </div>
    );
};

export default App
