const aminoAcids = {
    "A": {
        "name": "Ala",
        "fullName": "Alanine",
        "weight": 89.094,
        "hydropathy": 1.8,
        "atoms": { "C": 3, "H": 5, "N": 1, "O": 1, "S": 0 }
    },
    "R": {
        "name": "Arg",
        "fullName": "Arginine",
        "weight": 174.203,
        "hydropathy": -4.5,
        "atoms": { "C": 6, "H": 12, "N": 4, "O": 1, "S": 0 }
    },
    "N": {
        "name": "Asn",
        "fullName": "Asparagine",
        "weight": 132.119,
        "hydropathy": -3.5,
        "atoms": { "C": 4, "H": 6, "N": 2, "O": 2, "S": 0 }
    },
    "D": {
        "name": "Asp",
        "fullName": "Aspartic acid",
        "weight": 133.104,
        "hydropathy": -3.5,
        "atoms": { "C": 4, "H": 5, "N": 1, "O": 3, "S": 0 }
    },
    "C": {
        "name": "Cys",
        "fullName": "Cysteine",
        "weight": 121.154,
        "hydropathy": 2.5,
        "atoms": { "C": 3, "H": 5, "N": 1, "O": 1, "S": 1 }
    },
    "Q": {
        "name": "Gln",
        "fullName": "Glutamine",
        "weight": 146.146,
        "hydropathy": -3.5,
        "atoms": { "C": 5, "H": 8, "N": 2, "O": 2, "S": 0 }
    },
    "E": {
        "name": "Glu",
        "fullName": "Glutamic acid",
        "weight": 147.131,
        "hydropathy": -3.5,
        "atoms": { "C": 5, "H": 7, "N": 1, "O": 3, "S": 0 }
    },
    "G": {
        "name": "Gly",
        "fullName": "Glycine",
        "weight": 75.067,
        "hydropathy": -0.4,
        "atoms": { "C": 2, "H": 3, "N": 1, "O": 1, "S": 0 }
    },
    "H": {
        "name": "His",
        "fullName": "Histidine",
        "weight": 155.156,
        "hydropathy": -3.2,
        "atoms": { "C": 6, "H": 7, "N": 3, "O": 1, "S": 0 }
    },
    "I": {
        "name": "Ile",
        "fullName": "Isoleucine",
        "weight": 131.175,
        "hydropathy": 4.5,
        "atoms": { "C": 6, "H": 11, "N": 1, "O": 1, "S": 0 }
    },
    "L": {
        "name": "Leu",
        "fullName": "Leucine",
        "weight": 131.175,
        "hydropathy": 3.8,
        "atoms": { "C": 6, "H": 11, "N": 1, "O": 1, "S": 0 }
    },
    "K": {
        "name": "Lys",
        "fullName": "Lysine",
        "weight": 146.189,
        "hydropathy": -3.9,
        "atoms": { "C": 6, "H": 12, "N": 2, "O": 1, "S": 0 }
    },
    "M": {
        "name": "Met",
        "fullName": "Methionine",
        "weight": 149.208,
        "hydropathy": 1.9,
        "atoms": { "C": 5, "H": 9, "N": 1, "O": 1, "S": 1 }
    },
    "F": {
        "name": "Phe",
        "fullName": "Phenylalanine",
        "weight": 165.191,
        "hydropathy": 2.8,
        "atoms": { "C": 9, "H": 9, "N": 1, "O": 1, "S": 0 }
    },
    "P": {
        "name": "Pro",
        "fullName": "Proline",
        "weight": 115.132,
        "hydropathy": -1.6,
        "atoms": { "C": 5, "H": 7, "N": 1, "O": 1, "S": 0 }
    },
    "S": {
        "name": "Ser",
        "fullName": "Serine",
        "weight": 105.093,
        "hydropathy": -0.8,
        "atoms": { "C": 3, "H": 5, "N": 1, "O": 2, "S": 0 }
    },
    "T": {
        "name": "Thr",
        "fullName": "Threonine",
        "weight": 119.120,
        "hydropathy": -0.7,
        "atoms": { "C": 4, "H": 7, "N": 1, "O": 2, "S": 0 }
    },
    "W": {
        "name": "Trp",
        "fullName": "Tryptophan",
        "weight": 204.228,
        "hydropathy": -0.9,
        "atoms": { "C": 11, "H": 10, "N": 2, "O": 1, "S": 0 }
    },
    "Y": {
        "name": "Tyr",
        "fullName": "Tyrosine",
        "weight": 181.191,
        "hydropathy": -1.3,
        "atoms": { "C": 9, "H": 9, "N": 1, "O": 2, "S": 0 }
    },
    "V": {
        "name": "Val",
        "fullName": "Valine",
        "weight": 117.148,
        "hydropathy": 4.2,
        "atoms": { "C": 5, "H": 9, "N": 1, "O": 1, "S": 0 }
    },
    // Unknown amino acid
    "X": {
        "name": "Xaa",
        "fullName": "",
        "weight": 110.0,
        "hydropathy": 0.0,
        "atoms": { "C": 0, "H": 0, "N": 0, "O": 0, "S": 0 }
    }
};

