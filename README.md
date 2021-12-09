# Security Automation Framework CLI


## Installation

#### Installation via NPX

The SAF CLI can be installed and kept up to date using [npx](https://www.npmjs.com/package/npx).

```bash
npx @mitre/saf help
```



#### Installation via Docker

**On Linux and Mac:** 

```
docker run -it -v$(pwd):/share mitre/saf
```

**On Windows:** 

```
docker run -it -v%cd%:/share mitre/saf
```

## Usage

### Normalize

Translating your data to and from Heimdall Data Format (HDF) is done using the `saf normalize` command.

```bash
normalize:asff             Translate a AWS Security Finding Format JSON into a
                           Heimdall Data Format JSON file
  OPTIONS
    -i, --input=input          Input ASFF JSON File
    --securityhub=securityhub  Input AWS Security Standards File
    -o, --output=output        Output HDF JSON File

  EXAMPLES
    saf asff_mapper -i asff-findings.json -o output-file-name.json
    saf asff_mapper -i asff-findings.json --sh <standard-1-json> ... <standard-n-json> -o output-hdf-name.json
#--------------------------------------------------------------------------------

normalize:burpsuite        Translate a BurpSuite Pro XML file into a Heimdall
                           Data Format JSON file
  OPTIONS
	  -i, --input=xml            Input BurpSuite Pro XML File
    -o, --output=output        Output HDF JSON File
    

  EXAMPLES
    saf normalize:burpsuite -i burpsuite_results.xml -o output-hdf-name.json
#--------------------------------------------------------------------------------

normalize:dbprotect        Translate a DBProtect report in "Check Results
                           Details" XML format into a Heimdall Data Format JSON
                           file
  OPTIONS
    -i, --input=input          'Check Results Details' XML File
    -o, --output=output        Output HDF JSON File

  EXAMPLES
    saf normalize:dbprotect -i check_results_details_report.xml -o output-hdf-name.json

#--------------------------------------------------------------------------------
normalize:fortify          Translate a Fortify results FVDL file into a Heimdall
                           Data Format JSON file
  OPTIONS
    -i, --input=input          Input FVDL File
    -o, --output=output        Output HDF JSON File

  EXAMPLES
    saf normalize:fortify -i audit.fvdl -o output-hdf-name.json

#--------------------------------------------------------------------------------
normalize:jfrog_xray       Translate a JFrog Xray results JSON file into a
                           Heimdall Data Format JSON file

  OPTIONS
    -i, --input=input          Input JFrog JSON File
    -o, --output=output        Output HDF JSON File

  EXAMPLES
    saf normalize:jfrog_xray -i xray_results.json -o output-hdf-name.json

#--------------------------------------------------------------------------------

normalize:nessus           Translate a Nessus XML results file into a Heimdall
                           Data Format JSON file
  OPTIONS
    -i, --input=input          Input Nessus XML File
    -o, --output=output        Output HDF JSON File

  EXAMPLES
    saf normalize:nessus -i nessus_results.xml -o output-hdf-name.json

#--------------------------------------------------------------------------------
normalize:netsparker       Translate a Netsparker XML results file into a
                           Heimdall Data Format JSON file
  OPTIONS
    -i, --input=input          Input Netsparker XML File
    -o, --output=output        Output HDF JSON File

  EXAMPLES
    saf normalize:netsparker -i netsparker_results.xml -o output-hdf-name.json

#--------------------------------------------------------------------------------
normalize:nikto            Translate a Nikto results JSON file into a Heimdall
                           Data Format JSON file
  OPTIONS
    -i, --input=input          Input Nikto Results JSON File
    -o, --output=output        Output HDF JSON File

  EXAMPLES
    saf normalize:nikto -i nikto-results.json -o output-hdf-name.json

#--------------------------------------------------------------------------------
normalize:prowler          Translate a Prowler-derived AWS Security Finding
                           Format results from concatenated JSON blobs into a
                           Heimdall Data Format JSON file
  OPTIONS
    -i, --input=input          Input Prowler ASFF JSON File
    -o, --output=output        Output HDF JSON File

  EXAMPLES
    saf normalize:prowler -i prowler-asff.json -o output-hdf-name.json

#--------------------------------------------------------------------------------
normalize:sarif            Translate a SARIF JSON file into a Heimdall Data
                           Format JSON file
  OPTIONS
    -i, --input=input          Input SARIF JSON File
    -o, --output=output        Output HDF JSON File

	DESCRIPTION
    SARIF level to HDF impact Mapping:
      SARIF level error -> HDF impact 0.7
      SARIF level warning -> HDF impact 0.5
      SARIF level note -> HDF impact 0.3
      SARIF level none -> HDF impact 0.1
      SARIF level not provided -> HDF impact 0.1 as default

  EXAMPLES
    saf normalize:sarif -i sarif-results.json -o output-hdf-name.json

#--------------------------------------------------------------------------------
normalize:scoutsuite       Translate a ScoutSuite results from a Javascript
                           object into a Heimdall Data Format JSON file
  OPTIONS
    -i, --input=input          Input ScoutSuite Results JS File
    -o, --output=output        Output HDF JSON File

	DESCRIPTION
  	Note: Currently this mapper only supports AWS.

  EXAMPLES
    saf normalize:scoutsuite -i scoutsuite-results.js -o output-hdf-name.json

#--------------------------------------------------------------------------------
normalize:snyk             Translate a Snyk results JSON file into a Heimdall
                           Data Format JSON file
  OPTIONS
    -i, --input=input          Input Snyk Results JSON File
    -o, --output=output        Output HDF JSON File

  EXAMPLES
    saf normalize:snyk -i snyk_results.json -o output-hdf-name.json

#--------------------------------------------------------------------------------
normalize:sonarqube        Pull SonarQube vulnerabilities for the specified
                           project name from an API and convert into a Heimdall
                           Data Format JSON file
  OPTIONS
    -a, --auth=auth              SonarQube API Key
    -u, --url=url                SonarQube Base URL (Excluding '/api')
    -n, --projectKey=projectKey  SonarQube Project Key
    -o, --output=output          Output HDF JSON File

  EXAMPLES
    saf normalize:sonarqube -n project_key -u http://sonar:9000 --auth YOUR_API_KEY -o output-hdf-name.json

#--------------------------------------------------------------------------------
normalize:xccdf_results    Translate a SCAP client XCCDF-Results XML report to
                           HDF format Json be viewed on Heimdall
  OPTIONS
    -i, --input=input          Input XCCDF Results XML File
    -o, --output=output        Output HDF JSON File

  EXAMPLES
    saf normalize:xccdf_results -i results-xccdf.xml -o output-hdf-name.json

#--------------------------------------------------------------------------------
normalize:zap              Translate a OWASP ZAP results JSON to HDF format Json
                           be viewed on Heimdall
  OPTIONS
    -i, --input=input          Input OWASP ZAP Results JSON File
    -n, --name=name            Target Site Name
    -o, --output=output        Output HDF JSON File

  EXAMPLES
    saf normalize:zap -i zap_results.json -n mitre.org -o output-hdf-name.json

```

---

### Visualize

You can start a local Heimdall Lite instance to visualize your findings with the SAF CLI. To start an instance use the `saf visualize:heimdall` command:



```
normalize:zap              Run an instance of Heimdall Lite to visualize 
                           your data

  OPTIONS
    -p, --port=PORT          Port To Expose Heimdall On (Default 3000)

  EXAMPLES
    saf visualize:heimdall -p 8080
```



---



# License and Author

### Authors

-   Author:: Ryan Lin [Rlin232](https://github.com/rlin232)

### NOTICE

© 2018 The MITRE Corporation.

Approved for Public Release; Distribution Unlimited. Case Number 18-3678.

### NOTICE

MITRE hereby grants express written permission to use, reproduce, distribute, modify, and otherwise leverage this software to the extent permitted by the licensed terms provided in the LICENSE.md file included with this project.

### NOTICE

This software was produced for the U. S. Government under Contract Number HHSM-500-2012-00008I, and is subject to Federal Acquisition Regulation Clause 52.227-14, Rights in Data-General.

No other use other than that granted to the U. S. Government, or to those acting on behalf of the U. S. Government under that Clause is authorized without the express written permission of The MITRE Corporation.

For further information, please contact The MITRE Corporation, Contracts Management Office, 7515 Colshire Drive, McLean, VA 22102-7539, (703) 983-6000.
