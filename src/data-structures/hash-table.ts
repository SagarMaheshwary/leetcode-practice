class HashTable {
  items: any[];

  constructor(private size: number) {
    this.items = Array(size);
  }

  hash(key: string) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.size;
  }

  set(key: string, value: any) {
    const hash = this.hash(key);

    const bucket: any[] = this.items[hash];

    if (bucket !== undefined) {
      const itemIndex = bucket.findIndex((item) => item[0] === key);

      if (itemIndex > -1) {
        bucket[itemIndex] = [key, value];
      } else {
        bucket.push([key, value]);
      }

      this.items[hash] = bucket;
    } else {
      this.items[hash] = [[key, value]];
    }
  }

  get(key: string) {
    const bucket = this.items[this.hash(key)];

    if (bucket !== undefined) {
      const item = bucket.find((item) => item[0] === key);

      if (item !== undefined) {
        return item[1];
      }
    }

    return undefined;
  }

  delete(key: string) {
    const hash = this.hash(key);
    const bucket: any[] = this.items[hash];

    if (bucket !== undefined) {
      this.items[hash] = bucket.filter((item) => item[0] !== key);
    }
  }

  print() {
    for (let i = 0; i < this.size; i++) {
      if (this.items[i] !== undefined) {
        console.log(i, this.items[i]);
      }
    }
  }
}

const hashTable = new HashTable(10);

hashTable.set("item1", "value1");
hashTable.set("item1", "value1");
hashTable.set("item2", "value2");
hashTable.set("item3", "value3");
hashTable.set("item4", "value4");
hashTable.set("item5", "value5");
console.log(hashTable.get("item5"));
hashTable.delete("item5");
hashTable.print();
