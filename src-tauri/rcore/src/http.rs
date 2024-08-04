use reqwest::Error;
use serde_json::Value;

pub async fn get(url: String) -> Result<String, Error> {
    let response = reqwest::get(&url).await?.text().await?;
    Ok(response)
}

pub async fn post(url: String, body: Value) -> Result<String, Error> {
    let client = reqwest::Client::new();
    let response = client.post(&url).json(&body).send().await?.text().await?;
    Ok(response)
}
