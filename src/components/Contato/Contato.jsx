import { useForm, ValidationError } from '@formspree/react';
import { useState } from "react";
import { Phone, Mail, Clock, CheckCircle, ChevronDown } from "lucide-react";
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

  return (
    <section id="contato" className={styles.section}>
      <div className={styles.blob}></div>
      <div className={styles.container}>
        <div className={styles.card}>

          <div className={styles.infoSide}>
            <div className={styles.textureOverlay}></div>
            <div className={styles.infoContent}>
              <h3 className={styles.infoTitle}>Fale Conosco</h3>
              <p className={styles.infoSubtitle}>
                Estamos prontos para resolver seu problema. Entre em contato para um orçamento sem compromisso.
              </p>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <Phone className={styles.icon} />
                  <div>
                    <p className={styles.infoLabel}>Telefone</p>
                    <p className={styles.infoText}>(11) 92100-2606</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <Mail className={styles.icon} />
                  <div>
                    <p className={styles.infoLabel}>E-mail</p>
                    <p className={styles.infoText}>preservecontroledepragas@gmail.com</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <Clock className={styles.icon} />
                  <div>
                    <p className={styles.infoLabel}>Horário</p>
                    <p className={styles.infoText}>Atendimento 24 Horas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formSide}>
            {state.succeeded ? (
              <div className={styles.successContainer} aria-live="polite">
                <div className={styles.successIconWrapper}>
                  <CheckCircle className={styles.successIcon} aria-hidden="true" />
                </div>
                <h3 className={styles.successTitle}>Mensagem Enviada!</h3>
                <p className={styles.successText}>
                  Entraremos em contato o mais breve possível.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className={styles.resetButton}
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleClientSubmit}>
                <div className={styles.inputGrid}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="nome">Nome Completo</label>
                    <input
                      id="nome"
                      type="text"
                      name="nome"
                      value={nome}
                      placeholder="Seu nome"
                      maxLength={75}
                      className={styles.input}
                      onChange={handleNomeChange}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="telefone">Telefone</label>
                    <input
                      id="telefone"
                      type="tel"
                      name="telefone"
                      value={telefone}
                      placeholder="(11) 99999-9999"
                      maxLength={15}
                      className={styles.input}
                      onChange={handleTelefoneChange}
                    />
                  </div>
                </div>

                <div className={styles.inputGrid}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="email">E-mail</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={email}
                      placeholder="seu@email.com"
                      className={styles.input}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className={styles.errorText} />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="servico">Serviço Desejado</label>
                    <div className={styles.selectWrapper}>
                      <select
                        id="servico"
                        name="servico"
                        value={servico}
                        className={styles.select}
                        onChange={(e) => setServico(e.target.value)}
                      >
                        <option value="" disabled>Selecione...</option>
                        <option value="Controle de Pragas">Controle de Pragas</option>
                        <option value="Higienização de Reservatórios">Higienização de Reservatórios</option>
                        <option value="Limpeza de Piscinas">Limpeza de Piscinas</option>
                        <option value="Dúvidas">Dúvidas</option>
                        <option value="Todos os Serviços">Todos os Serviços</option>
                      </select>
                      <ChevronDown className={styles.chevronIcon} />
                    </div>
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label} htmlFor="mensagem">Mensagem</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={mensagem}
                    placeholder="Como podemos ajudar?"
                    maxLength={500}
                    rows="4"
                    className={styles.textarea}
                    onChange={(e) => setMensagem(e.target.value)}
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className={styles.errorText} />
                </div>

                  {clientError && <p className={styles.errorText} role="alert">{clientError}</p>}

                <button type="submit" disabled={state.submitting} className={styles.button}>
                  {state.submitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;