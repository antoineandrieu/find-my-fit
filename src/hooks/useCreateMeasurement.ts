import { useEffect, useState } from 'react';
import store from 'store';
import { CreateMeasurements } from '../lib/requests';
import { CreateMeasurementsResponse, Measurements } from '../Models';

const useCreateMeasurement = (
    measurements: Measurements,
    trigger: boolean,
): CreateMeasurementsResponse => {
    const [measurement, setMeasurement] = useState<Measurements>({});
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (trigger) {
            const fetchData = async () => {
                const measBody = measurements;
                if (store.get('unit') === 'inches') {
                    // @ts-ignore
                    measBody.bust = Math.round(measurements.bust * 2.54);
                    // @ts-ignore
                    measBody.waist = Math.round(measurements.waist * 2.54);
                    // @ts-ignore
                    measBody.hips = Math.round(measurements.hips * 2.54);
                    // @ts-ignore
                    measBody.thigh = Math.round(measurements.thigh * 2.54);
                    // @ts-ignore
                    measBody.inseam = Math.round(measurements.inseam * 2.54);
                }

                try {
                    const measurement = await CreateMeasurements(measBody);
                    setMeasurement(measurement);
                } catch (error) {
                    setError(error);
                    console.error(error);
                }
                setLoading(false);
            };
            fetchData();
        }
    }, [trigger, measurements]);

    return { measurement, loading, error };
};

export default useCreateMeasurement;
