import ContactModel from "./ContactModel.js";

(async () => {
  try {
    await ContactModel.sync({ alter: true }); // Cria ou altera a tabela 'contacts'
    console.log("Tabelas sincronizadas com sucesso!");
  } catch (error) {
    console.error("Erro ao sincronizar tabelas:", error);
  }
})();