// src/components/Projects.jsx
import { useState } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import Swal from 'sweetalert2';
import TipoProjetoTecnico from './TipoProjetoTecnico';
import EnquadramentoProjeto from './EnquadramentoProjeto';
import TipoProjeto from './TipoProjeto';
import CulturaAtividade from './CulturaAtividade';
import SelecaoBancos from './SelecaoBancos';
import Formulario from './Formulario';
import InformacoesCustos from './InformacoesCustos';

function Projects() {
  const [bancoSelecionado, setBancoSelecionado] = useState(null);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    arquivos: [],
    termosAceitos: false,
  });
  const [checkboxSelections, setCheckboxSelections] = useState({
    tipoProjetoTecnico: null,
    enquadramentoProjeto: null,
    tipoProjeto: null,
    culturaAtividade: null,
  });
  const [etapaAtual, setEtapaAtual] = useState(1);

  const itensPorBanco = {
    'Banco do Brasil': [
      'Car (cadastro ambiental)',
      'ITR',
      'Contrato de arrendamento',
      'Matrícula atualizada ou certidão de ônus',
    ],
    Sicredi: ['Área demarcada', 'Car', 'Contrato de arrendamento'],
    Sicoob: ['Car', 'Variedade comprada', 'Área demarcada', 'Contrato de arrendamento'],
    Cresol: ['Área demarcada', 'Car', 'Contrato de arrendamento'],
    Banrisul: ['Área demarcada kml', 'Car', 'Contrato de arrendamento'],
    Santander: ['Área demarcada', 'Car', 'Contrato de arrendamento'],
    Caixa: ['Área demarcada', 'Car', 'Contrato de arrendamento'],
    Bradesco: ['Área demarcada', 'Car', 'Contrato de arrendamento'],
    Itau: ['Área demarcada', 'Car', 'Contrato de arrendamento'],
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      arquivos: [...formData.arquivos, ...e.target.files],
    });
  };

  const removeFile = (index) => {
    setFormData({
      ...formData,
      arquivos: formData.arquivos.filter((_, i) => i !== index),
    });
  };

  const handleTermosChange = (e) => {
    setFormData({ ...formData, termosAceitos: e.target.checked });
  };

  const handleCheckboxChange = (groupName, value) => {
    setCheckboxSelections((prev) => ({
      ...prev,
      [groupName]: value,
    }));

    if (groupName === 'tipoProjetoTecnico' && value) {
      setEtapaAtual(2);
    } else if (groupName === 'enquadramentoProjeto' && value) {
      setEtapaAtual(3);
    } else if (groupName === 'tipoProjeto' && value) {
      setEtapaAtual(4);
    } else if (groupName === 'culturaAtividade' && value) {
      setEtapaAtual(5);
    }
  };

  const handleBancoSelecionado = (banco) => {
    setBancoSelecionado(banco);
    setEtapaAtual(6);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ['tipoProjetoTecnico', 'enquadramentoProjeto', 'tipoProjeto', 'culturaAtividade'];
    const missingFields = requiredFields.filter((field) => !checkboxSelections[field]);

    if (!formData.termosAceitos) {
      Swal.fire({
        title: 'Atenção!',
        text: 'Você deve aceitar os termos jurídicos antes de enviar o formulário.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
      return;
    }

    if (missingFields.length > 0) {
      Swal.fire({
        title: 'Atenção!',
        text: `Por favor, selecione uma opção para os seguintes campos: ${missingFields.join(', ')}.`,
        icon: 'warning',
        confirmButtonText: 'OK',
      });
      return;
    }

    Swal.fire({
      title: 'Enviando...',
      text: 'Aguarde enquanto processamos seus dados.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('nome', formData.nome);
      formDataToSend.append('telefone', formData.telefone);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('bancos', bancoSelecionado ? [bancoSelecionado].join(', ') : '');
      formDataToSend.append('tipo', 'Projetos Técnicos');
      formDataToSend.append('tipoProjetoTecnico', checkboxSelections.tipoProjetoTecnico || '');
      formDataToSend.append('enquadramentoProjeto', checkboxSelections.enquadramentoProjeto || '');
      formDataToSend.append('tipoProjeto', checkboxSelections.tipoProjeto || '');
      formDataToSend.append('culturaAtividade', checkboxSelections.culturaAtividade || '');
      formData.arquivos.forEach((file) => formDataToSend.append('arquivos', file));

      const response = await fetch('http://localhost:3000/enviar-formulario', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.text();

      if (!response.ok) {
        throw new Error(result || 'Erro ao enviar os dados');
      }

      if (result === 'E-mail enviado com sucesso!') {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Formulário enviado com sucesso!',
          icon: 'success',
          confirmButtonText: 'OK',
          timer: 3000,
          timerProgressBar: true,
        });
      } else {
        throw new Error(result || 'Erro desconhecido ao enviar o formulário');
      }

      setFormData({
        nome: '',
        email: '',
        telefone: '',
        arquivos: [],
        termosAceitos: false,
      });
      setCheckboxSelections({
        tipoProjetoTecnico: null,
        enquadramentoProjeto: null,
        tipoProjeto: null,
        culturaAtividade: null,
      });
      setBancoSelecionado(null);
      setEtapaAtual(1);
    } catch (error) {
      console.error('Erro no envio:', error);
      let errorMessage = 'Ocorreu um problema ao enviar. Tente novamente.';
      if (error.message.includes('Failed to fetch')) {
        errorMessage = 'Erro de conexão com o servidor. Verifique sua internet ou o backend.';
      } else if (error.message) {
        errorMessage = error.message;
      }

      Swal.fire({
        title: 'Erro!',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className="w-full h-auto min-h-screen flex flex-col items-center justify-center pt-28 pb-5 font-gummy bg-no-repeat bg-cover bg-center bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/ImagemInfo.jpg')]">
      {/* Título */}
      <div className="max-w-[1200px] w-full h-24 flex px-8 py-8 items-center justify-between font-extralight">
        <div className="w-80 h-auto flex gap-10">
          <IoIosArrowDropdown className="w-8 h-8 text-green-800" />
          <h3 className="text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800">
            Projetos Técnicos
          </h3>
        </div>
      </div>

      {/* Etapa 1: Tipo de Projeto Técnico */}
      {etapaAtual >= 1 && (
        <TipoProjetoTecnico
          handleCheckboxChange={handleCheckboxChange}
          tipoProjetoTecnico={checkboxSelections.tipoProjetoTecnico}
        />
      )}

      {/* Etapa 2: Enquadramento do Projeto */}
      {etapaAtual >= 2 && (
        <EnquadramentoProjeto
          handleCheckboxChange={handleCheckboxChange}
          enquadramentoProjeto={checkboxSelections.enquadramentoProjeto}
        />
      )}

      {/* Etapa 3: Tipo do Projeto */}
      {etapaAtual >= 3 && (
        <TipoProjeto
          handleCheckboxChange={handleCheckboxChange}
          tipoProjeto={checkboxSelections.tipoProjeto}
        />
      )}

      {/* Etapa 4: Cultura Atividade */}
      {etapaAtual >= 4 && (checkboxSelections.tipoProjeto === 'Agrícola' || checkboxSelections.tipoProjeto === 'Pecuário') && (
        <CulturaAtividade
          handleCheckboxChange={handleCheckboxChange}
          culturaAtividade={checkboxSelections.culturaAtividade}
          tipoProjeto={checkboxSelections.tipoProjeto}
        />
      )}

      {/* Etapa 5: Seleção de Bancos */}
      {etapaAtual >= 5 && (
        <SelecaoBancos
          handleBancoSelecionado={handleBancoSelecionado}
        />
      )}

      {/* Etapa 6: Formulário */}
      {etapaAtual >= 6 && bancoSelecionado && (
        <Formulario
          bancoSelecionado={bancoSelecionado}
          formData={formData}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
          removeFile={removeFile}
          handleTermosChange={handleTermosChange}
          handleSubmit={handleSubmit}
          itensPorBanco={itensPorBanco}
        />
      )}

      {/* Etapa 7: Informações sobre Custos */}
      {etapaAtual >= 6 && bancoSelecionado && (
        <InformacoesCustos
          bancoSelecionado={bancoSelecionado}
        />
      )}
    </div>
  );
}

export default Projects;