// Define pKa values
const positive_pKs = {
    "Nterm": 7.5,
    "K": 10.0,
    "R": 12.0,
    "H": 5.98
};

const negative_pKs = {
    "Cterm": 3.55,
    "D": 4.05,
    "E": 4.45,
    "C": 9.0,
    "Y": 10.0
};

const pKcterminal = {
    "D": 4.55,
    "E": 4.75
};

const pKnterminal = {
    "A": 7.59,
    "M": 7.0,
    "S": 6.93,
    "P": 8.36,
    "T": 6.82,
    "V": 7.44,
    "E": 7.7
};
const DIWV = {
    "A": {
        "A": 1.0, "C": 44.94, "E": 1.0, "D": -7.49,
        "G": 1.0, "F": 1.0, "I": 1.0, "H": -7.49,
        "K": 1.0, "M": 1.0, "L": 1.0, "N": 1.0,
        "Q": 1.0, "P": 20.26, "S": 1.0, "R": 1.0,
        "T": 1.0, "W": 1.0, "V": 1.0, "Y": 1.0
    },
    "C": {
        "A": 1.0, "C": 1.0, "E": 1.0, "D": 20.26,
        "G": 1.0, "F": 1.0, "I": 1.0, "H": 33.60,
        "K": 1.0, "M": 33.60, "L": 20.26, "N": 1.0,
        "Q": -6.54, "P": 20.26, "S": 1.0, "R": 1.0,
        "T": 33.60, "W": 24.68, "V": -6.54, "Y": 1.0
    },
    "E": {
        "A": 1.0, "C": 44.94, "E": 33.60, "D": 20.26,
        "G": 1.0, "F": 1.0, "I": 20.26, "H": -6.54,
        "K": 1.0, "M": 1.0, "L": 1.0, "N": 1.0,
        "Q": 20.26, "P": 20.26, "S": 20.26, "R": 1.0,
        "T": 1.0, "W": -14.03, "V": 1.0, "Y": 1.0
    },
    "D": {
        "A": 1.0, "C": 1.0, "E": 1.0, "D": 1.0,
        "G": 1.0, "F": -6.54, "I": 1.0, "H": 1.0,
        "K": -7.49, "M": 1.0, "L": 1.0, "N": 1.0,
        "Q": 1.0, "P": 1.0, "S": 20.26, "R": -6.54,
        "T": -14.03, "W": 1.0, "V": 1.0, "Y": 1.0
    },
    "G": {
        "A": -7.49, "C": 1.0, "E": -6.54, "D": 1.0,
        "G": 13.34, "F": 1.0, "I": -7.49, "H": 1.0,
        "K": -7.49, "M": 1.0, "L": 1.0, "N": -7.49,
        "Q": 1.0, "P": 1.0, "S": 1.0, "R": 1.0,
        "T": -7.49, "W": 13.34, "V": 1.0, "Y": -7.49
    },
    "F": {
        "A": 1.0, "C": 1.0, "E": 1.0, "D": 13.34,
        "G": 1.0, "F": 1.0, "I": 1.0, "H": 1.0,
        "K": -14.03, "M": 1.0, "L": 1.0, "N": 1.0,
        "Q": 1.0, "P": 20.26, "S": 1.0, "R": 1.0,
        "T": 1.0, "W": 1.0, "V": 1.0, "Y": 33.601
    },
    "I": {
        "A": 1.0, "C": 1.0, "E": 44.94, "D": 1.0,
        "G": 1.0, "F": 1.0, "I": 1.0, "H": 13.34,
        "K": -7.49, "M": 1.0, "L": 20.26, "N": 1.0,
        "Q": 1.0, "P": -1.88, "S": 1.0, "R": 1.0,
        "T": 1.0, "W": 1.0, "V": -7.49, "Y": 1.0
    },
    "H": {
        "A": 1.0, "C": 1.0, "E": 1.0, "D": 1.0,
        "G": -9.37, "F": -9.37, "I": 44.94, "H": 1.0,
        "K": 24.68, "M": 1.0, "L": 1.0, "N": 24.68,
        "Q": 1.0, "P": -1.88, "S": 1.0, "R": 1.0,
        "T": -6.54, "W": -1.88, "V": 1.0, "Y": 44.94
    },
    "K": {
        "A": 1.0, "C": 1.0, "E": 1.0, "D": 1.0,
        "G": -7.49, "F": 1.0, "I": -7.49, "H": 1.0,
        "K": 1.0, "M": 33.60, "L": -7.49, "N": 1.0,
        "Q": 24.64, "P": -6.54, "S": 1.0, "R": 33.60,
        "T": 1.0, "W": 1.0, "V": -7.49, "Y": 1.0
    },
    "M": {
        "A": 13.34, "C": 1.0, "E": 1.0, "D": 1.0,
        "G": 1.0, "F": 1.0, "I": 1.0, "H": 58.28,
        "K": 1.0, "M": -1.88, "L": 1.0, "N": 1.0,
        "Q": -6.54, "P": 44.94, "S": 44.94, "R": -6.54,
        "T": -1.88, "W": 1.0, "V": 1.0, "Y": 24.68
    },
    "L": {
        "A": 1.0, "C": 1.0, "E": 1.0, "D": 1.0,
        "G": 1.0, "F": 1.0, "I": 1.0, "H": 1.0,
        "K": -7.49, "M": 1.0, "L": 1.0, "N": 1.0,
        "Q": 33.60, "P": 20.26, "S": 1.0, "R": 20.26,
        "T": 1.0, "W": 24.68, "V": 1.0, "Y": 1.0
    },
    "N": {
        "A": 1.0, "C": -1.88, "E": 1.0, "D": 1.0,
        "G": -14.03, "F": -14.03, "I": 44.94, "H": 1.0,
        "K": 24.68, "M": 1.0, "L": 1.0, "N": 1.0,
        "Q": -6.54, "P": -1.88, "S": 1.0, "R": 1.0,
        "T": -7.49, "W": -9.37, "V": 1.0, "Y": 1.0
    },
    "Q": {
        "A": 1.0, "C": -6.54, "E": 20.26, "D": 20.26,
        "G": 1.0, "F": -6.54, "I": 1.0, "H": 1.0,
        "K": 1.0, "M": 1.0, "L": 1.0, "N": 1.0,
        "Q": 20.26, "P": 20.26, "S": 44.94, "R": 1.0,
        "T": 1.0, "W": 1.0, "V": -6.54, "Y": -6.54
    },
    "P": {
        "A": 20.26, "C": -6.54, "E": 18.38, "D": -6.54,
        "G": 1.0, "F": 20.26, "I": 1.0, "H": 1.0,
        "K": 1.0, "M": -6.54, "L": 1.0, "N": 1.0,
        "Q": 20.26, "P": 20.26, "S": 20.26, "R": -6.54,
        "T": 1.0, "W": -1.88, "V": 20.26, "Y": 1.0
    },
    "S": {
        "A": 1.0, "C": 33.60, "E": 20.26, "D": 1.0,
        "G": 1.0, "F": 1.0, "I": 1.0, "H": 1.0,
        "K": 1.0, "M": 1.0, "L": 1.0, "N": 1.0,
        "Q": 20.26, "P": 44.94, "S": 20.26, "R": 20.26,
        "T": 1.0, "W": 1.0, "V": 1.0, "Y": 1.0
    },
    "R": {
        "A": 1.0, "C": 1.0, "E": 1.0, "D": 1.0,
        "G": -7.49, "F": 1.0, "I": 1.0, "H": 20.26,
        "K": 1.0, "M": 1.0, "L": 1.0, "N": 13.34,
        "Q": 20.26, "P": 20.26, "S": 44.94, "R": 58.28,
        "T": 1.0, "W": 58.28, "V": 1.0, "Y": -6.54
    },
    "T": {
        "A": 1.0, "C": 1.0, "E": 20.26, "D": 1.0,
        "G": -7.49, "F": 13.34, "I": 1.0, "H": 1.0,
        "K": 1.0, "M": 1.0, "L": 1.0, "N": -14.03,
        "Q": -6.54, "P": 1.0, "S": 1.0, "R": 1.0,
        "T": 1.0, "W": -14.03, "V": 1.0, "Y": 1.0
    },
    "W": {
        "A": -14.03, "C": 1.0, "E": 1.0, "D": 1.0,
        "G": -9.37, "F": 1.0, "I": 1.0, "H": 24.68,
        "K": 1.0, "M": 24.68, "L": 13.34, "N": 13.34,
        "Q": 1.0, "P": 1.0, "S": 1.0, "R": 1.0,
        "T": -14.03, "W": 1.0, "V": -7.49, "Y": 1.0
    },
    "V": {
        "A": 1.0, "C": 1.0, "E": 1.0, "D": -14.03,
        "G": -7.49, "F": 1.0, "I": 1.0, "H": 1.0,
        "K": -1.88, "M": 1.0, "L": 1.0, "N": 1.0,
        "Q": 1.0, "P": 20.26, "S": 1.0, "R": 1.0,
        "T": -7.49, "W": 1.0, "V": 1.0, "Y": -6.54
    },
    "Y": {
        "A": 24.68, "C": 1.0, "E": -6.54, "D": 24.68,
        "G": -7.49, "F": 1.0, "I": 1.0, "H": 13.34,
        "K": 1.0, "M": 44.94, "L": 1.0, "N": 1.0,
        "Q": 1.0, "P": 13.34, "S": 1.0, "R": -15.91,
        "T": -7.49, "W": -9.37, "V": 1.0, "Y": 13.34
    }
}


