-- CreateTable
CREATE TABLE `Product_Topping` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_product` INTEGER NOT NULL,
    `id_topping` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Topping` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `id_user` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product_Size` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_product` INTEGER NOT NULL,
    `id_size` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Size` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `id_user` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product_Order_History` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_product` INTEGER NOT NULL,
    `buyer_name` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `address` TEXT NOT NULL,
    `product_ordered` VARCHAR(191) NOT NULL,
    `product_price` INTEGER NOT NULL,
    `topping` VARCHAR(191) NOT NULL,
    `topping_price` INTEGER NOT NULL,
    `size` VARCHAR(191) NOT NULL,
    `size_price` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `earning_payment` INTEGER NOT NULL,
    `payment_method` ENUM('cash', 'transfer') NOT NULL,
    `status` ENUM('s1', 's2', 's3', 's4', 's5') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product_Topping` ADD CONSTRAINT `Product_Topping_id_product_fkey` FOREIGN KEY (`id_product`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product_Topping` ADD CONSTRAINT `Product_Topping_id_topping_fkey` FOREIGN KEY (`id_topping`) REFERENCES `Topping`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product_Size` ADD CONSTRAINT `Product_Size_id_product_fkey` FOREIGN KEY (`id_product`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product_Size` ADD CONSTRAINT `Product_Size_id_size_fkey` FOREIGN KEY (`id_size`) REFERENCES `Size`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product_Order_History` ADD CONSTRAINT `Product_Order_History_id_product_fkey` FOREIGN KEY (`id_product`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
