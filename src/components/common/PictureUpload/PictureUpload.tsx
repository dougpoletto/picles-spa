import { ChangeEvent, forwardRef, Ref } from "react";
import { ImageBase64 } from "../ImageBase64";
import styles from "./PictureUpload.module.css";

interface IPictureUploadProps {
  value?: string,
  onChange?: (base64String: string) => void
}

function ForwardPictureUpload({ value, onChange }: IPictureUploadProps, ref: Ref<HTMLInputElement>) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length > 0) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const result = fileReader.result as string;
        if (onChange) {
          onChange(result);
        }
      }
      fileReader.readAsDataURL(event.target.files[0]);
    }
  }

  return (
    <>
      <input ref={ref} id="photo-upload" className={styles.hiddenInput} type="file" accept="image/**"
        onChange={handleChange} />
      <label htmlFor="photo-upload" className={styles.pictureUpload}>
        <ImageBase64 src={value} />
        <span>Selecionar foto...'</span>
      </label>
    </>
  )
}

export const PictureUpload = forwardRef(ForwardPictureUpload);