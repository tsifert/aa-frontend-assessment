import { ReactElement } from 'react';
import './PhotoDetailEntry.css';


interface PhotoDetailEntryProps {
    firstText: string;
    secondText: string;
    boldFirstText?: boolean;
}

const PhotoDetailEntry = (props: PhotoDetailEntryProps): ReactElement => {

    return (
        <article className="photoDetailEntry">

            {
                props.firstText &&
                <section>
                    {
                        props.firstText
                    }
                </section>

            }

            <section>
                {
                    props.secondText
                }
            </section>

        </article>
    );
};

export default PhotoDetailEntry;