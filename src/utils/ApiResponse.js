class ApiResponse {
  constructor(statusCOde, data, message = "Success") {
    (this.statusCOde = statusCOde),
      (this.data = data),
      (this.message = message);
    this.success = statusCOde < 400;
  }
}
