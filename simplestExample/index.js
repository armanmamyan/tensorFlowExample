const predictionContainer = document.querySelector('.prediction');

function createPredictionLabels(name, probability){
    const predictionLabelsWrapper = document.createElement('span');
    predictionLabelsWrapper.classList.add('prediction--wrapper')

    const predictionLabel1 = document.createElement('span');
    predictionLabel1.innerText = name;

    const predictionLabel2 = document.createElement('span');
    predictionLabel2.innerText = probability.toFixed(4);

    predictionLabelsWrapper.appendChild(predictionLabel1);
    predictionLabelsWrapper.appendChild(predictionLabel2);
    predictionContainer.appendChild(predictionLabelsWrapper);
}

mobilenet.load().then((_model) => {
    _model.classify(img).then(predictions => {
        console.log('Predictions: ');
        predictions.map(({className, probability}) => createPredictionLabels(className, probability))
    });
});