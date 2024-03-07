export default function getColor(color) {
  switch (color) {
    case "red":
      return "bg-red-400";
    case "green":
      return "bg-green-400";
    case "blue":
      return "bg-blue-400";
    case "purple":
      return "bg-purple-400";
    case "orange":
      return "bg-orange-400";
    case "gray":
      return "bg-gray-400";
    case "pink":
      return "bg-pink-400";
    default:
      return "bg-blue-700";
  }
}
