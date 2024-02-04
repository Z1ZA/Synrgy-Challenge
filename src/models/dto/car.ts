interface CarRequest {
  car_img?: Express.Multer.File;
  car_name: string;
  car_rentperday: number;
  car_size: number;
}

export { CarRequest };
