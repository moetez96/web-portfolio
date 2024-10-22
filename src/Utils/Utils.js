import cv from "../assets/Moetez_Ayari_CV.pdf";

export const downloadCV = () => {
    fetch(cv)
        .then(response => response.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Moetez_Ayari_CV.pdf';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        })
        .catch(error => console.error('Error downloading CV:', error));
};