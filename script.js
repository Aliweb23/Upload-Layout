function handleFileUpload() {
    // Datei hochgeladen, Nachricht anzeigen
    alert("Bild erfolgreich hochgeladen!");

    // Nach 4 Sekunden den Dankestext anzeigen
    setTimeout(() => {
        document.getElementById('thankYouMessage').style.display = 'block';
    }, 4000);

    // Nach 5 Sekunden das Fenster schließen
    setTimeout(() => {
        window.close();
    }, 5000);
}