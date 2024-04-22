pipeline{
    agent any

    tools {
        node 'node21'
    }
    stages {
        stage('Test'){
            steps {
                sh 'node ./test.js'
            }
        }
    }
}

