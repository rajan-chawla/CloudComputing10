import React, { useContext, useMemo } from 'react';
import "../css/displayBoard.css";
import { FileContext } from '../hooks/FileContext'
import { PDFDownloadLink, Document, Page, View, Text} from '@react-pdf/renderer';

const DisplayBoard = () => {
  const [result, setResult] = useContext(FileContext);
  
  const DownloadPdf = () => {
    return useMemo(
      () => (
        <PDFDownloadLink document={<MyDoc />} fileName="ocrText.pdf">
          {({ loading }) => (loading ? 'loading...' : 'download')}
        </PDFDownloadLink>
      ),
      [],
    )
  }

  const handleChange = (event) => {
    setResult({ fileContent: event.target.value });
  };

  const MyDoc = () => (
    <Document>
      <Page>
        <View>
          <Text>{result.fileContent}</Text>
        </View>
      </Page>
    </Document>
  )
  const handleDownload = (event) => {

  };

  return (
    <div className="DisplayBoard">
      <h4 className="Heading">Content will be shown here. </h4>

      <textarea
        className="TextArea"
        value={result.fileContent}
        rows="6" cols="100"
        onChange={handleChange}
      />
      <br />
      <div>
        <DownloadPdf></DownloadPdf>
      </div>

    </div>

  );
}

export default DisplayBoard;