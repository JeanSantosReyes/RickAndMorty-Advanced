import { Helmet } from 'react-helmet-async'

interface Props {
    title: string;
    description: string;
    type?: string;
    name?: string;
}

const SEO: React.FC<Props> = ({ title, description, name = 'article', type = 'Company name' }) => {
    return (
        <Helmet>
            { /* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            { /* Facebook tags */}
            <meta property='og:type' content={type} />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            { /* Twitter tags */}
            <meta name='twitter:creator' content={name} />
            <meta name='twitter:card' content={type} />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:description' content={description} />
        </Helmet>
    )
}

export default SEO