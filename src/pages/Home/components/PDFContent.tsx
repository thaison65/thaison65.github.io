import React from 'react';

import { Document, Page, pdfjs } from 'react-pdf';
import { CVpdf } from '../../../assets/pdfs';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import { Button } from '../../../components/common/Button';
import { DownloadSVG } from '../../../assets/icons';

// Cấu hình worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

export interface PDFModalProps {}

const PDFContent: React.FC<PDFModalProps> = () => {
  const [numPages, setNumPages] = React.useState<number>(0);
  const [pageNumber, setPageNumber] = React.useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => Math.min(Math.max(1, prevPageNumber + offset), numPages));
  }

  function handleDownload() {
    // Tạo một đối tượng Blob từ file PDF
    fetch(CVpdf)
      .then((response) => response.blob())
      .then((blob) => {
        // Tạo URL tạm thời cho Blob
        const url = window.URL.createObjectURL(blob);
        // Tạo một thẻ a ẩn
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        // Đặt tên file khi tải xuống
        a.download = 'DangThaiSon-FrontEnd-Developer.pdf';
        // Thêm thẻ a vào body
        document.body.appendChild(a);
        // Kích hoạt sự kiện click
        a.click();
        // Xóa thẻ a khỏi body
        document.body.removeChild(a);
        // Giải phóng URL tạm thời
        window.URL.revokeObjectURL(url);
      });
  }

  return (
    <>
      <Document file={CVpdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="action-download">
        <p>Click to download CV: </p>
        <Button
          size="medium"
          icon={<DownloadSVG width={'20'} height={'20'} />}
          onClick={handleDownload}
        >
          Donwload
        </Button>
      </div>
      <div className="navigation-controls">
        <Button variant="secondary" onClick={() => changePage(-1)} disabled={pageNumber <= 1}>
          Previous
        </Button>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <Button variant="secondary" onClick={() => changePage(1)} disabled={pageNumber >= numPages}>
          Next
        </Button>
      </div>
    </>
  );
};

export default PDFContent;
