document.addEventListener('DOMContentLoaded', function () {
    const bodyElement = document.querySelector('body');
    const jsonFile = bodyElement.getAttribute('data-json-file');
    console.log(bodyElement, jsonFile);
    let jsonFileName;
    switch (jsonFile) {
        case 'MlrA_seq':
            jsonFileName = 'MlrA_seq.json';
            break;
        case 'MlrB_seq':
            jsonFileName = 'MlrB_seq.json';
            break;
        case 'MlrC_seq':
            jsonFileName = 'MlrC_seq.json';
            break;
        case 'MlrD_seq':
            jsonFileName = 'MlrD_seq.json';
            break;
        default:
            console.error('Invalid JSON file ID');
            return;
    }

    fetch(`../asset/json/${jsonFileName}`)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#sequenceTable tbody');
            const allActiveSites = [];

            data.sequences.forEach(sequence => {
                const row = document.createElement('tr');

                const checkboxCell = document.createElement('td');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkboxCell.appendChild(checkbox);
                row.appendChild(checkboxCell);

                // 处理 Source_Organism 名称
                const strainCell = document.createElement('td');
                const sourceOrganism = sequence.Source_Organism;
                const lastSpaceIndex = sourceOrganism.lastIndexOf(' ');
                const strainText = lastSpaceIndex !== -1 
                    ? `<i>${sourceOrganism.slice(0, lastSpaceIndex)}</i>${sourceOrganism.slice(lastSpaceIndex)}`
                    : sourceOrganism; // 如果没有空格，保留原始值
                strainCell.innerHTML = `<th scope="row">${strainText}</th>`;
                row.appendChild(strainCell);

                const idCell = document.createElement('td');
                idCell.innerHTML = `<th scope="row">${sequence.UniProt_id}</th>`;
                row.appendChild(idCell);

                const sequenceCell = document.createElement('td');
                row.appendChild(sequenceCell);

                const sequenceText = sequence.sequence;
                const activeSite = sequence.activeSite || [];
                allActiveSites.push(...activeSite);

                let residueNumber = 0;
                for (let i = 0; i < sequenceText.length; i++) {
                    const character = sequenceText[i];
                    if (character.match(/[a-zA-Z]/)) {
                        residueNumber++;
                    }

                    const preElement = document.createElement('pre');
                    preElement.textContent = character;
                    preElement.setAttribute('data-number', i + 1);

                    if (character.match(/[a-zA-Z]/)) {
                        preElement.setAttribute('residue-number', residueNumber);
                        preElement.setAttribute('title', `${residueNumber}`);
                    }

                    sequenceCell.appendChild(preElement);
                }

                tableBody.appendChild(row);
            });

            const allPreElements = document.querySelectorAll('pre[data-number]');
            allPreElements.forEach(preElement => {
                const dataNumber = parseInt(preElement.getAttribute('data-number'), 10);
                if (allActiveSites.includes(dataNumber)) {
                    preElement.classList.add('highlighted');
                }
            });

            const selectAllCheckbox = document.getElementById('selectAllCheckbox');
            selectAllCheckbox.addEventListener('change', function () {
                const checkboxes = document.querySelectorAll('input[type="checkbox"]');
                checkboxes.forEach(checkbox => {
                    checkbox.checked = selectAllCheckbox.checked;
                });
            });

            const displaySelectedButton = document.getElementById('displaySelected');
            displaySelectedButton.addEventListener('click', function () {
                const selectedRows = document.querySelectorAll('tr input[type="checkbox"]:checked');
                const allRows = document.querySelectorAll('tr');
                allRows.forEach(row => {
                    row.style.display = 'none';
                });
                selectedRows.forEach(selectedRow => {
                    selectedRow.closest('tr').style.display = 'table-row';
                });
                // 使用 requestAnimationFrame 确保在渲染后执行
                requestAnimationFrame(() => {
                    adjustStickyColumns();
                });
            });

            const restoreAllButton = document.getElementById('restoreAll');
            restoreAllButton.addEventListener('click', function () {
                const allRows = document.querySelectorAll('tr');
                allRows.forEach(row => {
                    row.style.display = 'table-row';
                });
                requestAnimationFrame(() => {
                    adjustStickyColumns();
                });
            });

            // 表格渲染完成后调用 adjustStickyColumns
            adjustStickyColumns();

        })
        .catch(error => console.error('Error loading JSON:', error));
});

// 继续监听窗口大小变化
window.addEventListener('resize', adjustStickyColumns);

function adjustStickyColumns() {
    // 获取所有可见的第二列单元格
    const secondColumnCells = document.querySelectorAll('.table tbody td:nth-child(2):not([style*="display: none"])');

    let maxSecondColumnWidth = 0;

    // 遍历所有可见的第二列单元格，找到最大宽度
    secondColumnCells.forEach(cell => {
        const cellWidth = cell.offsetWidth;
        if (cellWidth > maxSecondColumnWidth) {
            maxSecondColumnWidth = cellWidth;
        }
    });

    // 如果没有可见的第二列单元格，使用默认宽度
    if (maxSecondColumnWidth === 0) {
        maxSecondColumnWidth = 150; // 您可以根据需要调整此值
    }

    // 设置第三列的 left 值
    const thirdColumnCells = document.querySelectorAll('.table tbody td:nth-child(3)');
    thirdColumnCells.forEach(td => {
        td.style.left = `${30 + maxSecondColumnWidth}px`;
    });
}
