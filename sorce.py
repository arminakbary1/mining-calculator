def Calculate(*args, **kwargs):       
    block  = pd.read_csv('coins_data.csv')
    device_hash = int(device)*10**12
    price = dict(requests.get(url='https://api.coindesk.com/v1/bpi/currentprice.json').json())
    pricee = float(price['bpi']['USD']['rate'].replace(',',''))
    i = block[block['coin'] == coin]
    block_reward = i['reward_block']
    difficulty = i['difficulty']
    price = i['price']
    profit = (86400 *block_reward*device_hash)/((2**32) * difficulty)
    a = float(profit*pricee) , float(profit*pricee*30) , float(profit*pricee*30*12 )
    op.write('درآمد شما' + f' {round(a[0],2)}$ per day \n {round(a[1],2)}$ per month \n {round(a[2],2)}$ per year')
    return a