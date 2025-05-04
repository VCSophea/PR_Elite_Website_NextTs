import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function NewsForm() {
  const { register, handleSubmit } = useForm();
  const { t } = useTranslation();
  const onSubmit = (data: unknown) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>{t("title")}</label>
        <input {...register("title")} className="border p-2 w-full" />
      </div>
      <div>
        <label>{t("description")}</label>
        <ReactQuill />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2">
        Submit
      </button>
    </form>
  );
}
