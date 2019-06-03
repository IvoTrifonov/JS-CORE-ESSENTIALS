function coffeeStorage() {
    const textarea = JSON.parse(document.querySelector('textarea').value);
    const [report, inspection] = document.getElementsByTagName('p');
    const brands = {};
 
    for (const tokens of textarea) {
        const [command, brand, subBrand, date, quantity] = tokens.split(', ');
 
        if (command === 'IN') {
            if (!brands[brand]) {
                brands[brand] = {};
            }
 
            if (!brands[brand][subBrand]) {
                brands[brand][subBrand] = { date, quantity: Number(quantity) };
            }
 
            if (brands[brand][subBrand].date <= date) {
                brands[brand][subBrand] = { date, quantity: Number(quantity) };
            }

        } else if (command === 'OUT') {
            if (brands[brand] &&
                brands[brand][subBrand] &&
                brands[brand][subBrand].date > date &&
                brands[brand][subBrand].quantity >= Number(quantity)) {

                brands[brand][subBrand].quantity -= Number(quantity);
            }
        } else if (command === 'REPORT') {
            Object.entries(brands).forEach(([brand, subBrand]) => {
 
                const res = [];
                Object.entries(subBrand).map(([name, info]) => {
                    res.push(`${name} - ${info.date} - ${info.quantity}.`);
                });
 
                report.innerHTML += `${brand}: ${res.join(' ')}` + '<br />';
            });
        } else if (command === 'INSPECTION') {
            Object.entries(brands)
                .sort((a, b) => a[0].localeCompare(b[0]))
                .forEach(([brand, subBrand]) => {
 
                    const res = [];
                    Object.entries(subBrand)
                        .sort((a, b) => b[1].quantity - a[1].quantity)
                        .forEach(([name, info]) => {
                            res.push(`${name} - ${info.date} - ${info.quantity}.`);
                        });
 
                    inspection.innerHTML += `${brand}: ${res.join(' ')}` + '<br />';
            });
        }
    }
}