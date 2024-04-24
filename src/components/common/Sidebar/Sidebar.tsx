import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { toast, Toaster } from "sonner";
import { useShelter } from "../../../hooks/useShelter";

export function Sidebar() {
  const { data } = useShelter();
  function validate(event: React.MouseEvent) {
    const canAccess = data?.whatsApp;

    if (!canAccess) {
      event.preventDefault();
      toast.warning("Insira os dados do abrigo!");
    }
  }

  return (
    <>
      <nav className={styles.sidebar}>
        <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to="/admin" end>Meu abrigo</NavLink>
        <NavLink onClick={(e) => validate(e)} className={({ isActive }) => (isActive ? styles.active : "")} to="/admin/pets">Pets</NavLink>
        <NavLink to="/">Sair</NavLink>
      </nav>
      <Toaster position="top-center" richColors={true} />
    </>
  )
}