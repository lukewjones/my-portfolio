export const HandleDownload = () => {
        const fileUrl = '/imgs/resume-Software-Engineer.pdf'
        const link = document.createElement('a')
        link.href = fileUrl
        link.download = 'resume-Software-Engineer.pdf'
        link.click()
}