// JavaScript code to manipulate the DOM
document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    const rootDiv = document.getElementById("root");
  
    function createStep(stepNumber, stepText) {
      const stepDiv = document.createElement("div");
      stepDiv.classList.add("step");
  
      const numberDiv = document.createElement("div");
      numberDiv.classList.add("step-number");
      numberDiv.textContent = stepNumber;
  
      const textDiv = document.createElement("div");
      textDiv.classList.add("step-text");
      textDiv.textContent = stepText;
  
      stepDiv.appendChild(numberDiv);
      stepDiv.appendChild(textDiv);
  
      return stepDiv;
    }
  
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");
  
    const titleH1 = document.createElement("h1");
    titleH1.textContent = "AWS EC2 Tutorial";
  
    const hr = document.createElement("hr");
  
    const ec2TitleH2 = document.createElement("h2");
    ec2TitleH2.textContent = "AWS EC2 Instance";
  
    const ec2DescriptionP1 = document.createElement("p");
    ec2DescriptionP1.innerHTML = "<u>EC2 (Elastic Cloud Compute):</u> EC2 is a service provided by AWS that helps you hire charge virtual servers in the cloud. EC2 instances are virtual machines that provide computing capacity in the cloud. A user can create, launch, and terminate instances as needed, paying for active servers. EC2 provides control over the geographical locations of instances.";
  
    const ec2DescriptionP2 = document.createElement("p");
    ec2DescriptionP2.innerHTML = "Amazon first announced about EC2 instance on August 25, 2006, aiming first come, first served basis.";
  
    const ec2PurposesP = document.createElement("p");
    ec2PurposesP.innerHTML = "<u><b>It places many purposes such as:</b></u><br />- Application servers<br />- Gaming servers<br />- Backend servers for companies<br />- Small and medium databases";
  
    const ec2FeaturesP = document.createElement("p");
    ec2FeaturesP.innerHTML = "<u><b>Key features of EC2 instance:</b></u><br />- Flexibility: You can choose the operating system of your choice.<br />- Scalability: You can scale up or down the instances based on requirements.<br />- Elastic IP address: One can assign a static IP address to the instance.<br />- Storage options: It provides EBS (Elastic Block Store).";
  
    const pricingH4 = document.createElement("h4");
    pricingH4.textContent = "Pricing:";
  
    const pricingDescriptionP = document.createElement("p");
    pricingDescriptionP.innerHTML = "The pricing depends on various factors that are:<br />- On-Demand Instances<br />- Reserved Instances<br />- Spot Instances<br />- Dedicated Instances and Hosts<br />- Data transfer<br />- Storage";
  
    const gettingStartedTitleP = document.createElement("p");
    gettingStartedTitleP.innerHTML = "<u>Getting started in AWS EC2</u>";
  
    const gettingStartedStepsP = document.createElement("p");
    gettingStartedStepsP.innerHTML = "To initiate the setup of an EC2 instance in AWS, you can proceed with the following sequence of actions:<br />1. Access the AWS Management Console by signing in to the AWS homepage (aws.amazon.com) using your AWS account credentials.<br />2. Access the EC2 service: After logging in, locate the \"EC2\" service either by searching for \"EC2\" in the AWS Management Console search bar or by locating the \"Compute\" section and clicking on \"EC2\" to access the EC2 Dashboard.<br />3. Initiate an EC2 instance: On the EC2 Dashboard, select the \"Launch Instance\" button to commence the instance creation procedure.<br />4. Choose an Amazon Machine Image (AMI): Select an AMI that suits your requirements. AMIs are pre-configured templates that contain an operating system and other software packages.<br />5. Choose an Instance Type: Select the instance type based on your application's needs. Instance types vary in terms of compute power, memory, storage, and networking capacity.<br />6. Configure Instance Details: Configure the instance details, such as the number of instances, network settings, security groups, and storage options.<br />7. Add Storage: Specify the storage requirements for your instance, including the type and size of the root volume.<br />8. Configure Security Group: Define the security group rules to control inbound and outbound traffic to your instance. You can add as many rules as you can.<br />9. Review and Launch: Review the instance configuration settings and click on \"Launch\" to start the instance creation.<br />10. Create or Select an SSH Key Pair: If you plan to connect to your instance using SSH, you can create or select an existing SSH key pair. This key pair will be used for secure access to your instance. It has 2 types, PEM and PUTTY.<br />11. Launch the Instance: Once you have reviewed the launch configuration, click on \"Launch\" to create your EC2 instance.<br />12. Access and Manage your EC2 Instance: After the instance is launched, you can manage it using various methods such as SSH, Remote Desktop, or AWS Systems Manager Session Manager.";
  
    const successMessageP = document.createElement("p");
    successMessageP.innerHTML = "- These steps offer a high-level explanation of how to create and launch an EC2 instance in AWS. It is crucial to carefully review and configure the settings based on your specific needs while adhering to security and cost optimization best practices before proceeding with the instance creation.<br /><center>You have successfully created an EC2 instance in AWS. Now, check out what you can do on the EC2 server.</center>";
    
    containerDiv.appendChild(titleH1);
    containerDiv.appendChild(hr);
    containerDiv.appendChild(ec2TitleH2);
    containerDiv.appendChild(ec2DescriptionP1);
    containerDiv.appendChild(ec2DescriptionP2);
    containerDiv.appendChild(ec2PurposesP);
    containerDiv.appendChild(ec2FeaturesP);
    containerDiv.appendChild(pricingH4);
    containerDiv.appendChild(pricingDescriptionP);
    containerDiv.appendChild(gettingStartedTitleP);
    containerDiv.appendChild(gettingStartedStepsP);
    containerDiv.appendChild(successMessageP);
    rootDiv.appendChild(containerDiv);
  
    // Additional DOM manipulation or event handling can be added here
  });
  