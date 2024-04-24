import { Button } from "../../../components/common/Button";
import { Input } from "../../../components/common/Input";
import { Panel } from "../../../components/layout/Panel";
import styles from "./Shelter.module.css";

export function Shelter() {
  return (
    <Panel>
      <form className={styles.container}>
        <Input label="Nome:" />
        <Input label="Email:" />
        <Input label="WhatsApp:" />
        <Input label="Telefone:" />
        <Button type="submit">Salvar Dados</Button>
      </form>
    </Panel>
  )
}