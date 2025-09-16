import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";

type Job = {
  id: number;
  taskName: string;
  status: boolean;
};

export default function Job() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  useEffect(() => {
    axios.get("http://localhost:8080/jobs").then((res) => {
      setJobs(res.data);
      setLoading(false);
    });
  }, []);
  const addJob = () => {
    if (name.trim() === "") return;
    axios
      .post("http://localhost:8080/jobs", { taskName: name, status: false })
      .then((res) => {
        setJobs([...jobs, res.data]);
        setName(""); // clear input
      });
  };
  const deleteJob = (id: number) => {
    axios.delete("http://localhost:8080/jobs/" + id).then(() => {
      setJobs(jobs.filter((j) => j.id !== id));
    });
  };

  // Đổi trạng thái công việc (làm / chưa làm)
  const toggleStatus = (job: Job) => {
    axios
      .put("http://localhost:8080/jobs/" + job.id, {
        ...job,
        status: !job.status,
      })
      .then((res) => {
        setJobs(jobs.map((j) => (j.id === job.id ? res.data : j)));
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border rounded-lg shadow">
      <h2 className="text-2xl font-bold text-center mb-4">Quản lý công việc</h2>

      {/* Form thêm công việc */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addJob();
        }}
        className="flex gap-2 mb-4"
      >
        <input
          type="text"
          placeholder="Nhập tên công việc"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 border rounded px-3 py-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Thêm
        </button>
      </form>

      {loading ? (
        <Loading />
      ) : jobs.length === 0 ? (
        <p className="text-center text-gray-400">Không có công việc</p>
      ) : (
        <div className="space-y-2">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="flex items-center justify-between border p-2 rounded"
            >
              <label
                className={`flex items-center gap-2 ${
                  job.status ? "line-through text-gray-400" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={job.status}
                  onChange={() => toggleStatus(job)}
                />
                {job.taskName}
              </label>
              <button
                onClick={() => deleteJob(job.id)}
                className="text-red-500 hover:text-red-600"
              >
                Xóa
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
