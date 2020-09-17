import { Router } from 'express';

const router = Router();

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get('/', (_req, res, __next) => {
  res.render('index', { title: 'Express' });
});

export default router;
