use reqwest::Error;
use serde_json::Value;

pub async fn get(url: String) -> Result<String, Error> {
    let client = reqwest::Client::builder()
        .user_agent("YunMCL (https://github.com/Yuns-Lab/YunMCL <lingyunawa@qq.com>)")
        .build()?;
    // 使用自定义客户端发送 GET 请求
    let response = client.get(&url).send().await?.text().await?;
    Ok(response)
}

pub async fn post(url: String, body: Value) -> Result<String, Error> {
    let client = reqwest::Client::new();
    let response = client.post(&url).json(&body).send().await?.text().await?;
    Ok(response)
}
