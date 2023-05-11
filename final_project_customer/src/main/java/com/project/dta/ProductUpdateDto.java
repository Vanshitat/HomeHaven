package com.project.dta;

public class ProductUpdateDto {
 
	static int qty;
	public static int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		ProductUpdateDto.qty = qty;
	}
	static public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		ProductUpdateDto.price = price;
	}
	static double price;
	
}
