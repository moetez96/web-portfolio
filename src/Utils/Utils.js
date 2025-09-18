const CV_URL =
    "https://drive.google.com/uc?export=download&id=1NJwbJEbufPU94Q4I2CJeKPcxd0F73t_Y";

export const downloadCV = () => {
    const link = document.createElement("a");
    link.href = CV_URL;
    link.download = "Moetez_Ayari_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
