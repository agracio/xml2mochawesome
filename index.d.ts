declare module 'mochawesome-converter' {
    
    function xml2mochawesome(options: Options): void

    interface Options{
        testFile: string
        testType: string|TestType
        reportDir? : string
        reportFilename? : string
        junit?: boolean
        junitReportFilename? : string
        html?: boolean
        htmlReportFilename? : string
        skippedAsPending?: boolean
        switchClassnameAndName?: boolean
        saveIntermediateFiles?: boolean
    }

    enum TestType {
        JUnit,
        NUnit,
        XUnit,
    }
}
