import {Command, Flags} from '@oclif/core'
import fs from 'fs'
import {ASFFResults as Mapper} from '@mitre/hdf-converters'
import {checkSuffix} from '../../utils/global'

export default class Prowler2HDF extends Command {
  static usage = 'convert prowler2hdf -i <asff-finding-json> [--securityhub <standard-1-json> ... <standard-n-json>] -o <hdf-scan-results-json>'

  static description = 'Translate a Prowler-derived AWS Security Finding Format results from concatenated JSON blobs into a Heimdall Data Format JSON file'

  static examples = ['saf convert prowler2hdf -i prowler-asff.json -o output-hdf-name.json']

  static flags = {
    help: Flags.help({char: 'h'}),
    input: Flags.string({char: 'i', required: true}),
    output: Flags.string({char: 'o', required: true}),
  }

  async run() {
    const {flags} = await this.parse(Prowler2HDF)
    // comes as an asff-json file which is basically all the findings concatenated into one file instead of putting it in the proper wrapper data structure
    const input = `{"Findings": [${fs.readFileSync(flags.input, 'utf-8').trim().split('\n').join(',')}]}`
    const meta = {name: 'Prowler', title: 'Prowler Findings'}
    const converter = new Mapper(input, undefined, meta)
    fs.writeFileSync(checkSuffix(flags.output), JSON.stringify(converter.toHdf()))
  }
}

