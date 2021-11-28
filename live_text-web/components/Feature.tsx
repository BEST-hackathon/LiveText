import Image from 'next/image'
import React from 'react'
import styles from '../styles/Feature.module.scss'

export type FeatureProps = {
    feature: {
        title: string
        description: string
        image: string
    }
}

export const Feature: React.FC<FeatureProps> = ({ feature }) => {
    return (
        <div className={styles.feature}>
            <div>
                <Image src={feature.image} width={400} height={400} />
            </div>
            <div>
                <h1>{feature.title}</h1>
                <span>{feature.description}</span>
            </div>
        </div>
    )
}
