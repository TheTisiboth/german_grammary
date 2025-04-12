import { useRef, FC, RefObject } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Part1 from './documents/react/part1';
import Part2 from './documents/react/part2.tsx';
import Part3 from './documents/react/part3.tsx';

const App: FC = () => {
    const part1Ref = useRef<HTMLDivElement>(null);
    const part2Ref = useRef<HTMLDivElement>(null);
    const part3Ref = useRef<HTMLDivElement>(null);

    const handleDownloadPdf = async () => {
        const pdf = new jsPDF('portrait', 'pt', 'a4');
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        const addPartToPdf = async (ref: RefObject<HTMLDivElement|null>, isFirstPage: boolean) => {
            if (!ref?.current) return;

            const canvas = await html2canvas(ref.current, { scale: 2.4 });
            const imgData = canvas.toDataURL('image/png');
            const imgProps = pdf.getImageProperties(imgData);
            const imgWidth = pageWidth;
            const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

            if (!isFirstPage) pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        };

        await addPartToPdf(part1Ref, true);
        await addPartToPdf(part2Ref, false);
        await addPartToPdf(part3Ref, false);

        pdf.save('combined.pdf');
    };

    return (
        <div>
            <div ref={part1Ref}>
                <Part1 />
            </div>
            <div ref={part2Ref}>
                <Part2 />
            </div>
            <div ref={part3Ref}>
                <Part3 />
            </div>
            <button
                onClick={handleDownloadPdf}
                style={{ display: 'block', margin: '20px auto', padding: '10px 20px' }}
            >
                Download PDF
            </button>
        </div>
    );
};

export default App;
