// --- CRIA O BOTÃO DO WHATSAPP ---
const whatsappButton = document.createElement("div");
Object.assign(whatsappButton.style, {
  position: "fixed",
  bottom: "20px",
  right: "15px",
  backgroundColor: "#25d366",
  borderRadius: "50%",
  width: "55px",
  height: "55px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  zIndex: "999999",
});

// Ícone do WhatsApp
const whatsappIcon = document.createElement("img");
whatsappIcon.src = "https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png";
whatsappIcon.alt = "WhatsApp";
whatsappIcon.style.width = "30px";
whatsappIcon.style.height = "30px";
whatsappButton.appendChild(whatsappIcon);

// --- INSERE NO DOCUMENTO ---
document.body.appendChild(whatsappButton);

// --- Ação do Botão (Redirecionamento) ---
whatsappButton.addEventListener("click",() => {
  window.open(
    "https://api.whatsapp.com/send/?phone=558293126049",
    "_blank"
  );
});

