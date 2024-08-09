import { createDbWorker } from "sql.js-httpvfs";

const workerUrl = new URL(
	"sql.js-httpvfs/dist/sqlite.worker.js",
	import.meta.url
);
const wasmUrl = new URL("sql.js-httpvfs/dist/sql-wasm.wasm", import.meta.url);

let worker;

try {
	worker = await createDbWorker(
		[
			{
				from: "inline",
				config: {
					serverMode: "full",
					url: "/index/with_stuff.sqlite",
					requestChunkSize: 4096,
				},
			},
		],
		workerUrl.toString(),
		wasmUrl.toString()
	);
} catch (e) {
	console.log(e)
}



class EntryPoint {
	static async load() {

		const pitchType = document.getElementById("pType").value
		const pitcherName = document.getElementById("pName").value
		const pitcherId = document.getElementById("pId").value
		let nPitches = document.getElementById("nPitches").value
		const sortBy = document.getElementById("sortBy").value
		const direction = document.getElementById("direction").value

		const columns = Object.freeze({
			pid: "pitcher_id",
			pn: "pitcher_name",
			pt: "pitch_type",
			cmr: "cum_run_value_allowed",
			amr: "avg_run_value_allowed",
			nobs: "n_obs",
			ss: "simple_stuff"
		})

		if (nPitches == "") {
			nPitches = 0
		}

		cleanTable()

		const result = await worker.db.query(`select * from results where pitch_type like '${pitchType}' and n_obs > ${nPitches} and pitcher_name like '%${pitcherName}%' and pitcher_id like '%${pitcherId}%' order by ${columns[sortBy]} ${direction}`);

		for (let i = 0; i < result.length; i++) {
			newRow(result[i])
		}
		return
	}
}

function cleanTable() {
	const table = document.getElementById("dataTable")

	while (table.rows.length > 1) {
		table.deleteRow(1)
	}
}


function newRow(rowValues) {
	const table = document.getElementById("dataTable")
	const row = table.insertRow(1)

	const id = row.insertCell(0)
	id.innerHTML = rowValues.pitcher_id
	const name = row.insertCell(1)
	name.innerHTML = rowValues.pitcher_name
	const type = row.insertCell(2)
	type.innerHTML = rowValues.pitch_type
	const cum = row.insertCell(3)
	cum.innerHTML = rowValues.cum_run_value_allowed
	const avg = row.insertCell(4)
	avg.innerHTML = rowValues.avg_run_value_allowed
	const nobs = row.insertCell(5)
	nobs.innerHTML = rowValues.n_obs
	const ss = row.insertCell(6)
	ss.innerHTML = rowValues.simple_stuff
}

window.EntryPoint = EntryPoint





