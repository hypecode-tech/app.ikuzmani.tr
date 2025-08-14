# IKUZMANI - Masaüstü Uygulama

Basit ve sade bir Electron uygulaması. Bu depo `electron-forge` ile paketlenip dağıtılabilir.

Özellikler
- Electron tabanlı masaüstü uygulama
- Otomatik güncelleme (electron-updater ile GitHub Releases üzerinden)

Hızlı Başlangıç

1) Bağımlılıkları yükleyin

```bash
npm install
```

2) Geliştirme modunda çalıştırın

```bash
npm start
```

Paketleme ve Dağıtım

- Paket oluşturmak için:

```bash
npm run make
```

- GitHub üzerinden yayınlamak için `forge.config.js` içindeki `OWNER` ve `REPO` değerlerini güncelleyin ve bir GitHub Personal Access Token oluşturup `GITHUB_TOKEN` olarak export edin:

```bash
export GITHUB_TOKEN="your_token_here"
npm run publish
```

Notlar
- `package.json` ve `forge.config.js` içindeki `OWNER/REPO` yerlerini kendi GitHub bilgilerinize göre değiştirin.
- RPM paket hatası veya eksik `usr` dizini gibi paketleme hatalarında önce `npm run make` çıktılarını kontrol edin.

İletişim
- Yazar: hypecode-tech (hypecodetech@gmail.com)
