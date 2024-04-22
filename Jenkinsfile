pipeline{
    agent any

    tools {
        nodejs 'node21'
    }
    stages {
        stage('Test'){
            steps {
                sh 'npm install'
                sh 'node ./test.js'
            }
        }
    }
}



