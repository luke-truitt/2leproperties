const projects = [
  {
    title: "VR Sickness",
    shortDescription:
      "Predicting virtual reality sickness through the use of artificial intelligence.",
    abstract:
      "VR sickness is caused when the optical flow of the VR set (what people see) is different from the actual motion perceived by the subject (what people feel). The project is aimed to build a model to detect when there would be a sickness, given the input of the 360 videos simulating the usage of VR. The methods used include flowNet, decision tree, and autoencoder networks. The output could be publications, and the potential applications include pilot training, gaming, and general VR uses.",
    image: "",
    team: "Tima,Alina,Daniel"
  },
  {
    title: "fMRI",
    shortDescription:
      "Using modern image processing technology to better predict neurological illness.",
    abstract:
      "Functional Magnetic Resonance Imaging, or fMRI, has emerged as a powerful tool in studying the function of brain regions. However, using data analysis techniques on fMRI data to predict the onset of neurodegenerative and mental illnesses has been challenging, largely due to the shortage of high-quality labeled data and the difficulty of extracting meaningful features. In this project, we utilize the Human Connectome Project, which contains a dataset of fMRI data labeled with the behavioral states of healthy subjects. By applying modern deep learning techniques on this dataset, we hope to build a classifier with strong predictive power on classifying behavioral states whose features contain significant correlations to a variety of neurodegenerative and mental illnesses.",
    image: "",
    team: "Varun,Ram,Hang"
  },
];

projects.forEach(project => {
  project.team = project.team.split(",");
  project.link = project.link || project.title.split(" ").join("");
  project.image = require(`./images/${project.link}.png`);
});

module.exports = projects;
