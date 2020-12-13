import {validNucleotide} from '../validNucleotide'
const TRANSLATIONS = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U',
};

export function toRna(sequence) {
  let rnaSequence = "";

  for (let i = 0; i < sequence.length; i++) {
    let nucleotide = sequence[i];
    if (!validNucleotide(nucleotide)) {
      throw new Error('Invalid input DNA.');
    }
    rnaSequence += TRANSLATIONS[nucleotide];
  }

  return rnaSequence;
}
