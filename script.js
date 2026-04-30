let usuarioFixo = "Admin";
let senhaFixa = "54321";

document.getElementById("form-login").onsubmit = (e) => {
    e.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    
    if (usuario !== usuarioFixo) {
        alert("Usuário incorreto!");
        return;
    }

    if (senha !== senhaFixa) {
        alert("Senha incorreta!");
        return;
    }
    window.location.href = "home.html";
}