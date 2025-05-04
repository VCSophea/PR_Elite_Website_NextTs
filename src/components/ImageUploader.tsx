import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";

export default function ImageUploader() {
  const { getRootProps, getInputProps } = useDropzone();
  const { t } = useTranslation();

  return (
    <div {...getRootProps()} className="border-dashed border-2 p-4">
      <input {...getInputProps()} />
      <p>{t("upload")}</p>
    </div>
  );
}