class ProteinAnalysis {
    constructor(sequence) {
        this.sequence = sequence.toUpperCase();
        this.length = this.sequence.length;
        this.aminoAcidCounts = this.countAminoAcids();
        this.chargedAAsContent = this.selectCharged();
        this.updatePKs();
    }

    countAminoAcids() {
        let counts = {};
        for (let aa in aminoAcids) {
            counts[aa] = 0;
        }

        for (let i = 0; i < this.sequence.length; i++) {
            let aa = this.sequence[i];
            if (counts.hasOwnProperty(aa)) {
                counts[aa] += 1;
            } else {
                counts['X'] += 1;
            }
        }

        return counts;
    }

    getAminoAcidPercents() {
        let percents = {};
        for (let aa in this.aminoAcidCounts) {
            percents[aa] = (this.aminoAcidCounts[aa] / this.length) * 100;
        }
        return percents;
    }

    molecularWeight() {
        let totalWeight = 0.0;
        for (let aa in this.aminoAcidCounts) {
            let count = this.aminoAcidCounts[aa];
            let weight = aminoAcids[aa].weight || 0;
            totalWeight += weight * count;
        }
        totalWeight -= (this.length - 1) * 18.01524;
        return totalWeight.toFixed(2);
    }

    selectCharged() {
        let charged = {};
        const chargedAAs = ["K", "R", "H", "D", "E", "C", "Y"];
        for (let aa of chargedAAs) {
            charged[aa] = this.aminoAcidCounts[aa] || 0;
        }
        charged["Nterm"] = 1.0;
        charged["Cterm"] = 1.0;
        return charged;
    }

