pipeline{
    agent any

    tools {
        nodejs 'node21'
    }
    stages {
        stage('Test'){
            steps {
                sh 'node ./tests/test.js'
            }
        }
    }
}




