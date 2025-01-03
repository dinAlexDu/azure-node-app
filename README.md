# Azure Node.js App Deployment
---
**A Hands-on Lab for Deploying a Node.js Application to Azure App Services**
---

This project demonstrates how to deploy a simple Node.js application to **Azure App Services** using **GitHub Actions** for CI/CD.

---

## Table of Contents
1. [Project Objectives](#project-objectives)
2. [Steps Implemented](#steps-implemented)
3. [Fixes Implemented](#fixes-implemented)
4. [Screenshots](#screenshots)
5. [Technologies Used](#technologies-used)
6. [Useful Links](#useful-links)
7. [License](#license)
8. [Contributions](#contributions)

---
## Project Objectives

- **Deploy a Node.js Application:**  
  Host a simple Express.js application on Azure App Services.

- **Automate CI/CD:**  
  Use GitHub Actions to streamline deployment and testing workflows.

- **Ensure Scalability and Availability:**  
  Leverage Azure App Services to provide a reliable, scalable hosting environment for the Node.js application.

- **Monitor Application Logs:**  
  Utilize Azure App Services log streaming to monitor and troubleshoot the application in real time.

---

## Steps Implemented

1. **Clone and Set Up the Repository**  
   - Cloned the repository and installed dependencies:
     ```bash
     git clone https://github.com/dinAlexDu/azure-node-app.git
     cd azure-node-app
     npm install
     ```

2. **Run Locally**  
   - Started the application to test it locally:
     ```bash
     npm start
     ```
   - Application runs at `http://localhost:3000`.

3. **Deploy to Azure App Services**  
   - Followed the [Azure App Service Documentation](https://learn.microsoft.com/en-us/azure/app-service/) to:
     - Create an Azure App Service.
     - Deploy the Node.js application using GitHub Actions.

4. **Set Up GitHub Actions for CI/CD**  
   - Configured the `.github/workflows/main.yml` file to automate deployment.

5. **Monitor and Validate**  
   - Used the Azure App Service Log Stream to monitor the application:
     ```bash
     az webapp log tail --name <APP_NAME> --resource-group <RESOURCE_GROUP>
     ```
   - Verified the application by visiting its public URL:  
     ```
     https://<APP_NAME>.azurewebsites.net
     ```


---

## Fixes Implemented

### Port Issue Fix
- **Issue:** Azure App Services dynamically assigns ports, and hardcoding a port like 3000 caused deployment failures.  
- **Solution:** The application now reads the assigned port from the `PORT` environment variable to ensure compatibility with Azure's deployment model. This change guarantees successful application startup on the dynamically assigned port.

  ```javascript
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  ```
---
## Screenshots

Below are screenshots illustrating key steps in the deployment process and application functionality:


### 1. Application Running in Browser
![Application Running](./images/application-running-browser.png)

### 2. Azure App Service Configuration
![Azure Configuration](./images/azure-app-service-configuration.png)

### 3. Azure Networking Configuration
![Azure Networking](./images/azure-app-service-networking.png)

### 4. Azure App Service Overview
![Azure Overview](./images/azure-app-service-overview.png)

### 5. Azure Log Stream
![Azure Log Stream](./images/azure-log-stream.png)

### 6. GitHub Actions Workflow Success
![GitHub Actions Success](./images/github-actions-success.png)

### 7. GitHub Actions Workflow Configuration
![GitHub Actions Configuration](./images/github-actions-yaml-file.png)

### 8. Project Structure and Fix in Visual Studio Code
![Project Structure](./images/project-structure-vscode.png)

---


## Technologies Used

The project leverages the following technologies to achieve seamless deployment and scalability:


- **[Node.js](https://nodejs.org/en/):** Back-end runtime environment for JavaScript.  
- **[Express.js](https://expressjs.com/):** Web application framework for Node.js.  
- **[GitHub Actions](https://docs.github.com/en/actions):** CI/CD pipeline for automating deployments.  
- **[Azure App Services](https://learn.microsoft.com/en-us/azure/app-service/):** Platform-as-a-Service (PaaS) for hosting web applications.  

---

## Useful Links

- **[Azure App Service Documentation](https://learn.microsoft.com/en-us/azure/app-service/):**  
  Guide to deploying and managing applications in Azure.  

- **[Node.js Documentation](https://nodejs.org/en/):**  
  Official documentation for Node.js.  

- **[Express.js Documentation](https://expressjs.com/):**  
  Learn more about Express.js and its features.  

- **[GitHub Actions Documentation](https://docs.github.com/en/actions):**  
  Comprehensive guide to setting up and using GitHub Actions for CI/CD.  

---

## License

This project is licensed under the [MIT License](./LICENSE).  
See the LICENSE file for detailed terms and conditions.  

---

## Contributions

Contributions are welcome!  
If you have suggestions for improvements or additional features, feel free to [fork this repository](https://github.com/dinAlexDu/azure-node-app) and submit a pull request.  

Please adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md) when contributing to this project.




