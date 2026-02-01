import { InputText } from 'primereact/inputtext';
import { InputGroup } from 'primereact/inputgroup';
import { InputGroupAddon } from 'primereact/inputgroupaddon';

export default function Contact() {
  return (
    <InputGroup>
      <InputGroupAddon>
        <i className="pi pi-user" />
      </InputGroupAddon>
      <InputText placeholder="Usuário" />
    </InputGroup>
  );
}