import { useForm, ValidationError } from '@formspree/react';
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Contato.module.css";

const FORM_ID = import.meta.env.VITE_FORMSPREE_ID;

const Contact = () => {
  const [state, formspreeHandleSubmit] = useForm(FORM_ID);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [servico, setServico] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [clientError, setClientError] = useState('');

  const telefoneapp = "5511921002606";
  const mensagemPadrao = "Olá! Gostaria de agendar uma visita com vocês.";
  const linkWhatsapp = `https://wa.me/${telefoneapp}?text=${encodeURIComponent(mensagemPadrao)}`;

  const handleTelefoneChange = (e) => {
    const valorBruto = e.target.value;
    const apenasDigitos = valorBruto.replace(/\D/g, '');
    const digitosLimitados = apenasDigitos.slice(0, 11);

    let valorFormatado = digitosLimitados;
    if (digitosLimitados.length > 2) {
      valorFormatado = `(${digitosLimitados.slice(0, 2)}) ${digitosLimitados.slice(2)}`;
    }
    if (digitosLimitados.length > 7) {
      valorFormatado = `(${digitosLimitados.slice(0, 2)}) ${digitosLimitados.slice(2, 7)}-${digitosLimitados.slice(7)}`;
    }
    setTelefone(valorFormatado);
  };

  const handleNomeChange = (e) => {
    let valor = e.target.value;
    valor = valor.replace(/[^a-zA-Z\u00C0-\u017F ]/g, '');
    valor = valor.toLowerCase().replace(/(^|\s)\S/g, (letra) => letra.toUpperCase());
    setNome(valor);
  };

  const handleClientSubmit = (event) => {
    event.preventDefault();

    setClientError('');

    if (!nome || !email || !servico || !mensagem) {
      setClientError('Por favor, preencha todos os campos para continuar.');
      return;
    }

    formspreeHandleSubmit(event);
  };

  if (state.succeeded) {
    return (
      <section id="contato" className={styles.section}>
        <div className={styles.container}>

          <SectionHeader
            title="Entre em Contato"
            subtitle="Solicite um orçamento ou tire suas dúvidas"
          />

          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.successMessage}>
                <CheckCircle className={styles.successIcon} />
                <h3 className={styles.cardTitle}>Obrigado pelo contato!</h3>
                <p className={styles.successText}>
                  Sua mensagem foi enviada com sucesso. Nossa equipe responderá em breve.
                </p>
              </div>
            </div>

            <div className={styles.info}>
              <h3 className={styles.cardTitle}>Informações de Contato</h3>
              <div className={styles.infoList}>

                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}><Phone className={styles.icon} /></div>
                  <div>
                    <div className={styles.infoLabel}>Telefone</div>
                    <div className={styles.infoText}>(11) 92100-2606</div>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}><Mail className={styles.icon} /></div>
                  <div>
                    <div className={styles.infoLabel}>E-mail</div>
                    <div className={styles.infoText}>preservecontroledepragas@gmail.com</div>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}><MapPin className={styles.icon} /></div>
                  <div>
                    <div className={styles.infoLabel}>Endereço</div>
                    <div className={styles.infoText}>São Paulo</div>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}><Clock className={styles.icon} /></div>
                  <div>
                    <div className={styles.infoLabel}>Horário de Atendimento</div>
                    <div className={styles.infoText}>24 Horas</div>
                  </div>
                </div>
              </div>

              <div className={styles.cta}>
                <h4 className={styles.ctaTitle}>Agende sua Visita Técnica</h4>
                <p className={styles.ctaText}>
                  Avaliação no local para melhor atendimento às suas
                  necessidades.
                </p>
                <a href={linkWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}>
                  Agendar Visita
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }

  return (
    <section id="contato" className={styles.section}>
      <div className={styles.container}>

        <SectionHeader
          title="Entre em Contato"
          subtitle="Solicite um orçamento ou tire suas dúvidas"
        />

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Solicitar Orçamento/ Tirar Dúvidas</h3>
            <form className={styles.form} onSubmit={handleClientSubmit}>
              <div className={styles.row}>
                <input
                  id="nome"
                  type="text"
                  name="nome"
                  value={nome}
                  placeholder="Nome completo"
                  maxLength={75}
                  className={styles.input}
                  onChange={handleNomeChange}
                />
                <input
                  id="telefone"
                  type="tel"
                  name="telefone"
                  value={telefone}
                  placeholder="Telefone"
                  maxLength={15}
                  className={styles.input}
                  onChange={handleTelefoneChange}
                />
              </div>

              <input
                id="email"
                type="email"
                name="email"
                value={email}
                placeholder="E-mail"
                className={styles.input}
                onChange={(e) => setEmail(e.target.value)}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                style={{ color: "red" }}
              />

              <select
                id="servico"
                name="servico"
                value={servico}
                className={styles.input}
                onChange={(e) => setServico(e.target.value)}
              >
                <option value="">Serviço desejado</option>
                <option value="Controle de Pragas">Controle de Pragas</option>
                <option value="Higienização de Reservatórios">Higienização de Reservatórios</option>
                <option value="Limpeza de Piscinas">Limpeza de Piscinas</option>
                <option value="Dúvidas">Dúvidas</option>
                <option value="Todos os Serviços">Todos os Serviços</option>
              </select>

              <textarea
                id="mensagem"
                name="mensagem"
                value={mensagem}
                placeholder="Descreva sua necessidade..."
                maxLength={500}
                rows="4"
                className={styles.textarea}
                onChange={(e) => setMensagem(e.target.value)}
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                style={{ color: "red" }}
              />

              {clientError && <p style={{ color: "red", marginTop: "10px" }}>{clientError}</p>}

              <button type="submit" disabled={state.submitting} className={styles.button}>
                Enviar E-Mail
              </button>
            </form>
          </div>

          <div className={styles.info}>
            <h3 className={styles.cardTitle}>Informações de Contato</h3>
            <div className={styles.infoList}>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><Phone className={styles.icon} /></div>
                <div>
                  <div className={styles.infoLabel}>Telefone</div>
                  <div className={styles.infoText}>(11) 92100-2606</div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><Mail className={styles.icon} /></div>
                <div>
                  <div className={styles.infoLabel}>E-mail</div>
                  <div className={styles.infoText}>preservecontroledepragas@gmail.com</div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><MapPin className={styles.icon} /></div>
                <div>
                  <div className={styles.infoLabel}>Endereço</div>
                  <div className={styles.infoText}>São Paulo</div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><Clock className={styles.icon} /></div>
                <div>
                  <div className={styles.infoLabel}>Horário de Atendimento</div>
                  <div className={styles.infoText}>24 Horas</div>
                </div>
              </div>
            </div>

            <div className={styles.cta}>
              <h4 className={styles.ctaTitle}>Agende sua Visita Técnica</h4>
              <p className={styles.ctaText}>
                Avaliação no local para melhor atendimento às suas
                necessidades.
              </p>
              <a href={linkWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} button_ajuste`}>
                Agendar Visita
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;