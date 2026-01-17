import { Router } from 'express';
const router = Router();

// Sample route to get hymns
router.get('/', (req, res) => {
  res.json({ message: 'List of hymns will be here' });
});

export default router;