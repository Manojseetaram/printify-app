declare module 'react-native-pdf-lib' {
  interface PDFPage {
    saveAsImage(path: string, options: {
      width: number;
      height: number;
      quality: number;
    }): Promise<void>;
  }

  interface PDFDocument {
    pageCount: number;
    getPage(index: number): PDFPage;
  }

  export default {
    PDFDocument: {
      fromFile(path: string): Promise<PDFDocument>;
    }
  };
} 