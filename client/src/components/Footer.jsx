import "../styles/footer.css";

function Footer() {
    return (
      <footer className="footer">
          <h2>PyCourses</h2>
          <p>IDE powered by <a href={"https://microsoft.github.io/monaco-editor/"}>Monaco Editor</a></p>
          <p>Runtime powered by <a href={"https://pyodide.org/en/stable/"}>Pyodide</a></p>
      </footer>
    );
}
export default Footer;