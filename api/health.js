export default function handler(req, res) {
  res.status(200).json({
    status: "online",
    project: "StudyOS",
    message: "Your StudyOS backend is working!"
  });
}
