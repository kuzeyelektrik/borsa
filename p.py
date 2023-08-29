import requests

def get_stock_data(symbol):
    url = f"https://www.example.com/stock/{symbol}"  # Burada verilerin çekileceği web sitesinin URL'si yer almalıdır
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.text
        # Verilerin analiz edilmesi ve işlenmesi işlemleri burada yapılabilir
        return data
    else:
        print("Veri çekilemedi.")
        return None

stock_symbol = "AAPL"  # Çekmek istediğiniz hisse senedi sembolü
stock_data = get_stock_data(stock_symbol)

if stock_data:
    print(stock_data)