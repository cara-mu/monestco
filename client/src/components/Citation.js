export default function Citation(props) {
    let data = props.data;
    return <div> 
                <i>{data.title}</i>, {data.author && <span>,</span>} {data.publisher}, {data.date && <span>,</span>} {data.pages}, {data.url}
            </div>
}

function generateCitationHT(citationObject) {
    citationObject.values().map(({title, author, publisher, date, pages, url})  => {
        return `${title.italics()} ${author && <span>,</span>} ${publisher}, ${date && <span>,</span>} ${pages}, ${url}`
    })
}