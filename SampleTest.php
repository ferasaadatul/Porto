<?php
use PHPUnit\Framework\TestCase;

class SampleTest extends TestCase {
    public function testTambah() {
        $this->assertEquals(7, tambah(3, 4));
    }
}
