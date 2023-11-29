var model = document.getElementById("model");
var colors = ["./models/blue.glb", "./models/lightbrown.glb"]; 
var currentColorIndex = 1; 

// simple change color
document.getElementById("change-colour").addEventListener("click", function(e) {
  model.src = colors[currentColorIndex];

  // Change next color
  currentColorIndex = (currentColorIndex + 1) % colors.length;

  document.getElementById("model-info1").style.display = "block"; 
});

// example with showing content
model.querySelectorAll('button').forEach((hotspot) => {
  hotspot.addEventListener('click', () => annotationClicked(hotspot));
});

const annotationClicked = (annotation) => {
  let dataset = annotation.dataset;
  model.cameraTarget = dataset.target;
  model.fieldOfView = '30deg';
};


  // Change texture functionality for model1
  document.getElementById("change-texture").addEventListener("click", function() {
    document.getElementById("model1").src = "./models/darkbrownleather.glb";
    document.getElementById("model-info2").style.display = "block";
  });
  
  // Change texture functionality for model2
  document.getElementById("change-colour2").addEventListener("click", function() {
    document.getElementById("model2").src = "./models/purple.glb";
    document.getElementById("model-info3").style.display = "block";
  });
  
  // Example with multiple models for model1
  var myModels1 = ["./models/darkbrownleather.glb", "./models/darkbrowndirty.glb"];
  var counter1 = 0;
  document.getElementById("change-texture").addEventListener("click", function() {
    counter1++;
    if (counter1 == myModels1.length) {
        counter1 = 0;
    }
    document.getElementById("model1").src = myModels1[counter1];
  });
  
  // Example with multiple models for model2
  var myModels2 = ["./models/purple.glb", "./models/orange.glb", "./models/red.glb"];
  var counter2 = 0;
  document.getElementById("change-colour2").addEventListener("click", function() {
    counter2++;
    if (counter2 == myModels2.length) {
        counter2 = 0;
    }
    document.getElementById("model2").src = myModels2[counter2];
  });
  
  const modelIds = ['model', 'model1', 'model2'];

  modelIds.forEach(modelId => {
  const modelViewer = document.getElementById(modelId);


  modelViewer.style.transform = 'scale(2.2)';
});
  
  
  
  
  
  
 