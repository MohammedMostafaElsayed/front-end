import './bio.css'
import my_pdf from '/home/mohammed/ITI/front-end/react/day1/project/src/helper/mohammed.pdf'
function Bio() {
    return (
        <>
            <div className="container_bio">
                <div>
                    <h1 className='about'>About Me</h1>
                </div>
                <div style={{ paddingRight: "50px" }}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Nibh senectus pellentesque sociis nulla feugiat. Vel elit felis hendrerit posuere at non posuere urna.
                        Metus auctor eget odio aliquet penatibus hendrerit sodales. Non ut suspendisse purus bibendum.
                        Sociis eu pretium et quis nulla. Diam mollis vel lectus sed ut orci pharetra.
                        Suspendisse felis id nibh non pellentesque non etiam.
                        Accumsan auctor donec etiam augue fringilla. Tellus duis posuere tellus amet accumsan netus duis volutpat volutpat. Enim pellentesque tortor duis sem.
                        Iaculis sit leo pulvinar ultrices. Vitae nunc volutpat suspendisse elit tempor elementum lectus. Hac porta lorem quis ullamcorper sed sit sit.
                        Sed ac eget viverra id ultrices. Nullam in eget etiam ultricies mollis quam cras.
                        Nulla vitae nec ac risus sed sodales tortor nisl fermentum.
                    </p>
                    <a
                        href={my_pdf}
                        download="Example-PDF-document"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className='btn' style={{ backgroundColor: "black", width: "170px" }}>Download Resume</button>
                    </a>
                </div>
            </div>
        </>
    )
}
export default Bio;