    updatePKs() {
        // Copy pKa values
        this.pos_pKs = Object.assign({}, positive_pKs);
        this.neg_pKs = Object.assign({}, negative_pKs);

        let nterm = this.sequence[0];
        let cterm = this.sequence[this.sequence.length - 1];

        if (pKnterminal.hasOwnProperty(nterm)) {
            this.pos_pKs["Nterm"] = pKnterminal[nterm];
        }
        if (pKcterminal.hasOwnProperty(cterm)) {
            this.neg_pKs["Cterm"] = pKcterminal[cterm];
        }
    }

    chargeAtpH(pH) {
        let positiveCharge = 0.0;
        for (let aa in this.pos_pKs) {
            let pK = this.pos_pKs[aa];
            let n = this.chargedAAsContent[aa] || 0;
            let partialCharge = 1.0 / (Math.pow(10, pH - pK) + 1.0);
            positiveCharge += n * partialCharge;
        }

        let negativeCharge = 0.0;
        for (let aa in this.neg_pKs) {
            let pK = this.neg_pKs[aa];
            let n = this.chargedAAsContent[aa] || 0;
            let partialCharge = 1.0 / (Math.pow(10, pK - pH) + 1.0);
            negativeCharge += n * partialCharge;
        }

        return positiveCharge - negativeCharge;
    }

