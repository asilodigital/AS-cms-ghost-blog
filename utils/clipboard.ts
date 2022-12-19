const copyToTheClipboard = (content: string) => {
    navigator.clipboard.writeText(content)
}

export default copyToTheClipboard;