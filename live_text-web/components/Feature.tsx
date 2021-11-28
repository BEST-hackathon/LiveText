import styles from '../styles/Feature.module.scss'
import React from 'react'
import Image from 'next/image'

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
                <h2>{feature.title}</h2>
                <span>{feature.description}</span>
            </div>
        </div>
    )
}