    isoelectricPoint() {
        let min_pH = 4.05;
        let max_pH = 12.0;
        let pH = 7.0;
        let charge = this.chargeAtpH(pH);
        while ((max_pH - min_pH) > 0.0001) {
            if (charge > 0.0) {
                min_pH = pH;
            } else {
                max_pH = pH;
            }
            pH = (min_pH + max_pH) / 2.0;
            charge = this.chargeAtpH(pH);
        }
        return pH.toFixed(2);
    }

    totalNegativelyCharged() {
        return (this.aminoAcidCounts['D'] || 0) + (this.aminoAcidCounts['E'] || 0);
    }

    totalPositivelyCharged() {
        return (this.aminoAcidCounts['R'] || 0) + (this.aminoAcidCounts['K'] || 0);
    }

    extinctionCoefficients() {
        let nTrp = this.aminoAcidCounts['W'] || 0;
        let nTyr = this.aminoAcidCounts['Y'] || 0;
        let nCys = this.aminoAcidCounts['C'] || 0;

        // Reduced Cys (no disulfide bonds)
        let reduced = nTrp * 5500 + nTyr * 1490;

        // All Cys form disulfide bonds
        let oxidized = reduced + Math.floor(nCys / 2) * 125;

        return {
            reduced: reduced,
            oxidized: oxidized
        };
    }

    instabilityIndex() {
        let score = 0.0;
        let length = this.sequence.length;

        // 遍历序列中的每一对相邻氨基酸
        for (let i = 0; i < length - 1; i++) {
            let aa1 = this.sequence[i];
            let aa2 = this.sequence[i + 1];

            // 获取 DIWV 值，如果没有找到，默认值为 1.0
            let dipeptideValue = (DIWV[aa1] && DIWV[aa1][aa2]) ? DIWV[aa1][aa2] : 1.0;

            // 累加二肽值
            score += dipeptideValue;
        }

        // 计算不稳定指数
        let instabilityIndex = (10 * score) / length;
        return instabilityIndex.toFixed(2);
    }


    aliphaticIndex() {
        let counts = this.aminoAcidCounts;
        let X_Ala = ((counts['A'] || 0) / this.length) * 100;
        let X_Val = ((counts['V'] || 0) / this.length) * 100;
        let X_Ile = ((counts['I'] || 0) / this.length) * 100;
        let X_Leu = ((counts['L'] || 0) / this.length) * 100;

        let AI = X_Ala + 2.9 * X_Val + 3.9 * (X_Ile + X_Leu);
        return AI.toFixed(2);
    }
//疏水平均值
    gravy() {
        let totalHydropathy = 0.0;
        for (let aa in this.aminoAcidCounts) {
            let count = this.aminoAcidCounts[aa];
            let hydropathy = aminoAcids[aa].hydropathy || 0.0;
            totalHydropathy += hydropathy * count;
        }
        return (totalHydropathy / this.length).toFixed(3);
    }

    atomicComposition() {
        let totalAtoms = { 'C': 0, 'H': 0, 'N': 0, 'O': 0, 'S': 0 };

        for (let aa in this.aminoAcidCounts) {
            let count = this.aminoAcidCounts[aa];
            let atoms = aminoAcids[aa].atoms || {};
            for (let atom in atoms) {
                totalAtoms[atom] += atoms[atom] * count;
            }
        }

        // N端多的一个氢
        totalAtoms['H'] += 1;

        // C端多的一个氢和氧原子
        totalAtoms['O'] += 1;
        totalAtoms['H'] += 1;

        return totalAtoms;
    }

    formula() {
        let atoms = this.atomicComposition();
        let formula = '';
        for (let atom of ['C', 'H', 'N', 'O', 'S']) {
            let count = atoms[atom];
            if (count > 0) {
                formula += atom + count;
            }
        }
        return formula;
    }

    totalNumberOfAtoms() {
        let atoms = this.atomicComposition();
        let total = 0;
        for (let atom in atoms) {
            total += atoms[atom];
        }
        return total;
    }
}