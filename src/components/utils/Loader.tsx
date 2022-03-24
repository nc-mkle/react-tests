import React from 'react';

interface LoaderInnerProps {
    loading: boolean;
    label?: string;
}

export declare type LoaderProps = React.PropsWithChildren<LoaderInnerProps>;

const Loader: React.FC<LoaderProps> = (props: LoaderProps) => {
    const loaderLabel = (props.label || 'Loading') + '...'

    return (
        <>
            {props.loading ? loaderLabel : props.children}
        </>
    )
}

export default Loader;
