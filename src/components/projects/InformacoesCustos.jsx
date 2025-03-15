// src/components/InformacoesCustos.jsx
function InformacoesCustos({ bancoSelecionado }) {
    return (
      bancoSelecionado && (
        <div className="w-full max-w-[800px] mt-10 p-6 bg-yellow-100 rounded-lg border border-yellow-300 text-center">
          <h3 className="text-lg font-semibold text-yellow-800">Informação Importante sobre Custos</h3>
          <p className="text-md text-yellow-700 mt-2">
            A Tecnorural cobra uma taxa de serviço de <strong>1,5% sobre o valor total</strong> de cada projeto e laudo encaminhado
            para o banco. Essa taxa será aplicada após a aprovação do projeto pela instituição financeira e deve ser paga pelo
            cliente. Caso tenha dúvidas, entre em contato conosco!
          </p>
        </div>
      )
    );
  }
  
  export default InformacoesCustos;