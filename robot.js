const pembersih = {
    bersihkan() {
        console.log(`${this.nama} membersihkan ruangan.`);
    }
};

const pengantar = {
    antarPaket() {
        console.log(`${this.nama} mengantar paket.`);
    }
}

const penjaga = {
    patroli() {
        console.log(`${this.nama} berpatroli di area.`);
    }
}

function applyCapabilities(Kelas, ...kemampuan) {
    kemampuan.forEach(kemampuan => {
        Object.assign(Kelas.prototype, kemampuan);
    });
}

class RobotRumah {
    constructor(nama) {
        this.nama = nama;
    }
}

applyCapabilities(RobotRumah, pembersih, penjaga);

class RobotKurir {
    constructor(nama) {
        this.nama = nama;
    }
}

applyCapabilities(RobotKurir, pengantar);

const robot1 = new RobotRumah("RobotRumah_3603");
const robot2 = new RobotKurir("RobotKurir_3603");

robot1.bersihkan();
robot1.patroli();
robot2.antarPaket();

console.log(`${robot2.nama} bisa membersihkan? ${typeof robot2.bersihkan === 'function'}`);
console.log(`${robot1.nama} bisa mengantar paket? ${typeof robot1.antarPaket === 'function'}`);