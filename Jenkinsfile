pipeline {
    agent any

    tools {
        nodejs "Node"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master',
                url: 'https://github.com/ShiwaniDeshmukh/VisualStudioCode.git'
            }
        }
        
        stage('Build') {
            steps {
                // Install dependencies
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                // Execute the UI Automation tests
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy App'
            }
        }
    }
}
