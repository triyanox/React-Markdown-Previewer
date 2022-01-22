import { Component } from "react";
import placeholder from "./Placeholder";
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import Footer from "./Footer";
import { motion } from "framer-motion";
class Markdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdownInput: placeholder
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            markdownInput: event.target.value
        });

    }
    render() {
        const Processed = <ReactMarkdown children={this.state.markdownInput}
            remarkPlugins={[remarkGfm]} escapeHtml={false}></ReactMarkdown>
        return (
            <div className="wrapper">
                <div className="title">
                    <h1>Markdown Previewer</h1>
                </div>
                <div class='box'>
                    <div class='wave'></div>
                </div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="container">
                    <textarea id="editor" value={this.state.markdownInput} className="input" onChange={this.handleChange}></textarea>
                    <div id="preview" className="marked">{Processed}</div>
                </motion.div>
                <Footer />
            </div>
        )

    }
}

export default Markdown;