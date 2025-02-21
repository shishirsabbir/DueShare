In **Sequelize**, a **foreign key** is defined using associations (`belongsTo`, `hasOne`, `hasMany`, `belongsToMany`). Sequelize automatically adds a foreign key column when defining these relationships.

### **Example: Defining a Foreign Key**
Here’s how to define a foreign key in Sequelize:

```javascript
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:'); // Example using SQLite

class User extends Model {}
User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'user' });

class Post extends Model {}
Post.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userId: { // Explicit foreign key column
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { // Foreign key reference
      model: User, // Table name
      key: 'id'   // Column name in the referenced table
    },
    onDelete: 'CASCADE', // Optional: Delete posts if the user is deleted
    onUpdate: 'CASCADE'  // Optional: Update posts if the user ID changes
  }
}, { sequelize, modelName: 'post' });

// Define the association
User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

// Sync the database
sequelize.sync();
```

### **Explanation**
- `Post` table has a `userId` column that references `id` in `User`.
- `references` ensures that `userId` is a foreign key to `User.id`.
- `onDelete: 'CASCADE'` ensures that if a `User` is deleted, their posts are also deleted.
- `onUpdate: 'CASCADE'` ensures that if `User.id` changes, the foreign key in `Post` updates accordingly.

Would you like more details on constraints or migrations? 🚀