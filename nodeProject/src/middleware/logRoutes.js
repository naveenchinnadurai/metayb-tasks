
export const logRoutes = (req, res, next) => {

    console.log(req.url);

    next();
}

export const timeStampLogger = (req, res, next) => {
    const now = new Date();

    const pad = (n) => n.toString().padStart(2, '0');

    const formattedDate = `${pad(now.getDate())}-${pad(now.getMonth() + 1)}-${now.getFullYear()}`;
    const formattedTime = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

    console.log(`(log) ${formattedDate} ${formattedTime} -> ${req.method} ${req.url}`);

    next();
};
