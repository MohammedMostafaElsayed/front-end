import './skills.css'
import { sk_list } from './skill_list';
import { useState } from 'react';
function Skills() {
    const [sk, setsk] = useState(sk_list);
    return (
        <>
            <div className='container_all'>
                <div className='skill_text'>
                    <h1>Skills</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Nibh ullamcorper neque eu sem mauris.
                        Posuere integer quis quis accumsan id. Sed mi felis eu dictumst risus.
                        A dolor ac eros praesent. Eu diam mauris pharetra massa purus turpis egestas ornare arcu.
                        Viverra vulputate molestie facilisi pulvinar leo sit nunc. Integer amet ac lectus nulla integer.
                        Nibh in amet ut mattis. Aliquam viverra pellentesque penatibus lectus. Vel erat at eu orci nibh.
                    </p>
                </div>
                <div className='range_container'>
                    <div className='m-5'>
                        <h1>My focus</h1>
                        <hr></hr>
                        <h2>UI/UX design</h2>
                        <h2>Responsive design</h2>
                        <h2>Web design</h2>
                        <h2>Mobile App design</h2>
                    </div>
                    <div className='skill_range'>
                        {
                            sk.map((s, i) => {
                                return (
                                    <div className='d-flex m-4'>
                                        <div className='w-25 text-center pt-2 bg-secondary'>{s.name}</div>
                                        <div className="container m-0 p-0 bg-body">
                                            <div className="skills bg-dark-subtle text-dark" style={{width:s.per}}>{s.per}</div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>

                </div>
            </div>
        </>
    );

}
export default Skills;