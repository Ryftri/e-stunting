import { useState, useEffect } from 'react';
import * as tfjs from '@tensorflow/tfjs';

export default function useKlasifikasiModel() {
    const [model, setModel] = useState<tfjs.LayersModel | null>(null);
    const [isLoadingModel, setIsLoadingModel] = useState(true);

    useEffect(() => {
        async function loadModel() {
            try {
                const loadedModel = await tfjs.loadLayersModel('/models/model.json');
                setModel(loadedModel);
            } catch (error) {
                console.error('Error loading model:', error);
            } finally {
                setIsLoadingModel(false);
            }
        }
        loadModel();
    }, []);

    return { model, isLoadingModel };
}