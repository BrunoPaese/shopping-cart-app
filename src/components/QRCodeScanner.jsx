import React, { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const QRCodeScanner = ({ onScan }) => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      fps: 10,
      qrbox: { width: 250, height: 250 },
    });

    scanner.render(
      (decodedText) => {
        onScan(decodedText);
        scanner.clear();
      },
      (errorMessage) => {
        console.warn("QR Code error: ", errorMessage);
      }
    );

    return () => {
      scanner.clear();
    };
  }, [onScan]);

  return <div id="reader" style={{ width: "100%" }} />;
};

export default QRCodeScanner;
