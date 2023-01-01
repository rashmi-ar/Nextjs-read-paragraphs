---
title: 'Respiration and Breathing states'
date: '2020-01-01'
---

**Respiration and Breathing States:**
Being able to comfortably monitor our physiological information and taking preventive care accordingly during daily life can reduce the cost associated with health care. Physiological measures like respiratory activity using wearable devices will help to dynamically detect and diagnose the relevant risk factors. Respiratory disease like asthma has been reported to have a total of 235 million patients in 2013, ranging from children to elders. In this section, we can study the different approaches that are used to detect and monitor respiratory rate. All the proposed wearable devices are the improvised versions of traditional technologies. The goal of these advancements is to improve the patient’s health and reduce health care costs.

**Detecting breathing-states using Seismocardiographic signals:**
The proposed system measures the human respiration rate under different degrees of breathing, such as normal breathing, breathlessness, and long and labored breathing. The SCG signal cycles which measure the cardiac-induced chest-wall vibrations are extracted from the concurrent ECG signals using Orthogonal subspace projection. A deep learning architecture called Stacked autoencoder (SAE) is used to detect the different levels of respiration. The SCG signals are used to identify the inhale and exhale phases of respiration. The SCG signal morphology may be affected by different factors, such as posture and movement of the body and respiration rate. Hence, SCG signals would be useful to find physiological relationships for cardiorespiratory. These relationships help to diagnose the severe abnormalities in lung and heart. The proposed breathing state detector uses ECG signals to extract SCG signals and finally, deep neural network (DNN) is deployed to identify levels of breathing like, stopped breathing (SB), normal breathing (NB), and long breathing (LB).

The signal variations of SCG for SB, NB, and LB breathing conditions are shown in the figure, where signals were collected from one subject. A peaky-distributed wave with constant amplitude is found during breathlessness, while the wave patterns have more variations in amplitude during normal breathing. During long breathing conditions, the wave patterns are large amplitude-modulated types. The work is carried out mainly in three phases, namely, signal database generation, feature extraction, and classification. 

For identifying breathing level, it is necessary to acquire dorso-ventral SCG signals and concurrent ECG signals from a healthy subject (age: 28.75 + 2.31 years, weight: 71.63 + 7.85 kg, height: 5’7.6’’ + 2.6’’, heart-rate: 79.18 + 10.93bpm). The subject’s breathing is recorded in three sessions: NB for 5 minutes, SB (holding breath) for 50s, LB for 2 minutes, where NB and LB are artificially created. A number of features, such as statistical, amplitude, temporal, and spectral information signals are extracted from the SCG signal to relate the SCG morphology with respiration. The feature extraction process has many steps. Firstly, the orthogonal subspace projection is used to estimate AO peaks from the SCG signal. The heart cycles are extracted from SCG signals using the interval between the estimated AO instants and two different features: heart rate and heart rate difference. Later, the beat durations are normalized for fixed-length which estimates the features: beat energy, beat entropy, beat energy difference, beat entropy difference. The beat interpolation leads to mean removal, normalization, spectral analysis, and diastole profile localization. Finally, SAE based DNN model is used for the identification of breathing conditions (Fig. 2).

This experiment was performed with 10-fold cross-validation for 1147 SCG beats, collected from 8 subjects. Overall average accuracy in breath-rate achieved was 91.45%. The accuracies for SB, NB, and LB classes were in a range of 96-97%, 94-95%, 91-92% respectively. Hence, the SCG signal is not only used for cardiac health measurement but can also be used for respiration rate and lung fitness.